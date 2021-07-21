const quizDB = [
    {
       Question:"Q1: How can we describe an array in the best possible way?",
       a: "The Array shows a hierarchical structure.",
       b: "Arrays are immutable.",
       c: "Container that stores the elements of similar types",
       d: "The Array is not a data structure",
       ans: "ans3"
    },
    {
        Question:"Q2: Which of the following is the correct way of declaring an array?",
       a: "int javatpoint[10];",
       b: "int javatpoint;",
       c: "javatpoint{20};",
       d: "array javatpoint[10];",
       ans: "ans1"
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
        Question:"Q4: Which of the following is the advantage of the array data structure?",
        a: "Elements of mixed data types can be stored.",
        b: "Easier to access the elements in an array",
        c: "Index of the first element starts from 1.",
        d: "Elements of an array cannot be sorted",
        ans: "ans2"
    },
    {
        Question:"Q5: Which of the following highly uses the concept of an array?",
        a: "Binary Search tree",
        b: "Caching",
        c: "Spatial locality",
        d: "Scheduling of Processes",
        ans: "ans3"
    },
    {
        Question:"Q6: Which of the following is the disadvantage of the array?",
        a: "Stack and Queue data structures can be implemented through an array.",
        b: "Index of the first element in an array can be negative",
        c: "Wastage of memory if the elements inserted in an array are lesser than the allocated size",
        d: "Elements can be accessed sequentially.",
        ans: "ans3"
    },
    {
        Question:"Q7: Which one of the following is the size of int arr[9] assuming that int is of 4 bytes?",
        a: "9",
        b: "36",
        c: "35",
        d: "None of the above",
        ans: "ans2"
    },
    {
        Question:"Q8: Which one of the following is the process of inserting an element in the stack?",
        a: "Insert",
        b: "Add",
        c: "Push",
        d: "None of the above",
        ans: "ans3"
    },
    {
        Question:"Q9: When the user tries to delete the element from the empty stack then the condition is said to be a ____",
        a: "Underflow",
        b: "Garbage collection",
        c: "Overflow",
        d: "None of the above",
        ans: "ans1"
    },
    {
        Question:"Q10:  If the size of the stack is 10 and we try to add the 11th element in the stack then the condition is known as___",
        a: "Underflow",
        b: "Garbage collection",
        c: "Overflow",
        d: "None of the above",
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