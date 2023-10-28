// Задача №1: Калькулятор налога на доходы
//Напишите функцию incomeTaxCalculator(income), которая принимает на вход сумму дохода и возвращает сумму налога на доходы. Пусть ставка налога составляет 15%.

function incomeTaxCalculator(income) {
    // Рассчитываем налог как 15% от суммы дохода
    var taxRate = 0.15; // 15%
    var taxAmount = income * taxRate;
    return taxAmount;
  }

//var income = 11000;
//var tax = incomeTaxCalculator(income);
//console.log("Income tax amount:", tax);