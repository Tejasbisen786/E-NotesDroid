const quizDB = [
    {
       Question:"Q1: What are the major components of the JDBC?",
       a: "DriverManager, Driver, Connection, Statement, and ResultSet",
       b: "DriverManager, Driver, Connection, and Statement",
       c: "DriverManager, Statement, and ResultSet",
       d: "DriverManager, Connection, Statement, and ResultSet",
       ans: "ans1"
    },
    {
        Question:"Q2:  Select the packages in which JDBC classes are defined?",
       a: "jdbc and javax.jdbc",
       b: "rdb and javax.rdb",
       c: "jdbc and java.jdbc.sql",
       d: "sql and javax.sql",
       ans: "ans4"
    },
    {
        Question:"Q3: Thin driver is also known as?",
        a: "Type 3 Driver",
        b: "Type-2 Driver",
        c: "Type-4 Driver",
        d: "Type-1 Driver",
        ans: "ans3"
    },
    {
        Question:"Q4:  Which of the following method is used to perform DML statements in JDBC?",
        a: "executeResult()",
        b: "executeQuery()",
        c: "executeUpdate()",
        d: "execute()",
        ans: "ans3"
    },
    {
        Question:"Q5:How many transaction isolation levels provide the JDBC through the Connection interface?",
        a: "3",
        b: "4",
        c: "7",
        d: "2",
        ans: "ans2"
    },
    {
        Question:"Q6: Which of the following method is static and synchronized in JDBC API?",
        a: "getConnection()",
        b: "prepareCall()",
        c: "executeUpdate()",
        d: "executeQuery()",
        ans: "ans1"
    },
    {
        Question:"Q7:Which methods are required to load a database driver in JDBC?",
        a: "getConnection()",
        b: "registerDriver()",
        c: "forName()",
        d: "Both b and c",
        ans: "ans4"
    },
    {
        Question:"Q8: Parameterized queries can be executed by?",
        a: "ParameterizedStatement",
        b: "PreparedStatement",
        c: "CallableStatement and Parameterized Statement",
        d: "All kinds of Statements",
        ans: "ans2"
    },
    {
        Question:"Q9: Which of the following is not a valid statement in JDBC?",
        a: "Statement",
        b: "PreparedStatement",
        c: "QueryStatement",
        d: "CallableStatement",
        ans: "ans3"
    },
    {
        Question:"Q10:  Identify the isolation level that prevents the dirty in the JDBC Connection class?",
        a: "TRANSACTION_READABLE_READ",
        b: "TRANSACTION_READ_COMMITTED",
        c: "TRANSACTION_READ_UNCOMMITTED",
        d: "TRANSACTION_NONE",
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