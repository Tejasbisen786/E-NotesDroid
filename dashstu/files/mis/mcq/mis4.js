const quizDB = [
    {
       Question:"Q1: An ...................... is a set of processes and procedures that transform data into information and knowledge.",
       a: "information system",
       b: "Knowledge system",
       c: "Database system",
       d: "Computer system",
       ans: "ans1"
    },
    {
        Question:"Q2: A system is called ..................... when the inputs, process and the outputs are known with certainty.",
       a: "Probablistics",
       b: "Deterministic",
       c: "Open",
       d: "Close",
       ans: "ans2"
    },
    {
        Question:"Q3: Which of the following steps is/are the implementation plans involved in MIS? i) Preparing organizational plans ii) Planning of work flow iii) Training of personnel iv) Development of software v) Acquiring computer hardware",
        a: "Only i, ii, and iii",
        b: "Only ii, iii and iv",
        c: "Only i, iii and iv",
        d: "All i, ii, iii, and iv",
        ans: "ans1"
    },
    {
        Question:"Q4: Which of the following is included in the Office automation systems?i) Word processing ii) Electronic mail iii) Voice mail iv) Electronic calendaring v) Audio conferencing",
        a: "Only i, ii, and iii",
        b: "Only ii, iii and iv",
        c: "Only i, iii and iv",
        d: "All i, ii, iii, and iv",
        ans: "ans1"
    },
    {
        Question:"Q5: In a typical ................ network, application processing is shared between clients and one more servers.",
        a: "client server computing",
        b: "cloud computing",
        c: "mobile computing",
        d: "data computing",
        ans: "ans1"
    },
    {
        Question:"Q6: The .................... is defined as a set of activities performed across the organization creating as output of value to the customer.",
        a: "development process",
        b: "business process",
        c: "quality process",
        d: "customer focus",
        ans: "ans2"
    },
    {
        Question:"Q7: Which of the following is a computer based system that stores and manipulates data that are viewed from a geographical point or reference?",
        a: "Geographical Information System (GIS)",
        b: "Database System (DS)",
        c: "Geographic System (GS)",
        d: "Software System (SS)",
        ans: "ans1"
    },
    {
        Question:"Q8: Which of the following is a program that models the pattern recognition capabilities of the human brain",
        a: "An expert system",
        b: "Artificial Intelligence",
        c: "Neutral network",
        d: "Development engine",
        ans: "ans3"
    },
    {
        Question:"Q9:  ........................... is the process of defining the current problem, determining why a new system is needed, identifying the objectives of the proposed system.",
        a: "Feasibility analysis",
        b: "System Analysis",
        c: "System definition",
        d: "System requirements",
        ans: "ans3"
    },
    {
        Question:"Q10:  What is unicode?",
        a: "Standard font",
        b: "Software",
        c: "Character encoding system",
        d: "Keyboard layout",
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