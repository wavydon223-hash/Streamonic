/**
 * Render content based on its type
 * @param {*} content - The content to render
 * @returns {string} HTML string for the content
 */
function renderContent(content) {
  if (!content) return "<p>No content available</p>";

  if (typeof content === "string") {
    return "<p>" + content + "</p>";
  }

  if (Array.isArray(content)) {
    return "<ul>" + content.map(item => "<li>" + item + "</li>").join("") + "</ul>";
  }

  if (typeof content === "object") {
    return Object.entries(content)
      .map(([key, value]) => "<p><strong>" + key + ":</strong> " + value + "</p>")
      .join("");
  }

  return "<p>No content available</p>";
}

/**
 * Render the Output Panel UI inside the #output-panel container
 * @param {Array} sections - Array of section objects with title and content
 */
function renderOutputPanel(sections) {
  const outputPanel = document.getElementById('output-panel');
  if (!outputPanel) return;
  
  // Clear existing content
  outputPanel.innerHTML = '';
  
  // Use DocumentFragment for batch DOM updates
  const fragment = document.createDocumentFragment();
  
  // Create a card for each section
  sections.forEach(section => {
    const card = document.createElement('div');
    card.className = 'output-section-card';
    
    // Use renderContent helper to format content
    const contentHTML = renderContent(section.content);
    
    card.innerHTML = `
      <h3 class="output-section-title">${section.title || 'Untitled Section'}</h3>
      <div class="output-section-body">
        ${contentHTML}
      </div>
    `;
    
    fragment.appendChild(card);
  });
  
  // Single DOM update
  outputPanel.appendChild(fragment);
}

// Export for use in other modules
window.renderOutputPanel = renderOutputPanel;
window.renderContent = renderContent;