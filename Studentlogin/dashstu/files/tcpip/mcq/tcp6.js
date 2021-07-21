const quizDB = [
    {
       Question:"Q1: You are the new IT admin, and you need to find the network configuration. What should you use?",
       a: "ipconfig",
       b: "cmd",
       c: "netchange",
       d: "newnet",
       ans: "ans1"
    },
    {
        Question:"Q2: To get the most detailed network configuration, use this command.",
       a: "ipconfig /all",
       b: "ipconfig",
       c: "ipconfig /renew",
       d: "ipconfig /most",
       ans: "ans1"
    },
    {
        Question:"Q3: This ipconfig switch requests new IP information from DHCP server",
        a: "Simplex",
        b: "release",
        c: "return",
        d: "rerun",
        ans: "ans1"
    },
    {
        Question:"Q4: This is like ipconfig, but for Linux/Mac OS.",
        a: "ifconfig",
        b: "ipconfig",
        c: "unconfig",
        d: "wipconfig",
        ans: "ans1"
    },
    {
        Question:"Q5: This command sends a request out and expects a response, indicating that both hosts are communicating.",
        a: "ping",
        b: "tracert",
        c: "ipconfig /renew",
        d: "nslookup",
        ans: "ans1"
    },
    {
        Question:"Q6: If you wanted to ping a host but also follow the path at which it pings, what would you use?",
        a: "tracert",
        b: "ping",
        c: "tracert /ping",
        d: "ipconfig /most",
        ans: "ans1"
    },
    {
        Question:"Q7: You want to find out the IP address of a hostname, like google.com, you should use...",
        a: "nslookup",
        b: "pingL",
        c: "tracert /ping",
        d: "cmd",
        ans: "ans1"
    },
    {
        Question:"Q8: You want to find out different IP statistics such as current connections and any active ports, try using...",
        a: "netstat",
        b: "naslookup",
        c: "ping",
        d: "cmd",
        ans: "ans1"
    },
    {
        Question:"Q9: To troubleshoot issues relating to NetBIOS over TCP/IP, use the following command...",
        a: "nbtstat",
        b: "netstat",
        c: "statnet",
        d: "netnetstat",
        ans: "ans1"
    },
    {
        Question:"Q10:  This cmd utility is used for remote server management.",
        a: "telnet",
        b: "netstat",
        c: "ping",
        d: "SSH",
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