// ============================================================
// Global Mode — International Script Generator (Placeholder)
// Generates an array of internationalScript objects using placeholder data.
// No external APIs, no real script or translation generation.
// ============================================================

/**
 * Generate an array of placeholder internationalScript objects.
 * Matches the internationalScript data structure defined in global-mode-models.js.
 *
 * @returns {internationalScript[]}
 */
function generateInternationalScripts() {
    return [
        {
            scriptName: "Global Intro Script",
            language: "English",
            lines: [
                "Hey everyone! Welcome to our channel.",
                "Today we're going to talk about something exciting.",
                "Make sure to like and subscribe for more content."
            ]
        },
        {
            scriptName: "Spanish Greeting Script",
            language: "Spanish",
            lines: [
                "¡Hola a todos! Bienvenidos a nuestro canal.",
                "Hoy vamos a hablar de algo emocionante.",
                "No olviden darle like y suscribirse para más contenido."
            ]
        },
        {
            scriptName: "French Introduction Script",
            language: "French",
            lines: [
                "Bonjour à tous ! Bienvenue sur notre chaîne.",
                "Aujourd'hui, nous allons parler de quelque chose d'excitant.",
                "N'oubliez pas d'aimer et de vous abonner pour plus de contenu."
            ]
        },
        {
            scriptName: "Hindi Welcome Script",
            language: "Hindi",
            lines: [
                "नमस्ते सबको! हमारे चैनल में आपका स्वागत है।",
                "आज हम कुछ रोचक के बारे में बात करने वाले हैं।",
                "कृपया लाइक करें और सब्सक्राइब करें अधिक सामग्री के लिए।"
            ]
        },
        {
            scriptName: "Japanese Greeting Script",
            language: "Japanese",
            lines: [
                "こんにちは皆さん！私たちのチャンネルへようこそ。",
                "今日は楽しいことについて話します。",
                "いいねとチャンネル登録を忘れずにお願いします。"
            ]
        },
        {
            scriptName: "Arabic Welcome Script",
            language: "Arabic",
            lines: [
                "مرحباً everybody! أهلاً وسهلاً في قناتنا.",
                "اليوم سنتحدث عن شيء مثير.",
                "لا تنسوا الإعجاب والاشتراك لمزيد من المحتوى."
            ]
        },
        {
            scriptName: "Portuguese Introduction Script",
            language: "Portuguese",
            lines: [
                "Olá a todos! Bem-vindos ao nosso canal.",
                "Hoje vamos falar sobre algo emocionante.",
                "Não se esqueçam de curtir e se inscrever para mais conteúdo."
            ]
        }
    ];
}

window.generateInternationalScripts = generateInternationalScripts;