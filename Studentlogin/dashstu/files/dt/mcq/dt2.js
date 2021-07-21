const quizDB = [
    {
       Question:"Q1: In boolean algebra, the OR operation is performed by which properties?",
       a: "Associative properties",
       b: "Commutative properties",
       c: "Distributive properties",
       d: "All of the Mentioned",
       ans: "ans4"
    },
    {
        Question:"Q2: The expression for Absorption law is given by ________",
       a: "A + AB = A",
       b: "A + AB = B",
       c: "AB + AA’ = A",
       d: "A + B = B + A",
       ans: "ans1"
    },
    {
        Question:"Q3: According to boolean law: A + 1 = ?",
        a: "1",
        b: "A",
        c: "0",
        d: "A'",
        ans: "ans1"
    },
    {
        Question:"Q4: The involution of A is equal to _________",
        a: "A",
        b: "A'",
        c: "1",
        d: "0",
        ans: "ans1"
    },
    {
        Question:"Q5: A(A + B) = ?",
        a: "AB",
        b: "1",
        c: "(1 + AB)",
        d: "A",
        ans: "ans4"
    },
    {
        Question:"Q6: DeMorgan’s theorem states that _________",
        a: "(AB)' = A' + B'",
        b: "(A + B)’ = A’ * B",
        c: "A’ + B’ = A’B’",
        d: "(AB)’ = A’ + B",
        ans: "ans1"
    },
    {
        Question:"Q7:  (A + B)(A' * B') = ?",
        a: "1",
        b: "0",
        c: "AB",
        d: "AB'",
        ans: "ans2"
    },
    {
        Question:"Q8: Simplify Y = AB' + (A' + B)C.",
        a: "AB' + C",
        b: "AB + AC",
        c: "A’B + AC’",
        d: "AB + A",
        ans: "ans1"
    },
    {
        Question:"Q9: Complement of the expression A'B + CD' is _________",
        a: "(A’ + B)(C’ + D)",
        b: "(A + B')(C' + D)",
        c: "(A’ + B)(C’ + D)",
        d: "(A + B’)(C + D’)",
        ans: "ans2"
    },
    {
        Question:"Q10:  The boolean function A + BC is a reduced form of ____________",
        a: "AB + BC",
        b: "(A + B)(A + C)",
        c: "A'B + AB'C",
        d: "(A + C)B",
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