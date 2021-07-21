const quizDB = [
    {
       Question:"Q1: A is the system which provides guidelines for the organization and its employees to identify the needs of customer and to ___ and to meet these needs.",
       a: "design and develop",
       b: "deliver the products or services",
       c: "produce",
       d: " all of the above",
       ans: "ans4"
    },
    {
        Question:"Q2: ___ is a series of standards dealing with quality management systems",
       a: "ISO 9000",
       b: "ISO 9001",
       c: "ISO 9002",
       d: "ISO 9003",
       ans: "ans1"
    },
    {
        Question:"Q3: The following standard is for Environmental Management System Guidelines for Principles, Systems, and Supporting Techniques.",
        a: "ISO 9001",
        b: "QS 9000",
        c: "TS 9000",
        d: "ISO 14001",
        ans: "ans4"
    },
    {
        Question:"Q4: Following is (are) the benefit(s) of ISO 9000 Certification.",
        a: "Greater quality awareness",
        b: "Increased market share",
        c: "Reduced costs",
        d: "All of the above",
        ans: "ans4"
    },
    {
        Question:"Q5: Following is (are) the Limitation(s) of ISO 9000 Certification.",
        a: "does not provide any guideline for defining an appropriate process",
        b: "process is not foolproof",
        c: "does not automatically lead to Total Quality Management (TQM)",
        d: "all of the above",
        ans: "ans4"
    },
    {
        Question:"Q6: ISO 9001 has ___ clauses.",
        a: "five",
        b: "six",
        c: "seven",
        d: "eight",
        ans: "ans4"
    },
    {
        Question:"Q7: Cleaner Production is the continual effort to ___, without reducing production capacity.",
        a: "prevent pollution",
        b: "reduce the use of energy",
        c: "reduce the use of water and material resources and minimize waste",
        d: "all of the above",
        ans: "ans4"
    },
    {
        Question:"Q8: A situation in which one country, region, or producer can produce a particular commodity more cheaply than another country, region or producer.",
        a: "Competitive advantage",
        b: "Geographical advantage",
        c: "Regional advantage",
        d: "All of the above",
        ans: "ans1"
    },
    {
        Question:"Q9: ___ is a non-profit organization that develops and publishes standards of virtually every possible sort, ranging from standards for information technology to fluid dynamics and nuclear energy.",
        a: "International Organization for Statistical",
        b: "International Organization for Standardization",
        c: "International Organization for Systems",
        d: "None of the above",
        ans: "ans2"
    },
    {
        Question:"Q10:  When the money saved by renewable energy and energy efficiency more than pay for the capital and maintenance costs over a given period.",
        a: "Cost Efficiency",
        b: "Cost Improvement",
        c: "Cost Effectiveness",
        d: "None of the above",
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