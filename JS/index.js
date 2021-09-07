let wins1 = 0;
let lose1 = 0;
let tries1 = 0;

const handOptions = {
    "rock": "./assets/Rock.png",
    "paper": "./assets/Paper.png",
    "scissors": "./assets/Scissors.png"
}



const pickUserHand = (hand) =>{
 
    // hide hands class
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

 
    document.getElementById("userPickImage").src = handOptions[hand];


    referee(hand, pickComputerHand());


}

const pickComputerHand = () =>{
    let hands = ["rock","paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * 3)];

        document.getElementById("computerPickImage").src = handOptions[cpHand];

     return cpHand;   
    

}

const referee = (userHand, cpHand) =>{
    if(userHand == "paper"){
        if(cpHand=="scissors"){
            setDecision("YOU LOSE!");
            lose1++;
            tries1++;
            setScore(wins1, lose1, tries1);
        }
        else if(cpHand == "rock"){
          setDecision("YOU WON!")
            wins1++;
            tries1++;
            setScore(wins1, lose1, tries1); 
        }
        else{
            setDecision("IT'S A TIE!");
            tries1++;
            setScore(wins1, lose1, tries1);
        }
    } 
     else if(userHand == "rock"){
        if(cpHand=="scissors"){
            setDecision("YOU WIN!");
            wins1++;
            tries1++;
            setScore(wins1, lose1, tries1);         
        }
        else if(cpHand == "paper"){
          setDecision("YOU LOSE!");
            lose1++;
            tries1++;
            setScore(wins1, lose1, tries1);  
        }
        else{
            setDecision("IT'S A TIE!");
            tries1++;
            setScore(wins1, lose1, tries1);
        }
    }
    
    else{
        if(cpHand=="rock"){
            setDecision("YOU LOSE!");
            lose1++;
            tries1++;
            setScore(wins1, lose1, tries1);
        }
        else if(cpHand == "paper"){
          setDecision("YOU WON!")
            wins1++;
            tries1++;
            setScore(wins1, lose1, tries1); 
        }
        else{
            setDecision("IT'S A TIE!");
            tries1++;
            setScore(wins1, lose1, tries1);
        }

    }
}

const setDecision = (decision) =>{
    document.getElementById("winOrLoseTxt").innerHTML = decision;
}

const setScore = (wins, lose, tries) =>{
    document.getElementById("scoreValueWins").innerHTML = wins;
    document.getElementById("scoreValueLose").innerHTML = lose;
    document.getElementById("scoreValueTries").innerHTML = tries;
}

const playAgain = () =>{
        let hands = document.querySelector(".hands");
    hands.style.display = "flex";

    let contest = document.querySelector(".contest");
    contest.style.display = "none";
}