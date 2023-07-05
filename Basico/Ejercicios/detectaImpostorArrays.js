function solution(secretArray) {
    if (typeof secretArray[0] == "string") {
        return true;
    } else {
        return false;
    }
}

// Test
function main() {
    values = [
        ["Huevo", "Gallina", "Vaca"],
        [1, "Gallina", "Vaca"]
    ];

    for (let i = 0; i < values.length; i++) {
        console.log(solution(values[i]));
    }
}

main();