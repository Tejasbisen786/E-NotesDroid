const quizDB = [
    {
       Question:"Q1: Which is the container that doesn't contain title bar and MenuBars but it can have other components like button, textfield etc?",
       a: " Window",
       b: "Frame",
       c: "Panel",
       d: "Container",
       ans: "ans3"
    },
    {
        Question:"Q2:  Give the abbreviation of AWT?",
       a: "Applet Windowing Toolkit",
       b: "Abstract Windowing Toolkit",
       c: " Absolute Windowing Toolkit",
       d: "None of the above",
       ans: "ans2"
    },
    {
        Question:"Q3: Which method is used to set the graphics current color to the specified color in the graphics class?",
        a: "public abstract void setFont(Font font)",
        b: "public abstract void setColor(Color c)",
        c: "public abstract void drawString(String str, int x, int y)",
        d: "None of the above",
        ans: "ans2"
    },
    {
        Question:"Q4:  In Graphics class which method is used to draws a rectangle with the specified width and height?",
        a: "public void drawRect(int x, int y, int width, int height)",
        b: "public abstract void fillRect(int x, int y, int width, int height)",
        c: "public abstract void drawLine(int x1, int y1, int x2, int y2)",
        d: "public abstract void drawOval(int x, int y, int width, int height)",
        ans: "ans4"
    },
    {
        Question:"Q5: Which object can be constructed to show any number of choices in the visible window?",
        a: "Labels",
        b: "Choice",
        c: "List",
        d: "Checkbox",
        ans: "ans3"
    },
    {
        Question:"Q6: Which is used to store data and partial results, as well as to perform dynamic linking, return values for methods, and dispatch exceptions?",
        a: "Window",
        b: "Panel",
        c: "Frame",
        d: "Container",
        ans: "ans3"
    },
    {
        Question:"Q7:Which class is used for this Processing Method processActionEvent( )?",
        a: "Button,List,MenuItem",
        b: "Button,Checkbox,Choice",
        c: "Scrollbar,Component,Button",
        d: " None of the above",
        ans: "ans1"
    },
    {
        Question:"Q8:  Which method can set or change the text in a Label?",
        a: "setText()",
        b: "getText()",
        c: "All the above",
        d: "None of the above",
        ans: "ans1"
    },
    {
        Question:"Q9: Which is a component in AWT that can contain another components like buttons, textfields, labels etc.?",
        a: "Window",
        b: "Container",
        c: "Panel",
        d: "Frame",
        ans: "ans2"
    },
    {
        Question:"Q10:  Which are passive controls that do not support any interaction with the user?",
        a: "Choice",
        b: "List",
        c: "Labels",
        d: "Checkbox",
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