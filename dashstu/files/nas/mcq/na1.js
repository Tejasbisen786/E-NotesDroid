const quizDB = [
    {
       Question:"Q1: Firewalls are to protect against",
       a: "Virus Attacks",
       b: "Fire Attacks",
       c: "Data Driven Attacks",
       d: "Unauthorized Attacks",
       ans: "ans4"
    },
    {
        Question:"Q2: The first computer virus is",
       a: "The famous",
       b: "HARLIE",
       c: "PARAM",
       d: "Creeper",
       ans: "ans4"
    },
    {
        Question:"Q3: A hard copy would be prepared on a",
        a: "Printer",
        b: "Joystick",
        c: "Trackball",
        d: "All of these",
        ans: "ans1"
    },
    {
        Question:"Q4: The first PC virus was developed in",
        a: "1980",
        b: "1986",
        c: "1988",
        d: "1985",
        ans: "ans2"
    },
    {
        Question:"Q5: Joystick allows the movements with",
        a: "90 degree angle",
        b: "180 degree angle",
        c: "360 degree angle",
        d: "45 degree angle",
        ans: "ans3"
    },
    {
        Question:"Q6: To protect system, there is how many levels of security level?",
        a: "One",
        b: "Two",
        c: "Three",
        d: "Four",
        ans: "ans3"
    },
    {
        Question:"Q7: Lowest level of security system is",
        a: "A",
        b: "B",
        c: "C",
        d: "D",
        ans: "ans1"
    },
    {
        Question:"Q8: The security of a system can be improved by",
        a: "Audit log",
        b: "Threat monitoring",
        c: "Both (a) and (b)",
        d: "None of these",
        ans: "ans2"
    },
    {
        Question:"Q9: How many capabilities in CAP?",
        a: "One",
        b: "Two",
        c: "Three",
        d: "Four",
        ans: "ans2"
    },
    {
        Question:"Q10:  CAP is",
        a: "Simple and greater power than that of hydra",
        b: "Complex and less powerful than that of hydra",
        c: "Simpler and less powerful than that of hydra",
        d: "None of these",
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