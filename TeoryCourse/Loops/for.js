var students = ["John", "Jane", "Mary", "Mike"];

function greetStudents(student) {
  console.log(`Hi, ${student}`);
}

for (var i = 0; i < students.length; i++) {
  greetStudents(students[i]);
}
console.log("-----");

for (var student of students) {
  greetStudents(student);
}