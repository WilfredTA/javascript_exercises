/* 
  Write a function whose input is a studentScores object (below) and whose output is a summary object
  
  The summary object looks like this:
  
  { studentGrades: ['100 (A)', '80 (C)'],
    exams: [
      { average: 75.6, minimum: 50, maximum: 100 }
      ]
  }
  
  The summary object has: 
    A studentGrades property which is an array of grades, one for each student
    An exams property which is an array of objects, showing the class average, minimum, and maximum for each exam.
    
    
    Exams are worth 65% of final grade
    Exercises are worth 35% of final grade
    
    Steps to computing a student's final grade:
      1. Compute average exam score
      2. Compute total exercise score
      3. Apply weights to determine final percent grade
      4. Round grade to nearest integer
      5. Lookup the letter grade in a table
      6. Combine the percent grade and letter grade


*/

var examWeight = .65;
var exerciseWeight = .35;

function generateClassRecord(scores) {
 var finalReport = {};
 finalReport['studentGrades'] = calculateFinalAverageGrades(scores);
 finalReport['exams'] = listExamMetrics(scores);
  return finalReport;
};

// Calculate final average grades and dependent functions
function calculateFinalAverageGrades(scores) {
  var averageGrades = [];
 Object.keys(scores).forEach(function(key) {
   var examAverage = calculateAverageGrade(scores[key].scores.exams);
   var exerciseAverage = calculateAverageGrade(scores[key].scores.exams);
   var finalGrade = calculateFinalGrade(examAverage, exerciseAverage);
   averageGrades.push(finalGrade);
 });
  
  return averageGrades;
};

function calculateAverageGrade(gradeList) {
  var sum = gradeList.reduce(function(total, grade) {
    return total += grade;
  });
  
  return sum / gradeList.length;
};

function calculateFinalGrade(examAverage, exerciseAverage) {
  var grade = Math.round(examAverage * examWeight + exerciseAverage * exerciseWeight);
  
  var letter = findLetterGrade(grade);
  
  return String(grade) + ' ' + letter;
};

function findLetterGrade(grade) {
  if (grade <= 59) {
    return '(F)';
  } else if (60 <= grade && grade <= 68) {
    return '(E)';
  } else if (69 <= grade && grade <= 76) {
    return '(D)';
  } else if (77 <= grade && grade <= 84) {
    return '(C)';
  } else if (85 <= grade && grade <= 92) {
    return '(B)';
  } else {
    return '(A)';
  };
};


// Calculate exam grades and dependent functions

function listExamMetrics(scores) {
  var examScores = getExamList(scores);
  var examMetrics = getExamMetrics(examScores);
  return examMetrics;
};

function getExamList(scores) {
  var examsByStudent = [];
  
  Object.keys(scores).forEach(function(key) {
    var exams = scores[key].scores.exams;
    examsByStudent.push(exams);
  });
  
 return organizeExamsByExamNumber(examsByStudent);
};

function organizeExamsByExamNumber(listOfStudentExams) {
  
 return listOfStudentExams[0].map(function(examGrade, index) {
    return listOfStudentExams.map(function(singleStudentGrades) {
      return singleStudentGrades[index];
      
    }); 
  });
};
  
function getExamMetrics(scoreSets) {
  var min;
  var max;
  var average;
 return scoreSets.map(function(subset) {
          min = getMinimum(subset);
          max = getMaximum(subset);
          average = calculateAverageGrade(subset);
          return { average: average, min: min, max: max};
      });
};

function getMinimum(array) {
  return array.reduce(function(min, compared) {
    return Math.min(min, compared);
  });
};

function getMaximum(array) {
  return array.reduce(function(max, compared) {
    return Math.max(max, compared);
  });
};



var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecord(studentScores));
