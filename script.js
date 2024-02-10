var startEl = document.getElementById('start-button')

var welcomPageEl = document.getElementById('welcome-page')
var quizPageEl = document.getElementById('quiz-page')
var resultsPageEl = document.getElementById('results-page')

var scoreMessageEl = document.getElementById('score-message')
var optionsEl = document.getElementById('options')
var finalScoreSpan = document.getElementById('final-score')
var timerSpan = document.getElementById('timer')

var currentQuestion = 0
var score = 0
var countDown


startEl.addEventListener('click', function(){
    welcomPageEl.style.display = 'none'
    quizPageEl.style.display = 'flex'
    resultsPageEl.style.display = 'none'

    timerSpan.textContent = 75
    score = 0

    countDown = setInterval(function(){
        if (timerSpan.textContent > 0){
            timerSpan.textContent--
        }else{
            function stopQuiz(){
                clearInterval(countDown)
                timerSpan.textContent = ''
                quizPageEl.style.display = 'none'
                resultsPageEl.style.display = 'flex'
    
            }
            stopQuiz()
        }
        
    }, 1000)

})





























/*var saveBtnEl = document.getElementById('save-score')
var viewScoresBtnEl = document.getElementById('view-high-scores')
var startAgainBtnEl = document.getElementById('start-again')*/