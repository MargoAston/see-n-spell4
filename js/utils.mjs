import { setGameBoard, displayWord, resetGame } from "./gameboard.mjs";

import { getList } from "./list.mjs";

export async function renderWithTemplate(
    templateFn,
    parentElement,
    data,
    callback,
    position = "afterbegin",
    clear = true
  ) {
    if (clear) {
      parentElement.innerHTML = "";
    }
    const htmlString = await templateFn(data);
    parentElement.insertAdjacentHTML(position, htmlString);
    if (callback) {
      callback(data);
    }
}

function loadTemplate(path) {
    return async function () {
          const res = await fetch(path);
          if (res.ok) {
            const html = await res.text();
            return html;
        }
    };
}

export async function loadHeaderFooter() {
    const headerTemplateFn = await loadTemplate("../public/partials/header.html");
    const footerTemplateFn = await loadTemplate("../public/partials/footer.html");
  
    const headerEl = document.querySelector("#main-header");
    const footerEl = document.querySelector("#main-footer");
  
    await renderWithTemplate(headerTemplateFn, headerEl);
    await renderWithTemplate(footerTemplateFn, footerEl);
  
}

// Event listener  for 'start game' button
const startButton = document.getElementById("start");
startButton.addEventListener("click", startGame);

// Event listener  for 'roundOver' button
const roundNext = document.querySelector("#roundOver");
roundNext.addEventListener("click", displayWord);
roundNext.value = "Play Round";

// Event listener for 'play new game' button
const newGame = document.querySelector("#newGameBtn");
newGame.addEventListener("click", resetGame);

export function startGame(event) {
  console.log("in startGame");
    let gamePhase = 1;
    getList();
    setGameBoard();  
       
}