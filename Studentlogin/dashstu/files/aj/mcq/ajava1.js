const quizDB = [
    {
       Question:"Q1: Which of these package contains classes and interfaces for networking?",
       a: "java.io",
       b: "java.util",
       c: "java.net",
       d: "java.network",
       ans: "ans3"
    },
    {
        Question:"Q2:  Which of these is a protocol for breaking and sending packets to an address across a network?",
       a: "TCP/IP",
       b: "DNS",
       c: "Socket",
       d: "Proxy Server",
       ans: "ans1"
    },
    {
        Question:"Q3: How many ports of TCP/IP are reserved for specific protocols?",
        a: "10",
        b: "1024",
        c: "2048",
        d: "512",
        ans: "ans2"
    },
    {
        Question:"Q4:  How many bits are in a single IP address?",
        a: "8",
        b: "16",
        c: "32",
        d: "64",
        ans: "ans3"
    },
    {
        Question:"Q5:Which of these is a full form of DNS?",
        a: "Data Network Service",
        b: "Data Name Service",
        c: "Domain Network Service",
        d: "Domain Name Service",
        ans: "ans4"
    },
    {
        Question:"Q6: Which of these class is used to encapsulate IP address and DNS?",
        a: "DatagramPacket",
        b: "URL",
        c: "InetAddress",
        d: "ContentHandler",
        ans: "ans3"
    },
    {
        Question:"Q7:Which of these interface abstractes the output of messages from httpd?",
        a: "LogMessage",
        b: "LogResponse",
        c: "Httpdserver",
        d: " httpdResponse",
        ans: "ans1"
    },
    {
        Question:"Q8: Which of these class is used to create servers that listen for either local or remote client programs?",
        a: "httpServer",
        b: "ServerSockets",
        c: "MimeHeader",
        d: "HttpResponse",
        ans: "ans2"
    },
    {
        Question:"Q9: Which of these is a standard for communicating multimedia content over email?",
        a: "http",
        b: "https",
        c: "Mime",
        d: "httpd",
        ans: "ans3"
    },
    {
        Question:"Q10:  Which of these methods is used to make raw MIME formatted string?",
        a: "parse()",
        b: "toString()",
        c: "getString()",
        d: "parseString()",
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