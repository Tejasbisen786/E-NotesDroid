const quizDB = [
    {
       Question:"Q1: Modulation is the process of",
       a: "Echoing every character that is received",
       b: "Sending a file from one computer to another computer",
       c: "Converting digital signals to analog signals",
       d: "Converting analog signals to digital signals",
       ans: "ans3"
    },
    {
        Question:"Q2: Many low-shaped channels are interwoven into one high-speed transmission by",
       a: "Frequency-division multiplexer",
       b: "Time-division multiplexer",
       c: "Both (a) and (b)",
       d: "None of these",
       ans: "ans2"
    },
    {
        Question:"Q3: Which of the following is the difference between a multiplexer and a statistical multiplexer?",
        a: "Multiplexer use X.25 protocol, while statistical multiplexers use the Alpha protocol",
        b: "Statistical multiplexers need buffers while multiplexers do not need buffers",
        c: "Multiplexers often waste the output link capacity while statistical multiplexers oppose its use",
        d: "Multiplexers use Time Division multiplexing (TDM) while statistical multiplexers uses Frequency division multiplexing (FDM)",
        ans: "ans2"
    },
    {
        Question:"Q4: The synchronous modems are more costly than the asynchronous modems because",
        a: "They operate with a larger bandwidth",
        b: "They produce large volume of data",
        c: "They contain clock recovery circuits",
        d: "They transmit the data with stop and start bits",
        ans: "ans3"
    },
    {
        Question:"Q5: To connect a computer with a device in the same room, you might be likely to use",
        a: "A ground station",
        b: "A dedicated line",
        c: "A coaxial cable",
        d: "All of the above",
        ans: "ans3"
    },
    {
        Question:"Q6: If you use either Telnet or FTP, which is the highest layer you are using to transmit data?",
        a: "Application",
        b: "Session",
        c: "Presentation",
        d: "Transport",
        ans: "ans3"
    },
    {
        Question:"Q7: Error detection at the data link level is achieved by",
        a: "Equalization",
        b: "Bit stuffing",
        c: "Hamming codes",
        d: "Cyclic redundancy codes",
        ans: "ans4"
    },
    {
        Question:"Q8: Which of the following techniques is used for allocating capacity on a satellite channel using fixed-assignment FDM?",
        a: "Frequency-shift keying",
        b: "Frequency modulation",
        c: "Frequency-division multiple access",
        d: "Amplitude modulation",
        ans: "ans3"
    },
    {
        Question:"Q9: The connection between your computer at home and your local ISP is called _____",
        a: "The backbone",
        b: "The home page",
        c: "The home stretch",
        d: "The last mile",
        ans: "ans2"
    },
    {
        Question:"Q10:  Demodulation is the process of",
        a: "Dividing the high-speed signals into frequency bands",
        b: "Converting digital signals to analog signals",
        c: "Converting analog signals to digital signals",
        d: "Combining many low speed channels into one high speed channel",
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