const quizDB = [
    {
       Question:"Q1: What do you mean by one to many relationship between Teacher and Class table?",
       a: "One class may have many teachers",
       b: "One teacher can have many classes",
       c: "Many classes may have many teachers",
       d: "Many teachers may have many classes",
       ans: "ans2"
    },
    {
        Question:"Q2: What are the different view to present a Table ?",
       a: "Datasheet View",
       b: "Design View",
       c: "Pivote TableView",
       d: "All Of Above",
       ans: "ans4"
    },
    {
        Question:"Q3: In one-to-many relationship the table on 'many' side is called _______",
        a: "Parent",
        b: "Child",
        c: "Sister",
        d: "Master",
        ans: "ans2"
    },
    {
        Question:"Q4: In which state one gathers and list all the necessary fields for the database design project.",
        a: "Data Definition",
        b: "Data Refinement",
        c: "Establishing Relationship",
        d: "None Of The Above",
        ans: "ans1"
    },
    {
        Question:"Q5: Which of the following enables us to view data from a table based on a specific criterion",
        a: "Form",
        b: "Query",
        c: "Macro",
        d: "Report",
        ans: "ans2"
    },
    {
        Question:"Q6: Which database object is ideal to view, change, andanalyze datain different ways ?",
        a: "Table",
        b: "Form",
        c: "Query",
        d: "Report",
        ans: "ans3"
    },
    {
        Question:"Q7: In one-to-many relationship the table in 'one' side is called _______",
        a: "Child",
        b: "Owner",
        c: "Parent",
        d: "Owner",
        ans: "ans3"
    },
    {
        Question:"Q8: Which data type allows alphanumeric characters and special symbols to be entered?",
        a: "Text",
        b: "Memo",
        c: "Auto number",
        d: "Mixed",
        ans: "ans1"
    },
    {
        Question:"Q9: It is used to establish an association between related tables.",
        a: "Line",
        b: "Relationship",
        c: "Primary Key",
        d: "Records",
        ans: "ans2"
    },
    {
        Question:"Q10:  This key that uniquely identifies each record is called :",
        a: "Primary Key",
        b: "Key Record",
        c: "Unique Key",
        d: "Field Name",
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