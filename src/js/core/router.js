// ============================================================
// Router — Simple hash-based SPA navigation
// ============================================================

var Router = {
    currentView: null,

    navigate(viewName) {
        // Hide all views
        document.querySelectorAll('.view').forEach(function(view) {
            view.style.display = 'none';
            view.classList.remove('active');
        });

        // Show target view
        var target = document.getElementById('view' + viewName.charAt(0).toUpperCase() + viewName.slice(1));
        if (target) {
            target.style.display = 'block';
            target.classList.add('active');
        }

        // Update nav active state
        document.querySelectorAll('.nav-item').forEach(function(btn) {
            btn.classList.remove('active');
            if (btn.dataset.view === viewName) {
                btn.classList.add('active');
            }
        });

        // Show search only on Tracks view
         var searchBar = document.querySelector('.search');
         if (searchBar) searchBar.style.display = viewName === 'tracks' ? '' : 'none';

         this.currentView = viewName;

         // Trigger view-specific render
        this.dispatchView(viewName);
    },

    dispatchView(viewName) {
        switch (viewName) {
            case 'dashboard':
                if (typeof renderDashboard === 'function') renderDashboard();
                break;
            case 'tracks':
                if (typeof initTracksView === 'function') initTracksView();
                break;
            case 'analytics':
                if (typeof renderAnalytics === 'function') renderAnalytics();
                break;
            case 'campaigns':
                if (typeof renderCampaigns === 'function') renderCampaigns();
                break;
            case 'marketing':
                if (typeof renderMarketing === 'function') renderMarketing();
                break;
        }
    },

    init() {
        var self = this;

        // Nav button clicks
         document.querySelectorAll('.nav-item').forEach(function(btn) {
             btn.addEventListener('click', function() {
                 self.navigate(this.dataset.view);
             });
         });

         // Handle browser back/forward navigation
         window.addEventListener('hashchange', function() {
             var hash = (window.location.hash ? window.location.hash.replace('#', '') : '') || 'dashboard';
             self.navigate(hash);
         });

         // Default to dashboard
         var hash = (window.location && window.location.hash ? window.location.hash.replace('#', '') : '') || 'dashboard';
         this.navigate(hash);
    }
};
