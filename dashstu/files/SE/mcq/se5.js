const quizDB = [
    {
       Question:"Q1: The Nonfunctional components consist of ___________",
       a: "Re usability",
       b: "Adaptability",
       c: "Reliability",
       d: "All mentioned above",
       ans: "ans4"
    },
    {
        Question:"Q2: What type of abstractions are used in software design ?",
       a: "Control",
       b: "Environmental",
       c: "Procedural",
       d: "All mentioned above.",
       ans: "ans4"
    },
    {
        Question:"Q3: Which of the following can be used to represent the architectural design of piece of software ?",
        a: "Dynamic model ",
        b: "Structural model",
        c: "Functional model",
        d: "All the above",
        ans: "ans4"
    },
    {
        Question:"Q4: Since modularity is an important design goal it is not possible to have too many modules in a proposed design",
        a: "True ",
        b: " False ",
        c: "It other case it is not sure",
        d: "All the above",
        ans: "ans2"
    },
    {
        Question:"Q5: Coupling is qualitative Indication of the degree to which a module",
        a: "Can we written more compactly",
        b: "Focuses on just one thing",
        c: "Is able to complete its function in a timely manner",
        d: "Is connected to other modules and the outside world",
        ans: "ans4"
    },
    {
        Question:"Q6: Which of the following are areas of concern in the design model?",
        a: "Architecture",
        b: "Data",
        c: "Interfaces",
        d: "All mentioned above",
        ans: "ans4"
    },
    {
        Question:"Q7:Design patterns are not applicable to the design of object oriented software?",
        a: "True",
        b: "False",
        c: "It can be False",
        d: "not mentioned above",
        ans: "ans2"
    },
    {
        Question:"Q8: Which of the following is are the type of cohesion",
        a: "Functional",
        b: "Layer",
        c: "Communication",
        d: "All mentioned above",
        ans: "ans4"
    },
    {
        Question:"Q9: What is the meaning of Functional Cohesion?",
        a: "Operations are part of single functional task and are placed in same procedures",
        b: "All operations that access the same data are defined within one class.",
        c: "All operations that access the data from outside the module.",
        d: "None of the above.",
        ans: "ans1"
    },
    {
        Question:"Q10: What is / are the characteristics of a well-formed design class? ",
        a: " Primitiveness",
        b: "High cohesion",
        c: "Low coupling",
        d: "All of the above ",
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