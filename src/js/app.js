// ============================================================
// Peak Matrix — Main Application Entry Point
// ============================================================

(function() {
    'use strict';

    function init() {
        console.log('Peak Matrix initialized');

        // Initialize sidebar (theme toggle, visitor counter)
        if (window.Sidebar) {
            Sidebar.init();
        }

        // Initialize router (handles initial dashboard render)
         if (window.Router) {
             Router.init();
         }
    }

    // Wait for DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
