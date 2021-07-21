const quizDB = [
    {
       Question:"Q1: The process to gather the software requirements from client, analyze and document them is known as ___________________.",
       a: "Feasibility Study",
       b: "Requirement Gathering",
       c: "Requirement Engineering",
       d: "System Requirements Specification",
       ans: "ans3"
    },
    {
        Question:"Q2: Which of the following property does not correspond to a good Software Requirements Specification (SRS) ?",
       a: "Verifiable",
       b: "Ambiguous",
       c: "Complete",
       d: "Traceable",
       ans: "ans2"
    },
    {
        Question:"Q3: Arrange the given sequence to form a SRS Prototype outline as per IEEE SRS Standard.i. General description ii. Introduction iii. Index iv. Appendices v. Specific Requirements",
        a: "iii, I, ii, v, iv ",
        b: "iii, ii, I, v, iv",
        c: "ii, I, v, iv, iii",
        d: "iii, I, ii",
        ans: "ans3"
    },
    {
        Question:"Q4: Why is Requirements Elicitation a difficult task ?",
        a: "Problem of scope",
        b: "Problem of understanding",
        c: "Problem of volatility",
        d: "All of the above",
        ans: "ans4"
    },
    {
        Question:"Q5: What is the first step of requirement elicitation ?",
        a: "Identifying Stakeholder",
        b: "Listing out Requirements",
        c: "Requirements Gathering",
        d: "All of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q6: The full form of PERT is ___________",
        a: "Program Evaluation and Rate Technology",
        b: "Program Evaluation and Robot Technique",
        c: "Program Evaluation and Robot Technology",
        d: "Program Evaluation and Review Technique",
        ans: "ans4"
    },
    {
        Question:"Q7:Why is Requirements Elicitation a difficult task ?",
        a: "Problem of scope",
        b: "Problem of understanding",
        c: "Problem of volatility",
        d: "All of the above",
        ans: "ans4"
    },
    {
        Question:"Q8: The critical path ……….",
        a: "Is the longest path",
        b: "Is the shortest path",
        c: "Is a mixture of all paths",
        d: "Is a path that operates from the starting node to the end node",
        ans: "ans1"
    },
    {
        Question:"Q9: Which one of the following is not a step of requirement engineering?",
        a: "elicitation",
        b: "design",
        c: "analysis",
        d: "Documentation",
        ans: "ans2"
    },
    {
        Question:"Q10: .___________ and ____________ are the two view points discussed in Controlled Requirements Expression (CORE).",
        a: "Functional, Non-Functional",
        b: "User, Developer",
        c: "Known, Unknown",
        d: "All of the mentioned ",
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