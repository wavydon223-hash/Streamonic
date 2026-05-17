// ============================================================
// Hybrid Agency View — Main dashboard for the agency system
// ============================================================

function renderHybridAgency() {
    var container = document.getElementById('viewHybridAgency');
    if (!container) return;

    var content = document.getElementById('hybridContent');
    if (!content) return;

    content.innerHTML = '';

    var projects = ProjectModel.loadProjects();

    // --- Hero Section ---
    var hero = document.createElement('div');
    hero.className = 'hero-section';
    hero.innerHTML =
        '<div class="hero-text">' +
            '<h2>Hybrid Agency Marketing System</h2>' +
            '<p>AI-powered automation meets human-driven strategy. Manage projects, generate plans, and optimize campaigns.</p>' +
        '</div>' +
        '<div class="hero-actions">' +
            '<button class="btn btn-primary" id="btnNewProject">+ New Project</button>' +
            '<button class="btn btn-ghost" id="btnAIAssist">🤖 AI Assist</button>' +
        '</div>';
    content.appendChild(hero);

    // --- Quick Stats ---
    var statsGrid = document.createElement('div');
    statsGrid.className = 'card-grid stats-grid';

    var activeProjects = projects.filter(function(p) { return p.status === 'active'; }).length;
    var aiProjects = projects.filter(function(p) { return p.aiGenerated; }).length;
    var totalCampaigns = ManualTools.CampaignBuilder.campaigns.length;
    var activeCampaigns = ManualTools.CampaignBuilder.getActiveCampaigns().length;

    statsGrid.innerHTML =
        '<div class="card stat-card"><div class="card-header"><span class="card-title">Active Projects</span><span class="card-pill">Running</span></div><div class="card-metric" id="statActiveProjects">' + activeProjects + '</div></div>' +
        '<div class="card stat-card"><div class="card-header"><span class="card-title">AI-Generated Plans</span><span class="card-pill">Smart</span></div><div class="card-metric" id="statAIProjects">' + aiProjects + '</div></div>' +
        '<div class="card stat-card"><div class="card-header"><span class="card-title">Total Campaigns</span><span class="card-pill">Manual</span></div><div class="card-metric" id="statCampaigns">' + totalCampaigns + '</div></div>' +
        '<div class="card stat-card"><div class="card-header"><span class="card-title">Active Campaigns</span><span class="card-pill">Live</span></div><div class="card-metric" id="statActiveCampaigns">' + activeCampaigns + '</div></div>';

    content.appendChild(statsGrid);

    // --- Mode Toggle ---
    var modeToggle = document.createElement('div');
    modeToggle.className = 'mode-toggle';
    modeToggle.innerHTML =
        '<div class="mode-toggle-label">MODE:</div>' +
        '<button class="btn btn-sm ' + (HybridAgencyState.mode === 'manual' ? 'btn-primary' : 'btn-ghost') + ' mode-btn" data-mode="manual">Manual</button>' +
        '<button class="btn btn-sm ' + (HybridAgencyState.mode === 'ai' ? 'btn-primary' : 'btn-ghost') + ' mode-btn" data-mode="ai">AI Auto</button>' +
        '<button class="btn btn-sm ' + (HybridAgencyState.mode === 'hybrid' ? 'btn-primary' : 'btn-ghost') + ' mode-btn" data-mode="hybrid">Hybrid</button>';
    content.appendChild(modeToggle);

    // --- Projects Grid ---
    var sectionHeader = createSectionHeaderWithAction(
        'Projects',
        projects.length + ' active projects',
        'New Project',
        function() { renderNewProjectForm(); }
    );
    content.appendChild(sectionHeader);

    if (projects.length === 0) {
        var empty = createEmptyState('No projects yet. Create your first project to get started with AI-powered marketing.');
        content.appendChild(empty);
    } else {
        var grid = document.createElement('div');
        grid.className = 'card-grid project-grid';

        projects.forEach(function(project) {
            grid.appendChild(HybridUI.createProjectCard(project));
        });

        content.appendChild(grid);
    }

    // --- Bind events ---
    var btnNew = document.getElementById('btnNewProject');
    if (btnNew) {
        btnNew.addEventListener('click', function() { renderNewProjectForm(); });
    }

    var modeBtns = content.querySelectorAll('.mode-btn');
    modeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            HybridAgencyState.mode = this.dataset.mode;
            renderHybridAgency();
        });
    });

    // Delegate project card actions
    var projectCards = content.querySelectorAll('.project-card');
    projectCards.forEach(function(card) {
        var viewBtn = card.querySelector('.view-project');
        var aiBtn = card.querySelector('.ai-generate');

        if (viewBtn) {
            viewBtn.addEventListener('click', function() {
                var pid = card.dataset.projectId;
                HybridAgencyState.selectedProject = pid;
                renderProjectDetail(pid);
            });
        }

        if (aiBtn) {
            aiBtn.addEventListener('click', function() {
                var pid = card.dataset.projectId;
                var project = ProjectModel.loadProject(pid);
                if (project) {
                    project = AIRoutineEngine.activate(project);
                    ProjectModel.saveProject(project);
                    showAlert('AI plan generated for ' + project.name + '!', 'success');
                    renderHybridAgency();
                }
            });
};
}

// --- New Project Form ---
function renderNewProjectForm() {
    var content = document.getElementById('hybridContent');
    if (!content) return;

    var form = document.createElement('div');
    form.className = 'card panel-form new-project-form';
    form.innerHTML =
        '<div class="panel-header"><h3>Create New Project</h3></div>' +
        '<form id="newProjectForm">' +
            '<div class="form-row">' +
                '<label for="projName">Project Name</label>' +
                '<input id="projName" type="text" placeholder="e.g. Midnight Sessions" required />' +
            '</div>' +
            '<div class="form-row">' +
                '<label for="projArtist">Artist Name</label>' +
                '<input id="projArtist" type="text" placeholder="e.g. Artist Name" required />' +
            '</div>' +
            '<div class="form-row">' +
                '<label for="projType">Project Type</label>' +
                '<select id="projType">' +
                    '<option value="single">Single</option>' +
                    '<option value="ep">EP</option>' +
                    '<option value="album">Album</option>' +
                    '<option value="tour">Tour</option>' +
                '</select>' +
            '</div>' +
            '<div class="form-row">' +
                '<label for="projGenre">Genre</label>' +
                '<select id="projGenre">' +
                    ProjectModel.GENRES.map(function(g) { return '<option value="' + g + '">' + g.charAt(0).toUpperCase() + g.slice(1) + '</option>'; }).join('') +
                '</select>' +
            '</div>' +
            '<div class="form-row">' +
                '<label for="projFollowers">Followers (approx)</label>' +
                '<input id="projFollowers" type="number" placeholder="e.g. 50000" value="10000" />' +
            '</div>' +
            '<div class="form-row">' +
                '<label for="projBudget">Total Budget ($)</label>' +
                '<input id="projBudget" type="number" placeholder="e.g. 10000" value="0" />' +
            '</div>' +
            '<div class="form-row">' +
                '<label for="projTone">Brand Tone</label>' +
                '<select id="projTone">' +
                    '<option value="energetic">Energetic</option>' +
                    '<option value="chill">Chill</option>' +
                    '<option value="dark">Dark</option>' +
                    '<option value="uplifting">Uplifting</option>' +
                    '<option value="nostalgic">Nostalgic</option>' +
                '</select>' +
            '</div>' +
            '<div class="form-row">' +
                '<label for="projTimeline">Release Date</label>' +
                '<input id="projTimeline" type="date" />' +
            '</div>' +
            '<div class="form-actions">' +
                '<button type="submit" class="btn btn-primary">Create Project</button>' +
                '<button type="button" class="btn btn-ghost" id="cancelNewProject">Cancel</button>' +
            '</div>' +
            '<div class="form-error" id="newProjectError" role="alert"></div>' +
        '</form>';
    content.appendChild(form);

    var newForm = document.getElementById('newProjectForm');
    newForm.addEventListener('submit', function(e) {
        e.preventDefault();

        var nameEl = document.getElementById('projName');
        var artistEl = document.getElementById('projArtist');
        var name = nameEl ? nameEl.value.trim() : '';
        var artist = artistEl ? artistEl.value.trim() : '';

        if (!name || !artist) {
            var errEl = document.getElementById('newProjectError');
            if (errEl) { errEl.textContent = 'Project name and artist are required.'; errEl.classList.add('visible'); }
            return;
        }

        var followers = parseInt(document.getElementById('projFollowers').value) || 10000;
        var budget = parseFloat(document.getElementById('projBudget').value) || 0;
        var timelineDate = document.getElementById('projTimeline').value;

        var config = {
            name: name,
            artist: artist,
            type: document.getElementById('projType').value,
            genre: document.getElementById('projGenre').value,
            artistProfile: { followers: followers, monthlyListeners: Math.round(followers * 1.5) },
            brandIdentity: {
                tone: document.getElementById('projTone').value,
                visualStyle: 'modern'
            },
            budget: { total: budget, currency: 'USD', allocations: {} },
            timeline: {
                startDate: Date.now(),
                releaseDate: timelineDate ? new Date(timelineDate).getTime() : Date.now() + 30 * 86400000
            }
        };

        var project = ProjectModel.createProject(config);
        ProjectModel.saveProject(project);

        showAlert('Project "' + name + '" created successfully!', 'success');
        renderHybridAgency();
    });

    var cancelBtn = document.getElementById('cancelNewProject');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() { renderHybridAgency(); });
    }
}

