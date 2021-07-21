const quizDB = [
    {
       Question:"Q1: Which of the following is a computer based system that stores and manipulates data that are viewed from a geographical point or reference?",
       a: "Geographical Information System (GIS)",
       b: "Database System (DS)",
       c: "Geographic System (GS)",
       d: "Software System (SS)",
       ans: "ans1"
    },
    {
        Question:"Q2: What are the three general components of IRM?1. Data Processing 2.Telecommunications 3.Office automation 4.Transaction Processing",
       a: "Only i, ii, and iii",
       b: "Only ii, iii and iv",
       c: "Only i, iii and iv",
       d: "All i, ii, iii, and iv",
       ans: "ans1"
    },
    {
        Question:"Q3: The different types of decisions while decision making in MIS are i) Programmed decisions ii) Programmable decisions iii) Semi Programmed decisions iv) Non Programmed decisions",
        a: "Only i, ii, and iii",
        b: "Only ii, iii and iv",
        c: "Only i, iii and iv",
        d: "All i, ii, iii, and iv",
        ans: "ans2"
    },
    {
        Question:"Q4: Which of the following statements are the disadvantages of Expert System? i) They cannot handle inconsistent knowledge ii) They cannot apply judgement and intuition recognized as important ingredients of problem solving.",
        a: "Only i",
        b: "Only ii",
        c: "Both i and ii",
        d: "None",
        ans: "ans3"
    },
    {
        Question:"Q5: Which of the following system ensures that proper stock of each item are maintained in an organization?",
        a: "Human resource information system",
        b: "An inventory control system",
        c: "Manufacturing information system",
        d: "Marketing information system",
        ans: "ans2"
    },
    {
        Question:"Q6: Which of the following is a program that models the pattern recognition capabilities of the human brain.",
        a: "An expert system",
        b: "Artificial Intelligence",
        c: "Neutral network",
        d: "Development engine",
        ans: "ans3"
    },
    {
        Question:"Q7: Which of the following are the main software components of DSS? i) database management system (DBMS) ii) model management system iii) support tools iv) internet",
        a: "Only i, ii, and iii",
        b: "Only ii, iii and iv",
        c: "Only i, iii and iv",
        d: "All i, ii, iii, and iv",
        ans: "ans1"
    },
    {
        Question:"Q8: Which of the following are the inputs of Marketing Information System? i) Marketing research data ii) Marketing intelligence data iii) External environment data iv) Strategic plan",
        a: "Only i, ii, and iii",
        b: "Only ii, iii and iv",
        c: "Only i, iii and iv",
        d: "All i, ii, iii, and iv",
        ans: "ans4"
    },
    {
        Question:"Q9:  ........................... is the process of defining the current problem, determining why a new system is needed, identifying the objectives of the proposed system.",
        a: "Feasibility analysis",
        b: "System Analysis",
        c: "System definition",
        d: "System requirements",
        ans: "ans3"
    },
    {
        Question:"Q10:  The accounting system is .................. whereas the demand forecasting system is .................",
        a: "deterministic, probabilistic",
        b: "probabilistic, deterministic",
        c: "open, close",
        d: "close, open",
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