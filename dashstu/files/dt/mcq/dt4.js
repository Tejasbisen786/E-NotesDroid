const quizDB = [
    {
       Question:"Q1: Which of the following is correct for multiplexer?",
       a: "Several inputs and single output",
       b: "Single input and several outputs",
       c: "Single input and single output",
       d: "Several inputs and several outputs",
       ans: "ans1"
    },
    {
        Question:"Q2: Multiplexers work with _______________",
       a: "Analog signal",
       b: "Digital signal",
       c: "Both analog and digital signal",
       d: "None of the mentioned",
       ans: "ans3"
    },
    {
        Question:"Q3: TDM stands for _________________",
        a: "Time direct measurement",
        b: "Time division multiplexing",
        c: "Time direct multiplexing",
        d: "Time division measurement",
        ans: "ans2"
    },
    {
        Question:"Q4: Which of the following is analogous to multiplexer?",
        a: "Data selector",
        b: "Data multiplexer",
        c: "Data filter",
        d: "None of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q5: Which of the following represent multiple input single output switch?",
        a: "Multiplexer",
        b: "De multiplexer",
        c: "Both multiplexer and demultiplexer",
        d: "None of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q6: Schematic symbol of multiplexer is __________________",
        a: "Isosceles triangle",
        b: "Isosceles trapezoid",
        c: "Equilateral triangle",
        d: "Rectangle",
        ans: "ans2"
    },
    {
        Question:"Q7:  In digital multiplexer selector line is _______________",
        a: "Analog value",
        b: "Digital value",
        c: "Unpredictable",
        d: "None of the mentioned",
        ans: "ans2"
    },
    {
        Question:"Q8: Which of the following is not a multiplexer?",
        a: "8-to-1 line",
        b: "16-to-1 line",
        c: "4-to-1 line",
        d: "1-to-4 line",
        ans: "ans4"
    },
    {
        Question:"Q9: Which of the following method is employed for ADC?",
        a: "Ladder network",
        b: "Successive approximation type",
        c: "PWM type",
        d: "None of the mentioned",
        ans: "ans2"
    },
    {
        Question:"Q10:  Which of the following represents range of frequency measured by ADC?",
        a: "Bandwidth",
        b: "Threshold frequency",
        c: "Peak frequency",
        d: "None of the mentioned",
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