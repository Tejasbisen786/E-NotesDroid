const quizDB = [
    {
       Question:"Q1: Constructor is executed when _____.",
       a: "An object goes out of scope",
       b: "A class is declared",
       c: "An object is created",
       d: "An object is used",
       ans: "ans3"
    },
    {
        Question:"Q2: How many ways of reusing are there in class hierarchy?",
       a: "1",
       b: "3",
       c: "4",
       d: "2",
       ans: "ans4"
    },
    {
        Question:"Q3: Where does the object is created?",
        a: "Class",
        b: "Constructor",
        c: "Destructors",
        d: "Attributes",
        ans: "ans1"
    },
    {
        Question:"Q4: Which of the following is a valid class declaration?",
        a: "Class A { int x; };",
        b: "Class B { }",
        c: "Public class A { }",
        d: "Object A { int x; }",
        ans: "ans1"
    },
    {
        Question:"Q5: Which of the following is not correct (in C++) ?i) Class templates and function templates are instantiated in the same way ii) Class templates differ from function templates in the way they are initiated iii) Class template is initiated by defining an object using the template argument iv) Class templates are generally used for storage classes.",
        a: "i",
        b: "i & ii",
        c: "ii ,iii, iv",
        d: "iv",
        ans: "ans3"
    },
    {
        Question:"Q6: Which of the following keywords is used to control access to a class member?",
        a: "Default",
        b: "Break",
        c: "Protected",
        d: "Asm",
        ans: "ans3"
    },
    {
        Question:"Q7: Which of the following statements is incorrect?",
        a: "Destructor of base class should always be static",
        b: "Destructor of base class should always be virtual.",
        c: "Destructor of base class should not be virtual.",
        d: "Destructor of base class should always be private",
        ans: "ans2"
    },
    {
        Question:"Q8: Which operator can not be overloaded?",
        a: "+",
        b: "::",
        c: "-",
        d: "-",
        ans: "ans2"
    },
    {
        Question:"Q9: When Virtual Table is created?",
        a: "When Virtual Table is created?",
        b: "Class inherited from other Class",
        c: "Class has atleast one Virtual Function",
        d: "When a Class Overrides the function of Base class",
        ans: "ans3"
    },
    {
        Question:"Q10:  What is the size of empty class?",
        a: "0",
        b: "2",
        c: "4",
        d: "1",
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