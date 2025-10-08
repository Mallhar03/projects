console.log("Welcome to Rock-Paper-Scissor");

let userChoice = prompt("select your pick (Rock , Paper , Scissors) : ");

switch (userChoice) {
    case 'Rock' : console.log("Your pick is Rock ");
        break;
    case 'Paper' : console.log("Your pick is Paper");
        break;
    case 'Scissors' : console.log("Your pick is Scissors");
        break;
    default : console.log("Select a Valid Choice!");         
}

function matchMaking (userChoice , computerChoice){
    if(computerChoice ==  userChoice) return "Its a Draw!!!";
    else {
        switch (computerChoice) {
            case 'Rock' :
                if(computerChoice == userChoice) return "Its a Draw";
                else if(userChoice == 'Paper') return "Computer Wins";
                else if (userChoice == 'Scissors') return ("Computer Wins");
            break;

            case 'Paper' : 
                if(computerChoice == userChoice) return "Its a Draw";
                else if(userChoice == 'Rock') return "Computer Wins";
                else if (userChoice == 'Scissors') return "Users Wins";
            break;

            case 'Scissors' :
                if(computerChoice == userChoice) return "Its a Draw";
                else if(userChoice == 'Rock') return "Users Wins";
                else if (userChoice == 'Paper') return "Computer Wins";    
            break;

        }
    }
    
}

let computerChoice = Math.random();

function computerPick(computerChoice) {
    if(computerChoice <= 0.33) return "Rock";
    else if(computerChoice <= 0.66) return "Paper";
    else return "Scissors";

}

computerChoice = computerPick();

let result = matchMaking(userChoice , computerChoice);

console.log("Winner is "+result);

