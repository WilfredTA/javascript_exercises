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
    An exams property which is an array of objects, showing the class 
    average, minimum, and maximum for each exam.
    
    
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

var examWeight = 0.65;
var exerciseWeight = 0.35;

function generateClassRecord(scores) {
  var finalReport = {};
  finalReport['studentGrades'] = calculateFinalAverageGrades(scores);
  finalReport['exams'] = listExamMetrics(scores);
  return finalReport;
};

// Calculate final average grades and dependent functions

  /* Gets average exam, average exercise, then returns final grade
     using grade weights and matching grade letter */
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

  /* Given an array of numbers (grades) returns the average of those numbers */
function calculateAverageGrade(gradeList) {
  var sum = gradeList.reduce(function(total, grade) {
    return total += grade;
  });
  
  return sum / gradeList.length;
};

  /* Given two grades, uses grade weights to determine the final numeric      
     grade for the class. Also uses final numeric grade to determine          
     letter grade. Returns a string with the final numeric and letter grade */
function calculateFinalGrade(examAverage, exerciseAverage) {
  var grade = Math.round(examAverage * examWeight + exerciseAverage * exerciseWeight);
  var letter = findLetterGrade(grade);
  return String(grade) + ' ' + letter;
};


  /* Given a number (final grade), calculates the corresponding letter grade */
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


  /* First, extracts all exam grades from student scores object. Then,        
     calculates the maximum exam grade for each exam, the minimum exam        
     grade for each exam, and the average exam grade for each exam */
function listExamMetrics(scores) {
  var examScores = getExamList(scores);
  var examMetrics = getExamMetrics(examScores);
  return examMetrics;
};


  /* First, gets a list of student exams. This is a two dimensional            
     array, where each sub array represents the exam grades of each            
     student. Each element in the sub array is a grade for a different       
     exam. Returns the result of re-organizing the list so that exam          
     grades are grouped by exam, not by student. I.e., each sub array of      
     the result represents all the grades for a single exam, rather than      
     all the grades for a single student */
function getExamList(scores) {
  var examsByStudent = [];
  
  Object.keys(scores).forEach(function(key) {
    var exams = scores[key].scores.exams;
    examsByStudent.push(exams);
  });
  
  return organizeExamsByExamNumber(examsByStudent);
};

  /* This is the function that actually reorganizes the grades according      
     to the above description. Not a scalable solution, since the function
     has a time complexity of O(N^2) */
function organizeExamsByExamNumber(listOfStudentExams) {
  
  return listOfStudentExams[0].map(function(examGrade, index) {
    return listOfStudentExams.map(function(singleStudentGrades) {
      return singleStudentGrades[index];
      
    }); 
  });
};
  
  /*  Input is the array containing sub arrays, where each sub array is a 
      collection of grades for a single exam. Returns an array of               
      objects, where each object is the minimum, maximum, and average of       
      the grades for each exam */
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

  /* Given an array of numbers, returns the minimum number in array */
function getMinimum(array) {
  return array.reduce(function(min, compared) {
    return Math.min(min, compared);
  });
};
  /* Given an array of numbers, returns the maximum number in array */
function getMaximum(array) {
  return array.reduce(function(max, compared) {
    return Math.max(max, compared);
  });
};



  /* Data that is passed into the generateClassRecord() function */
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
