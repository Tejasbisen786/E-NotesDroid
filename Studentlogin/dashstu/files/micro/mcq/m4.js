const quizDB = [
    {
       Question:"Q1: While CPU is executing a program, an interrupt exists then it",
       a: "follows the next instruction in the program",
       b: "jumps to instruction in other registers",
       c: "breaks the normal sequence of execution of instructions",
       d: "stops executing the program",
       ans: "ans3"
    },
    {
        Question:"Q2: An interrupt breaks the execution of instructions and diverts its execution to",
       a: "Interrupt service routine",
       b: "Counter word register",
       c: "Execution unit",
       d: "control unit",
       ans: "ans1"
    },
    {
        Question:"Q3: While executing the main program, if two or more interrupts occur, then the sequence of appearance of interrupts is called",
        a: "multi-interrupt",
        b: "nested interrupt",
        c: "interrupt within interrupt",
        d: "nested interrupt and interrupt within interrupt",
        ans: "ans4"
    },
    {
        Question:"Q4: Whenever a number of devices interrupt a CPU at a time, and if the processor is able to handle them properly, it is said to have",
        a: "interrupt handling ability",
        b: "interrupt processing ability",
        c: "multiple interrupt processing ability",
        d: "multiple interrupt executing ability",
        ans: "ans3"
    },
    {
        Question:"Q5: NMI stands for",
        a: "nonmaskable interrupt",
        b: "nonmultiple interrupt",
        c: "nonmovable interrupt",
        d: "none of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q6: If any interrupt request given to an input pin cannot be disabled by any means then the input pin is called",
        a: "maskable interrupt",
        b: "nonmaskable interrupt",
        c: "maskable interrupt and nonmaskable interrupt",
        d: "none of the mentionedd",
        ans: "ans2"
    },
    {
        Question:"Q7: The INTR interrupt may be",
        a: "maskable",
        b: "nonmaskable",
        c: "maskable and nonmaskable",
        d: "none of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q8: The Programmable interrupt controller is required to",
        a: "handle one interrupt request",
        b: "handle one or more interrupt requests at a time",
        c: "handle one or more interrupt requests with a delay",
        d: "handle no interrupt request",
        ans: "ans2"
    },
    {
        Question:"Q9:  The INTR interrupt may be masked using the flag",
        a: "direction flag",
        b: "overflow flag",
        c: "interrupt flag",
        d: "sign flag",
        ans: "ans3"
    },
    {
        Question:"Q10:  If an interrupt is generated from outside the processor then it is an",
        a: "internal interrupt",
        b: "external interrupt",
        c: "interrupt",
        d: "none of the mentioned",
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