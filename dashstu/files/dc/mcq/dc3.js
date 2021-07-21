const quizDB = [
    {
       Question:"Q1: _________ control refers to a set of procedures used to restrict the amount of data that the sender can send before waiting for acknowledgment.",
       a: "Flow",
       b: "Error",
       c: "Transmission",
       d: "none of the above",
       ans: "ans1"
    },
    {
        Question:"Q2: _________ control refers to methods of error detection and correction",
       a: "Flow",
       b: "Error",
       c: "Transmission",
       d: "none of the above",
       ans: "ans2"
    },
    {
        Question:"Q3: _________ in the data link layer separates a message from one source to a destination, or from other messages going from other sources to other destinations",
        a: "Digitizing",
        b: "Controlling",
        c: "Framing",
        d: "none of the above",
        ans: "ans3"
    },
    {
        Question:"Q4: _________control in the data link layer is based on automatic repeat request, which is the retransmission of data.",
        a: "Flow",
        b: "Error",
        c: "Transmission",
        d: "none of the above",
        ans: "ans2"
    },
    {
        Question:"Q5: _________framing uses two categories of protocols: character-oriented and bit-oriented.",
        a: "Fixed-size",
        b: "Variable-size",
        c: "Standard",
        d: "None of the above",
        ans: "ans2"
    },
    {
        Question:"Q6: ARQ stands for _________.",
        a: "Automatic repeat quantization",
        b: "Automatic repeat request",
        c: "Automatic retransmission request",
        d: "Acknowledge repeat request",
        ans: "ans2"
    },
    {
        Question:"Q7: Bit stuffing means adding an extra 0 to the data section of the frame when there is a sequence of bits with the same pattern as the _________.",
        a: "header",
        b: "trailer",
        c: "flag",
        d: "none of the above",
        ans: "ans3"
    },
    {
        Question:"Q8: Both Go-Back-N and Selective-Repeat Protocols use a _________.",
        a: "sliding frame",
        b: "sliding window",
        c: "sliding packet",
        d: "none of the above",
        ans: "ans2"
    },
    {
        Question:"Q9: Byte stuffing means adding a special byte to the data section of the frame when there is a character with the same pattern as the _________.",
        a: "header",
        b: "trailer",
        c: "flag",
        d: "none of the above",
        ans: "ans3"
    },
    {
        Question:"Q10: Data link control deals with the design and procedures for _________ communication.",
        a: "node-to-node",
        b: "host-to-host",
        c: "process-to-process",
        d: "none of the above",
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