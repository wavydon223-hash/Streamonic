// ============================================================
// Hybrid Agency UI Components — Reusable elements for the
// Hybrid Agency Marketing System dashboard
// ============================================================

function createProjectCard(project) {
    var card = document.createElement('div');
    card.className = 'card project-card';
    card.dataset.projectId = project.id;

    var typeBadge = project.type || 'single';
    var modeBadge = project.marketingMode || 'organic';
    var statusBadge = project.status || 'planning';

    card.innerHTML =
        '<div class="project-card-header">' +
            '<div class="project-card-title">' + Utils.escapeHtml(project.name) + '</div>' +
            '<div class="project-card-badges">' +
                '<span class="badge badge-type">' + Utils.escapeHtml(typeBadge) + '</span>' +
                '<span class="badge badge-mode">' + Utils.escapeHtml(modeBadge) + '</span>' +
                '<span class="badge badge-status status-' + statusBadge + '">' + Utils.escapeHtml(statusBadge) + '</span>' +
            '</div>' +
        '</div>' +
        '<div class="project-card-meta">' +
            '<div class="project-card-line"><strong>Artist:</strong> ' + Utils.escapeHtml(project.artist || 'TBD') + '</div>' +
            '<div class="project-card-line"><strong>Genre:</strong> ' + Utils.escapeHtml(project.genre || 'TBD') + '</div>' +
            '<div class="project-card-line"><strong>Budget:</strong> $' + (project.budget && project.budget.total ? Utils.formatNumber(project.budget.total) : '0') + '</div>' +
            (project.timeline && project.timeline.releaseDate ? '<div class="project-card-line"><strong>Release:</strong> ' + new Date(project.timeline.releaseDate).toLocaleDateString() + '</div>' : '') +
        '</div>' +
        (project.aiGenerated ? '<div class="project-card-ai"><span class="ai-badge">AI Generated</span></div>' : '') +
        '<div class="project-card-actions">' +
            '<button class="btn btn-sm btn-ghost view-project" title="View Details">View</button>' +
            '<button class="btn btn-sm btn-ghost edit-project" title="Edit">Edit</button>' +
            '<button class="btn btn-sm btn-ghost ai-generate" title="AI Generate Plan">AI ▶</button>' +
        '</div>';

    return card;
}

function createMilestoneItem(milestone) {
    var item = document.createElement('div');
    item.className = 'milestone-item milestone-' + (milestone.status || 'pending');

    var statusIcon = {
        completed: '✓',
        in_progress: '◷',
        pending: '○',
        overdue: '⚠'
    };

    item.innerHTML =
        '<div class="milestone-icon">' + (statusIcon[milestone.status] || '○') + '</div>' +
        '<div class="milestone-content">' +
            '<div class="milestone-name">' + Utils.escapeHtml(milestone.name) + '</div>' +
            '<div class="milestone-date">' + (milestone.date || 'TBD') + '</div>' +
        '</div>';

    return item;
}

function createBudgetLine(category, allocated, spent, currency) {
    currency = currency || 'USD';
    var remaining = allocated - spent;
    var utilization = allocated > 0 ? Math.round((spent / allocated) * 100) : 0;
    var barColor = utilization > 90 ? '#ef4444' : utilization > 70 ? '#f59e0b' : '#22c55e';

    var line = document.createElement('div');
    line.className = 'budget-line';
    line.innerHTML =
        '<div class="budget-category">' + Utils.escapeHtml(category) + '</div>' +
        '<div class="budget-amounts">' +
            '<span class="budget-allocated">$' + Utils.formatNumber(allocated) + '</span>' +
            '<span class="budget-spent">$' + Utils.formatNumber(spent) + '</span>' +
            '<span class="budget-remaining" style="color:' + barColor + '">$' + Utils.formatNumber(Math.max(0, remaining)) + '</span>' +
        '</div>' +
        '<div class="budget-bar">' +
            '<div class="budget-bar-fill" style="width:' + Math.min(utilization, 100) + '%;background:' + barColor + '"></div>' +
        '</div>' +
        '<div class="budget-utilization">' + utilization + '% utilized</div>';

    return line;
}

function createKPICard(kpiName, actual, target, unit, status) {
    var card = document.createElement('div');
    card.className = 'card kpi-card status-' + (status || 'on_track');

    var progress = target > 0 ? Math.round((actual / target) * 100) : 0;

    card.innerHTML =
        '<div class="kpi-header">' +
            '<div class="kpi-name">' + Utils.escapeHtml(kpiName) + '</div>' +
            '<div class="kpi-status-badge badge-status-' + (status || 'on_track') + '">' + (status || 'On Track') + '</div>' +
        '</div>' +
        '<div class="kpi-metric">' +
            '<div class="kpi-actual">' + Utils.formatNumber(actual) + '</div>' +
            '<div class="kpi-target">/ ' + Utils.formatNumber(target) + ' ' + (unit || '') + '</div>' +
        '</div>' +
        '<div class="kpi-bar">' +
            '<div class="kpi-bar-fill" style="width:' + Math.min(progress, 100) + '%"></div>' +
        '</div>' +
        '<div class="kpi-progress-text">' + progress + '% of target</div>';

    return card;
}

