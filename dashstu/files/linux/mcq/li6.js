const quizDB = [
    {
       Question:"Q1: The entire hostname has a maximum of ___________",
       a: "DNS updater",
       b: "DNS resolver",
       c: "DNS handler",
       d: "none of the mentioned",
       ans: "ans1"
    },
    {
        Question:"Q2: A DNS client is called _________",
       a: "Will create a block device if user is root",
       b: "Will create a block device for all users",
       c: "Will create a FIFO if user is not root",
       d: "None of the mentioned",
       ans: "ans1"
    },
    {
        Question:"Q3: Servers handle requests for other domains _______",
        a: "directly",
        b: "by contacting remote DNS server",
        c: "it is not possible",
        d: "none of the mentioned",
        ans: "ans2"
    },
    {
        Question:"Q4: DNS database contains _______",
        a: "name server records",
        b: "hostname-to-address records",
        c: "hostname aliases",
        d: "all of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q5: If a server has no clue about where to find the address for a hostname then _______",
        a: "server asks to the root server",
        b: "server asks to its adjcent server",
        c: "request is not processed",
        d: "none of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q6:  Which one of the following allows client to update their DNS entry as their IP address change?",
        a: "dynamic DNS",
        b: "mail transfer agent",
        c: "authoritative name server",
        d: "none of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q7: Wildcard domain names start with label _______",
        a: "@",
        b: "*",
        c: "&",
        d: "#",
        ans: "ans2"
    },
    {
        Question:"Q8: The right to use a domain name is delegated by domain name registers which are accredited by _______",
        a: "internet architecture board",
        b: "internet society",
        c: "internet research task force",
        d: "internet corporation for assigned names and numbers",
        ans: "ans4"
    },
    {
        Question:"Q9: The domain name system is maintained by _______",
        a: "distributed database system",
        b: "a single server",
        c: "a single computer",
        d: "none of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q10:  Which one of the following is not true?",
        a: "multiple hostnames may correspond to a single IP address",
        b: "a single hostname may correspond to many IP addresses",
        c: "a single hostname may correspond to a single IP address",
        d: "none of the mentioned",
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