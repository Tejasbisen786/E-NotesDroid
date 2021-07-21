const quizDB = [
    {
       Question:"Q1: The cost of debt capital is calculated on the basis of _____________ .",
       a: "Net proceeds",
       b: "Annual Interest",
       c: "Annual Depreciation",
       d: "Capital",
       ans: "ans2"
    },
    {
        Question:"Q2: What is Factoring ?",
       a: "Production Plan",
       b: "New Financial Service",
       c: "Cost of Sales",
       d: "all of the above",
       ans: "ans2"
    },
    {
        Question:"Q3: ___________________ is the limitation of Traditional approach of Financial Management",
        a: "More emphasis on long term problems",
        b: "Ignores allocation of resources",
        c: "One-sided approach",
        d: "All of the above",
        ans: "ans4"
    },
    {
        Question:"Q4: Which of the following is the goal of financial management ?",
        a: "Maximise the wealth of Equity shareholders",
        b: "Maximise the wealth of Preference Shareholders",
        c: "Maximise the wealth of Debenture holders",
        d: "All of the above",
        ans: "ans1"
    },
    {
        Question:"Q5: Financial management mainly focuses on ________________ .",
        a: "Efficient management of every business",
        b: "Brand dimension",
        c: "Arrangement of funds",
        d: "All elements of acquiring and using means of financial resources for financial activities",
        ans: "ans4"
    },
    {
        Question:"Q6: Which of the following is Capital market line ?",
        a: "Capital allocation line of a market portfolio",
        b: "Capital allocation line of a risk free asset",
        c: "Both 1 and 2",
        d: "All mentioned above",
        ans: "ans3"
    },
    {
        Question:"Q7: A risk free security has __________ variance.",
        a: "0",
        b: "2",
        c: "4",
        d: "6",
        ans: "ans1"
    },
    {
        Question:"Q8: ________________ is called as Dividend Ratio Method.",
        a: "Debt Equity Method",
        b: "Dividend Yield Method",
        c: "Equity Method",
        d: "Asset Method",
        ans: "ans2"
    },
    {
        Question:"Q9: Which of the following is Capital Employed ?",
        a: "Cash + Bank",
        b: "Assets + Cash",
        c: "Shareholders Funds + Long Funds",
        d: "All of the above",
        ans: "ans3"
    },
    {
        Question:"Q10:  The formula used to calculate current ratio is _______________ .",
        a: "Current liabilities / Current assets",
        b: "Current assets / Current liabilities",
        c: "Inventory / Current liabilities",
        d: "Current liabilities / Inventory",
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