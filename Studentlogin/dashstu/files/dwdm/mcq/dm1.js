const quizDB = [
    {
       Question:"Q1: Which of the following refers to the problem of finding abstracted patterns (or structures) in the unlabeled data?",
       a: "Supervised learning",
       b: "Unsupervised learning",
       c: "Hybrid learning",
       d: "Reinforcement learning",
       ans: "ans2"
    },
    {
        Question:"Q2:  Which one of the following refers to querying the unstructured textual data?",
       a: "Information access",
       b: "Information update",
       c: "Information retrieval",
       d: "Information manipulation",
       ans: "ans3"
    },
    {
        Question:"Q3: Which of the following can be considered as the correct process of Data Mining?",
        a: "Infrastructure, Exploration, Analysis, Interpretation, Exploitation",
        b: "Exploration, Infrastructure, Analysis, Interpretation, Exploitation",
        c: "Exploration, Infrastructure, Interpretation, Analysis, Exploitation",
        d: "Exploration, Infrastructure, Analysis, Exploitation, Interpretation",
        ans: "ans1"
    },
    {
        Question:"Q4: Which of the following is an essential process in which the intelligent methods are applied to extract data patterns?",
        a: "Warehousing",
        b: "Data Mining",
        c: "Text Mining",
        d: "Data Selection",
        ans: "ans2"
    },
    {
        Question:"Q5: What is KDD in data mining?",
        a: "Knowledge Discovery Database",
        b: "Knowledge Discovery Data",
        c: "Knowledge Data definition",
        d: "Knowledge data house",
        ans: "ans1"
    },
    {
        Question:"Q6: Data scrubbing is which of the following?",
        a: "A process to reject data from the data warehouse and to create the necessary indexes",
        b: "A process to load the data in the data warehouse and to create the necessary indexes",
        c: "A process to upgrade the quality of data after it is moved into a data warehouse",
        d: "A process to upgrade the quality of data before it is moved into a data warehouse",
        ans: "ans4"
    },
    {
        Question:"Q7: The @active data warehouse architecture includes which of the following?",
        a: "At least one data mart",
        b: "Data that can extracted from numerous internal and external sources",
        c: "Near real-time updates",
        d: "All of the above",
        ans: "ans4"
    },
    {
        Question:"Q8: A goal of data mining includes which of the following?",
        a: "To explain some observed event or condition",
        b: "To confirm that data exists",
        c: "To analyze data for expected relationships",
        d: "To create a new data warehouse",
        ans: "ans1"
    },
    {
        Question:"Q9: An operational system is which of the following?",
        a: "A system that is used to run the business in real time and is based on historical data.",
        b: "A system that is used to run the business in real time and is based on current data.",
        c: "A system that is used to support decision making and is based on current data.",
        d: "A system that is used to support decision making and is based on historical data.",
        ans: "ans2"
    },
    {
        Question:"Q10:  A data warehouse is which of the following?",
        a: "Can be updated by end users.",
        b: "Contains numerous naming conventions and formats",
        c: "Organized around important subject areas.",
        d: "Contains only current data.",
        ans: "ans3"
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