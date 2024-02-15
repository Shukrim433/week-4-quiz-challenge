var startEl = document.getElementById('start-button')

var welcomPageEl = document.getElementById('welcome-page')
var quizPageEl = document.getElementById('quiz-page')
var resultsPageEl = document.getElementById('results-page')
var savedScoresPageEl = document.getElementById('saved-scores-page')

var optionsEl = document.getElementById('options')
var finalScoreSpan = document.getElementById('final-score')
var timerSpan = document.getElementById('timer')
var questionEl = document.getElementById('question')
var responseEl = document.getElementById('response')

var saveBtnEl = document.getElementById('save-score')
var viewScoresBtnEl = document.getElementById('view-high-scores')
var startAgainBtnEl = document.getElementById('start-again')
var initialsEl = document.getElementById('initials')
var savedScoresEl = document.getElementById('saved-scores')

var currentQuestionIndex = 0
var countDown

welcomPageEl.style.display = 'block'
quizPageEl.style.display = 'none'
resultsPageEl.style.display = 'none'
savedScoresPageEl.style.display = 'none'


function stopQuiz(){
    clearInterval(countDown)
    timerSpan.textContent = ''
    welcomPageEl.style.display = 'none'
    quizPageEl.style.display = 'none'
    resultsPageEl.style.display = 'block'
    savedScoresPageEl.style.display = 'none'

}

startEl.addEventListener('click', function(){
    welcomPageEl.style.display = 'none'
    quizPageEl.style.display = 'block'
    resultsPageEl.style.display = 'none'
    savedScoresPageEl.style.display = 'none'

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
    
    optionsEl.innerHTML = ''

    var optionsUl = document.createElement('ul')
    optionsEl.appendChild(optionsUl)

    for (var i=0 ; i<questions[currentQuestionIndex].options.length ; i++){
        questionEl.innerHTML = questions[currentQuestionIndex].question
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
    
        function saveScores(){
            var savedScores = JSON.parse(localStorage.getItem('savedScores')) || []
            
            var yourScore = {
                name: initialsEl.value,
                score: finalScore
            }
            savedScores.push(yourScore)
            
            localStorage.setItem('savedScores', JSON.stringify(savedScores))
        }
        saveScores()
    })
    
    
    viewScoresBtnEl.addEventListener('click' , function(){
        welcomPageEl.style.display = 'none'
        quizPageEl.style.display = 'none'
        resultsPageEl.style.display = 'none'
        savedScoresPageEl.style.display = 'block'
    
        function showScores () {
            var savedScores = JSON.parse(localStorage.getItem('savedScores')) || []

            for (var i = 0; i < savedScores.length; i++) {

            var listItem = document.createElement('li')
            
            var content = '<p>Name: <span>' +savedScores[i].name + '</span></p>'
            content += '<p>Score: <span>' +savedScores[i].score + '</span></p>'

            listItem.innerHTML = content

            savedScoresPageEl.appendChild(listItem)
        }
          
    }
        showScores()
    })








/*saveBtnEl.addEventListener('click', function(){
    var finalScore = finalScoreSpan.textContent

    function saveScores(){
        var yourScore = {
            name: initialsEl.value,
            score: finalScore
        }
        localStorage.setItem('yourScore', JSON.stringify(yourScore))
    }
    saveScores()

})

viewScoresBtnEl.addEventListener('click' , function(){
    welcomPageEl.style.display = 'none'
    quizPageEl.style.display = 'none'
    resultsPageEl.style.display = 'none'
    savedScoresPageEl.style.display = 'block'


    function showScores () {
        var lastScore = JSON.parse(localStorage.getItem('yourScore'))

        if (lastScore !== null){
            document.getElementById('name-span').textContent = lastScore.name
            document.getElementById('score-span').textContent = lastScore.score
            
        }
    }
    showScores()
    
})*/

/*startAgainBtnEl.addEventListener('clicl', function (){})*/
/* localStorage.setItem(initialsEl.value, finalScore)*/


    























