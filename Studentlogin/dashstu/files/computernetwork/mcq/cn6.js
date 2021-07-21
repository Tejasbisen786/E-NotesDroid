const quizDB = [
    {
       Question:"Q1: What layer in the TCP/IP stack is equivalent to the Transport layer of the OSI model?",
       a: "Application",
       b: "Host to host",
       c: "Internet",
       d: "Network Access",
       ans: "ans2"
    },
    {
        Question:"Q2: You want to implement a mechanism that automates the IP configuration, including IP address, subnet mask, default gateway, and DNS information. Which protocol will you use to accomplish this?",
       a: "SMTP",
       b: "SNMP",
       c: "DHCP",
       d: "ARP",
       ans: "ans3"
    },
    {
        Question:"Q3: The DoD model (also called the TCP/IP stack) has four layers. Which layer of the DoD model is equivalent to the Network layer of the OSI model?",
        a: "Application",
        b: "Host to Host",
        c: "Internet",
        d: "Network Access",
        ans: "ans3"
    },
    {
        Question:"Q4: Which of the following protocols uses both TCP and UDP?",
        a: "FTP",
        b: "SMTP",
        c: "Telnet",
        d: "DNS",
        ans: "ans4"
    },
    {
        Question:"Q5: Length of Port address in TCP/IP is _______",
        a: "4bit long",
        b: "16bit long",
        c: "32bit long",
        d: "8 bit long",
        ans: "ans2"
    },
    {
        Question:"Q6: TCP/IP layer is equivalent to combined Session, Presentation and _________",
        a: "Network layer",
        b: "Application layer",
        c: "Transport layer",
        d: "Physical layer",
        ans: "ans2"
    },
    {
        Question:"Q7: How many levels of addressing is provided in TCP/IP protocol?",
        a: "One",
        b: "Two",
        c: "Three",
        d: "Four",
        ans: "ans4"
    },
    {
        Question:"Q8: Virtual terminal protocol is an example of _________",
        a: "Network layer",
        b: "Application layer",
        c: "Transport layer",
        d: "Physical layer",
        ans: "ans2"
    },
    {
        Question:"Q9: TCP/IP is related to __________",
        a: "ARPANET",
        b: "OSI",
        c: "DECNET",
        d: "ALOHA",
        ans: "ans1"
    },
    {
        Question:"Q10: A device operating at network layer is called __________",
        a: "Router",
        b: "Equalizer",
        c: "Bridge",
        d: "Repeater",
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