const quizDB = [
    {
       Question:"Q1: The disadvantage of machine level programming is",
       a: "time consuming",
       b: "chances of error are more",
       c: "debugging is difficult",
       d: "all of the mentioned",
       ans: "ans4"
    },
    {
        Question:"Q2: The coded object modules of the program to be assembled are present in",
       a: ".ASM file",
       b: ".OBJ file",
       c: ".EXE file",
       d: ".OBJECT file",
       ans: "ans2"
    },
    {
        Question:"Q3: The advantages of assembly level programming are",
        a: "flexibility of programming is more",
        b: "chances of error are less",
        c: "debugging is easy",
        d: "all of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q4: The extension that is essential for every assembly level program is",
        a: ".ASP",
        b: ".ALP",
        c: ".ASM",
        d: ".PGM",
        ans: "ans3"
    },    
    {
        Question:"Q5: The directory that is under work must have the files that are related to",
        a: "Norton’s editor",
        b: "Assembler",
        c: "Linker",
        d: " All of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q6: The listing file is identified by",
        a: "source file name",
        b: "extension .LSF",
        c: "source file name and an extension .LSF",
        d: "source file name and an extension .LST",
        ans: "ans4"
    },
    {
        Question:"Q7: The extension file that is must for a file to be accepted by the LINK as a valid object file is",
        a: ".OBJ file",
        b: ".EXE file",
        c: ".MASM file",
        d: "DEBUG file",
        ans: "ans1"
    },
    {
        Question:"Q8: The listing file contains",
        a: "total offset map of a source file",
        b: "offset address and labels",
        c: "memory allotments for different labels",
        d: "all of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q9:  DEBUG.COM facilitates the",
        a: "debugging",
        b: "trouble shooting",
        c: "debugging and trouble shooting",
        d: "debugging and assembling",
        ans: "ans3"
    },
    {
        Question:"Q10:  DEBUG is able to troubleshoot only",
        a: ".EXE files",
        b: ".OBJ files",
        c: ".EXE file and .OBJ file",
        d: ".EXE flie and .LST file",
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