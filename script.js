const textInput = document.getElementById("text-input");
const timeDisplay = document.getElementById("time");
const wordCountDisplay = document.getElementById("word-count");
const resultDisplay = document.getElementById("result");
const startBtn = document.getElementById("start-btn");

let timeLeft = 30;
let timer = null;

function countWords(text) {
  return text.trim().split(/\s+/).filter(word => word !== "").length;
}

function updateWordCount() {
  const words = countWords(textInput.value);
  wordCountDisplay.textContent = words;
}

function endTest() {
  clearInterval(timer);
  textInput.disabled = true;
  const wordsTyped = countWords(textInput.value);
  resultDisplay.textContent = `⏱️ Time's up! You typed ${wordsTyped} words.`;
  startBtn.disabled = false;
  startBtn.textContent = "Restart";
}

function startTest() {
  textInput.value = "";
  textInput.disabled = false;
  textInput.focus();
  timeLeft = 30;
  timeDisplay.textContent = timeLeft;
  wordCountDisplay.textContent = 0;
  resultDisplay.textContent = "";
  startBtn.disabled = true;

  timer = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
    updateWordCount();

    if (timeLeft <= 0) {
      endTest();
    }
  }, 1000);
}

startBtn.addEventListener("click", startTest);
textInput.addEventListener("input", updateWordCount);