// --- Project Detail View ---
function renderProjectDetail(projectId) {
    var project = ProjectModel.loadProject(projectId);
    if (!project) {
        showAlert('Project not found.', 'error');
        return;
    }

    var content = document.getElementById('hybridContent');
    if (!content) return;

    content.innerHTML = '';

    // Back button
    var backBtn = document.createElement('button');
    backBtn.className = 'btn btn-ghost btn-sm';
    backBtn.textContent = '← Back to Projects';
    backBtn.addEventListener('click', function() { renderHybridAgency(); });
    content.appendChild(backBtn);

    // Project header
    var header = document.createElement('div');
    header.className = 'project-detail-header';
    header.innerHTML =
        '<h2>' + Utils.escapeHtml(project.name) + '</h2>' +
        '<div class="project-detail-meta">' +
            '<span class="badge badge-type">' + (project.type || 'single') + '</span>' +
            '<span class="badge badge-mode">' + (project.marketingMode || 'organic') + '</span>' +
            '<span class="badge badge-status status-' + (project.status || 'planning') + '">' + (project.status || 'planning') + '</span>' +
        '</div>';
    content.appendChild(header);

    // Tabs
    var tabs = document.createElement('div');
    tabs.className = 'tabs';
    tabs.innerHTML =
        '<button class="tab-btn active" data-tab="overview">Overview</button>' +
        '<button class="tab-btn" data-tab="ai-plan">AI Plan</button>' +
        '<button class="tab-btn" data-tab="manual">Manual Tools</button>' +
        '<button class="tab-btn" data-tab="timeline">Timeline</button>' +
        '<button class="tab-btn" data-tab="budget">Budget</button>' +
        '<button class="tab-btn" data-tab="kpis">KPIs</button>';
    content.appendChild(tabs);

    // Tab content container
    var tabContent = document.createElement('div');
    tabContent.className = 'tab-content';
    tabContent.id = 'projectTabContent';
    content.appendChild(tabContent);

    // Render default tab
    renderProjectTab('overview', project);

    // Tab switching
    var tabBtns = tabs.querySelectorAll('.tab-btn');
    tabBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            tabBtns.forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            renderProjectTab(this.dataset.tab, project);
        });
    });
}

