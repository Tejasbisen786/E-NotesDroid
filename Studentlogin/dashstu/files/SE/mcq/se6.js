const quizDB = [
    {
       Question:"Q1: Quality Management in software engineering is also known as",
       a: "SQA",
       b: "SQM",
       c: "SQI",
       d: "SQA and SQM",
       ans: "ans1"
    },
    {
        Question:"Q2: Quality also can be looked at in terms of user satisfaction which includes",
       a: "A compliant product",
       b: "Good quality output",
       c: "Delivery within budget and schedule",
       d: "All mentioned above.",
       ans: "ans4"
    },
    {
        Question:"Q3: Which of the following is not a core step of Six Sigma?",
        a: "Define ",
        b: "Control",
        c: "Measure",
        d: "Analyze",
        ans: "ans2"
    },
    {
        Question:"Q4: Suitability, Accuracy, Interoperability, and security are what type quality attribute of ISO 9126 ?",
        a: " Reliability",
        b: "Efficiency",
        c: "Functionality",
        d: "Usability",
        ans: "ans3"
    },
    {
        Question:"Q5: Software safety is equivalent to software reliability.",
        a: "True",
        b: "False",
        c: "It can be true",
        d: "All mentioned above.",
        ans: "ans2"
    },
    {
        Question:"Q6: Which of the following is not a section in the standard for SQA plans recommended by IEEE?",
        a: "Budget ",
        b: "Time",
        c: "People",
        d: "None of the above",
        ans: "ans1"
    },
    {
        Question:"Q7:What is the project and process level that provides the Quality Metric benefit?",
        a: "Defect amplification",
        b: "Defect removal efficiency",
        c: "Measuring quality",
        d: "All mentioned above",
        ans: "ans2"
    },
    {
        Question:"Q8: How many product quality factors are proposed in McCall quality model?",
        a: "2",
        b: "3",
        c: "11",
        d: "8",
        ans: "ans2"
    },
    {
        Question:"Q9: What is MTTF ?",
        a: "Maximum time to failure",
        b: "Mean time to failure",
        c: "Minimum time to failure",
        d: "Minimum time to failure",
        ans: "ans2"
    },
    {
        Question:"Q10: Time Behavior and Resource Behavior fall under which quality attribute of ISO 9126 ?",
        a: "Reliability",
        b: "Efficiency",
        c: "Functionality",
        d: "Usability",
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