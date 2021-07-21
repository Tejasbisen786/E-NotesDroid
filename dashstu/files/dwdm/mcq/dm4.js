const quizDB = [
    {
       Question:"Q1: What do you mean by support(A)?",
       a: "Total number of transactions containing A",
       b: "Total Number of transactions not containing A",
       c: "Number of transactions containing A / Total number of transactions",
       d: "Number of transactions not containing A / Total number of transactions",
       ans: "ans3"
    },
    {
        Question:"Q2:  Which of the following is direct application of frequent itemset mining?",
       a: "Social Network Analysis",
       b: "Outlier Detection",
       c: "Market Basket Analysis",
       d: "Intrusion Detection",
       ans: "ans3"
    },
    {
        Question:"Q3: If we know the support of itemset {a, b} is 10, which of the following numbers are the possible supports of itemset {a, b, c}?",
        a: "9&10",
        b: "0",
        c: "11",
        d: "10&20",
        ans: "ans1"
    },
    {
        Question:"Q4: What is the effect of reducing min confidence criteria on the same?",
        a: "Number of association rules remains same",
        b: "Some association rules will add to the current set of association rules",
        c: "Some association rules will become invalid while others might become a rule",
        d: "Can not say",
        ans: "ans2"
    },
    {
        Question:"Q5: Choose which data mining task is suitable for the following scenario: first buy digital camera, then buy large SD memory cards",
        a: "Sequential pattern analysis",
        b: "Classification",
        c: "Association rule",
        d: "Prediction",
        ans: "ans1"
    },
    {
        Question:"Q6: Choose which data mining task is the most suitable for the following scenario: determining the stock value of a certain company",
        a: "Classification",
        b: "Clustering",
        c: "Classification",
        d: "Prediction",
        ans: "ans4"
    },
    {
        Question:"Q7: Choose which data mining task is the most suitable for the following scenario: Identifying an unexpected/unusual amount of spending",
        a: "Prediction",
        b: "Sequential pattern analysis",
        c: "Association rules",
        d: "Anomaly detection",
        ans: "ans4"
    },
    {
        Question:"Q8: Choose which data mining task is the most suitable for the following scenario: diagnosing the level of flood severity",
        a: "Prediction",
        b: "Classification",
        c: "Anomaly detection",
        d: "Association rules",
        ans: "ans2"
    },
    {
        Question:"Q9: Choose which data mining task is the most suitable for the following scenario: detecting the dosage of medicine for a certain treatment",
        a: "Classification",
        b: "Prediction",
        c: "Association rules",
        d: "Sequential pattern analysis",
        ans: "ans2"
    },
    {
        Question:"Q10:  Choose which data mining task is the most suitable for the following scenario: grouping participants in a weight loss campaign",
        a: "Classification",
        b: "Prediction",
        c: "Clustering",
        d: "Association rules",
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