function renderProjectTab(tabName, project) {
    var tabContent = document.getElementById('projectTabContent');
    if (!tabContent) return;

    tabContent.innerHTML = '';

    switch (tabName) {
        case 'overview':
            renderProjectOverview(tabContent, project);
            break;
        case 'ai-plan':
            renderAIPlan(tabContent, project);
            break;
        case 'manual':
            renderManualTools(tabContent, project);
            break;
        case 'timeline':
            renderProjectTimeline(tabContent, project);
            break;
        case 'budget':
            renderProjectBudget(tabContent, project);
            break;
        case 'kpis':
            renderProjectKPIs(tabContent, project);
            break;
    }
}

function renderProjectOverview(container, project) {
    var overview = document.createElement('div');
    overview.className = 'overview-grid';

    // Left column: project info
    var info = document.createElement('div');
    info.className = 'overview-info';
    info.innerHTML =
        '<div class="info-row"><strong>Artist:</strong> ' + Utils.escapeHtml(project.artist || 'TBD') + '</div>' +
        '<div class="info-row"><strong>Genre:</strong> ' + Utils.escapeHtml(project.genre || 'TBD') + '</div>' +
        '<div class="info-row"><strong>Type:</strong> ' + Utils.escapeHtml(project.type || 'TBD') + '</div>' +
        '<div class="info-row"><strong>Marketing Mode:</strong> ' + Utils.escapeHtml(project.marketingMode || 'TBD') + '</div>' +
        '<div class="info-row"><strong>Followers:</strong> ' + Utils.formatNumber(project.artistProfile ? project.artistProfile.followers : 0) + '</div>' +
        '<div class="info-row"><strong>Monthly Listeners:</strong> ' + Utils.formatNumber(project.artistProfile ? project.artistProfile.monthlyListeners : 0) + '</div>' +
        (project.timeline && project.timeline.releaseDate ? '<div class="info-row"><strong>Release Date:</strong> ' + new Date(project.timeline.releaseDate).toLocaleDateString() + '</div>' : '') +
        (project.brandIdentity ? '<div class="info-row"><strong>Tone:</strong> ' + Utils.escapeHtml(project.brandIdentity.tone || 'TBD') + '</div>' : '');

    // Right column: marketing scores
    var scores = document.createElement('div');
    scores.className = 'overview-scores';
    scores.innerHTML = '<h3>Marketing Mode Scores</h3>';

    if (project.marketingScores) {
        var scoreList = document.createElement('div');
        scoreList.className = 'score-bars';

        for (var mode in project.marketingScores) {
            var score = project.marketingScores[mode];
            var bar = document.createElement('div');
            bar.className = 'score-bar';
            bar.innerHTML =
                '<div class="score-label">' + mode.charAt(0).toUpperCase() + mode.slice(1) + '</div>' +
                '<div class="score-track"><div class="score-fill" style="width:' + (score * 10) + '%;background:' +
                (mode === project.marketingMode ? 'var(--accent)' : 'var(--border-subtle)') +
                '"></div></div>' +
                '<div class="score-value">' + score + '</div>';
            scoreList.appendChild(bar);
        }
        scores.appendChild(scoreList);
    }

    overview.appendChild(info);
    overview.appendChild(scores);
    container.appendChild(overview);

    // Platform strategy summary
    if (project.platformStrategy) {
        var stratSection = document.createElement('div');
        stratSection.className = 'panel' + ' ' + 'margin-top';
        stratSection.innerHTML =
            '<div class="panel-header"><h3>Platform Strategy</h3></div>' +
            '<div class="strategy-summary">' +
                '<div><strong>Primary:</strong> ' + (project.platformStrategy.primaryPlatforms || []).map(function(p) {
                    var plat = PlatformIntel.getPlatform(p);
                    return plat ? plat.name : p;
                }).join(', ') + '</div>' +
                '<div><strong>Approach:</strong> ' + Utils.escapeHtml(project.platformStrategy.audienceApproach || 'TBD') + '</div>' +
                '<div><strong>Timeline:</strong> ' + Utils.escapeHtml(project.platformStrategy.timelineNotes || 'TBD') + '</div>' +
            '</div>';
        container.appendChild(stratSection);
    }
}

