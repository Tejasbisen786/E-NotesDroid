const quizDB = [
    {
       Question:"Q1: What is the type of the following assignment expression if x is of type float and y is of type int?y = x + y;",
       a: "int",
       b: "float",
       c: "there is no type for an assignment expression",
       d: "double",
       ans: "ans1"
    },
    {
        Question:"Q2: What will be the value of the following assignment expression? (x = foo())!= 1 considering foo() returns 2",
       a: "2",
       b: "True",
       c: "1",
       d: "0",
       ans: "ans1"
    },
    {
        Question:"Q3: Operation “a = a * b + a” can also be written as ___________",
        a: "a *= b + 1;",
        b: "(c = a * b)!=(a = c + a);",
        c: "a = (b + 1)* a;",
        d: "All of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q4: What will be the final value of c in the following C statement? (Initial value: c = 2) 1. c <<= 1;",
        a: "c = 1;",
        b: "c = 2;",
        c: "c = 3;",
        d: "c = 4;",
        ans: "ans4"
    },
    {
        Question:"Q5: Which of the following is an invalid assignment operator?",
        a: "a %= 10;",
        b: "a /= 10;",
        c: "a |= 10;",
        d: "None of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q6: What will be the final values of a and c in the following C statement? (Initial values: a = 2, c = 1) c = (c) ? a = 0 : 2;",
        a: "a = 0, c = 0;",
        b: "a = 2, c = 2;",
        c: "a = 2, c = 2;",
        d: "a = 1, c = 2;",
        ans: "ans1"
    },
    {
        Question:"Q7: What will be the data type of the following expression? (Initial data type: a = int, var1 = double, var2 = float) expression (a < 50)? var1 : var2;",
        a: "int",
        b: "float",
        c: "double",
        d: "Cannot be determined",
        ans: "ans3"
    },
    {
        Question:"Q8: Which expression has to be present in the following? exp1 ? exp2 : exp3;",
        a: "exp1",
        b: "exp2",
        c: "exp3",
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