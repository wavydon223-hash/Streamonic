// ============================================================
// Tracks View — Upload, manage, and prepare releases
// Connected to Express upload server at localhost:3000
// ============================================================

var TracksState = {
    selectedFile: null,
    editingId: null,
    uploading: false,
    UPLOAD_URL: 'http://localhost:3000/upload',
    STORAGE_KEY: 'pm_tracks'
};

function initTracksView() {
    var container = document.getElementById('viewTracks');
    if (!container) return;

    // Bind form
    var form = document.getElementById('trackForm');
    if (form) {
        form.addEventListener('submit', handleTrackSubmit);
    }

    // Bind audio input
    var audioInput = document.getElementById('audioFile');
    if (audioInput) {
        audioInput.addEventListener('change', function(e) {
            handleFile(e.target.files && e.target.files[0]);
        });
    }

    // Bind drop zone
    var dropZone = document.getElementById('dropZone');
    if (dropZone) {
        dropZone.addEventListener('click', function() {
            audioInput && audioInput.click();
        });
        dropZone.addEventListener('dragover', function(e) {
            e.preventDefault();
            dropZone.classList.add('dragover');
        });
        dropZone.addEventListener('dragleave', function() {
            dropZone.classList.remove('dragover');
        });
        dropZone.addEventListener('drop', function(e) {
            e.preventDefault();
            dropZone.classList.remove('dragover');
            var f = e.dataTransfer.files && e.dataTransfer.files[0];
            handleFile(f);
        });
    }

    // Bind create test button
    var createTest = document.getElementById('createTest');
    if (createTest) {
        createTest.addEventListener('click', createTestTrack);
    }

    // Bind track list delegation
    var trackList = document.getElementById('trackList');
    if (trackList) {
        trackList.addEventListener('click', handleTrackActions);
    }

    // Bind global search
    var globalSearch = document.getElementById('globalSearch');
    if (globalSearch) {
        globalSearch.addEventListener('input', function() {
            var q = this.value.trim().toLowerCase();
            var items = trackList ? trackList.querySelectorAll('.track-item') : [];
            items.forEach(function(node) {
                var title = (node.querySelector('.track-title') || {}).textContent || '';
                var artist = (node.querySelector('.track-artist') || {}).textContent || '';
                node.style.display = (title.toLowerCase().includes(q) || artist.toLowerCase().includes(q)) ? '' : 'none';
            });
        });
    }

    renderTrackList();
}

// ----------------------------------------------------------
// File handling: local preview + server upload
// ----------------------------------------------------------

function handleFile(file) {
    var audioInfo = document.getElementById('audioInfo');
    var audioPreview = document.getElementById('audioPreview');
    if (!audioInfo || !audioPreview) return;

    if (!file) return;
    if (!file.type.startsWith('audio/')) {
        audioInfo.textContent = 'Please select a valid audio file.';
        return;
    }
    if (file.size > 50 * 1024 * 1024) {
        audioInfo.textContent = 'File too large. Max ' + Utils.humanFileSize(50 * 1024 * 1024);
        return;
    }

    // Revoke previous object URL to prevent memory leak
     if (TracksState.selectedFile && TracksState.selectedFile.objectUrl) {
         URL.revokeObjectURL(TracksState.selectedFile.objectUrl);
     }

     // Read local metadata first (instant feedback)
     audioInfo.textContent = 'Reading file...';

     Utils.getAudioDuration(file).then(function(duration) {
         var objectUrl = URL.createObjectURL(file);
        TracksState.selectedFile = {
            file: file,
            duration: Math.round(duration),
            objectUrl: objectUrl
        };
        audioInfo.textContent = file.name + ' \u2022 ' + Utils.humanFileSize(file.size) + ' \u2022 ' + TracksState.selectedFile.duration + 's';
        audioPreview.innerHTML = '<div class="upload-badge">Attached</div><audio controls src="' + objectUrl + '"></audio>';
    }).catch(function() {
        audioInfo.textContent = 'Could not read audio metadata.';
        TracksState.selectedFile = null;
    });
}

// ----------------------------------------------------------
// Upload to Express server
// ----------------------------------------------------------

function uploadFileToServer(file) {
    var formData = new FormData();
    formData.append('file', file);

    return fetch(TracksState.UPLOAD_URL, {
        method: 'POST',
        body: formData
    }).then(function(response) {
        if (!response.ok) {
            return response.json().then(function(err) {
                throw new Error(err.error || 'Upload failed with status ' + response.status);
            }).catch(function(jsonErr) {
                // If response isn't JSON, throw a generic error
                if (jsonErr instanceof SyntaxError) {
                    throw new Error('Upload failed with status ' + response.status);
                }
                throw jsonErr;
            });
        }
        return response.json();
    }).then(function(data) {
        // Expected: { id, originalName, storedFilename, url, size, mimeType }
        if (!data || !data.url) {
            throw new Error('Invalid server response');
        }
        return data;
    });
}

