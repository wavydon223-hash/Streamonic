// ==================================
// Core Utilities
// ==================================

var Utils = {
    generateID: function() {
        return "id_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    },

    formatNumber: function(num) {
        return Number(num).toLocaleString();
    },

    humanFileSize: function(bytes) {
        if (!bytes) return "0 B";
        var i= Math.floor(Math.log(bytes) / Math.log(1024));
        return (bytes / Math.pow(1024, i)).toFixed(1) + " " + ["B", "KB", "MB", "GB"][i];
    },

    escapeHtml: function(s) {
         if (!s) return "";
         return s
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/\x27/g, "&#39;")
         .replace(/\x60/g, "&#96;")
         .replace(/\//g, "&#47;")
         .replace(/=/g, "&#61;");
     },

    getAudioDuration: function(file) {
        return new Promise(function(resolve, reject) {
            var url= URL.createObjectURL(file);
            var audio=new Audio();
            audio.preload="metadata";
            audio.src=url;
            audio.addEventListener("loadedmetadata", function() {
                var d= audio.duration;
            URL.revokeObjectURL(url);
            resolve(d || 0);
          }, { once: true });
        audio.addEventListener("error", function(e) {
            URL.revokeObjectURL(url);
            reject(e);
        }, { once: true });
    });
},
};
