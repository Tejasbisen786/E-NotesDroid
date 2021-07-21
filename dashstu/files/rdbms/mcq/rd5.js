const quizDB = [
    {
       Question:"Q1: Which of the following is true about the execution section of a PL/SQL block?",
       a: "It is enclosed between the keywords BEGIN and END",
       b: "It is a mandatory section",
       c: "It consists of the executable PL/SQL statements",
       d: "All of the above",
       ans: "ans4"
    },
    {
        Question:"Q2: A subprogram can be created −",
       a: " At schema level.",
       b: "Inside a package",
       c: "Inside a PL/SQL block",
       d: "All of the above",
       ans: "ans4"
    },
    {
        Question:"Q3: Which of the following is not true about PL/SQL records?",
        a: "A PL/SQL record is a data structure that can hold data items of different kinds",
        b: "Records consist of different fields, similar to a row of a database table.",
        c: "You can create table-based and cursor-based records by using the %ROWTYPE attribute.",
        d: "None of these",
        ans: "ans4"
    },
    {
        Question:"Q4: Triggers are written to be executed in response to any of the following events −",
        a: "A database manipulation (DML) statement (DELETE, INSERT, or UPDATE).",
        b: "A database definition (DDL) statement (CREATE, ALTER, or DROP)",
        c: "A database operation (SERVERERROR, LOGON, LOGOFF, STARTUP, or SHUTDOWN).",
        d: "All of the above",
        ans: "ans4"
    },
    {
        Question:"Q5: All objects placed in a package specification are called",
        a: "Public objects",
        b: "Private objects",
        c: "None of the above",
        d: "Both of the above",
        ans: "ans1"
    },
    {
        Question:"Q6: Which of the following is true about database transactions?",
        a: "The SQL statements that constitute a transaction can collectively be either committed, i.e., made permanent to the database or rolled back (undone) from the database",
        b: "A transaction has a beginning and an end",
        c: "None of the above",
        d: "Both of the above",
        ans: "ans4"
    },
    {
        Question:"Q7: A transaction ends when",
        a: "A COMMIT or a ROLLBACK statement is issued",
        b: "A DDL statement, like CREATE TABLE statement, is issued; because in that case a COMMIT is automatically performed",
        c: "A DCL statement, such as a GRANT statement, is issued; because in that case a COMMIT is automatically performed",
        d: "All of the above",
        ans: "ans4"
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
        Question:"Q9: Which of the following is true about the execution section of a PL/SQL block?",
        a: "It is enclosed between the keywords BEGIN and END.",
        b: "It is a mandatory section.",
        c: "It consists of the executable PL/SQL statements",
        d: "All of the above",
        ans: "ans4"
    },
    {
        Question:"Q10:  A subprogram can be created −",
        a: "At schema level",
        b: "Inside a package",
        c: "Inside a PL/SQL block.",
        d: "All of the above.",
        ans: "ans4"
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