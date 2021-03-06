var myQuestions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: {
            a: 'strings', 
            b: 'booleans', 
            c: 'alerts', 
            d: 'numbers'
        },
        correctAnswer: 'c'
    },
    {
        question: "The condition in an if/else statement is enclosed with _______.",
        answers: {
            a:  'quotes',
            b:  'curly brackets', 
            c:  'parentheses', 
            d:  'square brackets'
        },
        correctAnswer: 'c'
    },
    {
        question: "Arrays in Javascript can be used to store _________.",
        answers: {
            a: 'numbers and strings',
            b: 'other arrays', 
            c: 'booleans', 
            d: 'all of the above'
        },
        correctAnswer: 'd'
    },
    {
        question: "String values must be enclosed within _________ when being assigned to variables.",
        answers: {
            a: 'commas',
            b: 'curly brackets', 
            c: 'quotes', 
            d: 'parentheses'
        },
        correctAnswer: 'c'
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            a: 'JavaScript',
            b:  'terminal/bash', 
            c:  'for loops', 
            d:  'console.log'
        },
        correctAnswer: 'd'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

function showQuestions(questions, quizContainer){
    // store the output and the answer choices
    var output = [];
    var answers;

// for each question...
    for(var i=0; i<questions.length; i++){

// first reset the list of answers
    answers = [];

// for each available answer...
    for(letter in questions[i].answers){

// ...add an html radio button
answers.push(
    '<label>'
    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
    + letter + ': '
    + questions[i].answers[letter]
    + '</label>'
);
}

// add this question and its answers to the output
output.push(
    '<div class="question">' + questions[i].question + '</div>'
    + '<div class="answers">' + answers.join('') + '</div>'
);
}

// combine output list into one string of html and put on the page
quizContainer.innerHTML = output.join('');
}


function showResults(questions, quizContainer, resultsContainer){

// gather answer containers from our quiz
var answerContainers = quizContainer.querySelectorAll('.answers');

// keep track of user's answers
var userAnswer = '';
var numCorrect = 0;

// for each question...
for(var i=0; i<questions.length; i++){

// find selected answer
userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

// if answer is correct
if(userAnswer===questions[i].correctAnswer){
// add to the number of correct answers
numCorrect++;

// color the answers green
answerContainers[i].style.color = 'lightgreen';
}
// if answer is wrong or blank
else{
// color the answers red
answerContainers[i].style.color = 'red';
}
}

// show number of correct answers out of total
resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

// show questions right away
showQuestions(questions, quizContainer);

// on submit, show results
submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
}

var timerDisplay = document.getElementById("secondsLeft");
var startButton = document.getElementById("buttonEl");
startButton.addEventListener ("click", startQuiz);
var secondsRemaining = 45;
function startQuiz (){
    timerDisplay.innerHTML = secondsRemaining;
    var startTimer = setInterval(decrement, 1000);
    startButton.style.display = "none";
    startButton.style.display = "none";
    quizContainer.style.display = "block";
    submitButton.style.display = "block";
}

function decrement() {  
    if (secondsRemaining <= 0) {
        showResults(questions, quizContainer, resultsContainer);
    
        clearInterval(startTimer)
    } else {
        secondsRemaining--;
        timerDisplay.innerHTML = secondsRemaining;
    }
}

}