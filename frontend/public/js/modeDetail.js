/**
 * Render the Mode Detail View UI inside the #mode-detail container
 * @param {Object} mode - The mode object containing name, description, and kit
 */
function renderModeDetail(mode) {
  const modeDetail = document.getElementById('mode-detail');
  if (!modeDetail) return;
  
  // Clear existing content
  modeDetail.innerHTML = '';
  
  // Create the mode detail card structure
  const card = document.createElement('div');
  card.className = 'mode-detail-card';
  
  // Create kit items list HTML
  let kitItemsHTML = '';
  if (mode.kit && Array.isArray(mode.kit)) {
    kitItemsHTML = mode.kit.map(item => `<li>${item}</li>`).join('');
  } else {
    kitItemsHTML = '<li>No kit items available</li>';
  }
  
  card.innerHTML = `
     <h2 class="mode-detail-title">${mode.name || 'Unknown Mode'}</h2>
     <p class="mode-detail-description">${mode.description || 'No description available'}</p>
     
     <h3>Kit Includes:</h3>
     <ul class="mode-detail-kit">
       ${kitItemsHTML}
     </ul>
     
     <button class="generate-kit-btn">Generate Kit</button>
   `;
   
   modeDetail.appendChild(card);
   
   // Attach click listener to the Generate Kit button
   const button = card.querySelector('.generate-kit-btn');
   button.addEventListener("click", () => {
     generateKit(mode);
   });
}

// Export for use in other modules
window.renderModeDetail = renderModeDetail;