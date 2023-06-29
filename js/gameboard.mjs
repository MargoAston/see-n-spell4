import { getList, getWordInfo } from "./list.mjs";

var round = 1


 

export function setGameBoard () {
    //Do not display spelling pattern dropdown box
    var dropdownBox = document.querySelector("#patternOptions");
    dropdownBox.style.display = "none";

    //Do not display the start button
    var startBtn = document.querySelector("#startBtn");
    startBtn.style.display = "none";

    //Display letter input boxes
    document.querySelector("#guess").style.display = "flex";

    // Get the list
    let list = getList();

    // Display current spelling pattern
    var targetPtrn = document.createElement("p");
    targetPtrn.innerHTML = list.spellingPattern;
    document.querySelector("#targetPattern").appendChild(targetPtrn);


    //get the word
    let word = getWordInfo(0, list);
    let currWord = word[0];
    let currOnset = word[1];
    let currRime = word[2];
    let currImg = word[3];

    //display the picture clue
    document.querySelector("#picClue").src = "public/" + currImg;

    

    //Display the consonant clues
    if (round == 1) {
        document.getElementById("onset").value = currOnset;
        document.getElementById("spellingPattern").value = "";

        //Add background color to onset box
        document.getElementById("spellingPattern").style.backgroundColor = "#f5DEB3";

        document.getElementById("rime").value = currRime;

/*
    if (round == 1) {
        aWord.textContent = currWord;
    document.getElementById("onset").focus();
        document.getElementById("onset").value = currOnset;
        document.getElementById("rime").value = currRime;
        document.getElementById("targetPattern").style.backgroundColor = "#f5DEB3";
    
    } */


    

    }   

   /* document.getElementById("icon-img").src = clue;
    const aWord = document.querySelector("#wordCheck");
    aWord.textContent = currWord;
    
    if (gamePhase == 1) {
        aWord.textContent = currWord;
    document.getElementById("onset").focus();
        document.getElementById("onset").value = currOnset;
        document.getElementById("rime").value = currRime;
        document.getElementById("targetPattern").style.backgroundColor = "#f5DEB3";
    
    } 
    else if (gamePhase == 2) {
        
        document.getElementById("onset").focus();
        document.getElementById("targetPattern").value = pattern;
        const phaseupdate = document.querySelector("#phaseNum");
        phaseupdate.textContent = "Step 2"; 

        // Hide original input boxes
       if (currOnset != "") {
        document.getElementById("onset").style.backgroundColor = "#f5DEB3";
       }
       if (currRime != "") {
        document.getElementById("rime").style.backgroundColor = "#f5DEB3";
       }
        
    }
    else if (gamePhase == 3) {
        document.getElementById("onset").focus();
        //Set game display to phase 3
        const phaseupdate = document.querySelector("#phaseNum");
        phaseupdate.textContent = "Step 3";
        //Hide input boxes for phase 1 & 2
        const targetPatternHide = document.getElementById("targetPattern");
        targetPatternHide.style.display = 'none';
        const rimeHide = document.getElementById("rime");
        rimeHide.style.display = 'none';
        //Add background color to onset box
        document.getElementById("onset").style.backgroundColor = "#f5DEB3";
    }*/
}