function createPhaseCard(phase, index) {
    var card = document.createElement('div');
    card.className = 'card phase-card phase-' + (phase.status || 'pending');

    var statusColors = {
        completed: 'var(--accent)',
        in_progress: 'var(--accent-2)',
        pending: 'var(--muted)',
        overdue: '#ef4444'
    };

    card.innerHTML =
        '<div class="phase-indicator" style="background:' + (statusColors[phase.status] || 'var(--muted)') + '"></div>' +
        '<div class="phase-content">' +
            '<div class="phase-name">' + (index + 1) + '. ' + Utils.escapeHtml(phase.name) + '</div>' +
            '<div class="phase-dates">Days ' + phase.startOffsetDays + ' to ' + phase.endOffsetDays + ' (' + phase.duration + ' days)</div>' +
            '<div class="phase-milestones">' +
                (phase.milestones || []).map(function(m) {
                    return '<div class="phase-milestone">• ' + Utils.escapeHtml(m) + '</div>';
                }).join('') +
            '</div>' +
            '<div class="phase-deliverables">' +
                '<strong>Deliverables:</strong> ' + (phase.deliverables || []).join(', ') +
            '</div>' +
        '</div>' +
        '<div class="phase-status">' + (phase.status || 'Pending') + '</div>';

    return card;
}

function createAlertBanner(message, type) {
    type = type || 'info';
    var banner = document.createElement('div');
    banner.className = 'alert-banner alert-' + type;
    banner.innerHTML =
        '<span class="alert-icon">' + (type === 'error' ? '⚠' : type === 'warning' ? '!' : 'ℹ') + '</span>' +
        '<span class="alert-message">' + Utils.escapeHtml(message) + '</span>' +
        '<button class="alert-close" onclick="this.parentElement.remove()">×</button>';
    return banner;
}

function createRecommendationCard(rec) {
    var card = document.createElement('div');
    card.className = 'card recommendation-card';

    var priorityColors = { high: '#ef4444', medium: '#f59e0b', low: '#22c55e' };

    card.innerHTML =
        '<div class="recommendation-header">' +
            '<span class="recommendation-category" style="background:' + (priorityColors[rec.priority] || '#666') + '">' +
                (rec.category || 'General').toUpperCase() +
            '</span>' +
            '<span class="recommendation-priority" style="color:' + (priorityColors[rec.priority] || '#666') + '">' +
                (rec.priority || 'Medium').toUpperCase() +
            '</span>' +
        '</div>' +
        '<div class="recommendation-title">' + Utils.escapeHtml(rec.title) + '</div>' +
        '<div class="recommendation-desc">' + Utils.escapeHtml(rec.description) + '</div>' +
        '<div class="recommendation-action"><strong>Action:</strong> ' + Utils.escapeHtml(rec.action) + '</div>' +
        (rec.estimatedImpact ? '<div class="recommendation-impact">Expected Impact: ' + Utils.escapeHtml(rec.estimatedImpact) + '</div>' : '');

    return card;
}

// --- Section header with action button ---
function createSectionHeaderWithAction(title, subtitle, actionText, actionFn) {
    var wrapper = document.createElement('div');
    wrapper.className = 'section-header-with-action';

    var header = document.createElement('div');
    header.className = 'section-header';

    var h = document.createElement('h2');
    h.className = 'section-title';
    h.textContent = title;
    header.appendChild(h);

    if (subtitle) {
        var sub = document.createElement('div');
        sub.className = 'section-subtitle';
        sub.textContent = subtitle;
        header.appendChild(sub);
    }

    wrapper.appendChild(header);

    if (actionText && actionFn) {
        var btn = document.createElement('button');
        btn.className = 'btn btn-primary btn-sm';
        btn.textContent = actionText;
        btn.addEventListener('click', actionFn);
        wrapper.appendChild(btn);
    }

    return wrapper;
}

window.HybridUI = {
    createProjectCard: createProjectCard,
    createMilestoneItem: createMilestoneItem,
    createBudgetLine: createBudgetLine,
    createKPICard: createKPICard,
    createPhaseCard: createPhaseCard,
    createAlertBanner: createAlertBanner,
    createRecommendationCard: createRecommendationCard,
    createSectionHeaderWithAction: createSectionHeaderWithAction
};