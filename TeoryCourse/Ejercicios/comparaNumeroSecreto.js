function solution (secret) {
    return secret > 5;
}

// Test
function main (){
    var data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log("Greater than 5?");
    for (var i = 1; i < data.length + 1; i++) {
        console.log(String(i) + ": " + solution(data[i - 1]));
    }
}

main();