const quizDB = [
    {
       Question:"Q1: OLAP stands for",
       a: "Online analytical processing",
       b: "Online analysis processing",
       c: "Online transaction processing",
       d: "Online aggregate processing",
       ans: "ans1"
    },
    {
        Question:"Q2:  Data that can be modeled as dimension attributes and measure attributes are called _______ data.",
       a: "Multidimensional",
       b: "Singledimensional",
       c: "Measured",
       d: "Dimensional",
       ans: "ans1"
    },
    {
        Question:"Q3: The generalization of cross-tab which is represented visually is ____________ which is also called as data cube.",
        a: "Two dimensional cube",
        b: "Multidimensional cube",
        c: "N-dimensional cube",
        d: "Cuboid",
        ans: "ans1"
    },
    {
        Question:"Q4: The process of viewing the cross-tab (Single dimensional) with a fixed value of one attribute is",
        a: "Slicing",
        b: "Dicing",
        c: "Pivoting",
        d: "Both Slicing and Dicing",
        ans: "ans1"
    },
    {
        Question:"Q5: The operation of moving from finer-granularity data to a coarser granularity (by means of aggregation) is called a ________",
        a: "Rollup",
        b: "Drill down",
        c: "Dicing",
        d: "Pivoting",
        ans: "ans1"
    },
    {
        Question:"Q6: In SQL the cross-tabs are created using",
        a: "Slice",
        b: "Dice",
        c: "Pivot",
        d: "All of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q7: What do data warehouses support?",
        a: "OLAP",
        b: "OLTP",
        c: "OLAP and OLTP",
        d: "Operational databases",
        ans: "ans1"
    },
    {
        Question:"Q8: Which one of the following is the right syntax for DECODE?",
        a: "DECODE (search, expression, result [, search, result]… [, default])",
        b: "DECODE (expression, result [, search, result]… [, default], search)",
        c: "DECODE (search, result [, search, result]… [, default], expression)",
        d: "DECODE (expression, search, result [, search, result]… [, default])",
        ans: "ans4"
    },
    {
        Question:"Q9: How many tier data warehouse architecture?",
        a: "2",
        b: "1",
        c: "4",
        d: "3",
        ans: "ans3"
    },
    {
        Question:"Q10:  Which of the following tier is the front-end client layer?",
        a: "Bottom Tier",
        b: "Middle Tier",
        c: "Top Tier",
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