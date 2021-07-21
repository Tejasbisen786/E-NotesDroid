const quizDB = [
    {
       Question:"Q1: _________ is one of the most secured Linux OS that provides anonymity and an incognito option for securing its user data.",
       a: "Fedora",
       b: "Tails",
       c: "Ubuntu",
       d: "OpenSUSE",
       ans: "ans2"
    },
    {
        Question:"Q2: Which of the following OS does not comes under a secured Linux OS list?",
       a: "Qubes OS",
       b: "Tails",
       c: "Tin Hat",
       d: "Ubuntu",
       ans: "ans4"
    },
    {
        Question:"Q3: ____________ is a Debian-Linux based OS that has 2 VMs (Virtual Machines) that help in preserving users’ data private.",
        a: "Fedora",
        b: "Ubuntu",
        c: "Whonix",
        d: "Kubuntu",
        ans: "ans3"
    },
    {
        Question:"Q4: Which of the following comes under secured Linux based OS?",
        a: "Ubuntu",
        b: "Fedora",
        c: "Kubuntu",
        d: "Tails",
        ans: "ans4"
    },
    {
        Question:"Q5: Using the ______ account of a UNIX system, one can carry out administrative functions",
        a: "root",
        b: "administrative",
        c: "user",
        d: "client",
        ans: "ans1"
    },
    {
        Question:"Q6:  MAC is abbreviated as _______________",
        a: "uname -r",
        b: "uname -n",
        c: "uname -t",
        d: "kernel",
        ans: "ans1"
    },
    {
        Question:"Q7: Which command is used to print a file",
        a: "Machine Access Control",
        b: "Mandatory Accounts Control",
        c: "Mandatory Access Controlling",
        d: "Mandatory Access Control",
        ans: "ans4"
    },
    {
        Question:"Q8: _______________ in a system is given so that users can use dedicated parts of the system for which they’ve been given access to.",
        a: "Machine Access Control",
        b: "Mandatory Accounts Control",
        c: "Mandatory Access Control",
        d: "Mandatory Access Controlling",
        ans: "ans3"
    },
    {
        Question:"Q9: DTE is abbreviated as ___________________",
        a: "Domain and Type Enforcing",
        b: "Domain and Type Enforcement",
        c: "DNS and Type Enforcement",
        d: "DNS and Type Enforcing",
        ans: "ans2"
    },
    {
        Question:"Q10:  RBAC is abbreviated as ______________",
        a: "Rule-Based Accessing Control",
        b: "Role-Based Access Control",
        c: "Rule-Based Access Control",
        d: "Role-Based Accessing Control",
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