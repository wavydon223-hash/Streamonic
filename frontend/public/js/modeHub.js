/**
 * Render the Mode Hub UI inside the #mode-hub container
 * @param {Array} modes - Array of mode objects from getUIModeRegistry()
 */
function renderModeHub(modes) {
  const modeHub = document.getElementById('mode-hub');
  if (!modeHub) return;
  
  // Clear existing content
  modeHub.innerHTML = '';
  
  // Use DocumentFragment for batch DOM updates
  const fragment = document.createDocumentFragment();
  
  // Create a card for each mode
  modes.forEach(mode => {
    const card = document.createElement('div');
    card.className = 'mode-card';
    
    card.innerHTML = `
      <div class="mode-icon">📦</div>
      <h3 class="mode-title">${mode.name}</h3>
      <p class="mode-description">${mode.description}</p>
      <button class="mode-select-btn">Select Mode</button>
    `;
    
    fragment.appendChild(card);
  });
  
  // Single DOM update
  modeHub.appendChild(fragment);
}

// Export for use in other modules
window.renderModeHub = renderModeHub;