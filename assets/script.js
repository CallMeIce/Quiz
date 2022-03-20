var startQuiz = document.querySelector("#start")
var Questions = document.querySelector("Questions")
var 

//TODO WHEN I click the start button
//TODO THEN a timer starts and I am presented with a question

startQuiz.addEventListener("click",function() {
    console.log("click")

})
//TODO  WHEN I answer a question
//TODO THEN I am presented with another question


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
        timeElement.textContent = "Time-Limit: " + secondsLeft;
        if (secondsLeft < 0) {
            clearInterval(timeInterval)
        }
            },1000);
                }
setTime();