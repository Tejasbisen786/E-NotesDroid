const quizDB = [
    {
       Question:"Q1: TCP/IP is composed of _______ number of layers.",
       a: "2",
       b: "3",
       c: "4",
       d: "5",
       ans: "ans3"
    },
    {
        Question:"Q2: Trusted TCP/IP commands have the same needs & go through the identical verification process. Which of them is not a TCP/IP command?",
       a: "ftp",
       b: "rexec",
       c: "tcpexec",
       d: "telnet",
       ans: "ans3"
    },
    {
        Question:"Q3: Connection authentication is offered for ensuring that the remote host has the likely Internet Protocol (IP) ___________ & _________",
        a: "address, name",
        b: "address, location",
        c: "network, name",
        d: "network, location",
        ans: "ans1"
    },
    {
        Question:"Q4: RoBOT is abbreviated as ___________",
        a: "Return of Bleichenbacher’s Oracle Team",
        b: "Rise of Bleichenbacher’s Oracle Threat",
        c: "Return of Bleichenbacher’s Operational Threat",
        d: "Return of Bleichenbacher’s Oracle Threat",
        ans: "ans4"
    },
    {
        Question:"Q5: There are __________ different versions of IP popularly used",
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        ans: "ans1"
    },
    {
        Question:"Q6:  ____________ is an attack where the attacker is able to guess together with the sequence number of an in progress communication session & the port number.",
        a: "TCP Spoofing",
        b: "TCP Blind Spoofing",
        c: "IP Spoofing",
        d: "IP Blind Spoofing",
        ans: "ans2"
    },
    {
        Question:"Q7: ___________ is an attack technique where numerous SYN packets are spoofed with a bogus source address which is then sent to an inundated server.",
        a: "SYN flooding attack",
        b: "ACK flooding attack",
        c: "SYN & ACK flooding attack",
        d: "Packet flooding attack",
        ans: "ans1"
    },
    {
        Question:"Q8:  Which of them is not an attack done in the network layer of the TCP/IP model?",
        a: "MITM attack",
        b: "DoS attack",
        c: "Spoofing attack",
        d: "Shoulder surfing",
        ans: "ans4"
    },
    {
        Question:"Q9: Which of them is not an appropriate method of router security?",
        a: "Unused ports should be blocked",
        b: "Unused interfaces and services should be disabled",
        c: "Routing protocol needs to be programmed by security experts",
        d: "Packet filtering needs to be enabled",
        ans: "ans3"
    },
    {
        Question:"Q10:  Which 2 protocols are used in the Transport layer of the TCP/IP model?",
        a: "UDP and HTTP",
        b: "TCP and UDP",
        c: "HTTP and TCP",
        d: "ICMP and HTTP",
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