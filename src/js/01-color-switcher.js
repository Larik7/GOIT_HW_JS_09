const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyBgColor() {
  document.body.style.backgroundColor = getRandomHexColor();  
}

function switchButtonsDisabled() {
  btnStart.toggleAttribute('disabled');
  btnStop.toggleAttribute('disabled');
}

startBtn.addEventListener("click", () => {     
    timerId = setInterval(changeBodyBgColor, 1000);
    switchButtonsDisabled();
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  switchButtonsDisabled();
});
