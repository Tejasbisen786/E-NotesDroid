const quizDB = [
    {
       Question:"Q1: System testing is a",
       a: "Black box testing",
       b: "Grey box testing",
       c: "White box testing",
       d: "Both a and b",
       ans: "ans1"
    },
    {
        Question:"Q2: Which of the following is true about black-box testing?",
       a: "Black box testing facilitates testing communication amongst modules",
       b: "The main focus of black box testing is on the validation of your functional requirements",
       c: "Black box testing gives abstraction from code and focuses on testing effort on the software system behavior",
       d: "All of the Above",
       ans: "ans4"
    },
    {
        Question:"Q3: Which is/are characteristic/s of stress testing?",
        a: "It is a type of non functional testing. It involves testing beyond normal operational capacity, often to a breaking point, in order to observe the results. ",
        b: "It is used to determine the stability of a given system.",
        c: "It put great emphasis on robustness, availability, and error handling under a heavy load, rather than on what would be considered correct behavior under normal circumstances",
        d: "All of the above",
        ans: "ans4"
    },
    {
        Question:"Q4: What is example of load testing?",
        a: "Downloading large contents from the internet.",
        b: "Running multiple applications on a computer or server simultaneously.",
        c: "Printing large document using printer in a queue.",
        d: "None of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q5: Which is/are the characteristics of equivalence partitioning?",
        a: "In equivalence-partitioning technique we need to test only one condition from each partition.",
        b: "If one condition in a partition works, we assume all of the conditions in that partition will work.",
        c: "If one of the conditions in a partition does not work, then we assume that none of the conditions in that partition will work.",
        d: "All the above",
        ans: "ans4"
    },
    {
        Question:"Q6: Which of the following is not called as white-box testing?",
        a: "Open box Testing",
        b: "Glass box Testing",
        c: "Clear box Testing",
        d: "Closed box Testing",
        ans: "ans4"
    },
    {
        Question:"Q7: What is an equivalence partition?",
        a: "A set of test cases for testing classes of objects",
        b: "An input or output range of values such that only one value in the range becomes a test case",
        c: "An input or output range of values such that each value in the range becomes a test case",
        d: "An input or output range of values such that every tenth value in the range becomes a test case",
        ans: "ans2"
    },
    {
        Question:"Q8: What are the other black box techniques ?",
        a: "Behave like a dumb user",
        b: "Look for bugs where you have already found them",
        c: "Follow experience ",
        d: "All mentioned above",
        ans: "ans4"
    },
    {
        Question:"Q9: Testing where you really assure only that the software minimally works.",
        a: "Stress testing",
        b: "Test-to-pass",
        c: "Test-to-fail",
        d: "None of the above",
        ans: "ans2"
    },
    {
        Question:"Q10: Which of the following is used to perform high-level review of the specification?",
        a: "Pretend to be the customer",
        b: "Search existing standards and guidelines",
        c: "Review and test similar software",
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