const quizDB = [
    {
       Question:"Q1: OSI stands for __________",
       a: "open system interconnection",
       b: "operating system interface",
       c: "optical service implementation",
       d: "open service Internet",
       ans: "ans1"
    },
    {
        Question:"Q2: The number of layers in ISO OSI reference model is __________",
       a: "4",
       b: "5",
       c: "6",
       d: "7",
       ans: "ans4"
    },
    {
        Question:"Q3: TCP/IP model does not have ______ layer but OSI model have this layer.",
        a: "session layer",
        b: "transport layer",
        c: "application layer",
        d: "network layer",
        ans: "ans1"
    },
    {
        Question:"Q4: Which layer is used to link the network support layers and user support layers?",
        a: "session layer",
        b: "data link layer",
        c: "transport layer",
        d: "network layer",
        ans: "ans3"
    },
    {
        Question:"Q5: Which address is used on the internet for employing the TCP/IP protocols?",
        a: "physical address and logical address",
        b: "port address",
        c: "specific address",
        d: "all of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q6: TCP/IP model was developed _____ the OSI model.",
        a: "prior to",
        b: "after",
        c: "simultaneous to",
        d: "with no link to",
        ans: "ans1"
    },
    {
        Question:"Q7: Which layer is responsible for process to process delivery in a general network model?",
        a: "network layer",
        b: "transport layer",
        c: "session layer",
        d: "data link layer",
        ans: "ans2"
    },
    {
        Question:"Q8: Which address is used to identify a process on a host by the transport layer?",
        a: "physical address",
        b: "logical address",
        c: "port address",
        d: "specific address",
        ans: "ans3"
    },
    {
        Question:"Q9: Which layer provides the services to user?",
        a: "application layer",
        b: "session layer",
        c: "presentation layer",
        d: "physical layer",
        ans: "ans1"
    },
    {
        Question:"Q10: Transmission data rate is decided by ____________",
        a: "network layer",
        b: "physical layer",
        c: "data link layer",
        d: "transport layer",
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