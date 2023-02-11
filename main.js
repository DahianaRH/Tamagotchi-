const avatar = document.querySelector("#avatar");
const foodBar = document.querySelector("#progress-food");
const sleepBar = document.querySelector("#progress-sleep");
const lifeBar = document.querySelector("#progress-life");
const feedButton = document.querySelector("#feed-button");
const sleepButton = document.querySelector("#sleep-button");
const gameOver = document.querySelector("#game-over");
const startButton = document.querySelector("#start-button");

let foodLevel = 100;
let sleepLevel = 100;
let lifeLevel = 100;
let isAlive = true;

const updateBars = () => {
  foodBar.style.width = `${foodLevel}%`;
  sleepBar.style.width = `${sleepLevel}%`;
  lifeLevel = (foodLevel + sleepLevel) / 2;
  lifeBar.style.width = `${lifeLevel}%`;
  
  if (foodLevel >= 70) {
    foodBar.style.backgroundColor = "green";
  }
  if (foodLevel < 70) {
    foodBar.style.backgroundColor = "yellow";
  }
  if (foodLevel < 50) {
    foodBar.style.backgroundColor = "orange";
  }
  if (foodLevel < 20) {
    foodBar.style.backgroundColor = "red";
  }


  if (sleepLevel >= 70) {
    sleepBar.style.backgroundColor = "green";
  }
  if (sleepLevel < 70) {
    sleepBar.style.backgroundColor = "yellow";
  }
  if (sleepLevel < 50) {
    sleepBar.style.backgroundColor = "orange";
  }
  if (sleepLevel < 20) {
    sleepBar.style.backgroundColor = "red";
  }


  if (lifeLevel >= 70) {
    lifeBar.style.backgroundColor = "green";
    avatar.style.backgroundColor = "#e2ade2"
    avatar.className = "far fa-laugh-beam";
  }
  if (lifeLevel < 70) {
    lifeBar.style.backgroundColor = "yellow";
    avatar.style.backgroundColor = "#e2ade2"
    avatar.className = "far fa-face-smile";
  }
  if (lifeLevel < 50) {
    lifeBar.style.backgroundColor = "orange";
    avatar.style.backgroundColor = "#cf89cf"
    avatar.className = "far fa-meh";

  }
  if (lifeLevel < 20) {
    lifeBar.style.backgroundColor = "red";
    avatar.style.backgroundColor = "#8e6396";
    avatar.className = "far fa-face-frown";
  }

  if (lifeLevel < 3) {
    lifeBar.style.backgroundColor = "red";
    avatar.style.backgroundColor = "#61486d";
    avatar.className = "far fa-dizzy";
  }

  if (lifeLevel === 1) {
    isAlive = false;
    gameOver.style.display = "flex";
  }
};

const decreaseBars = () => {
  if (isAlive) {
    foodLevel -= 1;
    sleepLevel -= 1;
    updateBars();
  }
};

const feedTamagotchi = () => {
  if (foodLevel <100) {
    foodLevel += 1;
    updateBars();
  }
};

const sleepTamagotchi = () => {
    if (sleepLevel < 100) {
        sleepLevel += 1;
        updateBars();
      }
};

feedButton.addEventListener("click", feedTamagotchi);
sleepButton.addEventListener("click", sleepTamagotchi);
startButton.addEventListener("click", () => {
  foodLevel = 100;
  sleepLevel = 100;
  lifeLevel = 100;
  isAlive = true;
  gameOver.style.display = "none";
  foodBar.style.backgroundColor = "green";
  sleepBar.style.backgroundColor = "green";
  lifeBar.style.backgroundColor = "green";
  avatar.className = "far fa-laugh-beam";
  avatar.style.backgroundColor = "#8786fb"
  updateBars();
});

setInterval(decreaseBars, 1000);
updateBars();
