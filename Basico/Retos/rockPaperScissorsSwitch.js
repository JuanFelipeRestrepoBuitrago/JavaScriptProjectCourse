const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Options:\nRock(1)\nPaper(2)\nScissors(3)\nEnter Your Election: ", (userElection) => {
    userElection = Number(userElection);
    var computerElection = Math.floor(Math.random() * 3) + 1;

    function rockPaperScissors(user, cpu) {
        if (!(user >= 1 && user <= 3)){
            return "Select a Valid Option"
        }
        switch (user, cpu) {
            case 1, 2:
                return "You lose";
            case 2, 3:
                return "You lose";
            case 3, 1:
                return "You lose";
            case 1, 3:
                return "You win";
            case 2, 1:
                return "You win";
            case 3, 2:
                return "You win";
            default:
                return "It's a tie";
        }
    }

    console.log(rockPaperScissors(userElection, computerElection));

    readline.close();
});
