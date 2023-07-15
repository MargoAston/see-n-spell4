import { getList, getWordInfo, displayDropdown } from "./list.mjs";

import { startGame } from "./utils.mjs";

var round = 1;
var targetPtrn = "";
var list = [];
var score = 0;
var wordNum = 0;
var currOnset = "";
var currRime = "";
var currImg = "";


 

export function setGameBoard () {
    console.log("in setGameBoard");
    //Do not display spelling pattern dropdown box
    var dropdownBox = document.querySelector("#patternOptions");
    dropdownBox.style.display = "none";

    //Do not display the start button
    var startBtn = document.querySelector("#start");
    startBtn.style.display = "none";

    //Display letter input boxes
    document.querySelector("#guess").style.display = "flex";

    // Get the list
    list = getList();

    // Display current spelling pattern
    targetPtrn = list.spellingPattern;
    console.log("The pattern " + targetPtrn);
    const ptrn = document.querySelector("#displayPattern");
    ptrn.innerText = targetPtrn;
    ptrn.style.display = "block";

    displayWord();

    // Display score progress bar
    document.querySelector("#chart").style.display = "block";

    displayScore();
}

export function displayWord(){
    
    //get the word
    let word = getWordInfo(wordNum, list);
    let currWord = word[0];
    currOnset = word[1];
    currRime = word[2];
    currImg = word[3];

    //display the picture clue
    document.querySelector("#picClue").src = "public/" + currImg;

    

    //Display the consonant clues
    if (round == 1) {
        document.querySelector("#target").focus()
        document.getElementById("onset").value = currOnset;
        const pattern = document.getElementById("target");
        pattern.value = "";
       

        //Add event listener to check spelling and update score
        document.getElementById("rime").value = currRime;
        pattern.addEventListener("change", updateScore);
    }  
    else if (round == 2) {
        //remove message
        document.querySelector("#message").style.display = "none";
        //display letter clues
        document.querySelector("#guess").style.display = "flex";


        let inputOnset = document.getElementById("onset");
        inputOnset.focus();

        document.querySelector("#target").tabIndex = "-1";

        inputOnset.addEventListener("keypress", changeFocusEnter);
        
        document.getElementById("target").value = targetPtrn;
       
       
        let guess = document.querySelector("#rime");
        guess.addEventListener("change", updateScore);
        
    }
    else if (round == 3) {
        //remove message
        document.querySelector("#message").style.display = "none";
        //display letter clues
        document.querySelector("#guess").style.display = "flex";

        let inputOnset2 = document.getElementById("onset");
        inputOnset2.focus();

        inputOnset2.removeEventListener("keypress", changeFocusEnter);
        inputOnset2.addEventListener("keypress", changeFocusEnter2);

        let inputTarget = document.querySelector("#target");
        inputTarget.removeEventListener("change", updateScore);
        inputTarget.addEventListener("keypress", changeFocusEnter);
        

        document.querySelector("#target").tabIndex = "0";
        document.querySelector("#rime").tabIndex = "0";

    }
}

//Check spelling and update score
function updateScore(event) {
    console.log("in updateScore");
    //get user inputs
    let guessOnset = document.querySelector("#onset").value;
    let guessPattern = document.querySelector("#target").value;
    let guessRime = document.querySelector("#rime").value;

    if(round == 1) { 
        if (guessPattern == targetPtrn) {
            score ++;
        }
    }
    else if (round == 2) {
        if (guessOnset == currOnset && guessRime == currRime) {
            score ++;
        }
    }
    else if ( round == 3) {
        if (guessOnset == currOnset && guessPattern == targetPtrn && guessRime == currRime){
            score ++;
        }
    }

    displayScore();
    nextWord();
}

function nextWord() {
    wordNum++;
    clearBoard();
    if (wordNum >4) {
        round ++;
        
        document.querySelector("#picClue").src = "public/images/flowershappyfaces.png";

        document.querySelector("#guess").style.display = "none";
        
        if (round > 3 ) {
            gameOver();
        }
        else  {
            //Turn off message
            document.querySelector("#message").style.display = "block";
            //Turn on button
            document.querySelector("#roundOver").value = "Play Round " + round;
        }
        
        wordNum = 0; 
    }
    else {
        displayWord();
    }
}

function clearBoard() {
    //Clear onset box
    document.querySelector("#onset").value = "";
    //Clear target spelling pattern box
    document.querySelector("#target").value = "";
    //Clear rime box
    document.querySelector("#rime").value = ""; 
    
}

function changeFocusEnter(event) {
    if (event.key === "Enter"){
        document.querySelector("#rime").focus();
    }
}

function changeFocusEnter2(event) {
    if (event.key === "Enter"){
        document.querySelector("#target").focus();
    }
}

function gameOver() {
    
    let message = document.querySelector("p");
    message.innerText = "🌟Game Over🌟";

    document.querySelector("#message").style.display = "none";

    let btnOn = document.querySelector("#newGameBtn");
    btnOn.style.display = "block";
}

export function resetGame() {
    
    round = 1;
    targetPtrn = "";
    list = [];
    score = 0;
    wordNum = 0;
    currOnset = "";
    currRime = "";
    currImg = "";

    document.querySelector("p").style.display = "none";

    var dropdownBox = document.querySelector("#patternOptions");
    dropdownBox.style.display = "flex";
    

    let startImg = document.querySelector("#picClue");
    startImg.src = "public/images/quinn.png";
    startImg.alt = "Quinn";

    document.querySelector("#newGameBtn").style.display = "none";
    document.querySelector("#start").style.display = "block";
}

/******* quickChart api ********/
function displayScore() {
const chartObj =  "https://quickchart.io/chart?height=20&width=200&c={type:'progressBar',data:{ datasets:[{data:[__PLACEHOLDER__],backgroundColor:['orange']},{data:[15],backgroundColor:['navy']}]}}";
  
let result = chartObj.replace("__PLACEHOLDER__", score);
 
let myChart = document.querySelector("#chart");
myChart.src = result;
}