// ============================================================
// Sidebar — Navigation & Theme Toggle
// ============================================================

(function() {
    var initialized = false;

    function initThemeToggle() {
        var toggle = document.getElementById('themeToggle');
        if (!toggle) return;

        // Check for saved theme
        var saved = localStorage.getItem('pm_theme');
        if (saved === 'light') {
            document.body.classList.add('light-theme');
            toggle.textContent = 'Dark Mode';
        }

        toggle.addEventListener('click', function() {
            document.body.classList.toggle('light-theme');
            var isLight = document.body.classList.contains('light-theme');
            toggle.textContent = isLight ? 'Light Mode' : 'Dark Mode';
            localStorage.setItem('pm_theme', isLight ? 'light' : 'dark');
        });
    }

    function initVisitorCounter() {
        var counter = document.getElementById('visitorCounter');
        if (!counter) return;

        // Simulated visitor count — replace with real API later
        var count = localStorage.getItem('pm_visitors_today');
        if (!count) {
            count = 1248 + Math.floor(Math.random() * 50);
            localStorage.setItem('pm_visitors_today', count);
        }
        counter.textContent = Utils.formatNumber(parseInt(count)) + ' Visitors Today';
    }

    window.Sidebar = {
        init: function() {
            if (initialized) return;
            initialized = true;
            initThemeToggle();
            initVisitorCounter();
        }
    };
})();
