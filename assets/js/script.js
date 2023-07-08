const start_btn = document.querySelector(".start-btn button");
const main_page = document.querySelector(".main-page");
const quiz_page = document.querySelector(".quiz-page");
const result_page = document.querySelector(".result-page");
const options = document.querySelector(".options");
const timeLeft = document.querySelector(".timer .time-left");
const countdown = document.querySelector(".timer .countdown");

start_btn.addEventListener('click', ()=>{
    main_page.remove();
    showQuestions(0);
    startTimer(75);
});

let timeValue = 75;
let userScore = 0;
let counter;
let counterLine;

function showQuestions(index) {
    const que_text = document.querySelector(".question-txt");

    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let choice_tag = '<div class="choice"><span>'+ questions[index].choices[0] +'</span></div>'
    + '<div class="choice"><span>'+ questions[index].choices[1] +'</span></div>'
    + '<div class="choice"><span>'+ questions[index].choices[2] +'</span></div>'
    + '<div class="choice"><span>'+ questions[index].choices[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    options.innerHTML = choice_tag;

    const choice = options.querySelectorAll(".choice");

    for(i=0; i < choice.length; i++) {
        choice[i].setAttribute("onclick", "choiceSelected(this)");
    }
}