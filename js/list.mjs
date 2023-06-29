const url = 'json/lists.json';
let theOptions = [];
let theList = [];


export async function getListData(url){
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.grade1);
    return data.grade1;
}


// Dynamically add a dropdown box with spelling pattern options
export async function displayDropdown() {
    theOptions = await getListData('json/lists.json');

    var newSelect = document.createElement("select");
    newSelect.name = "currPattern";
    newSelect.id = "currPattern";
    
    for (const val of theOptions)
    {
        let op = (val.spellingPattern);
        var newOption = document.createElement("option");
        newOption.value = op;
        newOption.text = op;
        newSelect.appendChild(newOption);
    }

    var newLabel = document.createElement("label");
    newLabel.innerHTML = "Choose a spelling pattern: ";
    newLabel.htmlFor = "currPattern";

    document.getElementById("patternOptions").appendChild(newSelect); 

}

export function getList() {
    let pattern = document.getElementById("currPattern").value;

    for (const object of theOptions) {
        if (object.spellingPattern == pattern) {
            return object;
        }
    }

}


export function getWordInfo(num, list) {

    let wordInfo = [];
    switch (num) {
        case 0:
            wordInfo = list.word1;
            break;
        case 1:
            wordInfo = list.word2; 
            break;
        case 2:
            wordInfo = list.word3;
            break;           
        case 3:
            wordInfo = list.word4;
            break;
        case 4:
            wordInfo = list.word5;    
    }

    return wordInfo;  
}



function setGameBoard () {
    document.getElementById("icon-img").src = clue;
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
    }
}