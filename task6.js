//Задача №6: Расчет времени пути
//Создайте функцию calculateTime(distance, speed), которая принимает расстояние и скорость (в км/ч), а затем возвращает время в пути в формате ХХч. ХХм.

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