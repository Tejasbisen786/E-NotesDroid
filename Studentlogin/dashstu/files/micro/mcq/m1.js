const quizDB = [
    {
       Question:"Q1: 8085 microprocessor is an 8-bit microprocessor designed by?",
       a: "IBM",
       b: "Dell",
       c: "Intel",
       d: "VAX",
       ans: "ans3"
    },
    {
        Question:"Q2: In 8085, 16-bit address bus, which can address upto?",
       a: "16KB",
       b: "32KB",
       c: "64KB",
       d: "128KB",
       ans: "ans3"
    },
    {
        Question:"Q3: There are _______ general purpose registers in 8085 processor",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        ans: "ans2"
    },
    {
        Question:"Q4: It is also a 16-bit register works like stack, which is always incremented/decremented by 2 during push & pop operations.",
        a: "Stack pointer",
        b: "Temporary register",
        c: "Flag register",
        d: "Program counter",
        ans: "ans1"
    },
    {
        Question:"Q5: Flag register is an 8-bit register having __________ 1-bit flip-flops",
        a: "3",
        b: "4",
        c: "5",
        d: "6",
        ans: "ans3"
    },
    {
        Question:"Q6: What is true about Program counter?",
        a: "It is an 8-bit register, which holds the temporary data of arithmetic and logical operations",
        b: "When an instruction is fetched from memory then it is stored in the program counter",
        c: "It provides timing and control signal to the microprocessor",
        d: "It is a 16-bit register used to store the memory address location of the next instruction to be executed",
        ans: "ans4"
    },
    {
        Question:"Q7: This signal indicates that another master is requesting the use of the address and data buses.",
        a: "READY",
        b: "HOLD",
        c: "HLDA",
        d: "INTA",
        ans: "ans2"
    },
    {
        Question:"Q8: This signal is used as the system clock for devices connected with the microprocessor.",
        a: "X1, X2",
        b: "CLK OUT",
        c: "CLK IN",
        d: "IO/M",
        ans: "ans2"
    },
    {
        Question:"Q9:  Which of the following is true about Control and status signals?",
        a: "These signals are used to identify the nature of operation",
        b: "There are 3 control signal and 3 status signals",
        c: "Three status signals are IO/M, S0 & S1",
        d: "All of the above",
        ans: "ans4"
    },
    {
        Question:"Q10:  MVI K, 20F is an example of?",
        a: "Immediate addressing mode",
        b: "Register addressing mode",
        c: "Direct addressing mode",
        d: "Indirect addressing mode",
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