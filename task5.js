//
//

function calculateDistance(x1, y1, x2, y2) {
    var deltaX = x2 - x1;
    var deltaY = y2 - y1;
    var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    return distance;
  }
  
//var x1 = 3;
//var y1 = 12;
//var x2 = 7;
//var y2 = 29;
//var distance = calculateDistance(x1, y1, x2, y2);
//console.log("Distance between the points:", distance);