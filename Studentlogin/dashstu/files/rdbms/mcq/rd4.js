const quizDB = [
    {
       Question:"Q1: DDL Stands for ___________.",
       a: "Data Definition Language",
       b: "Database Design Language",
       c: "Database Development Language",
       d: "None of these",
       ans: "ans1"
    },
    {
        Question:"Q2: DML Stands for _____________.",
       a: "Data Management Language",
       b: "None of these",
       c: "Data Manipulation Language",
       d: "Database Markup Language",
       ans: "ans3"
    },
    {
        Question:"Q3: Which of the following language is used to specify database Schema ?",
        a: "Data Management Language",
        b: "Data Manupulation Language",
        c: "Data Definition Language",
        d: "Data Development Language",
        ans: "ans3"
    },
    {
        Question:"Q4: Set of definitions that are used to specify schema are expressed using __________.",
        a: "Fortran",
        b: "Java",
        c: "DML",
        d: "DDL",
        ans: "ans4"
    },
    {
        Question:"Q5: Result of Compilation of DDL statement is stored in special file called as _________.",
        a: "Symbol Table",
        b: "Database Schema File",
        c: "Data Dictionary",
        d: "Database File",
        ans: "ans3"
    },
    {
        Question:"Q6: Data Dictionary is also called as _____________.",
        a: "None of these",
        b: "Hash Table",
        c: "System Catalog",
        d: "Symbol Table",
        ans: "ans3"
    },
    {
        Question:"Q7: Data Dictionary contain one of the following entity inside it, Guess the answer.",
        a: "Associated Data",
        b: "Important Data",
        c: "Meta Data",
        d: "Duplicate Data",
        ans: "ans3"
    },
    {
        Question:"Q8: Storage structure and Access methods used by database system are specified using ____________.",
        a: "Data Storage and Definition Language",
        b: "Data Manipulation Language",
        c: "Data Manipulation Language",
        d: "Data Dictionary",
        ans: "ans1"
    },
    {
        Question:"Q9: Data Manipulation Languages are used for -",
        a: "All of these",
        b: "Delete Information",
        c: "Retrieve Information from Database",
        d: "Insert Information into Database",
        ans: "ans1"
    },
    {
        Question:"Q10:  There are _______ types of Data Manipulation Languages",
        a: "4",
        b: "3",
        c: "2",
        d: "1",
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