// main.js

// Check if the browser supports Workers
if (window.Worker) {
    // Create a new worker
    const worker = new Worker('worker.js');
  
    // Function to handle messages from the worker
    worker.onmessage = function(event) {
      const currentTime = event.data;
  
      // Example calculation: Log the current time and a sample calculation
      const calculatedValue = `Received at ${currentTime} - Calculated Value: ${Date.now() / 1000}`;
      console.log(calculatedValue);
    };
  
    // Log an initial message to indicate the worker is running
    console.log('Worker started. Will log data every 4 minutes...');
  } else {
    console.log('Your browser does not support Web Workers.');
  }
  