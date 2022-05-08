"use strict"

var questions = [
    {
        text: "Kam naudingos morkos?",
        choices: ["Niekam", "Hitleriui", "Kepenims", "Odai"],
        answer: "Odai"
    },
    {
      text: "Kam naudingi obuoliai?",
      choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
      answer: "Virškinimui"
    },
    {
      text: "Kokias ligas padeda gydyti agrastai?",
      choices:  ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
      answer:  "Cukrini diabetą"
    },
    {
      text: "Kokio vitamino gausu apelsinuose?",
      choices:  ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
      answer: "Vitamino C"
    },
    {
      text: "Kokiais dalykais yra turtingi arbūzai?",
      choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
      answer: "Visi teisingi"
    }
]
// Kintamieji
var quiz = document.getElementById("quiz")
var startQuiz = document.getElementById("startQuiz")
var domQuestion, progress, buttons, questionNumber, resultsNumber

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
                <p>Klausimas <span id="progress">0</span> iš 5</p>
            </footer>
    `

    loadSelectors()
}

// Pasižymi visus DOM elementus
function loadSelectors(){
    domQuestion = document.getElementById("question")
    progress = document.getElementById("progress")
    buttons = document.querySelectorAll("button")
    questionNumber = 0
    resultsNumber = 0

    // Priskiria mygtukams eventus
    buttons.forEach((x, i) => {
            x.addEventListener("click", function(){
                // Skaičiuoja teisingus pasirinkimus
                if(this.innerText === questions[questionNumber - 1].answer){
                    resultsNumber++
                }
                
                // Atnaujina informaciją
                if(questionNumber <= buttons.length) {            
                    populate()
                } else {
                    
                    quiz.innerHTML =
                    `
                    <h1>Results: ${resultsNumber}</h1>
                    <button onClick="start()">Bandyti dar kartą</button>
                    `
                    var h1 = document.getElementsByTagName("h1")[0]
                    var myg = document.getElementsByTagName("button")[0]
                    h1.style.opacity=0
                   
                    myg.style.transform="scale(0)"
                    setTimeout(()=>{
                    h1.style.opacity=1
                    
                    myg.style.transform="scale(1)"
                    
                    },1000)

                    

                }
        })
    })

    // Užkrauna turinį
    populate()
}

// Užkrauna ir atnaujina turinį
function populate(){
if (questionNumber>0){
    setTimeout(()=>{
        buttons[0].style.transform="scale(0)"
        buttons[0].disabled=true
        buttons[1].style.transform="scale(0)"
        buttons[1].disabled=true
        buttons[2].style.transform="scale(0)"
        buttons[2].disabled=true
        buttons[3].style.transform="scale(0)"
        buttons[3].disabled=true
        domQuestion.style.opacity=0
    })
    setTimeout(()=>{
    buttons[0].style.transform="scale(1)"
    buttons[0].disabled=false
    buttons[1].style.transform="scale(1)"
    buttons[1].disabled=false
    buttons[2].style.transform="scale(1)"
    buttons[2].disabled=false
    buttons[3].style.transform="scale(1)"
    buttons[3].disabled=false
    domQuestion.style.opacity=1
    domQuestion.innerText = questions[questionNumber].text
    
    buttons.forEach((x, i) => {
        x.innerText = questions[questionNumber].choices[i]
    })
    questionNumber++
    progress.innerText = questionNumber
    
    
    },2000)
     }
    else{
        domQuestion.innerText = questions[questionNumber].text
    
    buttons.forEach((x, i) => {
        x.innerText = questions[questionNumber].choices[i]
    })
    questionNumber++
    progress.innerText = questionNumber
    }

    
}


