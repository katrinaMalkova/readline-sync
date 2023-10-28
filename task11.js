//
//

function calculateEmployeeBonus(salary, performanceRating) {
    let bonus;
    if (performanceRating > 8) {
      bonus = 0.2 * salary;
    } else {
      bonus = 0.1 * salary;
    }
    return bonus;
  };


//let salary = 5000;
//let rating = 9;
//let bonus = calculateEmployeeBonus(salary, rating);
//console.log(bonus);