
let student1 = {
    name: "Reshma Saujani",
    attendance: 90,
    examScore: 65,
    hasPassed: false
};

let student2 = {
    name: "Lisa Su",
    attendance: 86,
    examScore: 75,
    hasPassed: false
};

let student3 = {
    name: "Susan Wojcicki",
    attendance: 95,
    examScore: 55,
    hasPassed: false
};

// Write a function which takes a student Object as an input parameter
// If attendance is equal or greater than 90 AND exam score is above 60,
// set hasPassed to true and return the String 
// "Student " + name + " has passed"
// Otherwise return the String "Student " + name + " has failed"

function passFail (student){
    let result = "Student " + student.name + " has failed"
    if (student.attendance >= 90 && student.examScore > 60){
        result = "Student " + student.name + " has passed"
        student.hasPassed = true
    }
    return result
}

// Call the function for each student and console.log the results

console.log(passFail(student1))
console.log(passFail(student2))
console.log(passFail(student3))
console.log(student1.hasPassed)