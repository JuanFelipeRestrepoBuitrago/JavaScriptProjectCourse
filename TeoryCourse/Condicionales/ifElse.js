if (true) {
    console.log("Hello");
} else {
    console.log("World");
}

if (process.argv[2]) {
    var edad = Number(process.argv[2]);
} else {
    var edad = 18
}

if (edad === 18) {
    console.log("You can vote, it will be your first voting");
} else if (edad > 18) {
    console.log("You can vote again");
} else {
    console.log("You can't vote");
}

if (process.argv[3]) {
    var number = Number(process.argv[3]);
} else {
    var number = 1
}
var result = number === 1 ? "I'm a one" : "I'm not a one"
console.log(result)

