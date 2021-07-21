const quizDB = [
    {
       Question:"Q1: Which of the following is not an operating system?",
       a: "Windows",
       b: "Linux",
       c: "Oracle",
       d: "DOS",
       ans: "ans3"
    },
    {
        Question:"Q2: What is the maximum length of the filename in DOS?",
       a: "4",
       b: "5",
       c: "8",
       d: "12",
       ans: "ans3"
    },
    {
        Question:"Q3: When was the first operating system developed?",
        a: "1948",
        b: "1949",
        c: "1950",
        d: "1951",
        ans: "ans3"
    },
    {
        Question:"Q4: When were MS windows operating systems proposed?",
        a: "1994",
        b: "1990",
        c: "1992",
        d: "1985",
        ans: "ans4"
    },
    {
        Question:"Q5:Which of the following is the extension of Notepad?",
        a: ".txt",
        b: ".xls",
        c: ".ppt",
        d: ".bmp",
        ans: "ans1"
    },
    {
        Question:"Q6: What else is a command interpreter called?",
        a: "prompt",
        b: "kernel",
        c: "shell",
        d: "command",
        ans: "ans3"
    },
    {
        Question:"Q7:What is the full name of FAT?",
        a: "File attribute table",
        b: "File allocation table",
        c: "Font attribute table",
        d: "Format allocation table",
        ans: "ans2"
    },
    {
        Question:"Q8: BIOS is used?",
        a: "By operating system",
        b: "By compiler",
        c: "By interpreter",
        d: "By application software",
        ans: "ans1"
    },
    {
        Question:"Q9: What is the mean of the Booting in the operating system?",
        a: "Restarting computer",
        b: "Install the program",
        c: "To scan",
        d: "To turn of",
        ans: "ans1"
    },
    {
        Question:"Q10:  When does page fault occur?",
        a: "The page is present in memory.",
        b: "The deadlock occurs.",
        c: "The page does not present in memory.",
        d: "The buffering occurs.",
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