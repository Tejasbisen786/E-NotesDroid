const quizDB = [
    {
       Question:"Q1: Which of the following is not an example of non-sinusoidal oscillator?",
       a: "Sawtooth Generators",
       b: "Blocking oscillators",
       c: "Multivibrator",
       d: "Crystal oscillators",
       ans: "ans4"
    },
    {
        Question:"Q2: Which of the following is not an LC oscillator?",
       a: "Hartley Oscillator",
       b: "Colpitts oscillator",
       c: "Crystal oscillator",
       d: "Clapp oscillator",
       ans: "ans3"
    },
    {
        Question:"Q3: The sinusoidal oscillator is also called ___________",
        a: "LC oscillator",
        b: "Harmonic oscillator",
        c: "RC oscillator",
        d: "Crystal oscillators",
        ans: "ans2"
    },
    {
        Question:"Q4:  Which type of oscillators is used in timing elements?",
        a: "RC oscillator",
        b: "LC oscillator",
        c: "Crystal oscillator",
        d: "Weinbridge oscillators",
        ans: "ans3"
    },
    {
        Question:"Q5:Which of the following oscillator is not using a feedback network for its oscillation?",
        a: "LC oscillator",
        b: "RC oscillator",
        c: "Crystal oscillator",
        d: "Relaxation oscillators",
        ans: "ans4"
    },
    {
        Question:"Q6: Low frequency oscillators have a frequency range of ___________",
        a: "20 Hz-20K Hz",
        b: "20 Hz -100k Hz",
        c: "1 Hz -20k Hz",
        d: "50 Hz -100k Hz",
        ans: "ans2"
    },
    {
        Question:"Q7: High frequency oscillators have a frequency range of ___________",
        a: "300K Hz-2G Hz",
        b: "100k Hz-500k Hz",
        c: "8k Hz-800K Hz",
        d: "4K Hz-1G Hz",
        ans: "ans1"
    },
    {
        Question:"Q8: Which of the following oscillator cannot be used in low frequency oscillations?",
        a: "Wein bridge oscillators",
        b: "RC phase shift oscillators",
        c: "Colpitts oscillators",
        d: "RC oscillators",
        ans: "ans3"
    },
    {
        Question:"Q9: Which of the following oscillator is will give the most stable output oscillation frequency?",
        a: "Colpitts oscillator",
        b: "Clapp oscillator",
        c: "Wein bridge oscillator",
        d: "Crystal oscillator",
        ans: "ans4"
    },
    {
        Question:"Q10:  Relaxation oscillators are also known as ___________",
        a: "Multivibrator",
        b: "Phase shift oscillators",
        c: "Blocking oscillators",
        d: "Saw tooth generator",
        ans: "ans1"
    }
];

const Question = document.querySelector('.Question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers =document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;

const loadquestion =() => {
    const questionList = quizDB[questionCount]
    Question.innerText = questionList.Question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}  

loadquestion(); 
const getCheckAnswer = () => {
    let answer;
      answers.forEach((curAnsElem) => {
          if(curAnsElem.checked){
              answer = curAnsElem.id;
          }
      });
      return answer;
};
const deselectAll= () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer(); 
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll();
    if(questionCount < quizDB.length){
        loadquestion(); 
    }
    else{
        showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length} ✌️ </h3>
        <button class="btn" onclick="location.reload()">Try Again </button>
        `;
        showScore.classList.remove('scoreArea');
    }
});