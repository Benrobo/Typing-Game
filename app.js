
// get the dom
let timer = document.querySelector('#timmer');
let typeTxt = document.querySelector("#randtxt");
let typeinp = document.querySelector(".inp");
let gameover = document.querySelector(".gameover");
let gametxt = document.querySelector(".game-txt");
// scoreboard
let speed = document.querySelector('#speed');
let points = document.querySelector("#ppt");

let time = 10;
let isPlaying;
let score = 0;
let speedval = 10;
// buttons
let startbtn = document.querySelector(".start");
let resetbtn = document.querySelector(".reset");

// start game
// startbtn.addEventListener('click', startGame)
window.addEventListener("DOMContentLoaded", startGame);

function startGame(){
    startTimer();
    genTxt();
    setInterval(startTimer, 1000);
    setInterval(checkGameStatus, 50);
}

// start timer

function startTimer(){

    if (time > 0) {
        time--;
    }
    else if(time === 0){
        isPlaying = false;
    }
    timer.innerHTML = time;
}



function genTxt(){
    let randtxt = ["welcome", "ben", "uppercase", "before"];

    let randword = Math.floor(Math.random() * randtxt.length - 1);
    typeTxt.innerHTML = randtxt[randword];
    // var gen = setInterval(() => {
    // },3000);
    checkGameStatus()
}

typeinp.addEventListener("input", matchWord);
function matchWord(){
  if (wordMatch()) {
    isPlaying = true;
    time = 11;
    typeinp.value = "";
    score++;
    speedval += 10;
    genTxt();
  }

  points.innerHTML = score;
  speed.innerHTML = speedval + "m/s";
}

function wordMatch(){
    if (typeinp.value === typeTxt.innerHTML) {
        gametxt.innerHTML = "Correct";
        gameover.classList.add("correct");
        gameover.classList.remove("wrong");
        return true;
    }else{
        gametxt.innerHTML = "Wrong";
        gameover.classList.add('wrong');
        gameover.classList.remove("correct");
        return false;
    }

}

function checkGameStatus(){
    if(!isPlaying && time === 0){
        gameover.classList.add("gameover");
        gameover.classList.remove("wrong", "correct");
        gametxt.innerHTML = "Game Over";
        typeTxt.style.display = "";
        score = 0;
        speedval = 0;
    }else{
        typeTxt.style.display = "";
    }
}

// reset game
resetbtn.addEventListener('click', function(){
    // location.reload(true)
    if ((!isPlaying && time === 0)) {
      gameover.classList.add("gameover");
      gameover.classList.remove("wrong", "correct");
      gametxt.innerHTML = "Game Over";
      typeTxt.style.display = "none";
      typeinp.value = "";
      time = 0;
      timer.innerHTML = 0;
    }
    else if(isPlaying = true && time !== 0){
        gameover.classList.add("gameover");
        gameover.classList.remove("wrong", "correct");
        gametxt.innerHTML = "Game Over";
        typeTxt.style.display = "none";
        typeinp.value = "";
        time = 0;
        timer.innerHTML = 0;
    }
    location.reload('true')
})