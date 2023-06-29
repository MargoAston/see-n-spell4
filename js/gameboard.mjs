

 let clue = "public/images/bat.png"

export function setGameBoard () {
   
   console.log("in setgameboard");

   var dropdownBox = document.querySelector("#patternOptions");
    dropdownBox.style.display = "none";

    var targetPtrn = document.createElement("p");

    targetPtrn.innerHTML = "You are working on short a";

    document.querySelector("#targetPattern").appendChild(targetPtrn);

    let clueImg = document.querySelector("#picClue");
    clueImg.src = clue;

    var startBtn = document.querySelector("#startBtn");
    startBtn.style.display = "none";

    var letterClue = document.createElement("p");
    letterClue.innerText = "_ _ _";
    document.querySelector("#letterClues").appendChild(letterClue);

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