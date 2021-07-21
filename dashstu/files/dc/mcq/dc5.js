const quizDB = [
    {
       Question:"Q1: Two broad categories of congestion control are",
       a: "Open-loop and Closed-loop",
       b: "Open-control and Closed-control",
       c: "Active control and Passive control",
       d: "Active loop and Passive loop",
       ans: "ans1"
    },
    {
        Question:"Q2: In open-loop control, policies are applied to __________",
       a: "Remove after congestion occurs",
       b: "Remove after sometime",
       c: "Prevent before congestion occurs",
       d: "Prevent before sending packets",
       ans: "ans3"
    },
    {
        Question:"Q3: Retransmission of packets must not be done when ______",
        a: "Packet is lost",
        b: "Packet is corrupted",
        c: "Packet is needed",
        d: "Packet is error-free",
        ans: "ans4"
    },
    {
        Question:"Q4: In Go-Back-N window, when the timer of the packet times out, several packets have to be resent even some may have arrived safe. Whereas in Selective Repeat window, the sender resends ___________",
        a: "Packet which are not lost",
        b: "Only those packets which are lost or corrupted",
        c: "Packet from starting",
        d: "All the packets",
        ans: "ans2"
    },
    {
        Question:"Q5: Discarding policy is mainly done by _______",
        a: "Sender",
        b: "Receiver",
        c: "Router",
        d: "Switch",
        ans: "ans3"
    },
    {
        Question:"Q6: Closed-Loop control mechanisms try to _________",
        a: "Remove after congestion occurs",
        b: "Remove after sometime",
        c: "Prevent before congestion occurs",
        d: "Prevent before sending packets",
        ans: "ans1"
    },
    {
        Question:"Q7: The technique in which a congested node stops receiving data from the immediate upstream node or nodes is called as _______",
        a: "Admission policy",
        b: "Backpressure",
        c: "Forward signaling",
        d: "Backward signaling",
        ans: "ans2"
    },
    {
        Question:"Q8: Backpressure technique can be applied only to _______",
        a: "Congestion networks",
        b: "Closed circuit networks",
        c: "Open circuit networks",
        d: "Virtual circuit networks",
        ans: "ans4"
    },
    {
        Question:"Q9: The packet sent by a node to the source to inform it of congestion is called _______",
        a: "Explicit",
        b: "Discard",
        c: "Choke",
        d: "Backpressure",
        ans: "ans3"
    },
    {
        Question:"Q10:  In the slow-start algorithm, the size of the congestion window increases __________ until it reaches a threshold.",
        a: "exponentially",
        b: "additively",
        c: "multiplicatively",
        d: "suddenly",
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