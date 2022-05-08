class Question {
    constructor(text, choices, answer){
        this.text = text
        this.choices = choices
        this.answer = answer
    }
}

var questions = [
    new Question(
        "Kam naudingos morkos?",
        ["Niekam", "Hitleriui", "Kepenims", "Odai"],
        "Odai"
    ),
    new Question(
      "Kam naudingi obuoliai?",
      ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
      "Virškinimui"
    ),
    new Question(
      "Kokias ligas padeda gydyti agrastai?",
       ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
       "Cukrini diabetą"
    ),
    new Question(
      "Kokio vitamino gausu apelsinuose?",
       ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
      "Vitamino C"
    ),
    new Question(
      "Kokiais dalykais yra turtingi arbūzai?",
      ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
      "Visi teisingi"
    )
]
