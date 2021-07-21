const quizDB = [
    {
        Question:"Q1: How many faces does test management plan has",
        a: "7",
        b: "4",
        c: "5",
        d: "6",
        ans: "ans1"
     },
     {
         Question:"Q2: __________ is a detail document the describes the test strategy ,schedules, Objectives, estimation and resources required to perform testing for software product",
        a: "Software estimation",
        b: "Risk management",
        c: "Test plan",
        d: "None of the above",
        ans: "ans3"
     },
     {
         Question:"Q3: Which of the following are the typical tasks should be performed by test leader?i. Prepare and acquire test data ii. Write or review a test strategy iii. Write test summary reports based on the information gathered during testing. iv. Review and contribute to test plans",
         a: "i and ii only",
         b: "ii and iii only",
         c: "iii and iv only",
         d: "I and iv only",
         ans: "ans2"
     },
     {
         Question:"Q4: Which of the following are typical exit criteria for testing? i. costs ii. Schedules such as those based on time to market iii. Test environment availability and readiness",
         a: "Estimates of defect density or reliability measures.",
         b: "ii, iii and iv only",
         c: "i , iii and iv only",
         d: "i , ii and iv only",
         ans: "ans4"
     },
     {
         Question:"Q5: State whether the following statements about different test positions are True or False. i. The test manager plans testing activities and chooses the tools and controls to be used. ii. The test manager plans organize and control the testing activities while the tester specifies and executes tests.",
         a: "False, False",
         b: "True, False",
         c: "False, True",
         d: " True, True",
         ans: "ans3"
     },
     {
         Question:"Q6: Which of the following is the test case parameters?",
         a: "Test ID",
         b: "Test scenarios",
         c: " Test data",
         d: "All of the above",
         ans: "ans4"
     },
     {
         Question:"Q7: . Which is / are the ways to deal with a Risk? ",
         a: "Mitigate,Contingency",
         b: "Transfer",
         c: "Ignore",
         d: "All of the above",
         ans: "ans4"
     },
     {
         Question:"Q8: Test management is a process of managing the testing activities in order to ensure high quality and high – end testing of the software application.",
         a: "True",
         b: "False",
         c: "failure cause",
         d: "none of the mentioned",
         ans: "ans1"
     },
     {
         Question:"Q9: Software risk always involves two characteristics. What are those characteristics? ",
         a: "Uncertainty and Loss",
         b: "Certainty and Profit",
         c: "Staff size and Budget",
         d: "Project Deadline and Budget",
         ans: "ans1"
     },
     {
         Question:"Q10: How many steps should be followed to write a test plan as per IEEE 829",
         a: "5",
         b: "7",
         c: "8",
         d: "6",
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