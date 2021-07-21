const quizDB = [
    {
       Question:"Q1: The ‘logout’ built in command is used to",
       a: "shutdown the computer",
       b: "logoff of the computer",
       c: "logout the current user",
       d: "to exit the current shell",
       ans: "ans4"
    },
    {
        Question:"Q2: The command ‘umask -S’",
       a: "prints the current mask using symbolic notation",
       b: "prints the current mask using octal numbers",
       c: "sets the mask to 000",
       d: "sets the mask to 777",
       ans: "ans1"
    },
    {
        Question:"Q3: The ‘mapfile’ command",
        a: "reads lines of standard input and assigns each to the element of an indexed array",
        b: "reads lines of standard output file",
        c: "reads lines of standard error file",
        d: "none of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q4:  Which option of the kill command sends the given signal name to the specified process?",
        a: "-l",
        b: "-n",
        c: "-s",
        d: "-a",
        ans: "ans3"
    },
    {
        Question:"Q5: Which command removes a directory from directory stack?",
        a: "dirs",
        b: "popd",
        c: "pushd",
        d: "rm",
        ans: "ans2"
    },
    {
        Question:"Q6:  Which command puts a script to sleep untill a signal is recieved?",
        a: "sleep",
        b: "suspend",
        c: "disown",
        d: "break",
        ans: "ans2"
    },
    {
        Question:"Q7: The command ‘ulimit’",
        a: "set a limit on specified resource for system users",
        b: "set/show process resource limit",
        c: "set a limit on specified resource for system users & set/show process resource limit",
        d: "none of the mentioned",
        ans: "ans3"
    },
    {
        Question:"Q8:  Which command identifies the resource of a command?",
        a: "type",
        b: "typeset",
        c: "select",
        d: "source",
        ans: "ans1"
    },
    {
        Question:"Q9: Which command wait for the specified process to complete and return the exit status?",
        a: "sleep",
        b: "wait",
        c: "delay",
        d: "stop",
        ans: "ans2"
    },
    {
        Question:"Q10:  Which command prints the accumulated user and system times for processes run from the shell?",
        a: "time",
        b: "times",
        c: "both time and times",
        d: "none of the mentioned",
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