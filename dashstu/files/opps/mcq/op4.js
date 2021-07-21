const quizDB = [
    {
       Question:"Q1: Which of the following is the correct way to declare a pointer ?",
       a: "int *ptr",
       b: "int ptr",
       c: "int &ptr",
       d: "All of the above",
       ans: "ans1"
    },
    {
        Question:"Q2: Which of the following gives the [value] stored at the address pointed to by the pointer : ptr?",
       a: "Value(ptr)",
       b: "ptr",
       c: "&ptr",
       d: "*ptr",
       ans: "ans4"
    },
    {
        Question:"Q3: A pointer can be initialized with",
        a: "Null",
        b: "Zero",
        c: "Address of an object of same type",
        d: "All of the above",
        ans: "ans4"
    },
    {
        Question:"Q4: Choose the right option string* x, y;",
        a: "x is a pointer to a string, y is a string",
        b: "y is a pointer to a string, x is a string",
        c: "Both x and y are pointers to string types",
        d: "none of the above",
        ans: "ans1"
    },
    {
        Question:"Q5: Generic pointers can be declared with__________ .",
        a: "auto",
        b: "void",
        c: "asm",
        d: "None of the above",
        ans: "ans2"
    },
    {
        Question:"Q6: What is size of generic pointer in c?",
        a: "0",
        b: "1",
        c: "2",
        d: "Null",
        ans: "ans3"
    },
    {
        Question:"Q7: Which from the following is not a correct way to pass a pointer to a function?",
        a: "Non-constant pointer to non-constant data",
        b: "A non-constant pointer to constant data",
        c: "A constant pointer to non-constant data",
        d: "All of the above",
        ans: "ans4"
    },
    {
        Question:"Q8: What does the following statement mean?int (*fp)(char*)",
        a: "Pointer to a pointer",
        b: "Pointer to an array of chars",
        c: "Pointer to function taking a char* argument and returns an int",
        d: "Function taking a char* argument and returning a pointer to int",
        ans: "ans3"
    },
    {
        Question:"Q9: A void pointer cannot point to which of these?",
        a: "Methods in c++",
        b: "Class member in c++",
        c: "Both A & B",
        d: "None of the above",
        ans: "ans2"
    },
    {
        Question:"Q10:  Referencing a value through a pointer is called",
        a: "Direct calling",
        b: "Indirection",
        c: "Pointer referencing",
        d: "All of the above",
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