function renderAIPlan(container, project) {
    if (!project.aiGenerated) {
        var empty = createEmptyState('AI plan not yet generated. Click "AI ▶" to generate a full marketing plan.');
        container.appendChild(empty);

        var genBtn = document.createElement('button');
        genBtn.className = 'btn btn-primary margin-top';
        genBtn.textContent = 'Generate AI Plan';
        genBtn.addEventListener('click', function() {
            var updated = ProjectModel.loadProject(project.id);
            updated = AIRoutineEngine.activate(updated);
            ProjectModel.saveProject(updated);
            showAlert('AI plan generated!', 'success');
            renderProjectTab('ai-plan', updated);
        });
        container.appendChild(genBtn);
        return;
    }

    // Audience mapping
    if (project.audienceMapping) {
        var audienceSection = document.createElement('div');
        audienceSection.className = 'panel margin-top';
        audienceSection.innerHTML = '<div class="panel-header"><h3>Audience Mapping</h3></div>';

        var audienceGrid = document.createElement('div');
        audienceGrid.className = 'card-grid';

        project.audienceMapping.segments.forEach(function(seg) {
            var card = HybridUI.createKPICard(
                seg.name,
                seg.size,
                0,
                '',
                seg.priority === 'high' ? 'on_track' : 'needs_attention'
            );
            card.querySelector('.kpi-target').textContent = seg.targeting.lookalike ? 'Lookalike' : seg.targeting.demographic ? 'Demographic' : 'Behavioral';
            audienceGrid.appendChild(card);
        });

        audienceSection.appendChild(audienceGrid);
        container.appendChild(audienceSection);
    }

    // Geo targeting
    if (project.geoTargeting) {
        var geoSection = document.createElement('div');
        geoSection.className = 'panel margin-top';
        geoSection.innerHTML = '<div class="panel-header"><h3>Geo Targeting</h3><div class="section-subtitle">' + project.geoTargeting.mode + ' targeting · ' + project.geoTargeting.totalRegions + ' regions</div></div>';

        var tierList = document.createElement('div');
        tierList.className = 'list-container';

        project.geoTargeting.tiers.forEach(function(tier) {
            var item = HybridUI.createListItem({
                title: tier.name + ' (' + tier.budgetAllocation + '%)',
                meta: tier.regions.join(', '),
                right: tier.regions.length + ' regions'
            });
            tierList.appendChild(item);
        });

        geoSection.appendChild(tierList);
        container.appendChild(geoSection);
    }

    // Creative requirements
    if (project.creativeRequirements) {
        var creativeSection = document.createElement('div');
        creativeSection.className = 'panel margin-top';
        creativeSection.innerHTML = '<div class="panel-header"><h3>Creative Requirements</h3></div>';

        var mustHave = document.createElement('div');
        mustHave.className = 'list-container';
        mustHave.innerHTML = '<div class="section-subtitle" style="margin-bottom:8px">Must Have</div>';
        project.creativeRequirements.mustHave.forEach(function(req) {
            var item = HybridUI.createListItem({
                title: req.asset,
                meta: req.specs,
                right: req.timeline
            });
            mustHave.appendChild(item);
        });
        creativeSection.appendChild(mustHave);

        if (project.creativeRequirements.recommended.length > 0) {
            var rec = document.createElement('div');
            rec.className = 'list-container margin-top';
            rec.innerHTML = '<div class="section-subtitle" style="margin-bottom:8px">Recommended</div>';
            project.creativeRequirements.recommended.forEach(function(req) {
                var item = HybridUI.createListItem({
                    title: req.asset,
                    meta: req.specs,
                    right: req.timeline
                });
                rec.appendChild(item);
            });
            creativeSection.appendChild(rec);
        }

        container.appendChild(creativeSection);
    }

    // Influencer plan
    if (project.influencerPlan) {
        var inflSection = document.createElement('div');
        inflSection.className = 'panel margin-top';
        inflSection.innerHTML = '<div class="panel-header"><h3>Influencer Plan</h3><div class="section-subtitle">' + project.influencerPlan.totalEstimatedInfluencers + ' influencers across ' + project.influencerPlan.tiers.length + ' tiers</div></div>';

        var inflGrid = document.createElement('div');
        inflGrid.className = 'card-grid';

        project.influencerPlan.tiers.forEach(function(tier) {
            inflGrid.appendChild(HybridUI.createKPICard(
                tier.tier.charAt(0).toUpperCase() + tier.tier.slice(1) + ' Influencers',
                tier.count,
                0,
                'influencers',
                'on_track'
            ));
        });

        inflSection.appendChild(inflGrid);
        container.appendChild(inflSection);
    }

    // Playlist plan
    if (project.playlistPlan) {
        var plSection = document.createElement('div');
        plSection.className = 'panel margin-top';
        plSection.innerHTML = '<div class="panel-header"><h3>Playlist Pitching Plan</h3><div class="section-subtitle">' + project.playlistPlan.totalTargets + ' target playlists · ' + project.playlistPlan.playlists.filter(function(p) { return p.priority === 'high'; }).length + ' high priority</div></div>';

        var plList = document.createElement('div');
        plList.className = 'list-container';

        project.playlistPlan.playlists.forEach(function(pl) {
            var item = HybridUI.createListItem({
                title: pl.name,
                meta: pl.platform + ' · ' + pl.type + ' · ' + pl.followers,
                right: pl.priority.charAt(0).toUpperCase() + pl.priority.slice(1)
            });
            plList.appendChild(item);
        });

        plSection.appendChild(plList);
        container.appendChild(plSection);
    }

    // Expected results
    if (project.expectedResults) {
        var resultsSection = document.createElement('div');
        resultsSection.className = 'panel margin-top';
        resultsSection.innerHTML = '<div class="panel-header"><h3>Expected Results</h3></div>';

        var resultsGrid = document.createElement('div');
        resultsGrid.className = 'card-grid';

        var addResult = function(name, data) {
            resultsGrid.appendChild(HybridUI.createKPICard(
                name,
                data['30_days'] || 0,
                data['90_days'] || 0,
                '',
                'on_track'
            ));
        };

        addResult('Streams (30d → 90d)', project.expectedResults.estimatedStreams);
        addResult('Saves (30d → 90d)', project.expectedResults.estimatedSaves);
        addResult('Followers (30d → 90d)', project.expectedResults.estimatedFollowers);
        addResult('Playlist Adds (30d → 90d)', project.expectedResults.estimatedPlaylistAdds);

        resultsSection.appendChild(resultsGrid);
        container.appendChild(resultsSection);
    }
}

