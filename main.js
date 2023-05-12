const checkbox = document.getElementById("checkbox"); // The checkbox
const audioContext = new (window.AudioContext || window.AudioContext)(); // The audio context
const gainNode = audioContext.createGain(); // The gain node
const FLASH_DURATION = 1000;
const FLASH_CLASS_NAME = "flash";

// Connect the gain node to the audio context's destination
gainNode.connect(audioContext.destination);
gainNode.gain.setValueAtTime(1, audioContext.currentTime);

// Change the background color when the checkbox is checked
const changeBackgroundColor = () => {
  if (checkbox.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
};

// Add the specified class to the specified element for the specified duration
function addClassWithTimeout(element, className, timeout) {
  element.classList.add(className);
  setTimeout(function () {
    element.classList.remove(className);
  }, timeout);
}

// Flash the screen for 1 second
function flashScreen() {
  addClassWithTimeout(document.body, FLASH_CLASS_NAME, FLASH_DURATION);
}

// Play a tone at the specified frequency for the specified duration
function playTone(frequency, duration) {
  // Create an oscillator and connect it to the gain node
  var oscillator = audioContext.createOscillator();
  oscillator.connect(gainNode);

  // Set the oscillator's frequency and start it
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

  oscillator.start();

  // Stop the oscillator after the specified duration
  setTimeout(() => {
    oscillator.stop();
  }, duration);
}
