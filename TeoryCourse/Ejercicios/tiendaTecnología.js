function solution (article) {
    switch (article) {
        case "PC":
            return "I can program using JavaScript on my Computer";
        case "Smartphone":
            return "I can learn using Platzi's app on my Smartphone";
        case "Wire":
            return "There is a wire in my boot";
        default:
            return "Article not found";
    }
}

// test
function main () {
    var data = ["PC", "Smartphone", "Wire", "Laptop", "Tablet", "Smartwatch"];

    for (var i = 0; i < data.length; i++) {
        console.log(data[i] + ": " + solution(data[i]));
    }
}

main();
