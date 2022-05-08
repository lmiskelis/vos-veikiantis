class Quiz {
    constructor(questions){
        this.questions = questions
        this.questionsNumber = 0
        this.resultsNumber = 0
    }

    getQuestion(){
        return this.questions[this.questionsNumber - 1]
    }

    showProgress(){
        return this.questionsNumber++
    }

}

// Sukuria quiz objektą su klausimais atmintyje
var newQuiz = new Quiz(questions)

