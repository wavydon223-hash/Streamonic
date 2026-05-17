// Current mode storage
let currentMode = null;

function setCurrentMode(mode) {
  currentMode = mode;
}

function getCurrentMode() {
  return currentMode;
}

// Current kit storage
let currentKit = null;

function setCurrentKit(kit) {
  currentKit = kit;
}

function getCurrentKit() {
  return currentKit;
}

window.setCurrentMode = setCurrentMode;
window.getCurrentMode = getCurrentMode;
window.setCurrentKit = setCurrentKit;
window.getCurrentKit = getCurrentKit;