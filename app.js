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
// dit geeft de ID's aan voor de html elementen
let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");

// dit houd de score bij van de game
let jumping = 0;
let counter = 0;

// dit zorgt ervoor dat er op een willekeurige positie een gat komt
hole.addEventListener('animationiteration', () => {
    let random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});
//voert een functie uit en verplaats het rondje naar beneden als je niet springt 
setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px";
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(500-characterTop);
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game over. Score: "+(counter-1));
        character.style.top = 100 + "px";
        counter=0;
    }
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function(){
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}