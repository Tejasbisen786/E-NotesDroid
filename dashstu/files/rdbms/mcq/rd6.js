const quizDB = [
    {
       Question:"Q1: A collection of data designed to be used by different people is called a/an",
       a: "Organization",
       b: "Database ",
       c: "Relationship",
       d: "Schema",
       ans: "ans2"
    },
    {
        Question:"Q2: Which of the following is the oldest database model?",
       a: "Relational",
       b: "Deductive",
       c: "Physical",
       d: "Network",
       ans: "ans4"
    },
    {
        Question:"Q3: Which of the following schemas does define a view or views of the database for particular users?",
        a: "Internal schema",
        b: "Conceptual schema",
        c: "Physical schema",
        d: "External schema",
        ans: "ans4"
    },
    {
        Question:"Q4: Which of the following is an attribute that can uniquely identify a row in a table?",
        a: "Secondary key",
        b: "Candidate key",
        c: "Foreign key",
        d: "Alternate key",
        ans: "ans2"
    },
    {
        Question:"Q5: Which of the following are the process of selecting the data storage and data access characteristics of the database?",
        a: "Logical database design",
        b: "Physical database design",
        c: "Testing and performance tuning",
        d: "Evaluation and selecting",
        ans: "ans2"
    },
    {
        Question:"Q6: Which of the following terms does refer to the correctness and completeness of the data in a database?",
        a: "Data security",
        b: "Data constraint",
        c: "Data independence",
        d: "Data integrity",
        ans: "ans4"
    },
    {
        Question:"Q7: The relationship between DEPARTMENT and EMPLOYEE is a",
        a: "One-to-one relationship",
        b: "One-to-many relationship",
        c: "Many-to-many relationship",
        d: "Many-to-one relationship",
        ans: "ans2"
    },
    {
        Question:"Q8: A table can be logically connected to another table by defining a",
        a: "Super key",
        b: "Candidate key",
        c: "Primary key",
        d: "Unique key",
        ans: "ans3"
    },
    {
        Question:"Q9: If the state of the database no longer reflects a real state of the world that the database is supposed to capture, then such a state is called",
        a: "Consistent state",
        b: "Parallel state",
        c: "Durable state",
        d: "Inconsistent state",
        ans: "ans4"
    },
    {
        Question:"Q10:  Ensuring isolation property is the responsibility of the",
        a: "Recovery-management component of the DBMS",
        b: "Concurrency-control component of the DBMS",
        c: "Transaction-management component of the DBMS",
        d: "Buffer management component in DBMS",
        ans: "ans2"
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