function renderManualTools(container, project) {
    var toolsGrid = document.createElement('div');
    toolsGrid.className = 'card-grid';

    var tools = [
        { name: 'Campaign Builder', desc: 'Create and manage paid campaigns', count: ManualTools.CampaignBuilder.campaigns.length, action: 'openCampaignBuilder' },
        { name: 'Audience Selector', desc: 'Build and combine audience segments', count: ManualTools.AudienceSelector.segments.length, action: 'openAudienceSelector' },
        { name: 'Geo Targeting', desc: 'Define geographic targeting rules', count: ManualTools.GeoTargeting.locations.length, action: 'openGeoTargeting' },
        { name: 'Creative Planner', desc: 'Plan creative assets and ideas', count: ManualTools.CreativePlanner.ideas.length, action: 'openCreativePlanner' },
        { name: 'Content Calendar', desc: 'Schedule content across platforms', count: ManualTools.ContentCalendar.entries.length, action: 'openContentCalendar' },
        { name: 'Budget Allocator', desc: 'Allocate and track spending', count: ManualTools.BudgetAllocator.allocations.length, action: 'openBudgetAllocator' },
        { name: 'Influencer Manager', desc: 'Manage influencer relationships', count: ManualTools.InfluencerManager.contacts.length, action: 'openInfluencerManager' },
        { name: 'Playlist Pitching', desc: 'Track playlist pitch submissions', count: ManualTools.PlaylistPitching.pitches.length, action: 'openPlaylistPitching' }
    ];

    tools.forEach(function(tool) {
        var card = document.createElement('div');
        card.className = 'card tool-card';
        card.innerHTML =
            '<div class="tool-card-icon">' + tool.name.charAt(0) + '</div>' +
            '<div class="tool-card-info">' +
                '<div class="tool-card-name">' + tool.name + '</div>' +
                '<div class="tool-card-desc">' + tool.desc + '</div>' +
            '</div>' +
            '<div class="tool-card-count">' + tool.count + '</div>' +
            '<button class="btn btn-primary btn-sm tool-card-btn" data-action="' + tool.action + '">Open</button>';
        toolsGrid.appendChild(card);
    });

    container.appendChild(toolsGrid);

    // Bind open buttons
    toolsGrid.querySelectorAll('.tool-card-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var action = this.dataset.action;
            HybridAgencyState.selectedTool = action;
            renderToolDetail(action, project);
        });
    });
}

