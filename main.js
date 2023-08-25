let showWinnerDiv = document.getElementById("show-winner"); 
let showHeroesBttn = document.getElementById("show-heroes-bttn");
let showHeroesContainer = document.getElementById("heroes-container");
let startFightBttn = document.getElementById("start-fight-bttn");
let showFighters = document.getElementById("show-fighters");
let startNewFight = document.getElementById("start-over");
let winnersAvatarsContainer = document.getElementById("winnerAvatarContainer");

showWinnerDiv.innerHTML = epicFight.findWinner();

showHeroesBttn.addEventListener("click", showHeroesFunc); //la click pe elementul showHeroesContainershowHeroesBttn vreau sa imi apeleze functia
startFightBttn.addEventListener("click", startFightFunc);
startNewFight.addEventListener("click", startAgainFunc);

function showHeroesFunc() {
    showHeroesContainer.classList.add("d-none");
    showHeroesBttn.classList.add("d-none");
    startFightBttn.classList.add("d-block");
    showFighters.classList.add("d-flex");
}

function startFightFunc() {
    startFightBttn.classList.remove("d-block");
    showWinnerDiv.classList.add("d-flex");
    showFighters.classList.remove("d-flex");
    startNewFight.classList.add("d-block");
    winnersAvatarsContainer.classList.add("d-flex");
}

function startAgainFunc() {
    location.reload();
}



