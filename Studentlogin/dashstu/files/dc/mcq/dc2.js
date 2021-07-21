const quizDB = [
    {
       Question:"Q1: In layering, n layers provide service to",
       a: "n layer",
       b: "n-1 layer",
       c: "n+1 layer",
       d: "none of the mentioned",
       ans: "ans3"
    },
    {
        Question:"Q2: Which can be used as an intermediate device in between transmitter entity and receiver entity?",
       a: "IP router",
       b: "Microwave router",
       c: "Telephone switch",
       d: "All of the mentioned",
       ans: "ans4"
    },
    {
        Question:"Q3: Which has comparatively high frequency component?",
        a: "Sine wave",
        b: "Cosine wave",
        c: "Square wave",
        d: "None of the mentioned",
        ans: "ans3"
    },
    {
        Question:"Q4: Which has continuous transmission?",
        a: "Asynchronous",
        b: "Synchronous",
        c: "Asynchronous & Synchronous",
        d: "None of the mentioned",
        ans: "ans2"
    },
    {
        Question:"Q5: Which requires bit transitions?",
        a: "Asynchronous",
        b: "Synchronous",
        c: "Asynchronous & Synchronous",
        d: "None of the mentioned",
        ans: "ans2"
    },
    {
        Question:"Q6: In synchronous transmission, receiver must stay synchronous for",
        a: "4 bits",
        b: "8 bits",
        c: "9 bits",
        d: "16 bits",
        ans: "ans3"
    },
    {
        Question:"Q7: How error detection and correction is done?",
        a: "By passing it through equalizer",
        b: "By passing it through filter",
        c: "By amplifying it",
        d: "By adding redundancy bits",
        ans: "ans4"
    },
    {
        Question:"Q8: Which is more efficient?",
        a: "Parity check",
        b: "Cyclic redundancy check",
        c: "Parity & Cyclic redundancy check",
        d: "None of the mentioned",
        ans: "ans2"
    },
    {
        Question:"Q9: Which can detect two bit errors?",
        a: "Parity check",
        b: "Cyclic redundancy check",
        c: "Parity & Cyclic redundancy check",
        d: "None of the mentioned",
        ans: "ans2"
    },
    {
        Question:"Q10:  CRC uses",
        a: "Multiplication",
        b: "Binary division",
        c: "Multiplication & Binary division",
        d: "None of the mentioned",
        ans: "ans3"
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