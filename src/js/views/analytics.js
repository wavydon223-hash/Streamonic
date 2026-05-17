// ============================================================
// Analytics View — Performance charts and metrics
// ============================================================

function renderAnalytics() {
    var container = document.getElementById('viewAnalytics');
    if (!container) return;

    var content = document.getElementById('analyticsContent');
    if (!content) return;

    content.innerHTML = '';

    var tracks = Storage.load('pm_tracks', []);

    if (tracks.length === 0) {
        content.appendChild(createEmptyState('No data yet. Add tracks with plays and saves to see charts here.'));
        return;
    }

    // Build chart data
    var labels = tracks.map(function(t) { return t.title; });
    var plays = tracks.map(function(t) { return t.plays || 0; });
    var saves = tracks.map(function(t) { return t.saves || 0; });

    // Summary stats
    var totalPlays = plays.reduce(function(a, b) { return a + b; }, 0);
    var totalSaves = saves.reduce(function(a, b) { return a + b; }, 0);
    var avgPlays = totalPlays > 0 ? Math.round(totalPlays / tracks.length) : 0;

    // Summary cards row
    var summaryGrid = document.createElement('div');
    summaryGrid.className = 'card-grid';
    summaryGrid.style.marginTop = '16px';

    summaryGrid.appendChild(createStatCard({
        label: 'Total Streams',
        value: Utils.formatNumber(totalPlays),
        pill: 'All Time',
        footerLeft: 'Across ' + tracks.length + ' tracks',
        footerRight: 'Spotify'
    }));
    summaryGrid.appendChild(createStatCard({
        label: 'Total Saves',
        value: Utils.formatNumber(totalSaves),
        pill: 'Engagement',
        footerLeft: 'Listener intent',
        footerRight: 'Organic'
    }));
    summaryGrid.appendChild(createStatCard({
        label: 'Avg Plays / Track',
        value: Utils.formatNumber(avgPlays),
        pill: 'Average',
        footerLeft: 'Per track',
        footerRight: 'Mean'
    }));

    content.appendChild(summaryGrid);

    // Chart card
    var chartCard = document.createElement('div');
    chartCard.className = 'card';
    chartCard.style.marginTop = '18px';

    var chartTitle = document.createElement('div');
    chartTitle.className = 'card-title';
    chartTitle.textContent = 'Plays vs Saves per Track';
    chartCard.appendChild(chartTitle);

    var canvasWrap = document.createElement('div');
    canvasWrap.className = 'chart-container';

    var canvas = document.createElement('canvas');
    canvas.id = 'analyticsChart';
    canvas.style.width = '100%';
    canvas.style.maxHeight = '300px';
    canvasWrap.appendChild(canvas);
    chartCard.appendChild(canvasWrap);

    content.appendChild(chartCard);

    // Destroy previous chart instance if it exists
    if (window._analyticsChart) {
        window._analyticsChart.destroy();
        window._analyticsChart = null;
    }

    // Render chart if Chart.js is available
    if (typeof Chart !== 'undefined') {
        var ctx = canvas.getContext('2d');
        window._analyticsChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Plays',
                        data: plays,
                        backgroundColor: 'rgba(127, 0, 255, 0.7)',
                        borderRadius: 4
                    },
                    {
                        label: 'Saves',
                        data: saves,
                        backgroundColor: 'rgba(0, 179, 255, 0.7)',
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: { color: '#f9fbff' }
                    }
                },
                scales: {
                    x: {
                        ticks: { color: '#c3c9e6' },
                        grid: { color: 'rgba(255,255,255,0.05)' }
                    },
                    y: {
                        ticks: { color: '#c3c9e6' },
                        grid: { color: 'rgba(255,255,255,0.05)' }
                    }
                }
            }
        });
    }

    // Per-track list
    var listHeader = createSectionHeader('Track Performance', 'Individual stream and save breakdown');
    listHeader.style.marginTop = '20px';
    content.appendChild(listHeader);

    var listWrap = document.createElement('div');
    listWrap.className = 'list-container';
    content.appendChild(listWrap);

    tracks.forEach(function(t) {
        var item = createListItem({
            title: t.title,
            meta: 'by ' + (t.artist || 'Unknown') + ' \u2022 Plays: ' + (t.plays || 0) + ' \u2022 Saves: ' + (t.saves || 0),
            right: t.duration ? t.duration + 's' : ''
        });
        listWrap.appendChild(item);
    });
}

window.renderAnalytics = renderAnalytics;
