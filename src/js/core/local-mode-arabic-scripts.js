// ============================================================
// Local Mode — Arabic Script Generator (Placeholder)
// Generates an array of arabicScript objects using placeholder data.
// No external APIs, no real Arabic script generation.
// ============================================================

/**
 * Generate an array of placeholder arabicScript objects.
 * Matches the arabicScript data structure defined in local-mode-models.js.
 *
 * @returns {arabicScript[]}
 */
function generateArabicScripts() {
    return [
        {
            scriptName: "Khaleeji Greeting",
            dialect: "Khaleeji",
            lines: [
                "صباح الخير يا غالي",
                "كيف حالك اليوم؟",
                "الحمد لله على كل شيء"
            ]
        },
        {
            scriptName: "Emirati Hospitality",
            dialect: "Emirati",
            lines: [
                "أهلاً وسهلاً في بيتنا",
                "تفضل قهوة وغلة",
                "عندنا ترحيب خاص للضيوف"
            ]
        },
        {
            scriptName: "Saudi Generosity",
            dialect: "Saudi",
            lines: [
                "الكرم من شيمنا",
                "ما نحرم أحد من خيرنا",
                "الضيف عندنا أمانة"
            ]
        },
        {
            scriptName: "Ramadan Greeting",
            dialect: "GCC",
            lines: [
                "رمضان كريم وكل عام وأنتم بخير",
                "تقبل الله صيامكم وقيامكم",
                "عساكم من عواده"
            ]
        },
        {
            scriptName: "National Day Celebration",
            dialect: "Kuwaiti",
            lines: [
                "عيد وطننا مجيد",
                "كل عام وبلادنا بخير وازدهار",
                "حفظ الله الكويت وأهلها"
            ]
        }
    ];
}

window.generateArabicScripts = generateArabicScripts;