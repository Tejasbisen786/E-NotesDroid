const quizDB = [
    {
       Question:"Q1: The systems which allow only one process execution at a time, are called __________",
       a: "uniprogramming systems",
       b: "uniprocessing systems",
       c: "unitasking systems",
       d: "none of the mentioned",
       ans: "ans2"
    },
    {
        Question:"Q2: In operating system, each process has its own __________",
       a: "address space and global variables",
       b: "open files",
       c: "pending alarms, signals and signal handlers",
       d: "all of the mentioned",
       ans: "ans4"
    },
    {
        Question:"Q3: In Unix, Which system call creates the new process?",
        a: "fork",
        b: "create",
        c: "new",
        d: "none of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q4: A process can be terminated due to __________",
        a: "normal exit",
        b: "fatal error",
        c: "killed by another process",
        d: "all of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q5:What is the ready state of a process?",
        a: "when process is scheduled to run after some execution",
        b: "when process is unable to run until some task has been completed",
        c: "when process is using the CPU",
        d: "none of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q6: What is interprocess communication?",
        a: "communication within the process",
        b: "communication between two process",
        c: "communication between two threads of same process",
        d: "none of the mentioned",
        ans: "ans2"
    },
    {
        Question:"Q7: A set of processes is deadlock if __________",
        a: "each process is blocked and will remain so forever",
        b: "each process is terminated",
        c: "all processes are trying to kill each other",
        d: "none of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q8: A process stack does not contain __________",
        a: "Function parameters",
        b: "Local variables",
        c: "Return addresses",
        d: "PID of child process",
        ans: "ans4"
    },
    {
        Question:"Q9: Which system call can be used by a parent process to determine the termination of child process?",
        a: "wait",
        b: "exit",
        c: "fork",
        d: "get",
        ans: "ans1"
    },
    {
        Question:"Q10:  The address of the next instruction to be executed by the current process is provided by the __________",
        a: "CPU registers",
        b: "Program counter.",
        c: "Process stack",
        d: "Pipe",
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