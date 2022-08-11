var timeLeft = document.querySelector('#timer');
var btnBegin = document.querySelector('#begin');
var qCard = document.querySelector('.card')
var questions= document.querySelector('.cardBody');
var cardQuestions = document.querySelector('.cardText');
var answerBtns = document.querySelector('.container'); 
var timeSec = 30;
var questionEl = document.querySelector('#question-text');
var btnA = document.getElementById('A');
var btnB = document.getElementById('B');
var btnC = document.getElementById('C');
var btnD = document.getElementById('D');

var questionsObj = [{
    question: 'Which of these is an array?',
    answers: ['20', 'var = array', '[Cody, Blake, Jeremy, Bob]', 'true'],
    correct: '[Cody, Blake, Jeremy, Bob]',
},
{
    question: 'Which of these is a boolean?',
    answers: ['20', 'var = array', '[Cody, Blake, Jeremy, Bob]', 'true'],
    correct: 'true',
},
{
    question: 'Which of these is a variable?',
    answers: ['20', 'var = array', '[Cody, Blake, Jeremy, Bob]', 'true'],
    correct: 'var = array',
},
{
    question: 'Which of these is a number?',
    answers: ['20', 'var = array', '[Cody, Blake, Jeremy, Bob]', 'true'],
    correct: '20',
}
]

// Adds timer Text
timeLeft.innerHTML = `Time Remaining: ${timeSec}`;

// Creates timer functionality
function countDown () {setInterval (function () {
    timeSec--;
    timeLeft.innerHTML = `Time Remaining: ${timeSec}`;},1000)
}

//Adds a number value for each question 
var currentQuestion = 0;
function startQuiz () {
    currentQuestion++;
    answerBtns.classList.remove('hide');
    cardQuestions.classList.add('hide');
    setQuestions();

}

// Adds text to the buttons by pulling from the questionObj
function setQuestions() {
    var currentQ = questionsObj[currentQuestion];
    questionEl.textContent = currentQ.question;
    btnA.textContent = questionsObj[currentQuestion].answers[0];
    btnB.textContent = questionsObj[currentQuestion].answers[1];
    btnC.textContent = questionsObj[currentQuestion].answers[2];
    btnD.textContent = questionsObj[currentQuestion].answers[3];

}

//Determines what happens when each 
function checkAns (selectAnswer) {
    var correctAns = questionsObj[currentQuestion].correct;
    if (selectAnswer === correctAns) {
        alert('Correct!');
    }else {
        alert('Wrong!');
    }

    if (currentQuestion < questionsObj.length) {  
       
       stopQuiz();
       
    }else {
        setQuestions();
        currentQuestion++;
    }
}

function stopQuiz() {
    clearInterval(timeLeft);
}

btnA.addEventListener('click', function () {checkAns(btnA.textContent)});
btnB.addEventListener('click', function () {checkAns(btnB.textContent)});
btnC.addEventListener('click', function () {checkAns(btnC.textContent)});
btnD.addEventListener('click', function () {checkAns(btnD.textContent)});

// function question1 () {
//     cardText.innerHTML = 'Question 1';
//     questions.innerHTML = 'Which of these is an array?'
//     var answers = document.createElement("ol");
//     var ans1 = document.createElement("li");
//     var ans2 = document.createElement("li");
//     var ans3 = document.createElement("li");
//     ans1.innerHTML = "['John', 'Alex', 'Cody', 'Blake']";
//     questions.append(ans1);


// }

document.getElementById("begin").addEventListener('click', function() {countDown(); setQuestions();});


