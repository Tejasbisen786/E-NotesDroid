const quizDB = [
    {
       Question:"Q1: A ___ is a computer application used to support determinations, decisions, and courses of action in an organization or a business.",
       a: "Decision Support System (DSS)",
       b: "Transaction Process System",
       c: "Executive Support System",
       d: "None of the mentioned above",
       ans: "ans1"
    },
    {
        Question:"Q2: A Decision Support System (DSS) is an application for information systems that helps in ___",
       a: "System Design",
       b: "System Analysis",
       c: "Decision making",
       d: "All of the mentioned above",
       ans: "ans3"
    },
    {
        Question:"Q3: DSS is most widely used in the ___, analysis in an organization.",
        a: "Planning",
        b: "Support",
        c: "System maintenance",
        d: "All of the mentioned above",
        ans: "ans1"
    },
    {
        Question:"Q4: A decision support system differs from an ordinary ___",
        a: "Operating System",
        b: "Transaction Process System",
        c: "Operational Application",
        d: "None of the mentioned above",
        ans: "ans3"
    },
    {
        Question:"Q5: A ___ can integrate all multiple variables and produces an outcome.",
        a: "ESS",
        b: "DSS",
        c: "TPS",
        d: "All of these",
        ans: "ans2"
    },
    {
        Question:"Q6:  Which of the following is / are some of the main areas of operation of DSS.",
        a: "Transaction processing",
        b: "Production, finance, and marketing",
        c: "Executive Support System",
        d: "None of the mentioned above",
        ans: "ans2"
    },
    {
        Question:"Q7: Which of the following is a good characteristic of a DSS?",
        a: "It has an increment model",
        b: "Responds quickly to decision makers to help in decision making",
        c: "Automates decision making process",
        d: "None of the mentioned above",
        ans: "ans2"
    },
    {
        Question:"Q8: Which of the following is / are the components of a Decision Support System.",
        a: "Knowledge Base",
        b: "Model Management System",
        c: "User Interface",
        d: "All of these",
        ans: "ans4"
    },
    {
        Question:"Q9:  The ___ includes tools that help the end-user of a DSS to navigate through the system.",
        a: "User Interface",
        b: "Transaction Process System",
        c: "Executive Support System",
        d: "None of the mentioned above",
        ans: "ans1"
    },
    {
        Question:"Q10:  Database is just like a container which stores data in a ___ manner",
        a: "Organized",
        b: "Systematic",
        c: "Ordered",
        d: "All of the mentioned above",
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