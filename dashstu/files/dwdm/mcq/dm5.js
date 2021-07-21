const quizDB = [
    {
       Question:"Q1: Which of the following step / assumption in regression modeling impacts the tradeoff between under-fitting and over-fitting the most.",
       a: "The polynomial degree",
       b: "Whether we learn the weights by matrix inversion or gradient descent",
       c: "The use of a constant-term",
       d: "Reinforcement learning",
       ans: "ans1"
    },
    {
        Question:"Q2:  In a linear regression problem, we are using “R-squared” to measure goodness-offit. We add a feature in linear regression model and retrain the same model.Which of the following option is true?",
       a: "If R Squared increases, this variable is significant.",
       b: "If R Squared decreases, this variable is not significant.",
       c: "Individually R squared cannot tell about variable importance. We can’t say anything aboutit right now.",
       d: "None of these",
       ans: "ans3"
    },
    {
        Question:"Q3: Which one of the statement is true regarding residuals in regression analysis?",
        a: "Mean of residuals is always zero",
        b: "Mean of residuals is always less than zero",
        c: "Mean of residuals is always greater than zero",
        d: "There is no such rule for residuals.",
        ans: "ans1"
    },
    {
        Question:"Q4: Which of the one is true about Heteroskedasticity?",
        a: "Linear Regression with varying error terms",
        b: "Linear Regression with constant error terms",
        c: "Linear Regression with zero error terms",
        d: "None of these",
        ans: "ans1"
    },
    {
        Question:"Q5: Which of the following indicates a fairly strong relationship between X and Y?",
        a: "Correlation coefficient = 0.9",
        b: "The p-value for the null hypothesis Beta coefficient =0 is 0.0001",
        c: "The t-statistic for the null hypothesis Beta coefficient=0 is 30",
        d: "None of these",
        ans: "ans1"
    },
    {
        Question:"Q6: To test linear relationship of y(dependent) and x(independent) continuous variables, which of the following plot best suited?",
        a: "Scatter plot",
        b: "Barchart",
        c: "Histograms",
        d: "None of these",
        ans: "ans1"
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