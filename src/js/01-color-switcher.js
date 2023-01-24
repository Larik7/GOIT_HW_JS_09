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
  startBtn.toggleAttribute('disabled');
  stopBtn.toggleAttribute('disabled');
}

function onStart() {
  changeBodyBgColor();
  timerId = setInterval(changeBodyBgColor, 1000);
  switchButtonsDisabled();
}

function onStop() {
  if (timerId) {
    clearInterval(timerId);
    switchButtonsDisabled();
  }
}

function doTask() {

  if (!startBtn || !stopBtn) {
    console.log('Error: invalid markup!');
    return;
  }

  startBtn.addEventListener('click', onStart);
  stopBtn.addEventListener('click', onStop);
  
  stopBtn.toggleAttribute('disabled', true);
}

doTask();