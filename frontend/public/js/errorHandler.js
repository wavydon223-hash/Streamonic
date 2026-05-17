/**
 * Display an error message in the output panel
 * @param {string} message - The error message to display
 */
function showError(message) {
  const panel = document.getElementById("output-panel");
  panel.innerHTML = `
    <div class="output-section-card error-card fade-in">
      <h3>Error</h3>
      <p>${message}</p>
    </div>
  `;
}

window.showError = showError;