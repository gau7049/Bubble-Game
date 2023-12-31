let tiktik = new Audio("./countDown.mpeg");
let tap = new Audio("./pop.mpeg");
let gameOver = new Audio("./gameOver.mpeg");
let letPlay = new Audio("./playAgin.mpeg");
let wrong = new Audio("./wrongAnswer.mpeg");
let closeToFinish = new Audio('./last10sec.mpeg');

function music(){
    tiktik.play();
}

function playAgain(){
    letPlay.play();
    setTimeout(function(){
        window.location.href = "./game.html";
    }, 1500)
}

var tar = 0;
function targetChange(){
    tar = document.querySelector("#hitRandom").textContent = Math.floor(Math.random()*10);
}

let width = document.querySelector("#panel").clientWidth;

let numberOfBubble = 6;

if(width >= 225 && width <= 400){
    numberOfBubble *= 4;
} else {
    switch(width){
        case 656: 
        case 432: numberOfBubble *= 6; break;
        case 614:  numberOfBubble *= 9; break;
        case 730: numberOfBubble *= 7; break;
        case 224: numberOfBubble *= 3; break;
        case 819: numberOfBubble *= 8; break;
        default:  numberOfBubble *= 10; break;
    }
}

function createBubble(){
    let tag = "", pre;
    for(let bubble = 1; bubble <= numberOfBubble; bubble++){
        let rndm = Math.floor(Math.random()*10);
        tag += `<div id="bubble">${rndm === pre ? tar : rndm}</div>`;
        pre = rndm;
    }
    document.querySelector("#lpanel").innerHTML = tag;
}



let countDown = 60;
function timer(){
    var timerInterval = setInterval(function(){
        countDown--;
        document.querySelector("#timerval").textContent = countDown;
        if(countDown <= 10){
            document.querySelector(".Warning").style.color = "red";
            tiktik.pause();
            closeToFinish.play();
            // document.querySelector("#upanel").style.backgroundColor = "yellow";
        }
        if(countDown == 0){
            closeToFinish.pause();
            gameOver.play();
            clearInterval(timerInterval); // it bascially stops the setInterval which is going on...
            document.querySelector("#lpanel").innerHTML = `<div style="text-align: center"><h1>Your Score</h1><h2>${score}</h2><br><button onclick="playAgain()">Play again</button></h2></div>`;
            document.querySelector("#upanel").textContent = "Well Played";
            document.querySelector("#hitRandom").textContent = "-";
        }
    }, 1000)
}


var score = 0;

function updateScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;    
}


document.querySelector("#lpanel").addEventListener('click',function(dets){
    var clicked = Number.parseInt(dets.target.textContent);
    if(document.querySelector("#timerval").textContent >= 1){
        if(tar === clicked){
            tap.play();
            updateScore();
        } else{
            wrong.play();
        }

        if(document.querySelector("#timerval").textContent >= 1){
            setTimeout(function(){
                if(document.querySelector("#timerval").textContent >= 1){
                    createBubble();
                    targetChange();
                }
            },1000);
        }
    }
});


music();
targetChange();
createBubble();
timer();
