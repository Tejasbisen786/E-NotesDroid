const quizDB = [
    {
       Question:"Q1: _________ augments the CSMA algorithm to detect collision.",
       a: "CSMA/CA",
       b: "CSMA/CD",
       c: "either (a) or (b)",
       d: "both (a) and (b)",
       ans: "ans2"
    },
    {
        Question:"Q2: _________ is a multiple-access method in which the available bandwidth of a link is shared in time, frequency, or through code, between different stations.",
       a: "Random access",
       b: "Controlled access",
       c: "Channelization",
       d: "none of the above",
       ans: "ans3"
    },
    {
        Question:"Q3: _________ is based on coding theory and uses sequences of numbers called chips.",
        a: "FDMA",
        b: "TDMA",
        c: "CDMA",
        d: "none of the above",
        ans: "ans3"
    },
    {
        Question:"Q4: ________ requires that each station first listen to the medium before sending.",
        a: "MA",
        b: "CSMA",
        c: "FDMA",
        d: "CDMA",
        ans: "ans1"
    },
    {
        Question:"Q5: In _________ each station sends a frame whenever it has a frame to send.",
        a: "pure ALOHA",
        b: "slotted ALOHA",
        c: "both (a) and (b)",
        d: "neither (a) nor (b)",
        ans: "ans1"
    },
    {
        Question:"Q6: In _________ methods, a station cannot send unless it has been authorized by other stations.",
        a: "random access",
        b: "controlled access",
        c: "channelization",
        d: "none of the above",
        ans: "ans2"
    },
    {
        Question:"Q7: In _________ methods, no station is superior to another station and none is assigned the control over another.",
        a: "random access",
        b: "controlled access",
        c: "channelization",
        d: "none of the above",
        ans: "ans1"
    },
    {
        Question:"Q8: In _________ methods, the stations consult one another to find which station has the right to send.",
        a: "random access",
        b: "controlled access",
        c: "channelization",
        d: "none of the above",
        ans: "ans2"
    },
    {
        Question:"Q9: In _________, a station monitors the medium after it sends a frame to see if the transmission was successful. If so, the station is finished. If, however, there is a collision, the frame is sent again.",
        a: "CSMA/CA",
        b: "CSMA/CD",
        c: "either (a) or (b)",
        d: "both (a) and (b)",
        ans: "ans2"
    },
    {
        Question:"Q10:  In _________, collisions are avoided through the use of three strategies: the interframe space, the contention window, and acknowledgments.",
        a: "CSMA/CA",
        b: "CSMA/CD",
        c: "either (a) or (b)",
        d: "both (a) and (b)",
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