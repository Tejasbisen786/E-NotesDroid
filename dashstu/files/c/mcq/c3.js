const quizDB = [
    {
       Question:"Q1: Which datatype can accept the switch statement?",
       a: "int",
       b: "char",
       c: "long",
       d: "all of the mentioned",
       ans: "ans4"
    },
    {
        Question:"Q2: Choose a right C Statement.",
       a: "While Block",
       b: "For Block",
       c: "Do While Block",
       d: "All the above.",
       ans: "ans4"
    },
    {
        Question:"Q3: Which loop is faster in C Language, for, while or Do While.?",
        a: "for",
        b: "while",
        c: "do while",
        d: "All work at same speed",
        ans: "ans4"
    },
    {
        Question:"Q4: Choose correct Syntax for C Arithmetic Compound Assignment Operators.",
        a: "a+=b is (a= a+ b) ,a-=b is (a= a-b)",
        b: "a*=b is (a=a*b), a/=b is (a = a/b)",
        c: "a%=b is (a=a%b)",
        d: "All the above.",
        ans: "ans4"
    },
    {
        Question:"Q5: What is the way to suddenly come out of or Quit any Loop in C Language.?",
        a: "continue; statement",
        b: "break; statement",
        c: "leave; statement",
        d: "quit; statement",
        ans: "ans2"
    },
    {
        Question:"Q6: Which of the following is binary operator?",
        a: "&&",
        b: "||",
        c: "both i & ii",
        d: "!",
        ans: "ans4"
    },
    {
        Question:"Q7: The conditional operator are also known as",
        a: "Relational operator",
        b: "Binary operator",
        c: "Ternary operator",
        d: "Arithematic operator",
        ans: "ans3"
    },
    {
        Question:"Q8: What will be the value of y if x = 8? y = (x  > 6 ? 4 : 6);",
        a: "Compilation Error",
        b: "0",
        c: "4",
        d: "6",
        ans: "ans3"
    },
    {
        Question:"Q9: Which of the following operator reverses the result of expression it operators on",
        a: " !",
        b: "||",
        c: "&&",
        d: "All of the above",
        ans: "ans1"
    },
    {
        Question:"Q10:  If you have to make decision based on multiple choices, which of the following is best suited?",
        a: "if",
        b: "if-else",
        c: "if-else-if",
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