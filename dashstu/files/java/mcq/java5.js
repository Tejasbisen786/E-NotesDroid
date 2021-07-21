const quizDB = [
    {
       Question:"Q1: Which of these functions is called to display the output of an applet?",
       a: "display()",
       b: "paint()",
       c: "displayApplet()",
       d: "PrintApplet()",
       ans: "ans2"
    },
    {
        Question:"Q2: Which of these methods is a part of Abstract Window Toolkit (AWT) ?",
       a: "display()",
       b: "paint()",
       c: "drawString()",
       d: "transient()",
       ans: "ans2"
    },
    {
        Question:"Q3: What is the Message is displayed in the applet made by the following Java program?Import java.awt.*;Import java.applet.*;Public class myapplet extends Applet {  Public void paint(Graphics g) {G.drawString(“A Simple Applet”, 20, 20); }}",
        a: "A Simple Applet",
        b: "A Simple Applet 20 20",
        c: "Compilation Error",
        d: "Runtime Error",
        ans: "ans1"
    },
    {
        Question:"Q4: Which of these events is generated when the window is closed?",
        a: "TextEvent",
        b: "MouseEvent",
        c: "FocusEvent",
        d: "WindowEvent",
        ans: "ans4"
    },
    {
        Question:"Q5: Applets are designed to be embedded within an __________",
        a: "Javascript",
        b: "Css",
        c: "HTML",
        d: "SQL",
        ans: "ans3"
    },
    {
        Question:"Q6: The APPLET tag is used to start an applet from both an HTML document and from an applet viewer",
        a: "True",
        b: "False",
        c: "In some case it can be true",
        d: "None of the above",
        ans: "ans1"
    },
    {
        Question:"Q7:What is the length of the application box made the following Java program?Import java.awt.*;Import java.applet.*;Public class myapplet extends Applet{Graphic g;G.drawString(“A Simple Applet”, 20, 20); }",
        a: "20",
        b: "Default value",
        c: "Compilation Error",
        d: "Runtime Error",
        ans: "ans3"
    },
    {
        Question:"Q8: Which of the following is required to view an applet?",
        a: "JCM",
        b: "JDM",
        c: "JVM",
        d: "Java class",
        ans: "ans3"
    },
    {
        Question:"Q9: An applet is a Java class that extends the?",
        a: "java.Applet class",
        b: "java class",
        c: "Applet class",
        d: "java.applet.Applet class",
        ans: "ans4"
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