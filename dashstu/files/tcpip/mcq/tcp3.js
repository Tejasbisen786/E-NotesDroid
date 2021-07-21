const quizDB = [
    {
       Question:"Q1: The term that is used to place packet in its route to its destination is called __________",
       a: "Delayed",
       b: "Urgent",
       c: "Forwarding",
       d: "Delivering",
       ans: "ans3"
    },
    {
        Question:"Q2: A second technique to reduce routing table and simplify searching process is called _________",
       a: "Network-Specific Method",
       b: "Network-Specific Motion",
       c: "Network-Specific Maintaining",
       d: "Network-Specific Membership",
       ans: "ans1"
    },
    {
        Question:"Q3: Next-Hop Method is used to reduce contents of a _________",
        a: "Revolving table",
        b: "Rotating Table",
        c: "Routing Table",
        d: "Re-allocate table",
        ans: "ans3"
    },
    {
        Question:"Q4: Several techniques can make size of routing table manageable and also handle issues such as __________",
        a: "Maturity",
        b: "Error reporting",
        c: "Tunneling",
        d: "Security",
        ans: "ans4"
    },
    {
        Question:"Q5:Host-specific routing is used for purposes such as checking route or providing ____",
        a: "Network Measures",
        b: "Security Measures",
        c: "Routing Measures",
        d: "Delivery Measures",
        ans: "ans2"
    },
    {
        Question:"Q6: In Unicast routing, if instability is between three nodes, stability cannot be ________",
        a: "Stable",
        b: "Reversed",
        c: "Guaranteed",
        d: "Forward",
        ans: "ans3"
    },
    {
        Question:"Q7: In Unicast Routing, Dijkstra algorithm creates a shortest path tree from a ________",
        a: "Graph",
        b: "Tree",
        c: "Network",
        d: "Link",
        ans: "ans1"
    },
    {
        Question:"Q8: In Multicast Routing Protocol, flooding is used to broadcast packets but it creates ________",
        a: "Gaps",
        b: "Loops",
        c: "Holes",
        d: "Links",
        ans: "ans2"
    },
    {
        Question:"Q9: RPF stands for __________",
        a: "Reverse Path Forwarding",
        b: "Reverse Path Failure",
        c: "Reverse Packet Forwarding",
        d: "Reverse Protocol Failure",
        ans: "ans1"
    },
    {
        Question:"Q10:  LSP stands for __________",
        a: "Link Stable Packet",
        b: "Link State Packet",
        c: "Link State Protocol",
        d: "Link State Path",
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