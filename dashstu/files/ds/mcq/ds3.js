const quizDB = [
    {
       Question:"Q1: A linear list of elements in which deletion can be done from one end (front) and insertion can take place only at the other end (rear) is known as _____________",
       a: "Queue",
       b: "Stack",
       c: "Tree",
       d: "Linked list",
       ans: "ans1"
    },
    {
        Question:"Q2: The data structure required for Breadth First Traversal on a graph is?",
       a: "Stack;",
       b: "Array",
       c: "Queue",
       d: "Tree",
       ans: "ans3"
    },
    {
        Question:"Q3: A queue follows __________",
        a: "FIFO (First In First Out) principle",
        b: "LIFO (Last In First Out) principle",
        c: "Ordered array",
        d: "Linear tree",
        ans: "ans1"
    },
    {
        Question:"Q4: Circular Queue is also known as ________",
        a: "Ring Buffer",
        b: "Square Buffer",
        c: "Rectangle Buffer",
        d: "Curve Buffer",
        ans: "ans1"
    },
    {
        Question:"Q5: If the elements “A”, “B”, “C” and “D” are placed in a queue and are deleted one at a time, in what order will they be removed?",
        a: "ABCD",
        b: "DCBA",
        c: "DCAB",
        d: "ABDC",
        ans: "ans1"
    },
    {
        Question:"Q6: A data structure in which elements can be inserted or deleted at/from both ends but not in the middle is?",
        a: "Queue",
        b: "Circular queue",
        c: "Dequeue",
        d: "Priority queue",
        ans: "ans3"
    },
    {
        Question:"Q7: A normal queue, if implemented using an array of size MAX_SIZE, gets full when?",
        a: "Rear = MAX_SIZE – 1",
        b: "Front = (rear + 1)mod MAX_SIZE",
        c: "Front = rear + 1",
        d: "Rear = front",
        ans: "ans2"
    },
    {
        Question:"Q8: Queues serve major role in ______________",
        a: "Simulation of recursion",
        b: "Simulation of arbitrary linked list",
        c: "Simulation of limited resource allocation",
        d: "Simulation of heap sort",
        ans: "ans3"
    },
    {
        Question:"Q9: Which of the following is not the type of queue?",
        a: "Ordinary queue",
        b: "Single ended queue",
        c: "Circular queue",
        d: "Priority queue",
        ans: "ans2"
    },
    {
        Question:"Q10:  A linear collection of data elements where the linear node is given by means of pointer is called?",
        a: "Linked list",
        b: "Node list",
        c: "Primitive list",
        d: "Unordered list",
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