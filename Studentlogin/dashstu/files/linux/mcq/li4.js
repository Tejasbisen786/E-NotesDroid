const quizDB = [
    {
       Question:"Q1: User’s Primary Group id is listed in which file, at the time of creation of the user (On a standard Unix system)",
       a: "/etc/passwd",
       b: "/etc/groups",
       c: "/etc/login",
       d: "/etc/profile",
       ans: "ans1"
    },
    {
        Question:"Q2: The encrypted password of a user is stored in",
       a: "/etc/shadow",
       b: "/etc/enpasswwd",
       c: "/etc/.passwd",
       d: "/etc/passwd",
       ans: "ans1"
    },
    {
        Question:"Q3: A user can change the default log-in shell using",
        a: "chmod",
        b: "chsh",
        c: "rmsh",
        d: "tchsh",
        ans: "ans2"
    },
    {
        Question:"Q4: Which of the following identifiers associated with a process decide its privilege level",
        a: "uid",
        b: "suid",
        c: "euid",
        d: "gid",
        ans: "ans3"
    },
    {
        Question:"Q5: The /etc/passwd file doesn’t contain",
        a: "userid",
        b: "home directory for a user",
        c: "login shell name",
        d: "none of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q6:  User id 0 is",
        a: "An innvalid user id",
        b: "The id of the root user",
        c: "The id of a user when the user’s account is deleted",
        d: "None of the mentioned",
        ans: "ans2"
    },
    {
        Question:"Q7: The login shell is",
        a: "The shell program that runs when the user logs in",
        b: " The shell program that authenticates the user while logging in",
        c: "Common shell for all the users that belong to the same group",
        d: "none of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q8: Which of the following command can be used to change the user password?",
        a: "user can’t change the password",
        b: "passwd",
        c: "passd",
        d: "pwd",
        ans: "ans2"
    },
    {
        Question:"Q9: What does the following command do ?who | wc –l",
        a: "List the number of users logged in",
        b: "List the users",
        c: "List the number of users in the system",
        d: "Display the content of who command",
        ans: "ans1"
    },
    {
        Question:"Q10:  By default, a Linux user falls under which group?",
        a: "staff",
        b: "others",
        c: "same as userid (UPG)",
        d: "system",
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