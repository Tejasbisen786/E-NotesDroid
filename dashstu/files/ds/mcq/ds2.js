const quizDB = [
    {
       Question:"Q1: Which Data Structure is used to perform Recursion?",
       a: "Queue",
       b: "Stack",
       c: "Linked List",
       d: "Tree",
       ans: "ans2"
    },
    {
        Question:"Q2: What’s happen if base condition is not defined in recursion ?",
       a: "Stack underflow",
       b: "Stack Overflow",
       c: "None of these",
       d: "Both a and b",
       ans: "ans2"
    },
    {
        Question:"Q3: Choose the correct answer.",
        a: "Recursion is always better than iteration.",
        b: "Recursion uses more memory compared to iteration",
        c: "Recursion uses less memory compared to iteration.",
        d: "Iterative function is always better and simpler to write than recursion.",
        ans: "ans2"
    },
    {
        Question:"Q4: Recursion is similar to which of the following?",
        a: "Switch Case",
        b: "Loop",
        c: "If-else",
        d: "None",
        ans: "ans2"
    },
    {
        Question:"Q5: Iteration requires more system memory than recursion.",
        a: "True",
        b: "False",
        c: "Both",
        d: "None of the above",
        ans: "ans2"
    },
    {
        Question:"Q6: Which of the following problem cannot be solved using recursion?",
        a: "Tower of Hanoi",
        b: "Fibonacci series",
        c: "Tree Traversal",
        d: "Problems without base case",
        ans: "ans4"
    },
    {
        Question:"Q7: Which of the following statement is true about stack?",
        a: "Pop operation removes the top most element",
        b: "Pop operation removes the bottom most element",
        c: "Push operation adds new element at the bottom",
        d: "Push operation removes the top most element",
        ans: "ans1"
    },
    {
        Question:"Q8: What is the space complexity of program to reverse stack recursively?",
        a: "O(1)",
        b: "O(log n)",
        c: "O(n)",
        d: "O(n log n)",
        ans: "ans3"
    },
    {
        Question:"Q9: Stack can be reversed without using extra space by _____________",
        a: "using recursion",
        b: "using linked list to implement stack",
        c: "using an extra stack",
        d: "it is not possible",
        ans: "ans2"
    },
    {
        Question:"Q10:   Which of the following is considered as the top of the stack in the linked list implementation of the stack?",
        a: "Last node",
        b: "First node",
        c: "Random node",
        d: "Middle node",
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