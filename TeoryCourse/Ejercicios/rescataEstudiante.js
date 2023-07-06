function solution (students, deathCount, newStudent) {
    if (deathCount == 0) {
        students.push(newStudent);
    } else if (deathCount > 0) {
        for (var i = 0; i < deathCount; i++) {
            students.pop();
        }
        students.push(newStudent);
    }

    return students;
}

// Test
function main() {
    var tests = [
        { 
            students: ["Nico", "Zule"], 
            deathCount: 0, 
            newStudent: "Santi"
        },
        {
            students: ["Juan", "Juanita", "Daniela"], 
            deathCount: 1, 
            newStudent: "Julian"
        },
        {
            students: ["Nath", "Luisa", "Noru"], 
            deathCount: 2, 
            newStudent: "Cami"
        }];

    for (let i = 0; i < tests.length; i++) {
        console.log(solution(tests[i].students, tests[i].deathCount, tests[i].newStudent));
    }
}

main();