const quizDB = [
    {
       Question:"Q1: 8086 Microprocessor supports _______ modes of operation",
       a: "2",
       b: "3",
       c: "4",
       d: "5",
       ans: "ans1"
    },
    {
        Question:"Q2: Which of the following is not a Features of 8086?",
       a: "It uses two stages of pipelining",
       b: "It is available in 3 versions based on the frequency of operation",
       c: "Fetch stage can prefetch up to 6 bytes of instructions",
       d: "It has 512 vectored interrupts",
       ans: "ans4"
    },
    {
        Question:"Q3: 8086 can access up to?",
        a: "512KB",
        b: "1Mb",
        c: "2Mb",
        d: "256KB",
        ans: "ans2"
    },
    {
        Question:"Q4: 8086 has ___ address bus",
        a: "16-bit",
        b: "18-bit",
        c: "20-bit",
        d: "24-bit",
        ans: "ans3"
    },
    {
        Question:"Q5: Which flag is set to 1 when the result of arithmetic or logical operation is zero else it is set to 0?",
        a: "Binary bit",
        b: "Zero flag",
        c: "Sign flag",
        d: "Overflow flag",
        ans: "ans2"
    },
    {
        Question:"Q6: Which flag represents the result when the system capacity is exceeded?",
        a: "Carry flag",
        b: "Auxiliary flag",
        c: "Trap flag",
        d: "Overflow flag",
        ans: "ans4"
    },
    {
        Question:"Q7: It is an edge triggered input, which causes an interrupt request to the microprocessor.",
        a: "NMA",
        b: "INTR",
        c: "INTA",
        d: "ALE",
        ans: "ans1"
    },
    {
        Question:"Q8:  It is used to write the data into the memory or the output device depending on the status of M/IO signal.",
        a: "IR",
        b: "HLDA",
        c: "HR",
        d: "WR",
        ans: "ans4"
    },
    {
        Question:"Q9:  Which intruction is Used to load the address of operand into the provided register?",
        a: "LEA",
        b: "LDS",
        c: "LES",
        d: "LAHF",
        ans: "ans1"
    },
    {
        Question:"Q10:  The different ways in which a source operand is denoted in an instruction is known as",
        a: "Instruction Set",
        b: "Interrupts",
        c: "8086 Configuration",
        d: "Addressing Modes",
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