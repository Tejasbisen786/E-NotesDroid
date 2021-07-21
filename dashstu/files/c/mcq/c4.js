const quizDB = [
    {
       Question:"Q1: In C, parameters are always",
       a: "Passed by value",
       b: "Passed by reference",
       c: "Non-pointer variables are passed by value and pointers are passed by reference",
       d: "assed by value result",
       ans: "ans1"
    },
    {
        Question:"Q2: Which of the following is true about return type of functions in C?",
       a: "Functions can return any type",
       b: "Functions can return any type except array and functions",
       c: "Functions can return any type except array, functions and union",
       d: "Functions can return any type except array, functions, function pointer and union",
       ans: "ans2"
    },
    {
        Question:"Q3: Choose correct statement about Functions in C Language.",
        a: "A Function is a group of c statements which can be reused any number of times.",
        b: "Every Function has a return type",
        c: "Every Function may no may not return a value",
        d: "All the above",
        ans: "ans4"
    },
    {
        Question:"Q4: Choose a correct statement about C Language Functions.",
        a: "A function name can not be same as a predefined C Keyword",
        b: "A function name can start with an Underscore( _ ) or A to Z or a to z.",
        c: "Default return type of any function is an Integer.",
        d: "All the above.",
        ans: "ans4"
    },
    {
        Question:"Q5: A function which calls itself is called a ___ function.",
        a: "Self Function",
        b: "Auto Function",
        c: "Recursive Function",
        d: "Static Function",
        ans: "ans3"
    },
    {
        Question:"Q6: How many values can a C Function return at a time.?",
        a: "Only One Value",
        b: "Maximum of two values",
        c: "Maximum of three values",
        d: "Maximum of 8 values",
        ans: "ans1"
    },
    {
        Question:"Q7: What are types of Functions in C Language.?",
        a: "Library Functions",
        b: "User Defined Functions",
        c: "Both Library and User Defined",
        d: "None of the above",
        ans: "ans3"
    },
    {
        Question:"Q8: Choose correct statements about C Language Pass By Value.",
        a: "Pass By Value copies the variable value in one more memory location.",
        b: "Pass By Value does not use Pointers.",
        c: "Pass By Value protects your source or original variables from changes in outside functions or called functions.",
        d: "All",
        ans: "ans4"
    },
    {
        Question:"Q9: Point out the illegal function declaration",
        a: "int 2bhk(int*, int []);",
        b: "int 1bhk(int a);",
        c: "int 1bhk(int);",
        d: "All of the above",
        ans: "ans4"
    },
    {
        Question:"Q10:  Which keyword is used to give back the value",
        a: "static",
        b: "void",
        c: "return",
        d: "const",
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