const quizDB = [
    {
       Question:"Q1: Which is the smallest unit amongst the following with reference to the ATM-",
       a: "transmission path",
       b: "virtual path",
       c: "virtual circuit",
       d: "all are of the same size",
       ans: "ans3"
    },
    {
        Question:"Q2: IEEE 802.8 is/was –",
       a: "IBM Token Bus",
       b: "Integrated Services LAN",
       c: "Wireless LAN and Mesh",
       d: "Fiber Optic TAG",
       ans: "ans4"
    },
    {
        Question:"Q3: Which of the following was the IBM Token bus?",
        a: "IEEE 802.10",
        b: "IEEE 802.11",
        c: "IEEE 802.1",
        d: "IEEE 802.4",
        ans: "ans4"
    },
    {
        Question:"Q4: What is the function of Network Interface Cards?",
        a: "connects the clients, servers and peripherals to the network through a port",
        b: "allows you to segment a large network into smaller, efficient networks",
        c: "connects networks with different protocols like TCP/IP",
        d: "boost the signal between two cable segments or wireless access points",
        ans: "ans1"
    },
    {
        Question:"Q5: A device that provides a central connection point for cables is –",
        a: "Switch",
        b: "Hub",
        c: "Gateway",
        d: "Proxy Server",
        ans: "ans3"
    },
    {
        Question:"Q6: A device which is used to boost the signal between two cable segments or wireless access points is",
        a: "Booster",
        b: "Repeater",
        c: "Switch",
        d: "Router",
        ans: "ans3"
    },
    {
        Question:"Q7: A device that connects networks with different protocols –",
        a: "Switch",
        b: "Hub",
        c: "Gateway",
        d: "Proxy Server",
        ans: "ans3"
    },
    {
        Question:"Q8: A device that helps prevent congestion and data collisions –",
        a: "Switch",
        b: "Hub",
        c: "Gateway",
        d: "Proxy Server",
        ans: "ans1"
    },
    {
        Question:"Q9: A device that is used to connect a number of LANs is –",
        a: "Router",
        b: "Repeater",
        c: "Bridge",
        d: "Switch",
        ans: "ans1"
    },
    {
        Question:"Q10: How many layers are there in the OSI reference model?",
        a: "4",
        b: "5",
        c: "6",
        d: "7",
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