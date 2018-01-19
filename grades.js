const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
}; 

for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 90) {
       grades.A += 1;
    }
    else if (scores[i] > 80) {
        grades.B += 1;
    }
    else if (scores[i] > 70) {
    grades.C += 1;
    }
    else if (scores[i] > 60) {
    grades.D += 1;
    }
    else {
    grades.F += 1;
    }
    // switch(scores[i]) {
    //     case  scores[i] < 90:
    //         grades.A += 1;
    //         break;
            
    // }
}



// This statement console logs the number of students who got each letter grade
for (let key in grades) {
    console.log(key + ": " + grades[key]);
}

// This statement sorts the array in descending order
console.log(scores.sort(function(first, second) {       //Unclear on how this emebedded function works
    return second - first;
}));

// These statements assign the highest and lowest scores to variables max and min, respectively. Followed by a console.log
var max = Math.max.apply(null, scores)
var min = Math.min.apply(null, scores)


console.log("The highest score is " + max + ", and the lowest score is " + min);


// Still trying to get these to show the respective letter grades. Currently only the highest/lowest number of students for respective grades logs.

var currentGradeCount = 0;
for (let key in grades) {
    if (currentGradeCount < grades[key]) {
    currentGradeCount = grades[key];
    }
}

console.log(currentGradeCount);

var fewestGradeCount = 14;
for (let key in grades) {
    if (fewestGradeCount > grades[key]) {
    fewestGradeCount = grades[key];
    }
}

console.log(fewestGradeCount);