function renderToolDetail(toolAction, project) {
    var tabContent = document.getElementById('projectTabContent');
    if (!tabContent) return;

    tabContent.innerHTML = '';

    var backBtn = document.createElement('button');
    backBtn.className = 'btn btn-ghost btn-sm margin-bottom';
    backBtn.textContent = '← Back';
    backBtn.addEventListener('click', function() { renderProjectDetail(project.id); });
    tabContent.appendChild(backBtn);

    switch (toolAction) {
        case 'openCampaignBuilder':
            renderCampaignBuilder(tabContent, project);
            break;
        case 'openAudienceSelector':
            renderAudienceSelector(tabContent);
            break;
        case 'openGeoTargeting':
            renderGeoTargeting(tabContent, project);
            break;
        case 'openCreativePlanner':
            renderCreativePlanner(tabContent, project);
            break;
        case 'openContentCalendar':
            renderContentCalendar(tabContent, project);
            break;
        case 'openBudgetAllocator':
            renderBudgetAllocator(tabContent, project);
            break;
        case 'openInfluencerManager':
            renderInfluencerManager(tabContent);
            break;
        case 'openPlaylistPitching':
            renderPlaylistPitching(tabContent, project);
            break;
    }
}

// --- Individual Tool Renderers ---

function renderCampaignBuilder(container, project) {
    var section = createSectionHeaderWithAction('Campaign Builder', 'Create and manage campaigns', 'New Campaign', function() {
        renderCampaignForm(container, project);
    });
    container.appendChild(section);

    var list = document.createElement('div');
    list.className = 'list-container';

    var campaigns = ManualTools.CampaignBuilder.campaigns;
    if (campaigns.length === 0) {
        list.appendChild(createEmptyState('No campaigns yet. Click "New Campaign" to create one.'));
    } else {
        campaigns.forEach(function(c) {
            var item = HybridUI.createListItem({
                title: c.name,
                meta: c.channel + ' · ' + c.type + ' · $' + Utils.formatNumber(c.budget),
                right: c.status.charAt(0).toUpperCase() + c.status.slice(1)
            });
            item.addEventListener('click', function() {
                showAlert('Campaign: ' + c.name + ' | Status: ' + c.status + ' | Budget: $' + c.budget, 'info');
            });
            list.appendChild(item);
        });
    }

    container.appendChild(list);
}

function renderCampaignForm(container, project) {
    var form = document.createElement('div');
    form.className = 'card panel-form';
    form.innerHTML =
        '<div class="panel-header"><h3>New Campaign</h3></div>' +
        '<form id="campaignFormNew">' +
            '<div class="form-row"><label for="campName">Campaign Name</label><input id="campName" type="text" required /></div>' +
            '<div class="form-row"><label for="campType">Type</label><select id="campType"><option value="release">Release</option><option value="tour">Tour</option><option value="merchandise">Merchandise</option><option value="event">Event</option></select></div>' +
            '<div class="form-row"><label for="campChannel">Channel</label><select id="campChannel"><option value="Spotify">Spotify</option><option value="Apple Music">Apple Music</option><option value="YouTube">YouTube</option><option value="TikTok">TikTok</option><option value="Meta">Meta</option><option value="Google">Google</option></select></div>' +
            '<div class="form-row"><label for="campBudget">Budget ($)</label><input id="campBudget" type="number" min="0" value="0" /></div>' +
            '<div class="form-row"><label for="campStart">Start Date</label><input id="campStart" type="date" /></div>' +
            '<div class="form-row"><label for="campEnd">End Date</label><input id="campEnd" type="date" /></div>' +
            '<div class="form-actions"><button type="submit" class="btn btn-primary">Create</button><button type="button" class="btn btn-ghost" id="cancelCampForm">Cancel</button></div>' +
            '<div class="form-error" id="campFormError"></div>' +
        '</form>';
    container.appendChild(form);

    document.getElementById('campaignFormNew').addEventListener('submit', function(e) {
        e.preventDefault();
        var name = document.getElementById('campName').value.trim();
        if (!name) {
            var err = document.getElementById('campFormError');
            if (err) { err.textContent = 'Campaign name is required.'; err.classList.add('visible'); }
            return;
        }

        var campaign = ManualTools.CampaignBuilder.createCampaign({
            name: name,
            type: document.getElementById('campType').value,
            channel: document.getElementById('campChannel').value,
            budget: parseFloat(document.getElementById('campBudget').value) || 0,
            startDate: document.getElementById('campStart').value ? new Date(document.getElementById('campStart').value).getTime() : Date.now(),
            endDate: document.getElementById('campEnd').value ? new Date(document.getElementById('campEnd').value).getTime() : Date.now() + 30 * 86400000,
            objectives: ['awareness', 'engagement']
        });

        showAlert('Campaign "' + campaign.name + '" created!', 'success');
        renderCampaignBuilder(container, project);
    });

    document.getElementById('cancelCampForm').addEventListener('click', function() {
        renderCampaignBuilder(container, project);
    });
}

