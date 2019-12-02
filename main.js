const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('answer-buttons')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)


function startGame(){
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() -.5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
questionElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion(){
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.innerText=answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}



function selectAnswer(e){

}

const questions = [
    {
        question: 'This animal is known to rest an average of 13 to 14 hours a day',
        answers:[
            {text: 'cat', correct:true },
            {text: 'dog', correct:false}
        ]
    }
]