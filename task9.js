//
//

function calculateAverageGrade(grades) {
    let gradeList = grades.split(",");
    let sum = 0;
    for (let i = 0; i < gradeList.length; i++) {
      sum += parseFloat(gradeList[i]);
    }
    let averageGrade = sum / gradeList.length;
    return averageGrade;
  };

//let grades = "4, 7, 6, 9, 8";
//let average = calculateAverageGrade(grades);
//console.log("Средняя оценка: " + average);