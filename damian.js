// dit geeft de ID's aan voor de html elementen
let blockdamian = document.getElementById("blockdamian");
let holedamian = document.getElementById("holedamian");
let characterdamian = document.getElementById("characterdamian");

// dit houd de score bij van de game
let jumping = 0;
let counter = 0;

// dit zorgt ervoor dat er op een willekeurige positie een gat komt
holedamian.addEventListener('animationiteration', () => {
    let random = -((Math.random()*300)+150);
    holedamian.style.top = random + "px";
    counter++;
});
//voert een functie uit en verplaats het rondje naar beneden als je niet springt 
setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(characterdamian).getPropertyValue("top"));
    if(jumping==0){
        characterdamian.style.top = (characterTop+3)+"px";
    }
    let blockLeft = parseInt(window.getComputedStyle(blockdamian).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(holedamian).getPropertyValue("top"));
    let cTop = -(500-characterTop);
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game over. Score: "+(counter-1));
        characterdamian.style.top = 100 + "px";
        counter=0;
    }
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function(){
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            characterdamain.style.top = (characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}