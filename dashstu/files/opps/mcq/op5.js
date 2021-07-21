const quizDB = [
    {
       Question:"Q1:  Which among the following best describes polymorphism?",
       a: "It is the ability for a message/data to be processed in more than one form",
       b: "It is the ability for a message/data to be processed in only 1 form",
       c: "It is the ability for many messages/data to be processed in one way",
       d: "It is the ability for undefined message/data to be processed in at least one way",
       ans: "ans1"
    },
    {
        Question:"Q2: What do you call the languages that support classes but not polymorphism?",
       a: "Class based language",
       b: "Procedure Oriented language",
       c: "Object-based language",
       d: "If classes are supported, polymorphism will always be supported",
       ans: "ans3"
    },
    {
        Question:"Q3: Which among the following is the language which supports classes but not polymorphism?",
        a: "SmallTalk",
        b: "Java",
        c: "C++",
        d: "Ada",
        ans: "ans4"
    },
    {
        Question:"Q4: If same message is passed to objects of several different classes and all of those can respond in a different way, what is this feature called?",
        a: "Inheritance",
        b: "Overloading",
        c: "Polymorphism",
        d: "Overriding",
        ans: "ans3"
    },
    {
        Question:"Q5: Which type of function among the following shows polymorphism?",
        a: "Inline function",
        b: "Virtual function",
        c: "Undefined functions",
        d: "Class member functions",
        ans: "ans2"
    },
    {
        Question:"Q6: In case of using abstract class or function overloading, which function is supposed to be called first?",
        a: "Local function",
        b: "Function with highest priority in compiler",
        c: "Global function",
        d: "Function with lowest priority because it might have been halted since long time, because of low priority",
        ans: "ans2"
    },
    {
        Question:"Q7: Which among the following can’t be used for polymorphism?",
        a: "Static member functions",
        b: "Member functions overloading",
        c: "Predefined operator overloading",
        d: "Constructor overloading",
        ans: "ans1"
    },
    {
        Question:"Q8: Which among the following can show polymorphism?",
        a: "Overloading ||",
        b: "Overloading +=",
        c: "Overloading <<",
        d: "Overloading &&",
        ans: "ans2"
    },
    {
        Question:"Q9: Which problem may arise if we use abstract class functions for polymorphism?",
        a: "All classes are converted as abstract class",
        b: "Derived class must be of abstract type",
        c: "All the derived classes must implement the undefined functions",
        d: "Derived classes can’t redefine the function",
        ans: "ans3"
    },
    {
        Question:"Q10:  Which among the following is not true for polymorphism?",
        a: "It is feature of OOP",
        b: "Ease in readability of program",
        c: "Helps in redefining the same functionality",
        d: "Increases overhead of function definition always",
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