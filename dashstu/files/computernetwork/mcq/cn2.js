const quizDB = [
    {
       Question:"Q1: A topology that is responsible for describing the geometric arrangement of components that make up the LAN.",
       a: "Complex",
       b: "Physical",
       c: "Logical",
       d: "Incremental",
       ans: "ans2"
    },
    {
        Question:"Q2: _____ LAN topology describes the possible connections between pairs of networked end-points that can communicate.",
       a: "Complex",
       b: "Physical",
       c: "Logical",
       d: "Incremental",
       ans: "ans3"
    },
    {
        Question:"Q3: A term that refers to the way in which the nodes of a network are linked together.",
        a: "network",
        b: "topology",
        c: "connection",
        d: "interconnectivity",
        ans: "ans2"
    },
    {
        Question:"Q4: A network comprising o multiple topologies.",
        a: "Complex",
        b: "Hybrid",
        c: "Bus",
        d: "Star",
        ans: "ans2"
    },
    {
        Question:"Q5: The participating computers in a network are referred to as:",
        a: "Clients",
        b: "Servers",
        c: "Nodes",
        d: "CPUs",
        ans: "ans3"
    },
    {
        Question:"Q6: A topology that involves Tokens.",
        a: "Star",
        b: "Ring",
        c: "Bus",
        d: "Daisy Chaining",
        ans: "ans2"
    },
    {
        Question:"Q7: A ____________WAN can be developed using leased private lines or any other transmission facility",
        a: "Hybrids",
        b: "peer-to-peer",
        c: "Two-tiered",
        d: "Three-tiered",
        ans: "ans2"
    },
    {
        Question:"Q8: A serially connected system of all the hubs of networks.",
        a: "Bus",
        b: "Ring",
        c: "Daisy chains",
        d: "Star",
        ans: "ans3"
    },
    {
        Question:"Q9: A piece of information which is sent along with the data to the source computer.",
        a: "data",
        b: "module",
        c: "token",
        d: "element",
        ans: "ans3"
    },
    {
        Question:"Q10: Configuration where many independent computer systems are connected.",
        a: "Complex",
        b: "Distributed",
        c: "Cloud",
        d: "Incremental",
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