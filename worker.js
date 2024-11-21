// worker.js

// Function to get the current time
function getCurrentTime() {
    return new Date().toLocaleTimeString();
  }
  
  // Send the current time every 4 minutes (240,000 milliseconds)
  setInterval(() => {
    const currentTime = getCurrentTime();
    postMessage(currentTime); // Send the current time to the main script
  }, 240000);
  