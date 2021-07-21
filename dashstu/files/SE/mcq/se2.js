const quizDB = [
    {
       Question:"Q1: The intent of project metrics is:",
       a: "minimization of development schedule",
       b: "for strategic purposes ”",
       c: "assessing project quality on ongoing basis",
       d: "minimization of development schedule and assessing project quality on ongoing basis",
       ans: "ans4"
    },
    {
        Question:"Q2: Which of the following is an indirect measure of product?",
       a: "Quality",
       b: "Complexity",
       c: "Reliability",
       d: "All mentioned above.",
       ans: "ans4"
    },
    {
        Question:"Q3: In size oriented metrics, metrics are developed based on the __________________",
        a: "number of Functions ",
        b: "number of user inputs",
        c: "number of lines of code",
        d: "amount of memory usage",
        ans: "ans3"
    },
    {
        Question:"Q4: SCM stands for",
        a: "Software Control Management",
        b: "Software Configuration Management",
        c: "Software Concept Management",
        d: "None of the mentioned",
        ans: "ans2"
    },
    {
        Question:"Q5: What allows different projects to use the same source files at the same time?",
        a: "Version Control",
        b: "Access control",
        c: "CM Process",
        d: "Version Control and Access control",
        ans: "ans1"
    },
    {
        Question:"Q6: Which of the following are parameters involved in computing the total cost of a software development project?",
        a: "Hardware and software costs",
        b: "Effort costs",
        c: "Travel and training costs",
        d: "All of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q7: Risk management is now recognized as one of the most important project management tasks.",
        a: "True",
        b: "False",
        c: "It can have possiabliy true",
        d: "None of the above",
        ans: "ans1"
    },
    {
        Question:"Q8: Which of the following risk is the failure of a purchased component to perform as expected?",
        a: "Product risk",
        b: "Project risk",
        c: "Business risk",
        d: "Programming risk",
        ans: "ans1"
    },
    {
        Question:"Q9: What assess the risk and your plans for risk mitigation and revise these when you learn more about the risk?",
        a: "Risk monitoring",
        b: "Risk planning",
        c: "Risk analysis",
        d: "Risk identification",
        ans: "ans1"
    },
    {
        Question:"Q10: What complements the formal technical review by assessing a configuration object for characteristics that are generally not considered during review?",
        a: "Software configuration audit",
        b: "Software configuration management",
        c: "Baseline",
        d: "None of the mentioned ",
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