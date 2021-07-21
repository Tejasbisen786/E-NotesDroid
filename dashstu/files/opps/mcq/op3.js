const quizDB = [
    {
       Question:"Q1: What is the role of a constructor in classes?",
       a: "To modify the data whenever required",
       b: "To destroy an object",
       c: "To initialize the data members of an object when it is created",
       d: "To call private functions from the outer world",
       ans: "ans3"
    },
    {
        Question:"Q2: Why constructors are efficient instead of a function init() defined by the user to initialize the data members of an object?",
       a: "Because user may forget to call init() using that object leading segmentation fault",
       b: "Because user may call init() more than once which leads to overwriting values",
       c: "Because user may forget to define init() function",
       d: "All of the mentioned",
       ans: "ans4"
    },
    {
        Question:"Q3: What is a copy constructor?",
        a: "A constructor that allows a user to move data from one object to another",
        b: "A constructor to initialize an object with the values of another object",
        c: "A constructor to check the whether to objects are equal or not",
        d: "A constructor to kill other copies of a given object.",
        ans: "ans2"
    },
    {
        Question:"Q4: What happens if a user forgets to define a constructor inside a class?",
        a: "Error occurs",
        b: "Segmentation fault",
        c: "Objects are not created properly",
        d: "Compiler provides a default constructor to avoid faults/errors",
        ans: "ans4"
    },
    {
        Question:"Q5: How many parameters does a default constructor require?",
        a: "1",
        b: "2",
        c: "0",
        d: "3",
        ans: "ans3"
    },
    {
        Question:"Q6: How constructors are different from other member functions of the class?",
        a: "Constructor has the same name as the class itself",
        b: "Constructors do not return anything",
        c: "Constructors are automatically called when an object is created",
        d: "All of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q7: How many types of constructors are there in C++?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        ans: "ans3"
    },
    {
        Question:"Q8: What is the role of destructors in Classes?",
        a: "To modify the data whenever required",
        b: "To destroy an object when the lifetime of an object ends",
        c: "To initialize the data members of an object when it is created",
        d: "To call private functions from the outer world",
        ans: "ans2"
    },
    {
        Question:"Q9: What is syntax of defining a destructor of class A?",
        a: "A(){}",
        b: "~A(){}",
        c: "A::A(){}",
        d: "~A(){};",
        ans: "ans2"
    },
    {
        Question:"Q10:  When destructors are called?",
        a: "When a program ends",
        b: "When a function ends",
        c: "When a delete operator is used",
        d: "All of the mentioned",
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