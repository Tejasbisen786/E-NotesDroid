const quizDB = [
    {
       Question:"Q1:  How many types of groups are available in Active Directory.",
       a: "2",
       b: "3",
       c: "4",
       d: "5",
       ans: "ans1"
    },
    {
        Question:"Q2: There are ........... group scopes in Active Directory?",
       a: "0",
       b: "1",
       c: "2",
       d: "3",
       ans: "ans4"
    },
    {
        Question:"Q3:  Which of the following is not one of the four divisions or container structures in Active Directory?",
        a: "Webs",
        b: "Forests",
        c: "Domain",
        d: "Sites",
        ans: "ans1"
    },
    {
        Question:"Q4: Active Directory is a technology created by ..................",
        a: "Microsoft",
        b: "IBM",
        c: "Google",
        d: "None Of The Above",
        ans: "ans1"
    },
    {
        Question:"Q5:  Active Directory and a Windows-based file server are not required to implement ________ on client Windows computers.",
        a: "Windows 2000",
        b: "Internet Explorer",
        c: "Windows Registry",
        d: "Roaming user profile",
        ans: "ans4"
    },
    {
        Question:"Q6: Which of the following MMC is used to transfer the domain naming master operations role?",
        a: "Active Directory Schema",
        b: "Active Directory FSMO Transfers",
        c: "Active Directory Domains and Trusts",
        d: "Active Directory Users and Computers",
        ans: "ans3"
    },
    {
        Question:"Q7: Which of the following tab is used to enable or disable a printer for sharing as well as to specify the name of the share?",
        a: "General",
        b: "Sharing",
        c: "Location",
        d: "Advanced",
        ans: "ans2"
    },
    {
        Question:"Q8: What command can you type to perform a system state backup?",
        a: "wbadmin start statebackup",
        b: "wbadmin start sysstatebackup",
        c: "wbadmin start systemstatebackup",
        d: "wbadmin begin systemstatebackup",
        ans: "ans3"
    },
    {
        Question:"Q9: Which command is used to display and modify the boot configuration data store?",
        a: "bcedit",
        b: "bcmod",
        c: "edit bcd",
        d: "edit boot.in",
        ans: "ans1"
    },
    {
        Question:"Q10:   Which of the following ports are used by Active Directory?",
        a: "Port 135 TCP, UDP",
        b: "Port 137 TCP, UDP",
        c: "Port 636 TCP",
        d: "All of the above",
        ans: "ans4"
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