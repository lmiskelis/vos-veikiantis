// Kintamieji
var quiz = document.getElementById("quiz")
var startQuiz = document.getElementById("startQuiz")
var domQuestion, progress, buttons

// Paleidžia klausimyną
startQuiz.addEventListener("click", start)
function start(){
    quiz.innerHTML =
    `
        <!-- Pavadinimas -->
            <h1>Vaisiai</h1>

            <!-- Klausimas -->
            <p id="question">Aš norėčiau Jūsų paklausti...?</p>

            <!-- Atsakymai -->
            <div class="buttons">
                <button>Pirmas</button>
                <button>Antras</button>
                <button>Trečias</button>
                <button>Ketvirtas</button>
            </div>
            <hr>

            <!-- Progresas -->
            <footer>
                <p>Klausimas <span id="progress">1</span> iš 5</p>
            </footer>
    `

    loadSelectors()
}


function loadSelectors(){
    domQuestion = document.getElementById("question")
    progress = document.getElementById("progress")
    buttons = document.querySelectorAll("button")

    // domQuestion.innerText = newQuiz.getQuestion().text
    buttons.forEach((x, i) => {
        x.addEventListener("click", loadQuestions)
        // x.innerText = newQuiz.getQuestion().choices[i]
    })
    
    loadProgress()
}

function loadProgress(){
    progress.innerText = newQuiz.showProgress()
}

// Bendras callback, kad būtų vienas po kito
function generalLoad(loadSelectors, loadProgress){
    loadSelectors()
    loadProgress()
}


function loadQuestions(){
    domQuestion.innerText = newQuiz.getQuestion().text
    buttons.forEach((x, i) => {
        x.innerText = newQuiz.getQuestion().choices[i]
    })

    loadProgress()
}


