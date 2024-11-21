// main.js

// Check if the browser supports Workers
if (window.Worker) {
    // Create a new worker
    const worker = new Worker('worker.js');
  
    // Function to handle messages from the worker
    worker.onmessage = function(event) {
      const currentTime = event.data;
  
      // Display the current time at the top of the DOM
      const outputDiv = document.getElementById('output');
      const timeElement = document.createElement('div');
      timeElement.textContent = `Time: ${currentTime}`;
      outputDiv.insertBefore(timeElement, outputDiv.firstChild);
    };
  
    // Log an initial message to indicate the worker is running
    console.log('Worker started. Will log data every 5 seconds...');
  } else {
    console.log('Your browser does not support Web Workers.');
  }
  
  // Function to simulate CPU load based on level
  function simulateCpuLoad(level) {
    const startTime = new Date();
    const startTimestamp = startTime.toLocaleTimeString();
  
    // Display start time in the CPU status section
    const cpuStatusDiv = document.getElementById('cpu-status');
    cpuStatusDiv.innerHTML = `Start Time: ${startTimestamp}`;
  
    const duration = 1000 * level; // Increase load duration based on level
  
    // Perform a CPU-heavy task (busy loop)
    while (Date.now() - startTime < duration) {
      Math.sqrt(Math.random() * 1000000); // Random heavy calculation
    }
  
    const endTime = new Date();
    const endTimestamp = endTime.toLocaleTimeString();
    const timeDifference = ((endTime - startTime) / 1000).toFixed(2);
  
    // Update CPU status with start time, end time, and duration
    cpuStatusDiv.innerHTML = `
      Start Time: ${startTimestamp} <br>
      End Time: ${endTimestamp} <br>
      Duration: ${timeDifference} seconds
    `;
  }
  
