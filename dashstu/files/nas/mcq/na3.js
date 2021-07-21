const quizDB = [
    {
       Question:"Q1: Network layer firewall works as a __________",
       a: "Frame filter",
       b: "Packet filter",
       c: "Content filter",
       d: "Virus filter",
       ans: "ans2"
    },
    {
        Question:"Q2: Network layer firewall has two sub-categories as _________",
       a: "State full firewall and stateless firewall",
       b: "Bit oriented firewall and byte oriented firewall",
       c: "Frame firewall and packet firewall",
       d: "Network layer firewall and session layer firewall",
       ans: "ans1"
    },
    {
        Question:"Q3: A firewall is installed at the point where the secure internal network and untrusted external network meet which is also known as __________",
        a: "Chock point",
        b: "Meeting point",
        c: "Firewall point",
        d: "Secure point",
        ans: "ans1"
    },
    {
        Question:"Q4: Which of the following is / are the types of firewall?",
        a: "Packet Filtering Firewall",
        b: "Dual Homed Gateway Firewall",
        c: "Screen Host Firewall",
        d: "Dual Host Firewall",
        ans: "ans1"
    },
    {
        Question:"Q5: A proxy firewall filters at _________",
        a: "Physical layer",
        b: "Data link layer",
        c: "Network layer",
        d: "Application layer",
        ans: "ans4"
    },
    {
        Question:"Q6:  A packet filter firewall filters at __________",
        a: "Physical layer",
        b: "Data link laye",
        c: "Network layer or Transport layer",
        d: "Application layer",
        ans: "ans3"
    },
    {
        Question:"Q7: What is one advantage of setting up a DMZ with two firewalls?",
        a: "You can control where traffic goes in three networks",
        b: "You can do stateful packet filtering",
        c: "You can do load balancing",
        d: "Improved network performance",
        ans: "ans3"
    },
    {
        Question:"Q8: What tells a firewall how to reassemble a data stream that has been divided into packets?",
        a: "The source routing feature",
        b: "The number in the header’s identification field",
        c: "The destination IP address",
        d: "The header checksum field in the packet header",
        ans: "ans1"
    },
    {
        Question:"Q9: A stateful firewall maintains a ___________ which is a list of active connections.",
        a: "Routing table",
        b: "Bridging table",
        c: "State table",
        d: "Connection table",
        ans: "ans1"
    },
    {
        Question:"Q10:  A firewall needs to be __________ so that it can grow proportionally with the network that it protects.",
        a: "Robust",
        b: "Expansive",
        c: "Fast",
        d: "Scalable",
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