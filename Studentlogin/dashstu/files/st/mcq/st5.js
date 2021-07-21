const quizDB = [
    {
       Question:"Q1: ____________Issting technique that performs using special automated testing software tools to execute test case suits.",
       a: "Manual testing",
       b: "Automated testing",
       c: "Random testing",
       d: "None of the mentioned",
       ans: "ans2"
    },
    {
        Question:"Q2: _________ testing types is not a part of system testing?",
       a: "Stress Testing",
       b: "Recovery testing",
       c: "Random testing",
       d: "System Testing",
       ans: "ans3"
    },
    {
        Question:"Q3: Which of the following testing technique deeply emphasizes on testing of one specific module?",
        a: "Inter-system testing",
        b: "Gorilla Testing",
        c: "Breadth Testing",
        d: "Fuzz Testing",
        ans: "ans2"
    },
    {
        Question:"Q4: __________ doesn't know anything about the software being tested; just click or types randomly",
        a: "Smart monkey",
        b: "Semi-smart monkey",
        c: "Dumb monkey",
        d: "None of the mentioned",
        ans: "ans3"
    },
    {
        Question:"Q5: Which of the following are the software testing tools.",
        a: "Selenium",
        b: "Auto IT",
        c: "Rational Robot",
        d: "All mentioned above",
        ans: "ans4"
    },
    {
        Question:"Q6: Procedure where all the programmers, testers, program managers put aside their day-to-day duties and “pound on the product”",
        a: "Beta testing",
        b: "Smart monkey",
        c: "Bug bash",
        d: "None of the above",
        ans: "ans3"
    },
    {
        Question:"Q7:Which type of testing tool is used for implementation, execution and tracking changes ",
        a: "Test management tool",
        b: "Configuration management tool",
        c: "Static Analysis tool",
        d: "Test data preparation tool",
        ans: "ans2"
    },
    {
        Question:"Q8: In which environment we can performed the Beta testing?",
        a: "User’s and developer’s end",
        b: "Developer’s end",
        c: "User’s end",
        d: "none of the mentioned",
        ans: "ans3"
    },
    {
        Question:"Q9:What tool that are used to control and operate the software being tested",
        a: "Monitor",
        b: "Viewer",
        c: "Drivers",
        d: "None of the above",
        ans: "ans3"
    },
    {
        Question:"Q10: Features an automation tools should have are ",
        a: "Testing of database",
        b: "Easy to use",
        c: "Object identification",
        d: "All of the above",
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