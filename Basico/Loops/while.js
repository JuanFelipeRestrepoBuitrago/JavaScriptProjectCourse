var students = ["John", "Jane", "Mary", "Mike"];

function greetStudents(student) {
    console.log(`Hi, ${student}`);
}

while (students.length > 0) {
    var student = students.shift();
    greetStudents(student);
}

students = ["John", "Jane", "Mary", "Mike"];
console.log("-----");

do {
    var student = students.shift();
    greetStudents(student);
} while (students.length > 0);