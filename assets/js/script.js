const start_btn = document.querySelector(".start-btn button");
const main_page = document.querySelector(".main-page");
const quiz_page = document.querySelector(".quiz-page");
const result_page = document.querySelector(".result-page");
const options = document.querySelector(".options");
const timeLeft = document.querySelector(".timer .time-left");
const countdown = document.querySelector(".timer .countdown");

start_btn.addEventListener('click', ()=>{
    main_page.remove();
});