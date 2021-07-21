const quizDB = [
    {
       Question:"Q1: What are the characteristics of software?",
       a: "Software is developed or engineered; it is not manufactured in the classical sense.",
       b: "Software doesn’t “ wear out ”",
       c: "Software can be custom built or custom build",
       d: "All mentioned above",
       ans: "ans4"
    },
    {
        Question:"Q2: Compilers , Editor Software comes under which type of Software?",
       a: "System Software",
       b: "Application Software",
       c: "Scientific Software",
       d: "All mentioned above.",
       ans: "ans1"
    },
    {
        Question:"Q3: Software Engineering is defined as systematic, disciplined and quantifiable approach for the development, operation and maintenance of software.",
        a: "True ",
        b: "False",
        c: "it can be false",
        d: "it can be true",
        ans: "ans1"
    },
    {
        Question:"Q4: Agile Software Development is based on",
        a: "Incremental Development",
        b: "Iterative Development",
        c: "Linear Development",
        d: "Both Incremental and Iterative Development",
        ans: "ans4"
    },
    {
        Question:"Q5: RAD Model has",
        a: "2 phases",
        b: "3 phase",
        c: "5 phases",
        d: "6 phases",
        ans: "ans3"
    },
    {
        Question:"Q6: The spiral model has two dimensions namely _____________ and ____________",
        a: "Diagonal, angular",
        b: "Radial, perpendicular",
        c: "Radial, angular",
        d: "Diagonal, perpendicular",
        ans: "ans3"
    },
    {
        Question:"Q7:Boehm suggests an approach that addresses project objectives, milestones and schedules, responsibilities, management and technical approaches and required resources, This principle is called as ______ ",
        a: "W3HH principle",
        b: "WHO principle",
        c: "W5HH principle",
        d: "None of the above",
        ans: "ans3"
    },
    {
        Question:"Q8: RAD stands for",
        a: "Relative Application Development",
        b: "Rapid Application Development",
        c: "Rapid Application Document",
        d: "None of the mentioned",
        ans: "ans3"
    },
    {
        Question:"Q9: The Incremental Model is a result of combination of elements of which two models?",
        a: "Build & FIX Model & Waterfall Model",
        b: "Linear Model & RAD Mode",
        c: "Linear Model & Prototyping Model",
        d: "Waterfall Model & RAD Model",
        ans: "ans3"
    },
    {
        Question:"Q10: If you were a lead developer of a software company and you are asked to submit a project/product within a stipulated time-frame with no cost barriers, which model would you select?",
        a: "Waterfall",
        b: "Spiral",
        c: "RAD",
        d: "Incremental ",
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