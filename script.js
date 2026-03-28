function playgame(playerchoice) {
    const choice = ['Rock' , 'Paper' ,'Scissors']
    document.getElementById("player-choice").innerText = `Your choice: ${playerchoice}`;
    document.getElementById("computer-choice").innerText = "Computer is thinking... 🤔";
            document.getElementById("result").innerText = "";
    setTimeout(() => {
        const computerchoice =choice [Math.floor(Math.random ()* choice.length)];
        document.getElementById("computer-choice").innerText = `Computer's  choice: ${computerchoice}`;
        let result = "";
        if(playerchoice===computerchoice){
            result = "it's a tie";
        }
        else if((playerchoice==='Rock' && playerchoice==="Scissors")||
            (playerchoice==='Paper' && playerchoice==="Rock")||
        (playerchoice==='Scissors' && playerchoice==="Paper")){
            result = "You R Win";

        }
        else {
            result = "Computer Wins! ";
        }
        document.getElementById("result").innerText = `Result: ${result}`;
    }, 1000);
}