// ============================================================
// Reusable UI Components for Peak Matrix
// ============================================================

function createSectionHeader(title, subtitle) {
    var wrapper = document.createElement('div');
    wrapper.className = 'section-header';

    var h = document.createElement('h2');
    h.className = 'section-title';
    h.textContent = title;
    wrapper.appendChild(h);

    if (subtitle) {
        var sub = document.createElement('div');
        sub.className = 'section-subtitle';
        sub.textContent = subtitle;
        wrapper.appendChild(sub);
    }

    return wrapper;
}

function createStatCard(config) {
    var card = document.createElement('div');
    card.className = 'card stat-card';

    var header = document.createElement('div');
    header.className = 'card-header';

    var title = document.createElement('div');
    title.className = 'card-title';
    title.textContent = config.label || '';

    var pill = document.createElement('span');
    pill.className = 'card-pill';
    pill.textContent = config.pill || 'Live';

    header.appendChild(title);
    header.appendChild(pill);

    var metric = document.createElement('div');
    metric.className = 'card-metric';
    metric.textContent = config.value || '0';

    var footer = document.createElement('div');
    footer.className = 'card-footer';

    var left = document.createElement('span');
    left.textContent = config.footerLeft || '';

    var right = document.createElement('span');
    right.textContent = config.footerRight || '';

    footer.appendChild(left);
    footer.appendChild(right);

    card.appendChild(header);
    card.appendChild(metric);
    card.appendChild(footer);

    return card;
}

function createEmptyState(message) {
    var div = document.createElement('div');
    div.className = 'empty-state';
    div.textContent = message || 'No data available.';
    return div;
}

function createListItem(config) {
    var item = document.createElement('div');
    item.className = 'list-item';

    var main = document.createElement('div');
    main.className = 'list-item-main';

    var t = document.createElement('div');
    t.className = 'list-item-title';
    t.textContent = config.title || '';

    var m = document.createElement('div');
    m.className = 'list-item-meta';
    m.textContent = config.meta || '';

    main.appendChild(t);
    main.appendChild(m);

    var rightEl = document.createElement('div');
    rightEl.className = 'list-item-right';
    rightEl.textContent = config.right || '';

    item.appendChild(main);
    item.appendChild(rightEl);

    return item;
}

function createActivityItem(text, time) {
    var item = document.createElement('div');
    item.className = 'activity-item';

    var dot = document.createElement('div');
    dot.className = 'activity-dot';

    var content = document.createElement('div');

    var textEl = document.createElement('div');
    textEl.className = 'activity-text';
    textEl.textContent = text;

    var timeEl = document.createElement('div');
    timeEl.className = 'activity-time';
    timeEl.textContent = time || new Date().toLocaleString();

    content.appendChild(textEl);
    content.appendChild(timeEl);

    item.appendChild(dot);
    item.appendChild(content);

    return item;
}
