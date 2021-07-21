const quizDB = [
    {
       Question:"Q1: Which of the following testing is also known as white-box testing?",
       a: "Structural testing",
       b: "Error guessing technique",
       c: "Design based testing",
       d: "None of the mentioned",
       ans: "ans1"
    },
    {
        Question:"Q2: Which is not a type of Review?",
       a: "Requirement Analysis",
       b: "Peer to peer",
       c: "Walk through",
       d: "Inspection",
       ans: "ans1"
    },
    {
        Question:"Q3: Who leads a walkthrough? ",
        a: "Author",
        b: "Moderator",
        c: "Reviewer",
        d: "Scribe",
        ans: "ans1"
    },
    {
        Question:"Q4: Testing of individual components by the developers are comes under ________________ ",
        a: "Integration testing",
        b: "Validation testing",
        c: "Unit testing",
        d: "None of the mentioned",
        ans: "ans3"
    },
    {
        Question:"Q5: What are the various Testing Levels?",
        a: "Unit Testing",
        b: "System Testing",
        c: "Integration Testing",
        d: "All of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q6: Program with high cyclomatic complexity is almost likely to be:",
        a: "Difficult to test",
        b: "Small",
        c: "Difficult to write",
        d: "Large",
        ans: "ans1"
    },
    {
        Question:"Q7: White box testing techniques are?",
        a: "Statement coverage testing",
        b: "Decision coverage testing ",
        c: "Data flow testing",
        d: "All of the above",
        ans: "ans4"
    },
    {
        Question:"Q8: Integration testing in the small:",
        a: "Tests the individual components that have been developed.",
        b: "Only uses components that form part of the live system.",
        c: "Tests interactions between modules or subsystems.",
        d: "Tests interfaces to other systems.",
        ans: "ans3"
    },
    {
        Question:"Q9: What is Cyclomatic complexity?",
        a: "Black box testing",
        b: "White box testing",
        c: "Yellow box testing",
        d: "Green box testing",
        ans: "ans2"
    },
    {
        Question:"Q10: Which of the following is the main advantage of top down integration testing?",
        a: "Major decision points are tested early",
        b: "Modules are not tested by team again and again.",
        c: "No stubs need to be written",
        d: "None of the above.",
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