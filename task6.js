//
//

function calculateTime(distance, speed) {
    var timeInHours = distance / speed;
    var hours = Math.floor(timeInHours);
    var minutes = Math.round((timeInHours - hours) * 60);
    
    var timeString = hours + "h " + minutes + "m";
    return timeString;
  }
  
//var distance = 200; 
// km
//var speed = 60; 
// km/h
//var travelTime = calculateTime(distance, speed);
//console.log("Travel time:", travelTime);