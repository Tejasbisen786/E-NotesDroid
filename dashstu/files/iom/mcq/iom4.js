const quizDB = [
    {
       Question:"Q1: Which among the following is a type of inventory system that is used to manage independent demand items?",
       a: "Order point system",
       b: "Material Requirements Planning",
       c: "Time Phased Order Point",
       d: "Enterprise Resource Planning",
       ans: "ans3"
    },
    {
        Question:"Q2: An effective inventory management minimises the investment in inventory by effectively meeting the ______",
       a: "Functional requirement",
       b: "Customer requirement",
       c: "Process reliability",
       d: "Sales forecasting of a firm",
       ans: "ans1"
    },
    {
        Question:"Q3: To achieve _______ in purchasing and transportation, goods may be purchased in larger quantities than the actual demand.",
        a: "Continuation",
        b: "Quality",
        c: "Cost efficiency",
        d: "Potential value",
        ans: "ans3"
    },
    {
        Question:"Q4: Which among the following is the objective of the Enterprise Resource Planning system?",
        a: "Manage purchase order",
        b: "Control the flow of dependent demand inventories",
        c: "Organise external management information",
        d: "Balance supply and demand",
        ans: "ans4"
    },
    {
        Question:"Q5: Which among the following models is used to calculate the timing of the inventory order?",
        a: "Economic order quantity model",
        b: "Fixed order quantity model",
        c: "Reorder point model",
        d: "Fixed order inventory model",
        ans: "ans3"
    },
    {
        Question:"Q6: The type of inventory method that comprises more number of accounting transactions is known as ______.",
        a: "Periodic inventory method",
        b: "Perpetual inventory system",
        c: "Finished goods inventory method",
        d: "Fixed order period inventory system",
        ans: "ans2"
    },
    {
        Question:"Q7: In the ABC Analysis system the B category stands for_____.",
        a: "Outstanding importance in value",
        b: "Comparatively unimportant in value",
        c: "Comparatively important in value",
        d: "Average importance in value",
        ans: "ans4"
    },
    {
        Question:"Q8: Which among the following is a quantity of a specific item that is ordered from the supplier and issued as a standard quantity to the production process?",
        a: "Safety stock",
        b: "Lot size",
        c: "Standard deviation",
        d: "Inventory control",
        ans: "ans2"
    },
    {
        Question:"Q9: The economic order quantity formula is taken using _____.",
        a: "Differential calculus",
        b: "Integral calculus",
        c: "Vector calculus",
        d: "Multivariate analysis",
        ans: "ans1"
    },
    {
        Question:"Q10:  Which among the following components is calculated as the sum of the fixed costs that happen each time an item is ordered?",
        a: "Carrying cost",
        b: "Order cost",
        c: "Holding cost",
        d: "Storing cost",
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