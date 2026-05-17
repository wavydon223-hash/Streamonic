// Temporary placeholder modes array
const modes = [
  { id: "content", name: "Content Mode", description: "Content generation mode", kit: ["Hook 1", "Hook 2", "Caption A"] },
  { id: "ads", name: "Ads Mode", description: "Ad campaign mode", kit: ["Headline 1", "Headline 2", "CTA 1"] },
  { id: "seo", name: "SEO Mode", description: "SEO optimization mode", kit: ["Keyword 1", "Keyword 2", "Meta Tag"] },
  { id: "brand", name: "Brand Mode", description: "Brand development mode", kit: ["Voice 1", "Value A", "Value B"] },
  { id: "email", name: "Email Mode", description: "Email marketing mode", kit: ["Subject 1", "Subject 2", "Body A"] },
  { id: "funnel", name: "Funnel Mode", description: "Conversion funnel mode", kit: ["Step 1", "Step 2", "Tip A"] },
  { id: "growth", name: "Growth Mode", description: "Growth strategy mode", kit: ["Strategy 1", "Strategy 2", "Metric A"] }
];

// API base URL configuration
const API_BASE_URL = (window.API_BASE_URL) || "__API_BASE_URL__";

// Mode to API endpoint routing map
const modeToEndpoint = {
  content: "/generate/content",
  ads: "/generate/ads",
  seo: "/generate/seo",
  brand: "/generate/brand",
  email: "/generate/email",
  funnel: "/generate/funnel",
  growth: "/generate/growth"
};

/**
 * Select a mode by ID and render the mode detail view
 * @param {number} modeId - The ID of the mode to select
 */
function selectMode(modeId) {
  // Find the mode by id
  const mode = modes.find(m => m.id === modeId);
  if (!mode) {
    showError("Mode not found.");
    return;
  }
  
  // Store current mode
  setCurrentMode(mode);
  
  // Render the mode detail view
  renderModeDetail(mode);
  
  // Use screen manager to show detail view and clear output
  showModeDetail();
  clearOutputPanel();
}

/**
 * Initialize the application
 * Render the mode hub and set up event listeners
 */
function initApp() {
  // Render the mode hub with our placeholder modes
  renderModeHub(modes);
  
  // Add event listeners to all mode select buttons
  const selectButtons = document.querySelectorAll('.mode-select-btn');
  selectButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Use the mode id from our placeholder array
      selectMode(modes[index].id);
    });
  });
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Export functions for use in other modules
window.selectMode = selectMode;
window.initApp = initApp;

/**
 * Fetch kit data from the backend API
 * @param {Object} mode - The mode object
 * @returns {Promise<Object|null>} - The kit data or null on error
 */
async function fetchKitFromAPI(mode) {
  try {
    const endpoint = modeToEndpoint[mode.id];
    if (!endpoint) {
      showError("No API endpoint found for this mode.");
      return null;
    }

    const response = await fetch(API_BASE_URL + endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: "Generate kit" })
    });

    const data = await response.json();
    if (!data.success) {
      showError("Backend error: " + data.message);
      return null;
    }

    return data;
  } catch (err) {
    showError("Failed to connect to backend.");
    return null;
  }
}

window.fetchKitFromAPI = fetchKitFromAPI;

/**
 * Generate a kit for the given mode and render it in the output panel
 * @param {Object} mode - The mode object containing name and kit
 */
async function generateKit(mode) {
  const kit = await fetchKitFromAPI(mode);
  if (!kit) return;

  setCurrentKit(kit);
  renderOutputPanel(kit.sections || []);
}

window.generateKit = generateKit;