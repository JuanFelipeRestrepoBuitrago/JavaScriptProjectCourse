const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Options:\nRock(1)\nPaper(2)\nScissors(3)\nEnter Your Election: ", (userElection) => {
    userElection = Number(userElection);
    var computerElection = Math.floor(Math.random() * 3) + 1;

    function rockPaperScissors(user, cpu) {
        if (user === cpu) {
            return "It's a tie";
        } else if ((user === 1 && cpu === 2) || (user === 2 && cpu === 3) || (user === 3 && cpu === 1)) {
            return "You lose";
        } else if ((user === 1 && cpu === 3) || (user === 2 && cpu === 1) || (user === 3 && cpu === 2)) {
            return "You win";
        } else {
            return "Select a Valid Option"
        }
    }

    console.log(rockPaperScissors(userElection, computerElection));

    readline.close();
});

