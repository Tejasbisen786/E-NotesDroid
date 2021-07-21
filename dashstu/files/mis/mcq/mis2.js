const quizDB = [
    {
       Question:"Q1: A key role of Management Information Systems is,",
       a: "To develop and share documents that support day-today organizational activities.",
       b: "To process business information",
       c: "To materialize the business transaction data and produce insightful information which assists managers in decision making",
       d: "None of the above",
       ans: "ans3"
    },
    {
        Question:"Q2: Which one of the following is not a prerequisite for a good MIS?",
       a: "Database",
       b: "Support from Staff",
       c: "Control and maintenance of MIS",
       d: "MIS executives",
       ans: "ans2"
    },
    {
        Question:"Q3: What amongst the followings are the primary characteristics which must be processed by information?",
        a: "Availability",
        b: "Timeliness",
        c: "Accuracy",
        d: "All of these",
        ans: "ans4"
    },
    {
        Question:"Q4: It is a necessity of the data to be ... before it can be converted into information.",
        a: "Processed",
        b: "Transformed",
        c: "Edited",
        d: "None of these",
        ans: "ans1"
    },
    {
        Question:"Q5: Which of the following is not an objective of MIS?",
        a: "Supports in decision-making",
        b: "Provides insightful information",
        c: "Assist management people",
        d: "Recruit people for system",
        ans: "ans4"
    },
    {
        Question:"Q6: Which one is the organization's Back Bone?",
        a: "Capital",
        b: "Employee",
        c: "Management",
        d: "Information",
        ans: "ans4"
    },
    {
        Question:"Q7: Amongst following, which cannot be considered as a business driver in information system?",
        a: "Redesign a business process",
        b: "Information security and privacy",
        c: "Proliferation of networks and the Internet",
        d: "None of these",
        ans: "ans3"
    },
    {
        Question:"Q8: An MIS information comes from",
        a: "Internal source",
        b: "External source",
        c: "Both internal and external source",
        d: "None of the above",
        ans: "ans3"
    },
    {
        Question:"Q9:  Which one is an internal source of information for MIS,",
        a: "Customers care department",
        b: "HR department",
        c: "Marketing department",
        d: "All of these",
        ans: "ans4"
    },
    {
        Question:"Q10:  ... details are provided by management to marketing department.",
        a: "Supplier's",
        b: "Customer's",
        c: "Employee's",
        d: "None of the above",
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