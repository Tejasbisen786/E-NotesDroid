const quizDB = [
    {
       Question:"Q1: An expression involving byte, int, and literal numbers is promoted to which of these?",
       a: "Int",
       b: "long",
       c: "byte",
       d: "Float",
       ans: "ans1"
    },
    {
        Question:"Q2: What will be the output of the following Java code?Class increment {Public static void main(String args[])  { Int g = 3;System.out.print(++g * 8); } }",
       a: "25",
       b: "24",
       c: "32",
       d: "33",
       ans: "ans3"
    },
    {
        Question:"Q3: Which of these statements are incorrect?",
        a: "Assignment operators are more efficiently implemented by Java runtime system than their equivalent long forms ",
        b: "Assignment operators run faster than their equivalent long forms",
        c: "Assignment operators can be used only with numeric and characterdata type",
        d: "None of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q4: Which of the following can be operands of arithmetic operators?",
        a: "Numeric",
        b: "Boolean",
        c: "Characters",
        d: "Both Numeric & Characters",
        ans: "ans4"
    },
    {
        Question:"Q5:What will be the output of the following Java program? Class comma_operator {Public static void main(String args[]) {Int sum = 0; For (int I = 0, j = 0; I < 5 & j < 5; ++I, j = I + 1)Sum += I;System.out.println(sum); }}",
        a: "5",
        b: "6",
        c: "14",
        d: "compilation error",
        ans: "ans2"
    },
    {
        Question:"Q6: Which of the following option leads to the portability and security ofJava?",
        a: "Bytecode is executed by JVM",
        b: "The applet makes the Java code secure and portable",
        c: "Use of exception handling",
        d: "Dynamic binding between objects",
        ans: "ans1"
    },
    {
        Question:"Q7:The \u0021 article referred to as a",
        a: "ABH8097",
        b: "L990023",
        c: "904423",
        d: "0xnf029L",
        ans: "ans4"
    },
    {
        Question:"Q8: Which of the following is a valid long literal?",
        a: "Relative Application Development",
        b: "Rapid Application Development",
        c: "Rapid Application Document",
        d: "None of the mentioned",
        ans: "ans3"
    },
    {
        Question:"Q9: _____ is used to find and fix bugs in the Java programs.",
        a: "JVM",
        b: "JRE",
        c: "JDK",
        d: "JDB",
        ans: "ans1"
    },
    {
        Question:"Q10:  What is the use of the intern() method?",
        a: "It returns the existing string from memory",
        b: "It creates a new string in the database",
        c: "It modifies the existing string in the database",
        d: "None of the above",
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