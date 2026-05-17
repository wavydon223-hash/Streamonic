function showModeHub() {
  // Reset kit state
  setCurrentKit(null);
  
  // Show mode hub, hide detail
  document.getElementById("mode-hub").style.display = "block";
  document.getElementById("mode-detail").style.display = "none";
  
  // Clear output panel
  document.getElementById("output-panel").innerHTML = "";
  
  // Apply fade-in animation
  const modeHub = document.getElementById("mode-hub");
  modeHub.classList.remove("fade-in");
  void modeHub.offsetWidth; // Trigger reflow
  modeHub.classList.add("fade-in");
}

function showModeDetail() {
  // Show mode detail, hide hub
  document.getElementById("mode-hub").style.display = "none";
  document.getElementById("mode-detail").style.display = "block";
  
  // Apply fade-in animation
  const modeDetail = document.getElementById("mode-detail");
  modeDetail.classList.remove("fade-in");
  void modeDetail.offsetWidth; // Trigger reflow
  modeDetail.classList.add("fade-in");
}

function clearOutputPanel() {
  document.getElementById("output-panel").innerHTML = "";
}

window.showModeHub = showModeHub;
window.showModeDetail = showModeDetail;
window.clearOutputPanel = clearOutputPanel;