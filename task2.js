//Задача №2: Конвертер температуры
//Создайте функцию celsiusToFahrenheit(celsius), которая принимает температуру в градусах Цельсия и возвращает ее эквивалент в градусах Фаренгейта. Формула: (C * 9/5) + 32.

function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32; //Внутри функции происходит вычисление температуры в градусах Фаренгейта.
    return fahrenheit; // Этот оператор возвращает значение fahrenheit из функции
  }

//var celsius = 25;
//var fahrenheit = celsiusToFahrenheit(celsius);
//console.log("Temperature in Fahrenheit:", fahrenheit);