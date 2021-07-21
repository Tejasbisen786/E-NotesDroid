const quizDB = [
    {
       Question:"Q1:  ___________ is basically all of the components, hardware and software, involved in connecting computers across small and large distances.",
       a: "LAN",
       b: "WAN",
       c: "Network",
       d: "SAN",
       ans: "ans3"
    },
    {
        Question:"Q2: _________ describe(s) users working from home.",
       a: "SOHO",
       b: "Branch office",
       c: "Regional office",
       d: "Corporate office",
       ans: "ans1"
    },
    {
        Question:"Q3: _________ describe(s) users that can connect to a network from any location.",
        a: "SOHO",
        b: "Branch office",
        c: "Mobile users",
        d: "Corporate office",
        ans: "ans2"
    },
    {
        Question:"Q4: A __________ topology uses a single connection to connect all devices together.",
        a: "Bus",
        b: "Star",
        c: "Point-to-point",
        d: "Ring",
        ans: "ans1"
    },
    {
        Question:"Q5: ___________ has both physical and logical ring topologies.",
        a: "Ethernet",
        b: "FDDI",
        c: "Token Ring",
        d: "All of the above",
        ans: "ans2"
    },
    {
        Question:"Q6: Ethernet ___________ has/have both a physical and logical bus topology.",
        a: "10BaseT",
        b: "10Base2 and 10Base5",
        c: "10BaseT and 10Base2",
        d: "10BaseT, 10Base2, and 10Base5",
        ans: "ans2"
    },
    {
        Question:"Q7: ________ topology describes how devices communicate with each other.",
        a: "Physical",
        b: "Bit stuffing",
        c: "Hamming codes",
        d: "Logical",
        ans: "ans4"
    },
    {
        Question:"Q8: _________ has a physical star topology but a logical ring topology.",
        a: "FDDI",
        b: "Token Ring",
        c: "Ethernet",
        d: "FDDI and Token Ring",
        ans: "ans2"
    },
    {
        Question:"Q9: A _________ is used to connect networking devices that are in a very close geographic area, such as a floor of a building, a building itself, or a campus environment.",
        a: "WAN",
        b: "LAN",
        c: "MAN",
        d: "LAN and MAN",
        ans: "ans2"
    },
    {
        Question:"Q10:  A _________ uses Gigabit Ethernet as a media type",
        a: "WAN",
        b: "LAN",
        c: "MAN",
        d: "LAN and MAN",
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