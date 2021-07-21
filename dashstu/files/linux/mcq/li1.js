const quizDB = [
    {
       Question:"Q1: The dmesg command",
       a: "Shows user login logoff attempts",
       b: "Shows the syslog file for info messages",
       c: "kernel log messages",
       d: "Shows the daemon log messages",
       ans: "ans3"
    },
    {
        Question:"Q2: The command “mknod myfifo b 4 16”",
       a: "Will create a block device if user is root",
       b: "Will create a block device for all users",
       c: "Will create a FIFO if user is not root",
       d: "None of the mentioned",
       ans: "ans1"
    },
    {
        Question:"Q3: Which command is used to set terminal IO characteristic?",
        a: "tty",
        b: "ctty",
        c: "ptty",
        d: "stty",
        ans: "ans4"
    },
    {
        Question:"Q4: Which command is used to record a user login session in a file",
        a: "macro",
        b: "read",
        c: "script",
        d: "none of the mentioned",
        ans: "ans3"
    },
    {
        Question:"Q5: Which command is used to display the operating system name",
        a: "os",
        b: "unix",
        c: "kernel",
        d: "uname",
        ans: "ans4"
    },
    {
        Question:"Q6:  Which command is used to display the unix version",
        a: "uname -r",
        b: "uname -n",
        c: "uname -t",
        d: "kernel",
        ans: "ans1"
    },
    {
        Question:"Q7: Which command is used to print a file",
        a: "print",
        b: "ptr",
        c: "lpr",
        d: "none of the mentioned",
        ans: "ans3"
    },
    {
        Question:"Q8: Using which command you find resource limits to the session?",
        a: "rlimit",
        b: "ulimit",
        c: "setrlimit",
        d: "getrlimit",
        ans: "ans2"
    },
    {
        Question:"Q9: Which option of ls command used to view file inode number",
        a: "–l",
        b: "-o",
        c: "–a",
        d: "–i",
        ans: "ans4"
    },
    {
        Question:"Q10:  Find / -name ‘*’ will",
        a: "List all files and directories recursively starting from /",
        b: "List a file named * in /",
        c: "List all files in / directory",
        d: "List all files and directories in / directory",
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