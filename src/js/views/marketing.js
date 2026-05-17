// ============================================================
// Marketing View — Content ideas, captions, and quick actions
// ============================================================

function renderMarketing() {
    var container = document.getElementById('viewMarketing');
    if (!container) return;

    var content = document.getElementById('marketingContent');
    if (!content) return;

    content.innerHTML = '';

    // Playbook card
    var card = document.createElement('div');
    card.className = 'card';
    card.style.marginTop = '16px';

    var title = document.createElement('div');
    title.className = 'card-title';
    title.textContent = 'Playbook';
    card.appendChild(title);

    var list = document.createElement('div');
    list.className = 'list-container';
    list.style.marginTop = '12px';

    var items = [
        {
            title: 'Playlist Outreach',
            meta: 'Shortlist 10 curators and send personalized pitches.',
            right: 'Spotify'
        },
        {
            title: 'Content Clips',
            meta: 'Cut 3 x 15s clips for TikTok / Reels.',
            right: 'TikTok'
        },
        {
            title: 'Email Blast',
            meta: 'Send update to your core fan list.',
            right: 'Email'
        },
        {
            title: 'Story Campaign',
            meta: 'Behind-the-scenes content for Instagram Stories.',
            right: 'Instagram'
        },
        {
            title: 'YouTube Premiere',
            meta: 'Schedule a premiere event for the new video.',
            right: 'YouTube'
        }
    ];

    items.forEach(function(i) {
        list.appendChild(createListItem(i));
    });

    card.appendChild(list);
    content.appendChild(card);

    // Quick actions card
    var actionsCard = document.createElement('div');
    actionsCard.className = 'card';
    actionsCard.style.marginTop = '16px';

    var actionsTitle = document.createElement('div');
    actionsTitle.className = 'card-title';
    actionsTitle.textContent = 'Quick Actions';
    actionsCard.appendChild(actionsTitle);

    var actionsList = document.createElement('div');
    actionsList.className = 'list-container';
    actionsList.style.marginTop = '12px';

    var actions = [
        { title: 'Generate Caption', meta: 'AI-powered caption for your next post', right: '\u2728' },
        { title: 'Schedule Post', meta: 'Queue content across platforms', right: '\u23F0' },
        { title: 'Analytics Snapshot', meta: 'Export weekly performance report', right: '\uD83D\uDCCA' }
    ];

    actions.forEach(function(a) {
        var item = createListItem(a);
        item.style.cursor = 'pointer';
        actionsList.appendChild(item);
    });

    actionsCard.appendChild(actionsList);
    content.appendChild(actionsCard);

    // Coming soon note
    var empty = createEmptyState('More marketing tools coming soon. AI captions, auto-scheduling, and cross-platform analytics are on the roadmap.');
    empty.style.marginTop = '16px';
    content.appendChild(empty);
}

window.renderMarketing = renderMarketing;
