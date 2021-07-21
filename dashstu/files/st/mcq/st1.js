const quizDB = [
    {
       Question:"Q1: Which of the following term describes testing?",
       a: "Finding broken code",
       b: "Evaluating deliverable to find errors",
       c: "A stage of all projects",
       d: "None of the mentioned",
       ans: "ans2"
    },
    {
        Question:"Q2: Which of the following is not a valid phase of SDLC (Software Development Life Cycle)?",
       a: "Testing Phase",
       b: "Requirement Phase",
       c: "Deployment phase",
       d: "Testing closure",
       ans: "ans4"
    },
    {
        Question:"Q3: The testing have been stopped When ____________ .",
        a: "The faults have been fixed",
        b: "All the tests run",
        c: "The time completed",
        d: "The risk are resolved",
        ans: "ans4"
    },
    {
        Question:"Q4: Testing comes under _____________category of cost of quality.",
        a: "Appraisal",
        b: "Failure",
        c: "Preventive",
        d: "None of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q5: Verification is ________ .",
        a: "Making sure that it is what the user really wants",
        b: "Checking that we are building the right system",
        c: "Checking that we are building the system right",
        d: "Performed by an independent test team",
        ans: "ans2"
    },
    {
        Question:"Q6: Software mistakes during coding are known as _________ .",
        a: "Errors",
        b: "Bugs",
        c: "Failures",
        d: "Defects",
        ans: "ans2"
    },
    {
        Question:"Q7: . In order to control cost, defects should ideally be detected in which phase:",
        a: "Coding",
        b: "Design",
        c: "Implementation",
        d: "Requirements Gathering",
        ans: "ans4"
    },
    {
        Question:"Q8: The primary objective of formal technical reviews is to find _________ during the process so that they do not become defects after release of the software.",
        a: "errors",
        b: "equivalent faults",
        c: "failure cause",
        d: "none of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q9: Software quality assurance consists of the auditing and reporting functions of management.",
        a: "true",
        b: "false",
        c: "It can be true in some case",
        d: "It can be false in some case",
        ans: "ans1"
    },
    {
        Question:"Q10: Does the customer get a 100% bug-free product?",
        a: "Product is old",
        b: "Developers are super",
        c: "The testing team is not good",
        d: "All of the above",
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