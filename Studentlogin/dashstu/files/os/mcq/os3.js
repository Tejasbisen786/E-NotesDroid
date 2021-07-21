const quizDB = [
    {
       Question:"Q1: Which process can be affected by other processes executing in the system?",
       a: "cooperating process",
       b: "child process",
       c: "parent process",
       d: "init process",
       ans: "ans1"
    },
    {
        Question:"Q2: When several processes access the same data concurrently and the outcome of the execution depends on the particular order in which the access takes place is called ________",
       a: "dynamic condition",
       b: "race condition",
       c: "essential condition",
       d: "critical condition",
       ans: "ans2"
    },
    {
        Question:"Q3: If a process is executing in its critical section, then no other processes can be executing in their critical section. What is this condition called??",
        a: "mutual exclusion",
        b: "critical exclusion",
        c: "synchronous exclusion",
        d: "asynchronous exclusion",
        ans: "ans1"
    },
    {
        Question:"Q4: Which one of the following is a synchronization tool?",
        a: "thread",
        b: "pipe",
        c: "semaphore",
        d: "socket",
        ans: "ans3"
    },
    {
        Question:"Q5:A semaphore is a shared integer variable __________",
        a: "that can not drop below zero",
        b: "that can not be more than zero",
        c: "that can not drop below one",
        d: "that can not be more than one",
        ans: "ans1"
    },
    {
        Question:"Q6: Mutual exclusion can be provided by the __________",
        a: "mutex locks",
        b: "binary semaphores",
        c: "both mutex locks and binary semaphores",
        d: "none of the mentioned",
        ans: "ans3"
    },
    {
        Question:"Q7:When high priority task is indirectly preempted by medium priority task effectively inverting the relative priority of the two tasks, the scenario is called __________",
        a: "priority inversion",
        b: "priority removal",
        c: "priority exchange",
        d: "priority modification",
        ans: "ans1"
    },
    {
        Question:"Q8: Process synchronization can be done on __________",
        a: "hardware leve",
        b: "software level",
        c: "both hardware and software level",
        d: "none of the mentioned",
        ans: "ans3"
    },
    {
        Question:"Q9: A monitor is a module that encapsulates __________",
        a: "shared data structures",
        b: "procedures that operate on shared data structure",
        c: "synchronization between concurrent procedure invocation",
        d: "all of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q10:  To enable a process to wait within the monitor __________",
        a: "a condition variable must be declared as condition",
        b: "condition variables must be used as boolean objects",
        c: "semaphore must be used",
        d: "all of the mentioned",
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