// ----------------------------------------------------------
// Form submit: save draft with server upload
// ----------------------------------------------------------

function handleTrackSubmit(e) {
    e.preventDefault();

    var errEl = document.getElementById('formError');
    if (errEl) { errEl.classList.remove('visible'); errEl.textContent = ''; }

    var titleEl = document.getElementById('trackTitle');
    var artistEl = document.getElementById('artistName');
    var formEl = document.getElementById('trackForm');
    var submitBtn = formEl ? formEl.querySelector('.btn-primary') : null;
    var title = titleEl ? titleEl.value.trim() : '';
    var artist = artistEl ? artistEl.value.trim() : '';

    if (!title || !artist) {
        if (errEl) { errEl.textContent = 'Please enter both track title and artist name.'; errEl.classList.add('visible'); }
        return;
    }

    var track = {
        id: Utils.generateID(),
        title: title,
        artist: artist,
        createdAt: Date.now()
    };

    // If there's a selected file, upload it to the server
    if (TracksState.selectedFile) {
        // Show uploading state
        TracksState.uploading = true;
        if (submitBtn) {
            submitBtn.textContent = 'Uploading...';
            submitBtn.disabled = true;
        }
        if (errEl) { errEl.classList.remove('visible'); errEl.textContent = ''; }

        uploadFileToServer(TracksState.selectedFile.file).then(function(uploadResult) {
            // Enrich track with server response
            track.fileId = uploadResult.id || Utils.generateID();
            track.fileName = uploadResult.originalName || TracksState.selectedFile.file.name;
            track.storedFilename = uploadResult.storedFilename || '';
            track.fileSize = uploadResult.size || TracksState.selectedFile.file.size;
            track.fileType = uploadResult.mimeType || TracksState.selectedFile.file.type;
            track.fileUrl = uploadResult.url;
            track.duration = TracksState.selectedFile.duration || 0;

            saveTrack(track, titleEl, artistEl, submitBtn);
        }).catch(function(err) {
            TracksState.uploading = false;
            if (submitBtn) {
                submitBtn.textContent = 'Save as Draft';
                submitBtn.disabled = false;
            }
            if (errEl) {
                errEl.textContent = 'Upload failed: ' + (err.message || 'Please check your connection and try again.');
                errEl.classList.add('visible');
            }
            console.error('Upload error:', err);
        });
    } else {
        // No file — save as draft without upload
        saveTrack(track, titleEl, artistEl, submitBtn);
    }
}

function saveTrack(track, titleEl, artistEl, submitBtn) {
    var arr = Storage.load(TracksState.STORAGE_KEY, []);
    arr.unshift(track);
    Storage.save(TracksState.STORAGE_KEY, arr);

    // Clear form
    if (titleEl) titleEl.value = '';
    if (artistEl) artistEl.value = '';
    clearAudioPreview();

    // Reset button
    if (submitBtn) {
        submitBtn.textContent = 'Save as Draft';
        submitBtn.disabled = false;
    }
    TracksState.uploading = false;

    renderTrackList();
    pushActivity('Added track ' + track.title + ' by ' + track.artist);
    renderDashboard();
}

// ----------------------------------------------------------
// UI helpers
// ----------------------------------------------------------

function clearAudioPreview() {
    var audioPreview = document.getElementById('audioPreview');
    var audioInfo = document.getElementById('audioInfo');
    if (audioPreview) audioPreview.innerHTML = '';
    if (audioInfo) audioInfo.textContent = '';
    if (TracksState.selectedFile && TracksState.selectedFile.objectUrl) {
        try { URL.revokeObjectURL(TracksState.selectedFile.objectUrl); } catch (e) {}
    }
    TracksState.selectedFile = null;
    var audioInput = document.getElementById('audioFile');
    if (audioInput) audioInput.value = '';
}

