const quizDB = [
    {
       Question:"Q1: Which header file is required to use file I/O operations?",
       a: "<ifstream>",
       b: "<ostream>",
       c: "<fstream>",
       d: "<iostream>",
       ans: "ans3"
    },
    {
        Question:"Q2: Which of the following is used to create an output stream?",
       a: "ofstream",
       b: "ifstream",
       c: "iostream",
       d: "fsstream",
       ans: "ans1"
    },
    {
        Question:"Q3: Which of the following is used to create a stream that performs both input and output operations?",
        a: "ofstream",
        b: "ifstream",
        c: "iostream",
        d: "fstream",
        ans: "ans4"
    },
    {
        Question:"Q4: Which of the following is not used as a file opening mode?",
        a: "ios::trunc",
        b: "ios::binary",
        c: "ios::in",
        d: "ios::ate",
        ans: "ans1"
    },
    {
        Question:"Q5: By default, all the files in C++ are opened in _________ mode.",
        a: "Text",
        b: "Binary",
        c: "ISCII",
        d: "VTC",
        ans: "ans1"
    },
    {
        Question:"Q6: What is the use of ios::trunc mode?",
        a: "To open a file in input mode",
        b: "To open a file in output mode",
        c: "To truncate an existing file to half",
        d: "To truncate an existing file to zero",
        ans: "ans4"
    },
    {
        Question:"Q7: Which of the following is the default mode of the opening using the ofstream class?",
        a: "ios::in",
        b: "ios::out",
        c: "ios::app",
        d: "ios::trunc",
        ans: "ans2"
    },
    {
        Question:"Q8: What is the return type open() method?",
        a: "int",
        b: "char",
        c: "bool",
        d: "float",
        ans: "ans3"
    },
    {
        Question:"Q9:  Which of the following is not used to seek file pointer?",
        a: "ios::set",
        b: "ios::end",
        c: "ios::cur",
        d: "ios::beg",
        ans: "ans1"
    },
    {
        Question:"Q10: Which of the following is the default mode of the opening using the ifstream class?",
        a: "ios::in",
        b: "ios::out",
        c: "ios::app",
        d: "ios::trunc",
        ans: "ans1"
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