const dinosaur = document.querySelector(".dinosaur");
const obstacle = document.querySelector(".obstacle");
const gameOverText = document.querySelector(".game-over");
let isJumping = false;
let isGameOver = false;

document.addEventListener("keydown", function (event) {
  if (event.key === "w" || event.key == " " || event.key == "ArrowUp" && !isJumping && !isGameOver) {
    isJumping = true;
    dinosaur.style.animation = "jump 0.8s";
    setTimeout(() => {
      dinosaur.style.animation = "none";
      isJumping = false;
    }, 800);
  }
});

function gameIsOver() {
  isGameOver = true;
  dinosaur.style.animation = "none";
  obstacle.style.animation = "none";
  gameOverText.style.display = "block";
}

function checkCollision() {
  const dinosaurRect = dinosaur.getBoundingClientRect();
  const obstacleRect = obstacle.getBoundingClientRect();
  if (
    dinosaurRect.right > obstacleRect.left &&
    dinosaurRect.left < obstacleRect.right &&
    dinosaurRect.bottom > obstacleRect.top
  ) {
    gameIsOver();
  }
}

setInterval(checkCollision, 10);
function start(){
    document.getElementById("foto").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("video").style.display = "none";
    document.getElementById("opleiding").style.display = "none";
    document.getElementById("vaardigheden").style.display = "none";
    document.getElementById("hobby's").style.display = "none";
}

function button1(){
    document.getElementById("foto").style.display = "block";
    document.getElementById("contact").style.display = "none";
    document.getElementById("video").style.display = "none";
    document.getElementById("opleiding").style.display = "none";
    document.getElementById("vaardigheden").style.display = "none";
    document.getElementById("hobby's").style.display = "none";
}
function button2(){
    document.getElementById("foto").style.display = "none";
    document.getElementById("contact").style.display = "block";
    document.getElementById("video").style.display = "none";
    document.getElementById("opleiding").style.display = "none";
    document.getElementById("vaardigheden").style.display = "none";
    document.getElementById("hobby's").style.display = "none";
}
function button3(){
    document.getElementById("foto").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("video").style.display = "block";
    document.getElementById("opleiding").style.display = "none";
    document.getElementById("vaardigheden").style.display = "none";
    document.getElementById("hobby's").style.display = "none";
}
function button4(){
    document.getElementById("foto").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("video").style.display = "none";
    document.getElementById("opleiding").style.display = "block";
    document.getElementById("vaardigheden").style.display = "none";
    document.getElementById("hobby's").style.display = "none";
}
function button5(){
    document.getElementById("foto").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("video").style.display = "none";
    document.getElementById("opleiding").style.display = "none";
    document.getElementById("vaardigheden").style.display = "block";
    document.getElementById("hobby's").style.display = "none";
}
function button6(){
    document.getElementById("foto").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("video").style.display = "none";
    document.getElementById("opleiding").style.display = "none";
    document.getElementById("vaardigheden").style.display = "none";
    document.getElementById("hobby's").style.display = "block";
}