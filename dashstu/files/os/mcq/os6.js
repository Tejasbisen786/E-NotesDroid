const quizDB = [
    {
       Question:"Q1: ______ is a unique tag, usually a number identifies the file within the file system.",
       a: "File identifier",
       b: "File name",
       c: "File type",
       d: "None of the mentioned",
       ans: "ans1"
    },
    {
        Question:"Q2: To create a file ____________",
       a: "allocate the space in file system",
       b: "make an entry for new file in directory",
       c: "allocate the space in file system & make an entry for new file in directory",
       d: "none of the mentioned",
       ans: "ans3"
    },
    {
        Question:"Q3: By using the specific system call, we can ____________",
        a: "open the file",
        b: "read the file",
        c: "write into the file",
        d: "all of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q4: File type can be represented by ____________",
        a: "file name",
        b: "file extension",
        c: "file identifier",
        d: "none of the mentioned",
        ans: "ans2"
    },
    {
        Question:"Q5:Which file is a sequence of bytes organized into blocks understandable by the system’s linker?",
        a: "object file",
        b: "source file",
        c: "executable file",
        d: "text file",
        ans: "ans1"
    },
    {
        Question:"Q6: What is the mounting of file system?",
        a: "crating of a filesystem",
        b: "deleting a filesystem",
        c: "attaching portion of the file system into a directory structure",
        d: "removing the portion of the file system into a directory structure",
        ans: "ans3"
    },
    {
        Question:"Q7:Mapping of file is managed by ____________",
        a: "file metadata",
        b: "page table",
        c: "virtual memory",
        d: "file system",
        ans: "ans1"
    },
    {
        Question:"Q8: Mapping of network file system protocol to local file system is done by ____________",
        a: "network file system",
        b: "local file system",
        c: "volume manager",
        d: "remote mirror",
        ans: "ans1"
    },
    {
        Question:"Q9: Which one of the following explains the sequential file access method?",
        a: "random access according to the given byte number",
        b: "read bytes one at a time, in order",
        c: "read/write sequentially by record",
        d: "read/write randomly by record",
        ans: "ans2"
    },
    {
        Question:"Q10:  When an attempt is to make a machine or network resource unavailable to its intended users, the attack is called _____________",
        a: "denial-of-service attack",
        b: "slow read attack",
        c: "spoofed attack",
        d: "starvation attack",
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