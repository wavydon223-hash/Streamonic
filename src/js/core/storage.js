// ============================================================
// Storage Module — localStorage wrapper
// ============================================================

var Storage = {
    save(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.error('Storage save error for key:', key, e);
        }
    },

    load(key, fallback) {
         try {
             const raw = localStorage.getItem(key);
             if (raw === null) return fallback || [];
             const parsed = JSON.parse(raw);
             if (!Array.isArray(parsed)) {
                 console.warn('Storage: expected array for key "' + key + '", got ' + typeof parsed + '. Returning fallback.');
                 return fallback || [];
             }
             return parsed;
         } catch (e) {
             console.error('Storage load error for key:', key, e);
             return fallback || [];
         }
     },

    remove(key) {
        localStorage.removeItem(key);
    }
};