function renderAudienceSelector(container) {
    var section = createSectionHeaderWithAction('Audience Selector', 'Build and combine audience segments', 'New Segment', function() {
        renderAudienceForm(container);
    });
    container.appendChild(section);

    var list = document.createElement('div');
    list.className = 'list-container';

    if (ManualTools.AudienceSelector.segments.length === 0) {
        list.appendChild(createEmptyState('No audience segments yet.'));
    } else {
        ManualTools.AudienceSelector.segments.forEach(function(seg) {
            var item = HybridUI.createListItem({
                title: seg.name,
                meta: seg.description || seg.criteria.ageRange || 'No criteria',
                right: seg.estimatedSize > 0 ? Utils.formatNumber(seg.estimatedSize) + ' est.' : 'TBD'
            });
            item.addEventListener('click', function() {
                showAlert('Segment: ' + seg.name + ' | Size: ~' + (seg.estimatedSize || 'unknown'), 'info');
            });
            list.appendChild(item);
        });
    }

    container.appendChild(list);
}

function renderAudienceForm(container) {
    var form = document.createElement('div');
    form.className = 'card panel-form';
    form.innerHTML =
        '<div class="panel-header"><h3>New Audience Segment</h3></div>' +
        '<form id="audienceForm">' +
            '<div class="form-row"><label for="segName">Segment Name</label><input id="segName" type="text" required /></div>' +
            '<div class="form-row"><label for="segDesc">Description</label><input id="segDesc" type="text" /></div>' +
            '<div class="form-row"><label for="segAge">Age Range</label><select id="segAge"><option value="13-17">13-17</option><option value="18-24">18-24</option><option value="25-34" selected>25-34</option><option value="35-44">35-44</option><option value="45-54">45-54</option><option value="55+">55+</option></select></div>' +
            '<div class="form-row"><label for="segGender">Gender</label><select id="segGender"><option value="all">All</option><option value="male">Male</option><option value="female">Female</option><option value="non-binary">Non-binary</option></select></div>' +
            '<div class="form-row"><label for="segInterests">Interests (comma-separated)</label><input id="segInterests" type="text" placeholder="music, concerts, festivals" /></div>' +
            '<div class="form-actions"><button type="submit" class="btn btn-primary">Create Segment</button><button type="button" class="btn btn-ghost" id="cancelSegForm">Cancel</button></div>' +
        '</form>';
    container.appendChild(form);

    document.getElementById('audienceForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var name = document.getElementById('segName').value.trim();
        if (!name) return;

        var seg = ManualTools.AudienceSelector.createSegment({
            name: name,
            description: document.getElementById('segDesc').value.trim(),
            criteria: {
                ageRange: document.getElementById('segAge').value,
                gender: document.getElementById('segGender').value,
                interests: document.getElementById('segInterests').value.split(',').map(function(s) { return s.trim(); }).filter(Boolean)
            }
        });

        showAlert('Segment "' + seg.name + '" created!', 'success');
        renderAudienceSelector(container);
    });

    document.getElementById('cancelSegForm').addEventListener('click', function() {
        renderAudienceSelector(container);
    });
}

function renderGeoTargeting(container, project) {
    var section = createSectionHeaderWithAction('Geo Targeting', 'Define geographic targeting for campaigns', 'Add Location', function() {
        renderGeoForm(container);
    });
    container.appendChild(section);

    // Import from AI button
    if (project.geoTargeting) {
        var importBtn = document.createElement('button');
        importBtn.className = 'btn btn-sm btn-ghost margin-bottom';
        importBtn.textContent = 'Import from AI Plan';
        importBtn.addEventListener('click', function() {
            var count = ManualTools.GeoTargeting.importFromAI(project.geoTargeting);
            showAlert(count + ' locations imported from AI plan!', 'success');
            renderGeoTargeting(container, project);
        });
        section.appendChild(importBtn);
    }

    var list = document.createElement('div');
    list.className = 'list-container';

    var locations = ManualTools.GeoTargeting.getByPriority();
    if (locations.length === 0) {
        list.appendChild(createEmptyState('No geo targets defined. Add locations or import from AI.'));
    } else {
        locations.forEach(function(loc) {
            var item = HybridUI.createListItem({
                title: loc.name,
                meta: loc.country + (loc.city ? ', ' + loc.city : '') + ' · ' + loc.region,
                right: loc.priority.charAt(0).toUpperCase() + loc.priority.slice(1) + ' · ' + loc.radius + 'km'
            });
            item.addEventListener('click', function() {
                showAlert('Location: ' + loc.name + ' | Budget: $' + (loc.budgetAllocation || 'N/A'), 'info');
            });
            list.appendChild(item);
        });
    }

    container.appendChild(list);
}

