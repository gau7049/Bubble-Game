
function createBubble(){
    let tag = "";

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

    for(let bubble = 1; bubble <= numberOfBubble; bubble++){
        tag += `<div id="bubble">${Math.floor(Math.random()*10)}</div>`
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
            document.querySelector("#upanel").style.backgroundColor = "yellow";
        }
        if(countDown == 0){
            clearInterval(timerInterval); // it bascially stops the setInterval which is going on...
            document.querySelector("#lpanel").innerHTML = "<h1>Game Over</h1>";
            document.querySelector(".focus").style.color = "green";

        }
    }, 1000)
}

var tar = 0;
function targetChange(){
    tar = document.querySelector("#hitRandom").textContent = Math.floor(Math.random()*10)
}

var score = 0;

function updateScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;    
}


document.querySelector("#lpanel").addEventListener('click',function(dets){
    var clicked = Number.parseInt(dets.target.textContent);
    if(tar === clicked){
        updateScore();
    } else {
    }
    createBubble();
    targetChange();
})


createBubble();
// timer();
targetChange();

console.log(window.innerWidth, window.innerHeight)
console.log(document.querySelector("#main").clientWidth);