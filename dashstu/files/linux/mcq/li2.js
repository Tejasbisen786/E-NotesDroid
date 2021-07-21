const quizDB = [
    {
       Question:"Q1: Shell is a",
       a: "Program",
       b: "Hardware",
       c: "Account",
       d: "None of the above",
       ans: "ans1"
    },
    {
        Question:"Q2: Linux kernel file name is",
       a: "vmlinux",
       b: "vmlinuz",
       c: "lynx",
       d: " linux",
       ans: "ans2"
    },
    {
        Question:"Q3: cat > abc, if the requested file does not exist, error will be given by",
        a: "Kernel",
        b: "Shell",
        c: "root",
        d: "None of the above",
        ans: "ans1"
    },
    {
        Question:"Q4: To delete an user along with its home directory, the command is",
        a: "userdel -d username",
        b: "userdel -D username",
        c: "userdel -r username",
        d: "userdel -R username",
        ans: "ans3"
    },
    {
        Question:"Q5: User passwords are stored in",
        a: "/etc/password",
        b: "/root/password",
        c: "/etc/passwd",
        d: "/root/passwd",
        ans: "ans3"
    },
    {
        Question:"Q6:  All run levels are stored in",
        a: "/etc/fstab",
        b: "/etc/init",
        c: "/etc/inittab",
        d: " /etc/rc.d",
        ans: "ans3"
    },
    {
        Question:"Q7: Default file system type of Linux is",
        a: "etx",
        b: "ext2",
        c: "etx3",
        d: "mimix",
        ans: "ans3"
    },
    {
        Question:"Q8: A swap partition is actually",
        a: "Primary partition",
        b: "Extended partition",
        c: "Extended memory",
        d: "Virtual memory",
        ans: "ans4"
    },
    {
        Question:"Q9: To check if a service is running, the command is",
        a: "Ntsysv",
        b: "setup",
        c: "/etc/rc.d/init.d/service",
        d: "/etc/serice",
        ans: "ans1"
    },
    {
        Question:"Q10:  Password is applied using",
        a: "psswd",
        b: "pssword",
        c: "uerpasswd",
        d: "passwd username",
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