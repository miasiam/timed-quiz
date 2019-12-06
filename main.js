const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('answer-buttons')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timeElement = document.getElementById('timer-element')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() -.5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
questionElement.classList.remove('hide')

setNextQuestion()
}

function setNextQuestion(){
resetState()
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

function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    } else{
        window.location.assign("scores.html")
        username = prompt('Paws what you are doing, and type your name!');
        localStorage.setItem("username", username);
    }
    
    // var username = localStorage.getItem("username");
    // if(!username){
    //     username = prompt('Paws what you are doing, and type your name!');
    //     localStorage.setItem("username", username);
    // }





}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'This animal is known to rest an average of 13 to 14 hours a day',
        answers:[
            {text: 'cat', correct:true },
            {text: 'dog', correct:false}
        ]
    },
    {
        question: 'This animal wags its tail to show anger',
        answers:[
            {text: 'cat', correct:true },
            {text: 'dog', correct:false}
        ]
    },
    {
        question: 'This animal was domesticated around 15,000 years ago',
        answers:[
            {text: 'cat', correct:false },
            {text: 'dog', correct:true}
        ]
    },
    {
        question: 'This animal has a flehmen response, due to an active Jacobson\'s organ, which allows them to taste what they smell before consuming it',
        answers:[
            {text: 'cat', correct:true },
            {text: 'dog', correct:false}
        ]
    },
    {
        question: 'This animal has retractable nails',
        answers:[
            {text: 'cat', correct:true },
            {text: 'dog', correct:false}
        ]
    },
    {
        question: 'This animal barks',
        answers:[
            {text: 'cat', correct:false },
            {text: 'dog', correct:true}
        ]
    },
    {
        question: 'This animal meows',
        answers:[
            {text: 'cat', correct:true },
            {text: 'dog', correct:false}
        ]
    },
    {
        question: 'This animal is known to be a pack animal',
        answers:[
            {text: 'cat', correct:false },
            {text: 'dog', correct:true}
        ]
    },
    {
        question: 'This animal is known to be a lone hunter',
        answers:[
            {text: 'cat', correct:true },
            {text: 'dog', correct:false}
        ]
    },
    {
        question: 'Which animal is statistically easier to potty train?',
        answers:[
            {text: 'cat', correct:true },
            {text: 'dog', correct:false}
        ]
    },
    {
        question: 'When it comes to personal hygiene, this animal is the winner!',
        answers:[
            {text: 'cat', correct:true },
            {text: 'dog', correct:false}
        ]
    },
    {
        question: 'This animal has a barbed, or sharp, tongue',
        answers:[
            {text: 'cat', correct:true },
            {text: 'dog', correct:false}
        ]
    },
    {
        question: 'This animal is known to rest an average of 13 to 14 hours a day',
        answers:[
            {text: 'cat', correct:true },
            {text: 'dog', correct:false}
        ]
    },
    {
        question: 'This animal is recognized by the American Kennel Club',
        answers:[
            {text: 'cat', correct:false },
            {text: 'dog', correct:true}
        ]
    },
    {
        question: 'This animal is CAN produce the amino acid called Taurine, which is important for metabolism',
        answers:[
            {text: 'cat', correct:false },
            {text: 'dog', correct:true}
        ]
    },
    {
        question: 'The average lifespan of this animal is 10 to 13 years',
        answers:[
            {text: 'cat', correct:false},
            {text: 'dog', correct:true}
        ]
    },
    {
        question: 'This well known name for canis lupus familiaris',
        answers:[
            {text: 'cat', correct:false},
            {text: 'dog', correct:true}
        ]
    },
    {
        question: 'What is short for felis catus?',
        answers:[
            {text: 'cat', correct:true },
            {text: 'dog', correct:false}
        ]
    },
    {
        question: 'This animal belongs to the family felidae',
        answers:[
            {text: 'cat', correct:true },
            {text: 'dog', correct:false}
        ]
    },
    {
        question: 'This animal belongs to the family canidae',
        answers:[
            {text: 'cat', correct:false },
            {text: 'dog', correct:true}
        ]
    },
    {
        question: 'This animal was domesticated nearly 10,000 years ago',
        answers:[
            {text: 'cat', correct:true },
            {text: 'dog', correct:false}
        ]
    },

    
]