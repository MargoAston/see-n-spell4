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


