var timeLeft = document.querySelector('#timer');
var btnBegin = document.querySelector('#begin');
var qCard = document.querySelector('.card')
var questions= document.querySelector('.cardBody');
var cardText = document.querySelector('.cardHeader');

var timeSec = 30;

// Adds timer Text
timeLeft.innerHTML = `Time Remaining: ${timeSec}`;

// Creates timer functionality
function countDown () {setInterval (function () {
    
    timeSec--;
    timeLeft.innerHTML = `Time Remaining: ${timeSec}`;
    if (timeSec <= 0 ) {
        timeLeft.innerHTML = 'Time Remaining: 0';
        cardText.innerHTML = 'Game Over';
        
    }
},1000)
}

function question1 () {
    btnBegin.style.display = 'none';
    cardText.innerHTML = 'Question 1';
    questions.innerHTML = 'Which of these is an array?'
    var ans1 = document.createElement("button");
    ans1.innerHTML = "['John', 'Alex', 'Cody', 'Blake']";
    questions.append(ans1);


}

document.getElementById("begin").addEventListener('click', function() {countDown(); question1();});


