// ============================================================
// Dashboard View
// ============================================================

function renderDashboard() {
    var tracks = Storage.load('pm_tracks', []);
    var campaigns = Storage.load('pm_campaigns', []);

    var totalPlays = tracks.reduce(function(sum, t) { return sum + (t.plays || 0); }, 0);
    var totalSaves = tracks.reduce(function(sum, t) { return sum + (t.saves || 0); }, 0);
    var activeCampaigns = campaigns.filter(function(c) { return c.status === 'active'; }).length;

    // Update stat cards if they exist
    var statPlays = document.getElementById('statPlays');
    var statSaves = document.getElementById('statSaves');
    var statCampaigns = document.getElementById('statCampaigns');
    var statTracks = document.getElementById('statTracks');

    if (statPlays) statPlays.textContent = Utils.formatNumber(totalPlays);
    if (statSaves) statSaves.textContent = Utils.formatNumber(totalSaves);
    if (statCampaigns) statCampaigns.textContent = activeCampaigns.toString();
    if (statTracks) statTracks.textContent = tracks.length.toString();

    // Recent activity
    var activityList = document.getElementById('activityList');
    if (!activityList) return;

    activityList.innerHTML = '';

    var trackEvents = tracks
         .sort(function(a, b) { return (b.createdAt || 0) - (a.createdAt || 0); })
         .slice(0, 5)
         .map(function(t) {
        return {
            type: 'Track',
            title: t.title,
            artist: t.artist,
            time: t.createdAt || Date.now()
        };
    });

    var campaignEvents = campaigns
         .sort(function(a, b) { return (b.createdAt || 0) - (a.createdAt || 0); })
         .slice(0, 3)
         .map(function(c) {
        return {
            type: 'Campaign',
            title: c.name,
            channel: c.channel,
            time: c.createdAt || Date.now()
        };
    });

    var allEvents = trackEvents.concat(campaignEvents)
        .sort(function(a, b) { return b.time - a.time; })
        .slice(0, 8);

    if (allEvents.length === 0) {
        activityList.appendChild(createEmptyState('No recent activity yet. Add tracks or launch a campaign.'));
    } else {
        allEvents.forEach(function(ev) {
            var text = ev.type + ': ' + ev.title;
            if (ev.type === 'Track' && ev.artist) text += ' by ' + ev.artist;
            if (ev.type === 'Campaign' && ev.channel) text += ' (' + ev.channel + ')';
            activityList.appendChild(createActivityItem(text, new Date(ev.time).toLocaleString()));
        });
    }
}

window.renderDashboard = renderDashboard;
