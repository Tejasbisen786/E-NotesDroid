const quizDB = [
    {
       Question:"Q1: To be ethical and social towards needs of society is ______________ objective of HRM",
       a: "societal",
       b: "Operational",
       c: "Functional",
       d: "none of the above",
       ans: "ans1"
    },
    {
        Question:"Q2: The fundamental objective of every organisation is",
       a: "Survival",
       b: "Achieving targets",
       c: "Profit ",
       d: "compete in competition",
       ans: "ans1"
    },
    {
        Question:"Q3: The characteristics of human resources are ________ in nature",
        a: "homogeneous",
        b: "heterogeneous",
        c: "ductility",
        d: "None of the above",
        ans: "ans2"
    },
    {
        Question:"Q4: The scope of human resource management includes",
        a: "procurement",
        b: "development",
        c: "compensation",
        d: "All of the above",
        ans: "ans4"
    },
    {
        Question:"Q5: Which one of the following is not the principle of Henry Fayol?",
        a: "Production",
        b: "Productivity ",
        c: "Profit",
        d: "Power",
        ans: "ans2"
    },
    {
        Question:"Q6: Personnel management is",
        a: "Proactive",
        b: "Continuous",
        c: "Multi discipline",
        d: "Routine",
        ans: "ans4"
    },
    {
        Question:"Q7: KSA represents",
        a: "Knowledge, Skill, Aptitude",
        b: "Knowledge, System, Aptitude",
        c: "Knowledge, Skill, Approach",
        d: "Knowledge, Skill, Attitude",
        ans: "ans4"
    },
    {
        Question:"Q8: In modern scenario a companies long term advantage lies in",
        a: "Technology",
        b: "Business location",
        c: "New market",
        d: "Human resource",
        ans: "ans4"
    },
    {
        Question:"Q9: The functions of HRM doesn’t include the following head",
        a: "Managerial",
        b: "Analytical",
        c: "Developmental",
        d: "Departmenta",
        ans: "ans4"
    },
    {
        Question:"Q10:  The functions of HRM is pertained to",
        a: "Particular department",
        b: "top level management",
        c: "whole organisation",
        d: "line managers",
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