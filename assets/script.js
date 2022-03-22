var startQuiz = document.querySelector("#start")
var Questions = document.querySelector("nav")
var header = document.querySelector("header")
var questionOption = document.querySelector("article")
var questionAppear = document.querySelector(".Questions")
var answerContainer = document.querySelector(".Hidden")
var selectA = document.querySelector("#buttonA") 
var selectB = document.querySelector("buttonB")
var selectC = document.querySelector("buttonC")
var selectD = document.querySelector("buttonD")
var time = document.querySelector(".time")
var secondsLeft =60;
var questionQuiz = document.getElementById("closedContainer")
var questionIndex = 0
var answerIndex = 0
var choiceAnswer = []

//*Quiz Questions Variable 

var quizQuestions = [
    
    {    question: "Which is the bretherin of the Pontiac line?",
        answers: ["Camaro", "Hummer", "Dodge", "Ford"],
        correct: "Camaro",
        }, 
    
    {   question: "When was the last year that the firebird was made in?",
        answers: ["1998", "2002", "1968", "2009"],
        correct: "2002",
        },
    
    {    question: "When did Pontiac get shut down?",
        answers: ["2002", "2009", "1996", "2006" ],
       correct: "2009"
        },
    
    {   question: "What was the only year that Pontiac produced T-tops in the Fiero line?",
        answers: ["1998", "1988", "1984", "1986"],
        correct: "1988"
    }]
    

//TODO WHEN I click the start button
//TODO THEN a timer starts and I am presented with a question




function beginQuiz() {
    setTime();
    header.style.display = "none";
    questionOption.classList.add("article")
    showQuestions();
}

//TODO  WHEN I answer a question
//TODO THEN I am presented with another question

function showQuestions() {
    var varQuestions 

    for (let i = 0; i < quizQuestions.length; i++) {
        varQuestions = quizQuestions[questionIndex]        
        questionQuiz.textContent = varQuestions.question
        let options = varQuestions.answers[i];
        var choice = document.createElement("button")
        choice.setAttribute("class", "choice")
        choice.setAttribute("value", options)
        choice.textContent = options
        questionQuiz.appendChild(choice)
        console.log(choice);
        questionIndex++
        } 

    // if (varQuestions === true) {
    //     return        
    // }

}


// function showAnswer() {
//     var varAnswer = quizQuestions[answerIndex]
//         questionQuiz.textContent = varAnswer.answers

//     for (let i = 0; i < varAnswer.answers.length; i++) {
//         let = array[i];
        
//     }
// }

//TODO WHEN I answer a question incorrectly
//TODO THEN time is subtracted from the clock


//TODO WHEN all questions are answered or the timer reaches 0
//TODO THEN the game is over



//TODO WHEN the game is over
//TODO THEN I can save my initials and my score

//*Timer


function setTime() {
    var timeInterval = setInterval(function(){
        secondsLeft--;
        time.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timeInterval)
        }
            },1000);
                }
// setTime();

startQuiz.addEventListener("click", beginQuiz)