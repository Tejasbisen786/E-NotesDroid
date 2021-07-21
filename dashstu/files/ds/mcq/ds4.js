const quizDB = [
    {
       Question:"Q1: A linear collection of data elements where the linear node is given by means of pointer is called?",
       a: "linked list",
       b: "node list",
       c: "primitive list",
       d: "None of these",
       ans: "ans1"
    },
    {
        Question:"Q2: What is the time complexity to count the number of elements in the linked list?",
       a: "O(1)",
       b: "O(n)",
       c: "O(logn)",
       d: "None of the mentioned",
       ans: "ans2"
    },
    {
        Question:"Q3: How can we initialize an array in C language?",
        a: "int arr[2]=(10, 20)",
        b: "int arr(2)={10, 20}",
        c: "int arr[2] = {10, 20}",
        d: "int arr(2) = (10, 20)",
        ans: "ans3"
    },
    {
        Question:"Q4: What would be the asymptotic time complexity to add a node at the end of singly linked list, if the pointer is initially pointing to the head of the list?",
        a: "O(1)",
        b: "O(n)",
        c: "θ (n)",
        d: "θ (1)",
        ans: "ans3"
    },
    {
        Question:"Q5: Linked lists are not suitable to for the implementation of?",
        a: "Insertion sort",
        b: "Radix sort",
        c: "Polynomial manipulation",
        d: "Binary search",
        ans: "ans4"
    },
    {
        Question:"Q6: In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is",
        a: "log 2 n",
        b: "n/2",
        c: "log 2 n – 1",
        d: "n.",
        ans: "ans4"
    },
    {
        Question:"Q7: Which of these is an application of linked lists?",
        a: "To implement file systems",
        b: "For separate chaining in hash-tables",
        c: "To implement non-binary trees",
        d: "All of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q8: In circular linked list, insertion of node requires modification of?",
        a: "One pointer",
        b: "Two pointer",
        c: "Three pointer",
        d: "None ",
        ans: "ans2"
    },
    {
        Question:"Q9: Which of the following is not a disadvantage to the usage of array?",
        a: "Fixed size",
        b: "There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size",
        c: "Insertion based on position",
        d: "Accessing elements at specified positions",
        ans: "ans4"
    },
    {
        Question:"Q10:  Which of these is not an application of a linked list?",
        a: "To implement file systems",
        b: "For separate chaining in hash-tables",
        c: "To implement non-binary trees",
        d: "Random Access of elements",
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