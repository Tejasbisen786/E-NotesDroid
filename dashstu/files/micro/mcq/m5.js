const quizDB = [
    {
       Question:"Q1: The device that enables the microprocessor to read data from the external devices is",
       a: "printer",
       b: "joystick",
       c: "display",
       d: "reader",
       ans: "ans2"
    },
    {
        Question:"Q2: The example of output device is",
       a: "CRT display",
       b: "7-segment display",
       c: "Printer",
       d: "All of the mentioned",
       ans: "ans4"
    },
    {
        Question:"Q3: The input and output operations are respectively similar to the operations,",
        a: "read, read",
        b: "write, write",
        c: "read, write",
        d: "write, read",
        ans: "ans3"
    },
    {
        Question:"Q4: The operation, IOWR (active low) performs",
        a: "write operation on input data",
        b: "write operation on output data",
        c: "read operation on input data",
        d: "read operation on output data",
        ans: "ans2"
    },
    {
        Question:"Q5: The latch or IC 74LS373 acts as",
        a: "good input port",
        b: "bad input port",
        c: "good output port",
        d: "bad output port",
        ans: "ans3"
    },
    {
        Question:"Q6: While performing read operation, one must take care that much current should not be",
        a: "sourced from data lines",
        b: "sinked from data lines",
        c: "sourced or sinked from data lines",
        d: "sinked from address lines",
        ans: "ans3"
    },
    {
        Question:"Q7: To avoid loading during read operation, the device used is",
        a: "latch",
        b: "flipflop",
        c: "buffer",
        d: "tristate buffer",
        ans: "ans4"
    },
    {
        Question:"Q8: The chip 74LS245 is",
        a: "The chip 74LS245 is",
        b: "8-bit input port",
        c: "one that has 8 buffers",
        d: "all of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q9:  In 74LS245, if DIR is 1, then the direction is from",
        a: "inputs to outputs",
        b: "outputs to inputs",
        c: "source to sink",
        d: "sink to source",
        ans: "ans1"
    },
    {
        Question:"Q10:  In memory-mapped scheme, the devices are viewed as",
        a: "distinct I/O devices",
        b: "memory locations",
        c: "only input devices",
        d: "only output devices",
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