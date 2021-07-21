const quizDB = [
    {
       Question:"Q1: What is a reusable resource?",
       a: "that can be used by one process at a time and is not depleted by that use",
       b: "that can be used by more than one process at a time",
       c: "that can be shared between various threads",
       d: "none of the mentioned",
       ans: "ans1"
    },
    {
        Question:"Q2: Which of the following condition is required for a deadlock to be possible?",
       a: "mutual exclusion",
       b: "a process may hold allocated resources while awaiting assignment of other resources",
       c: "no resource can be forcibly removed from a process holding it",
       d: "all of the mentioned",
       ans: "ans4"
    },
    {
        Question:"Q3: A system is in the safe state if ____________",
        a: "the system can allocate resources to each process in some order and still avoid a deadlock",
        b: "there exist a safe sequence",
        c: "all of the mentioned",
        d: "none of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q4: The circular wait condition can be prevented by ____________",
        a: "defining a linear ordering of resource types",
        b: "using thread",
        c: "using pipes",
        d: "all of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q5:Which one of the following is the deadlock avoidance algorithm?",
        a: "banker’s algorithm",
        b: "round-robin algorithm",
        c: "elevator algorithm",
        d: "karn’s algorithm",
        ans: "ans1"
    },
    {
        Question:"Q6: What is the drawback of banker’s algorithm?",
        a: "in advance processes rarely know how much resource they will need",
        b: "the number of processes changes as time progresses",
        c: "resource once available can disappear",
        d: "all of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q7:For an effective operating system, when to check for deadlock?",
        a: "every time a resource request is made",
        b: "at fixed time intervals",
        c: "every time a resource request is made at fixed time intervals",
        d: "none of the mentioned",
        ans: "ans3"
    },
    {
        Question:"Q8: A problem encountered in multitasking when a process is perpetually denied necessary resources is called ____________",
        a: "deadlock",
        b: "starvation",
        c: "inversion",
        d: "aging",
        ans: "ans2"
    },
    {
        Question:"Q9: Which one of the following is a visual ( mathematical ) way to determine the deadlock occurrence?",
        a: "resource allocation graph",
        b: "starvation graph",
        c: "inversion graph",
        d: "none of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q10:  To avoid deadlock ____________",
        a: "there must be a fixed number of resources to allocate",
        b: "resource allocation must be done only once",
        c: "all deadlocked processes must be aborted",
        d: "inversion technique can be used",
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