 // JavaScript code for displaying current date and time
 function updateDateTime() {
    var currentDateElement = document.getElementById("currentdate");
    var currentTimeElement = document.getElementById("currenttime");

    var currentDate = new Date();
    var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateElement.innerText = currentDate.toLocaleDateString('en-US', dateOptions);

    var currentTime = currentDate.toLocaleTimeString('en-US');
    currentTimeElement.innerText = currentTime;
  }

  // Update date and time every second
  setInterval(updateDateTime, 1000);