function renderGeoForm(container) {
    var form = document.createElement('div');
    form.className = 'card panel-form';
    form.innerHTML =
        '<div class="panel-header"><h3>Add Location</h3></div>' +
        '<form id="geoForm">' +
            '<div class="form-row"><label for="geoName">Location Name</label><input id="geoName" type="text" required /></div>' +
            '<div class="form-row"><label for="geoCountry">Country</label><input id="geoCountry" type="text" /></div>' +
            '<div class="form-row"><label for="geoCity">City</label><input id="geoCity" type="text" /></div>' +
            '<div class="form-row"><label for="geoPriority">Priority</label><select id="geoPriority"><option value="high">High</option><option value="medium" selected>Medium</option><option value="low">Low</option></select></div>' +
            '<div class="form-row"><label for="geoRadius">Radius (km)</label><input id="geoRadius" type="number" value="50" /></div>' +
            '<div class="form-actions"><button type="submit" class="btn btn-primary">Add</button><button type="button" class="btn btn-ghost" id="cancelGeoForm">Cancel</button></div>' +
        '</form>';
    container.appendChild(form);

    document.getElementById('geoForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var name = document.getElementById('geoName').value.trim();
        if (!name) return;

        ManualTools.GeoTargeting.addLocation({
            name: name,
            country: document.getElementById('geoCountry').value.trim(),
            city: document.getElementById('geoCity').value.trim(),
            priority: document.getElementById('geoPriority').value,
            radius: parseInt(document.getElementById('geoRadius').value) || 50
        });

        showAlert('Location "' + name + '" added!', 'success');
        renderGeoTargeting(container, { geoTargeting: ManualTools.GeoTargeting });
    });

    document.getElementById('cancelGeoForm').addEventListener('click', function() {
        renderGeoTargeting(container, { geoTargeting: ManualTools.GeoTargeting });
    });
}

function renderCreativePlanner(container, project) {
    var section = createSectionHeaderWithAction('Creative Planner', 'Plan creative assets and ideas', 'New Idea', function() {
        renderCreativeForm(container, project);
    });
    container.appendChild(section);

    // Import from AI button
    if (project.creativeBrief) {
        var importBtn = document.createElement('button');
        importBtn.className = 'btn btn-sm btn-ghost margin-bottom';
        importBtn.textContent = 'Import from AI Brief';
        importBtn.addEventListener('click', function() {
            var ideas = ManualTools.CreativePlanner.importFromAI(project.creativeBrief);
            showAlert(ideas.length + ' creative ideas imported from AI!', 'success');
             renderCreativePlanner(container, project);
         });
         section.appendChild(importBtn);
}

function renderCreativeForm(container, project) {
    var form = document.createElement('div');
    form.className = 'card panel-form';
    form.innerHTML =
        '<div class="panel-header"><h3>New Creative Idea</h3></div>' +
        '<form id="creativeForm">' +
            '<div class="form-row"><label for="ideaTitle">Title</label><input id="ideaTitle" type="text" required /></div>' +
            '<div class="form-row"><label for="ideaType">Type</label><select id="ideaType"><option value="video">Video</option><option value="image">Image</option><option value="copy">Copy</option><option value="audio">Audio</option><option value="interactive">Interactive</option></select></div>' +
            '<div class="form-row"><label for="ideaPlatform">Platform</label><select id="ideaPlatform"><option value="TikTok">TikTok</option><option value="Instagram">Instagram</option><option value="YouTube">YouTube</option><option value="multi">Multi-Platform</option></select></div>' +
            '<div class="form-row"><label for="ideaHook">Hook / Concept</label><textarea id="ideaHook" rows="3" placeholder="Describe the creative concept..."></textarea></div>' +
            '<div class="form-row"><label for="ideaPriority">Priority</label><select id="ideaPriority"><option value="high">High</option><option value="medium" selected>Medium</option><option value="low">Low</option></select></div>' +
            '<div class="form-actions"><button type="submit" class="btn btn-primary">Add Idea</button><button type="button" class="btn btn-ghost" id="cancelCreativeForm">Cancel</button></div>' +
        '</form>';
    container.appendChild(form);

    document.getElementById('creativeForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var title = document.getElementById('ideaTitle').value.trim();
        if (!title) return;

        var idea = ManualTools.CreativePlanner.addIdea({
            title: title,
            type: document.getElementById('ideaType').value,
            platform: document.getElementById('ideaPlatform').value,
            hook: document.getElementById('ideaHook').value.trim(),
            priority: document.getElementById('ideaPriority').value,
            status: 'idea'
        });

        showAlert('Creative idea "' + idea.title + '" added!', 'success');
        renderCreativePlanner(container, project);
    });

    document.getElementById('cancelCreativeForm').addEventListener('click', function() {
        renderCreativePlanner(container, project);
    });
}</tool_call>}