function renderTrackList() {
    var trackList = document.getElementById('trackList');
    if (!trackList) return;

    trackList.innerHTML = '';
    var arr = Storage.load(TracksState.STORAGE_KEY, []);

    if (arr.length === 0) {
        trackList.appendChild(createEmptyState('No tracks yet. Add your first track above.'));
        return;
    }

    arr.forEach(function(track) {
        var item = document.createElement('div');
        item.className = 'track-item';
        item.dataset.id = track.id;

        var fileHtml = '';
        if (track.fileName) {
            fileHtml = '<div class="track-info">' + Utils.escapeHtml(track.fileName);
            if (track.duration) fileHtml += ' \u2022 ' + track.duration + 's';
            if (track.fileUrl) fileHtml += ' \u2022 Server';
            fileHtml += '</div>';
        }

        var audioHtml = '';
        if (track.fileUrl) {
            audioHtml = '<audio controls src="' + Utils.escapeHtml(track.fileUrl) + '"></audio>';
        }

        item.innerHTML =
            '<div class="track-meta">' +
                '<div class="track-title">' + Utils.escapeHtml(track.title) + '</div>' +
                '<div class="track-artist">by ' + Utils.escapeHtml(track.artist) + '</div>' +
                fileHtml + audioHtml +
            '</div>' +
            '<div class="track-actions">' +
                '<button class="btn-edit" title="Edit">Edit</button>' +
                '<button class="btn-delete" title="Delete">Delete</button>' +
            '</div>';

        trackList.appendChild(item);
    });

    // Update dashboard stat
    var statTracks = document.getElementById('statTracks');
    if (statTracks) statTracks.textContent = arr.length;
}

function handleTrackActions(e) {
    var editBtn = e.target.closest('.btn-edit');
    var delBtn = e.target.closest('.btn-delete');

    if (editBtn) {
        var item = editBtn.closest('.track-item');
        startEditTrack(item, item.dataset.id);
    } else if (delBtn) {
        var item = delBtn.closest('.track-item');
        if (confirm('Delete this track?')) {
            var arr = Storage.load(TracksState.STORAGE_KEY, []);
            arr = arr.filter(function(t) { return t.id !== item.dataset.id; });
            Storage.save(TracksState.STORAGE_KEY, arr);
            item.remove();
            pushActivity('Deleted a track');
            renderTrackList();
            renderDashboard();
        }
    }
}

function startEditTrack(item, id) {
    var titleText = (item.querySelector('.track-title') || {}).textContent || '';
    var artistText = (item.querySelector('.track-artist') || {}).textContent.replace(/^by\s*/i, '');

    var formEl = document.createElement('form');
    formEl.className = 'edit-form';
    formEl.innerHTML =
        '<input class="edit-title" value="' + Utils.escapeHtml(titleText) + '" placeholder="Track title" />' +
        '<input class="edit-artist" value="' + Utils.escapeHtml(artistText) + '" placeholder="Artist name" />' +
        '<div class="edit-form-actions">' +
            '<button type="submit" class="btn btn-primary">Save</button>' +
            '<button type="button" class="btn btn-ghost cancel-edit">Cancel</button>' +
        '</div>';

    item.style.display = 'none';
    item.parentNode.insertBefore(formEl, item);
    formEl.querySelector('.edit-title').focus();

    formEl.addEventListener('submit', function(ev) {
        ev.preventDefault();
        var nt = formEl.querySelector('.edit-title').value.trim();
        var na = formEl.querySelector('.edit-artist').value.trim();
        if (!nt || !na) {
            alert('Enter both title and artist.');
            return;
        }
        var arr = Storage.load(TracksState.STORAGE_KEY, []);
        var idx = arr.findIndex(function(x) { return x.id === id; });
        if (idx > -1) {
            arr[idx].title = nt;
            arr[idx].artist = na;
            Storage.save(TracksState.STORAGE_KEY, arr);
        }
        formEl.remove();
        item.style.display = '';
        renderTrackList();
        pushActivity('Edited ' + nt);
        renderDashboard();
    });

    formEl.querySelector('.cancel-edit').addEventListener('click', function() {
        formEl.remove();
        item.style.display = '';
    });
}

function createTestTrack() {
    var t = {
        id: Utils.generateID(),
        title: 'Programmatic Title',
        artist: 'Programmatic Artist',
        createdAt: Date.now()
    };
    var arr = Storage.load(TracksState.STORAGE_KEY, []);
    arr.unshift(t);
    Storage.save(TracksState.STORAGE_KEY, arr);
    renderTrackList();
    pushActivity('Test track created');
    renderDashboard();
}

function pushActivity(text) {
    var activityList = document.getElementById('activityList');
    if (!activityList) return;

    // Don't duplicate on re-render
    var first = activityList.querySelector('.activity-text');
    if (first && first.textContent === text) return;

    activityList.insertBefore(createActivityItem(text), activityList.firstChild);

    // Keep max 30 items
    while (activityList.children.length > 30) {
        activityList.removeChild(activityList.lastChild);
    }
}
