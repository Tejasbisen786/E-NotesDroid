const quizDB = [
    {
       Question:"Q1: What is a recirculating register?",
       a: "Serial out connected to serial in",
       b: "All Q outputs connected together",
       c: "A register that can be used over again",
       d: "Parallel out connected to Parallel in",
       ans: "ans1"
    },
    {
        Question:"Q2: When is it important to use a three-state buffer?",
       a: "When two or more outputs are connected to the same input",
       b: "When all outputs are normally HIGH",
       c: "When all outputs are normally LOW",
       d: "When two or more outputs are connected to two or more inputs",
       ans: "ans1"
    },
    {
        Question:"Q3: A bidirectional 4-bit shift register is storing the nibble 1110. Its input is LOW. The nibble 0111 is waiting to be entered on the serial data-input line. After two clock pulses, the shift register is storing ________",
        a: "1110",
        b: "0111",
        c: "1000",
        d: "1001",
        ans: "ans4"
    },
    {
        Question:"Q4: In a parallel in/parallel out shift register, D0 = 1, D1 = 1, D2 = 1, and D3 = 0. After three clock pulses, the data outputs are ________",
        a: "1110",
        b: "0001",
        c: "1100",
        d: "1000",
        ans: "ans2"
    },
    {
        Question:"Q5: The group of bits 10110111 is serially shifted (right-most bit first) into an 8-bit parallel output shift register with an initial state 11110000. After two clock pulses, the register contains _____________",
        a: "10111000",
        b: "10110111",
        c: "11110000",
        d: "11111100",
        ans: "ans4"
    },
    {
        Question:"Q6: By adding recirculating lines to a 4-bit parallel-in serial-out shift register, it becomes a ________ ________ and ________ out register.",
        a: "Parallel-in, serial, parallel",
        b: "Serial-in, parallel, serial",
        c: "Series-parallel-in, series, parallel",
        d: "Bidirectional in, parallel, series",
        ans: "ans1"
    },
    {
        Question:"Q7:  What type of register would have a complete binary number shifted in one bit at a time and have all the stored bits shifted out one at a time?",
        a: "Parallel-in Parallel-out",
        b: "Parallel-in Serial-out",
        c: "Serial-in Serial-out",
        d: "Serial-in Parallel-out",
        ans: "ans3"
    },
    {
        Question:"Q8: In a 4-bit Johnson counter sequence, there are a total of how many states or bit patterns?",
        a: "1",
        b: "3",
        c: "4",
        d: "8",
        ans: "ans4"
    },
    {
        Question:"Q9: If a 10-bit ring counter has an initial state 1101000000, what is the state after the second clock pulse?",
        a: "1101000000",
        b: "0011010000",
        c: "1100000000",
        d: "0000000000",
        ans: "ans2"
    },
    {
        Question:"Q10:  How much storage capacity does each stage in a shift register represent?",
        a: "One bit",
        b: "Two bits",
        c: "Four bits",
        d: "Eight bits",
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