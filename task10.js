//
//

function generateRandomEquation() {
    const a = Math.floor(Math.random() * 10) + 1; // случайное число от 1 до 10
    const b = Math.floor(Math.random() * 10) + 1; // случайное число от 1 до 10
    const c = Math.floor(Math.random() * 20) + 1; // случайное число от 1 до 20
    
    // строка уравнение
    const equation = ${a}x + ${b} = ${c};
    
    // возврат уравнения
    return equation;
  }
  
//const randomEquation = generateRandomEquation();
//console.log(randomEquation)