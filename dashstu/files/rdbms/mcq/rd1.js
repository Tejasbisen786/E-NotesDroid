const quizDB = [
    {
       Question:"Q1: The DBMS acts as an interface between what two components of an database system ?",
       a: "Data and Database",
       b: "Database and User",
       c: "Database and SQL",
       d: "Database Application and Database",
       ans: "ans3"
    },
    {
        Question:"Q2: Long form of DBA is ______________.",
       a: "Database Application",
       b: "None of these",
       c: "Database Admin",
       d: "Database Administrator",
       ans: "ans3"
    },
    {
        Question:"Q3: DBMS stands for __________.",
        a: "Database Administrator System",
        b: "Database Basic Management System",
        c: "Database Management System",
        d: "None of these",
        ans: "ans3"
    },
    {
        Question:"Q4: A database is a complex type of ______.",
        a: "None of these",
        b: "Application",
        c: "Data Structure",
        d: "Manager",
        ans: "ans3"
    },
    {
        Question:"Q5: In __________ data can be stored in structured manner.",
        a: "None of these",
        b: "CPU",
        c: "Database",
        d: "ALU",
        ans: "ans3"
    },
    {
        Question:"Q6: Database is collection of ____.",
        a: "Modules",
        b: "None of these",
        c: "Data",
        d: "Programs",
        ans: "ans3"
    },
    {
        Question:"Q7: __________________ is collection of interrelated data and set of program to access them.",
        a: "Data Structure",
        b: "Programming language",
        c: "Database Management System",
        d: "Database",
        ans: "ans3"
    },
    {
        Question:"Q8: DBMS should provide following feature(s) ______.",
        a: "All of these",
        b: "Protect data from system crash",
        c: "Safety of the information stored",
        d: "Authorized access",
        ans: "ans1"
    },
    {
        Question:"Q9: Which of the following is considered as DBMS ?",
        a: "All of these",
        b: "Oracle",
        c: "Foxpro",
        d: "Access",
        ans: "ans1"
    },
    {
        Question:"Q10:  Before use of DBMS information was stored using __________.",
        a: "Cloud Storage",
        b: "None of these",
        c: "File Management System",
        d: "Data System",
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