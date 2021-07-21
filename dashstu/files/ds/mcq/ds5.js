const quizDB = [
    {
       Question:"Q1: In a complete k-ary tree, every internal node has exactly k children or no child. The number of leaves in such a tree with n internal nodes is:",
       a: "nk",
       b: "(n – 1) k+ 1",
       c: "n( k – 1) + 1",
       d: "n(k – 1)",
       ans: "ans3"
    },
    {
        Question:"Q2: Height of Height of a binary tree is",
       a: "MAX( Height of left Subtree, Height of right subtree)+1",
       b: "MAX( Height of left Subtree, Height of right subtree)",
       c: "MAX( Height of left Subtree, Height of right subtree)-1",
       d: "None of the above",
       ans: "ans1"
    },
    {
        Question:"Q3: Which of the following options is an application of splay trees ?",
        a: "cache Implementation",
        b: "networks",
        c: "send values",
        d: "receive values",
        ans: "ans1"
    },
    {
        Question:"Q4: Suppose a complete binary tree has height h>0. The minimum no of leaf nodes possible in term of h is?",
        a: "2h -1",
        b: "2h -1 + 1",
        c: "2h -1",
        d: "2h +1",
        ans: "ans3"
    },
    {
        Question:"Q5: A weight-balanced tree is a binary tree in which for each node. The number of nodes in the left sub tree is at least half and at most twice the number of nodes in the right sub tree. The maximum possible height (number of nodes on the path from the root to the farthest leaf) of such a tree on n nodes is best described by which of the following?",
        a: "log2 n",
        b: "log4/3 n",
        c: "log3 n",
        d: "log3/2 n",
        ans: "ans4"
    },
    {
        Question:"Q6: The no of external nodes in a full binary tree with n internal nodes is?",
        a: "n",
        b: "n+1",
        c: "2n",
        d: "2n + 1",
        ans: "ans2"
    },
    {
        Question:"Q7: Which of the following is a true about Binary Trees?",
        a: "Every binary tree is either complete or full.",
        b: "Every complete binary tree is also a full binary tree",
        c: "Every full binary tree is also a complete binary tree.",
        d: "None of the above",
        ans: "ans4"
    },
    {
        Question:"Q8: A Binary Tree can have",
        a: "Can have 2 children",
        b: "Can have 1 children",
        c: "Can have 0 children",
        d: "All of the above",
        ans: "ans4"
    },
    {
        Question:"Q9: Which of the following is not an advantage of trees?",
        a: "Hierarchical structure",
        b: "Faster search",
        c: "Router algorithms",
        d: "Undo/Redo operations in a notepad",
        ans: "ans4"
    },
    {
        Question:"Q10:  The difference between the external path length and the internal path length of a binary tree with n internal nodes is?",
        a: "1",
        b: "n",
        c: "n + 1",
        d: "2n",
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