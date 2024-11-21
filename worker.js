// worker.js

// Send the current time every 5 seconds (5000 milliseconds)
setInterval(() => {
  const currentTime = Date.now(); // Get the current time as a timestamp
  postMessage(currentTime); // Send the current timestamp to the main script
}, 5000);
