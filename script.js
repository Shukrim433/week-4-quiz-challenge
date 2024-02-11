var startEl = document.getElementById('start-button')

var welcomPageEl = document.getElementById('welcome-page')
var quizPageEl = document.getElementById('quiz-page')
var resultsPageEl = document.getElementById('results-page')

var optionsEl = document.getElementById('options')
var finalScoreSpan = document.getElementById('final-score')
var timerSpan = document.getElementById('timer')
var questionEl = document.getElementById('question')
var responseEl = document.getElementById('response')

var saveBtnEl = document.getElementById('save-score')
var viewScoresBtnEl = document.getElementById('view-high-scores')
var startAgainBtnEl = document.getElementById('start-again')
var initialsEl = document.getElementById('initials')

var currentQuestionIndex = 0
var countDown

welcomPageEl.style.display = 'block'
quizPageEl.style.display = 'none'
resultsPageEl.style.display = 'none'

function stopQuiz(){
    clearInterval(countDown)
    timerSpan.textContent = ''
    welcomPageEl.style.display = 'none'
    quizPageEl.style.display = 'none'
    resultsPageEl.style.display = 'block'

}


startEl.addEventListener('click', function(){
    welcomPageEl.style.display = 'none'
    quizPageEl.style.display = 'block'
    resultsPageEl.style.display = 'none'

    timerSpan.textContent = 75

    countDown = setInterval(function(){
        if (timerSpan.textContent > 0){
            timerSpan.textContent--
        }else{
            stopQuiz()
        }
        
    }, 1000)

})


function showQuestions (){

    if (currentQuestionIndex >= questions.length){
        stopQuiz()
        return
    }
    
    questionEl.innerHTML = questions[currentQuestionIndex].question
    optionsEl.innerHTML = ''

    var optionsUl = document.createElement('ul')
    optionsEl.appendChild(optionsUl)

    for (var i=0 ; i<questions[currentQuestionIndex].options.length ; i++){
        var optionsLi = document.createElement('li')
        optionsUl.appendChild(optionsLi)
        optionsLi.textContent = questions[currentQuestionIndex].options[i]
    }
}



    optionsEl.addEventListener('click', function(event){
        var correctAnswer = questions[currentQuestionIndex].answer
        var selectedOption = event.target.textContent
    
        if (correctAnswer === selectedOption){
            finalScoreSpan.textContent ++
            responseEl.textContent = 'CORRECT!'
        }else{
            timerSpan.textContent = timerSpan.textContent -= 5
            responseEl.textContent = 'INCORRECT!'
        }

      setTimeout(function(){
        responseEl.textContent = ' '
      }, 500)

        currentQuestionIndex++
        showQuestions()
        
    })  

    showQuestions()


saveBtnEl.addEventListener('click', function(){
    var finalScore = finalScoreSpan.textContent
    localStorage.setItem(initialsEl.value, finalScore)
})

/*startAgainBtnEl.addEventListener('clicl', function (){})*/


    























