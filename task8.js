//
//

function calculateBalance(incomes, expenses) {
    // общая сумма дохода
    const totalIncome = incomes.reduce((sum, income) => sum + income, 0);
    
    // общая сумма расхода
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense, 0);
    
    // расчет баланса
    const balance = totalIncome - totalExpenses;
    
    // возврат баланса
    return balance;
  }
  
//const incomes = [1000, 2000, 1500];
//const expenses = [500, 1000, 750];
//const balance = calculateBalance(incomes, expenses);
//console.log(balance); 
// Output: 2500