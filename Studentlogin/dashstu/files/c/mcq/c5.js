const quizDB = [
    {
       Question:"Q1: The reason for using pointers in a Cprogram is",
       a: "Pointers allow different functions to share and modify their local variables",
       b: "To pass large structures so that complete copy of the structure can be avoided",
       c: "Pointers enable complex 'linked' data structures like linked lists and binary trees",
       d: "All of the above",
       ans: "ans1"
    },
    {
        Question:"Q2: Prior to using a pointer variable it should be",
       a: "Initialized",
       b: "Declared",
       c: "Both A and C",
       d: "None of the above",
       ans: "ans3"
    },
    {
        Question:"Q3: Which is an indirection operator among the following?",
        a: "*",
        b: "&",
        c: "#",
        d: "%",
        ans: "ans1"
    },
    {
        Question:"Q4: Which of the following is most valid statement? ",
        a: "int*matrix; .....; free(void) matrix;",
        b: "int*matrix; .....; if(matrix!=null) free(void*)matrix;",
        c: "Both A and B",
        d: "None of the above",
        ans: "ans4"
    },
    {
        Question:"Q5: Which of the following is the correct syntax to send an array as a parameter to function?",
        a: "func(&array);",
        b: "func(#array);",
        c: "func(*array);",
        d: "func(array[size]);",
        ans: "ans1"
    },
    {
        Question:"Q6: Which of the following can never be sent by call-by-value?",
        a: "Variable",
        b: "Array",
        c: "Structures",
        d: "Both Array and Structures",
        ans: "ans2"
    },
    {
        Question:"Q7: Which type of variables can have the same name in a different function?",
        a: "Global variables",
        b: "Static variables",
        c: "Function arguments",
        d: "Both static variables and Function arguments",
        ans: "ans4"
    },
    {
        Question:"Q8: Arguments that take input by user before running a program are called?",
        a: "Main function arguments",
        b: "Main arguments",
        c: "Command-Line arguments",
        d: "Parameterized arguments",
        ans: "ans3"
    },
    {
        Question:"Q9: What is the maximum number of arguments that can be passed in a single function?",
        a: "127",
        b: "253",
        c: "361",
        d: "No limits in number of arguments",
        ans: "ans2"
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