if (process.argv[2]) {
    var number = Number(process.argv[2]);
} else {
    var number = 1;
}

switch (number) {
    case 1:
        console.log("I'm a one!");
        break;
    case 2:
        console.log("I'm a two!");
        break;
    case 10:
        console.log("I'm a ten!");
        break;
    case 100:
        console.log("I'm a hundred!");
        break;
    default:
        console.log("I'm a nothing!");
        break;
}
