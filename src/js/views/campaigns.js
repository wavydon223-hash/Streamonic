// ============================================================
// Campaigns View — Create and track marketing campaigns
// ============================================================

function renderCampaigns() {
    var container = document.getElementById('viewCampaigns');
    if (!container) return;

    var campaigns = Storage.load('pm_campaigns', []);

    // Form
    var formCard = document.querySelector('#viewCampaigns .panel-form');
    if (formCard) {
        var form = document.getElementById('campaignForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();

                var errEl = document.getElementById('campaignFormError');
                if (errEl) { errEl.classList.remove('visible'); errEl.textContent = ''; }

                var nameInput = document.getElementById('campaignName');
                var channelSelect = document.getElementById('campaignChannel');
                var budgetInput = document.getElementById('campaignBudget');

                var name = nameInput ? nameInput.value.trim() : '';
                var channel = channelSelect ? channelSelect.value : 'Spotify';
                var budget = parseFloat(budgetInput ? budgetInput.value : '0');

                if (!name) {
                    if (errEl) { errEl.textContent = 'Campaign name is required.'; errEl.classList.add('visible'); }
                    return;
                }

                campaigns.push({
                    id: Utils.generateID(),
                    name: name,
                    channel: channel,
                    budget: isNaN(budget) ? 0 : budget,
                    status: 'active',
                    createdAt: Date.now()
                });

                Storage.save('pm_campaigns', campaigns);

                if (nameInput) nameInput.value = '';
                if (budgetInput) budgetInput.value = '';

                renderCampaignList();
                renderDashboard();
                pushActivity('Created campaign: ' + name);
            });
        }
    }

    renderCampaignList();
}

function renderCampaignList() {
    var listContainer = document.getElementById('campaignList');
    if (!listContainer) return;

    listContainer.innerHTML = '';
    var campaigns = Storage.load('pm_campaigns', []);

    if (campaigns.length === 0) {
        listContainer.appendChild(createEmptyState('No campaigns yet. Create your first campaign above.'));
        return;
    }

    campaigns.forEach(function(c, index) {
        var item = createListItem({
            title: c.name,
            meta: c.channel + ' \u2022 ' + (c.status || 'active') + ' \u2022 Budget: $' + (c.budget || 0),
            right: '\u22EE'
        });

        item.addEventListener('click', function() {
            if (confirm('Delete campaign "' + c.name + '"?')) {
                campaigns.splice(index, 1);
                Storage.save('pm_campaigns', campaigns);
                renderCampaignList();
                renderDashboard();
                pushActivity('Deleted campaign: ' + c.name);
            }
        });

        listContainer.appendChild(item);
    });
}

window.renderCampaigns = renderCampaigns;
