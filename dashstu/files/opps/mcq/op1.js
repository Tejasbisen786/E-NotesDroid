const quizDB = [
    {
       Question:"Q1: Wrapping data and its related functionality into a single entity is known as _____________",
       a: "Abstraction",
       b: "Encapsulation",
       c: "Polymorphism",
       d: "Modularity",
       ans: "ans2"
    },
    {
        Question:"Q2: How structures and classes in C++ differ?",
       a: "In Structures, members are public by default whereas, in Classes, they are private by default",
       b: "In Structures, members are private by default whereas, in Classes, they are public by default",
       c: "Structures by default hide every member whereas classes do not",
       d: "Structures cannot have private members whereas classes can have",
       ans: "ans1"
    },
    {
        Question:"Q3: What does polymorphism in OOPs mean?",
        a: "Concept of allowing overiding of functions",
        b: "Concept of hiding data",
        c: "Concept of keeping things in differnt modules/files",
        d: "Concept of wrapping things into a single unit",
        ans: "ans1"
    },
    {
        Question:"Q4: Which concept allows you to reuse the written code?",
        a: "Encapsulation",
        b: "Abstraction",
        c: "Inheritance",
        d: "Polymorphism",
        ans: "ans3"
    },
    {
        Question:"Q5: Which of the following shows multiple inheritances?",
        a: "A->B->C",
        b: "A->B; A->C",
        c: "A,B->C",
        d: "B->A",
        ans: "ans3"
    },
    {
        Question:"Q6: How access specifiers in Class helps in Abstraction?",
        a: "They does not helps in any way",
        b: "They allows us to show only required things to outer world",
        c: "They help in keeping things together",
        d: "Abstraction concept is not used in classes",
        ans: "ans2"
    },
    {
        Question:"Q7: C++ is ______________",
        a: "procedural programming language",
        b: "object oriented programming language",
        c: "functional programming language",
        d: "both procedural and object oriented programming language",
        ans: "ans4"
    },
    {
        Question:"Q8: What does modularity mean?",
        a: "Hiding part of program",
        b: "Subdividing program into small independent parts",
        c: "Overriding parts of program",
        d: " Wrapping things into single unit",
        ans: "ans2"
    },
    {
        Question:"Q9: Which of the following class allows to declare only one object of it?",
        a: "Abstract class",
        b: "Virtual class",
        c: "Singleton class",
        d: "Friend class",
        ans: "ans3"
    },
    {
        Question:"Q10:  Which of the following is not a type of Constructor?",
        a: "Friend constructor",
        b: "Copy constructor",
        c: "Default constructor",
        d: "Parameterized constructor",
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