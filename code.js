// To run this assignment, correct click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// YOUR CODE HERE!

// All Credits go to Jon Taylor, Michael Meacham & Zachary Johnson for the coding help at Study Hall!
// Thank you so much!



class TriviaRandomGame {
    constructor() {
        this.index = 0
        this.questionHTML = document.createElement("div")
        this.questionHTML.classList.add("questionHTML")
        document.body.append(this.questionHTML)
        this.userScoreHTML = document.createElement("div")
        this.userScoreHTML.classList.add("userScoreHTML")
        this.getQuestions()
        this.cluesArray = []
        this.userScore = 0
        this.displayUserScore()
        this.displayAnswerField()
        document.body.append(this.userScoreHTML)
    }

    getMathRandom = () => {
        return Math.floor(Math.random() * max);
    }

    displayUserScore = () => {

        this.userScoreHTML.innerText = `Your score is: ${this.userScore}`

    }

    displayQuestion = (jServiceArray, index) => {

        this.questionHTML.innerText = jServiceArray[index].question

    }

    getQuestions = () => {

        fetch("https://jservice.kenzie.academy/api/clues")
            .then(response => response.json())
            .then(array => {
                this.cluesArray = array.clues
                this.displayQuestion(this.cluesArray, this.index)
            })
    }

    displayAnswerField = () => {

        let answerForm = document.createElement("form")
        answerForm.classList.add("answerForm")

        let answerField = document.createElement("input")
        answerField.type = "text"
        answerField.id = "usersAnswer"
        answerForm.append(answerField)

        let answerSubmit = document.createElement("input")
        answerSubmit.type = "submit"
        answerForm.append(answerSubmit)

        document.body.append(answerForm)

        answerForm.addEventListener("submit", (event) => {
            event.preventDefault()
            console.log(answerField.value)
            this.answerChecker(answerField.value)
        })
    }

    answerChecker = (usersAnswer) => {

        const correctAnswer = this.cluesArray[this.index].answer
        console.log(correctAnswer)

        if (correctAnswer === usersAnswer) {
            console.log("Score Up by 1 point.")
            this.displayAnswerField.innerText
            this.index += 1
            this.userScore += 1
        } else {
            console.log("No score count.")
            this.index -= 1
            this.userScore = 0
        }

        this.displayUserScore()
        this.displayQuestion(this.cluesArray, this.index)

    }

}

const startGame = new TriviaRandomGame

