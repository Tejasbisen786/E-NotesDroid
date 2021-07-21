const quizDB = [
    {
       Question:"Q1: Who invented C Language.?",
       a: "Charles Babbage",
       b: "Grahambel",
       c: "Dennis Ritchie",
       d: "Steve Jobs",
       ans: "ans3"
    },
    {
        Question:"Q2: C Language is a successor to which language.?",
       a: "FORTRAN",
       b: "D Language",
       c: "BASIC",
       d: "B Language",
       ans: "ans4"
    },
    {
        Question:"Q3: C is a which level language.?",
        a: "Low Level",
        b: "High Level",
        c: "Low + High",
        d: "None",
        ans: "ans2"
    },
    {
        Question:"Q4: Low level language is .?",
        a: "Human readable like language.",
        b: "language with big program size.",
        c: "language with small program size.",
        d: "Difficult to understand and readability is questionable.",
        ans: "ans4"
    },
    {
        Question:"Q5:High level language is a .?",
        a: "Human readable like language.",
        b: "language with small program size.",
        c: "language with big program size",
        d: "language which is difficult to understand and not human readable.",
        ans: "ans1"
    },
    {
        Question:"Q6: C is _______ type of programming language.?",
        a: "Object Oriented",
        b: "Procedural",
        c: "Bit level language",
        d: "Functional",
        ans: "ans2"
    },
    {
        Question:"Q7:What is the present C Language Standard.?",
        a: "C99 ISO/IEC 9899:1999",
        b: "C11 ISO/IEC 9899:2011",
        c: "C05 ISO/IEC 9899:2005",
        d: "C10 ISO/IEC 9899:2010",
        ans: "ans2"
    },
    {
        Question:"Q8: What are the new features of C11 or ISO IEC 9899 2011 standard.?",
        a: "Type generic Macros, Static Assertions",
        b: "Multi Threading, Anonymous Unions, quick_exit",
        c: "Bounds Checking Interfaces, Anonymous Strurctures",
        d: "All",
        ans: "ans4"
    },
    {
        Question:"Q9: C language was invented in which laboratories.?",
        a: "Uniliver Labs",
        b: "IBM Labs",
        c: "AT&T Bell Labs",
        d: "Verizon Labs",
        ans: "ans3"
    },
    {
        Question:"Q10:  C language was invented to develop which Operating System.?",
        a: "Android",
        b: "Linux",
        c: "Ubuntu",
        d: "Unix",
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