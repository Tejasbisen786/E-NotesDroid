const quizDB = [
    {
       Question:"Q1:  What is Remote method invocation (RMI)?",
       a: "RMI allows us to invoke a method of java object that executes on another machine",
       b: "RMI allows us to invoke a method of java object that executes on another Thread in multithreaded programming",
       c: "RMI allows us to invoke a method of java object that executes parallely in same machine",
       d: "None of the mentioned",
       ans: "ans1"
    },
    {
        Question:"Q2:  Which of these package is used for remote method invocation?",
       a: "java.applet",
       b: "java.rmi",
       c: "java.lang.rmi",
       d: "java.lang.reflect",
       ans: "ans2"
    },
    {
        Question:"Q3: Which of these methods are member of Remote class?",
        a: "checkIP()",
        b: "addLocation()",
        c: "AddServer()",
        d: "None of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q4:  Which of these Exceptions is thrown by remote method?",
        a: "RemoteException",
        b: "InputOutputException",
        c: "RemoteAccessException",
        d: "RemoteInputOutputException",
        ans: "ans1"
    },
    {
        Question:"Q5: Which of these class is used for creating a client for a server-client operations?",
        a: "serverClientjava",
        b: "Client.java",
        c: "AddClient.java",
        d: "ServerClient.java",
        ans: "ans3"
    },
    {
        Question:"Q6: Which of these package is used for all the text related modifications?",
        a: "java.text",
        b: "java.awt",
        c: "java.lang.text",
        d: "java.text.modify",
        ans: "ans1"
    },
    {
        Question:"Q7:Which of the following is not an Enterprise Beans type?",
        a: "Doubleton",
        b: "Singleton",
        c: "Stateful",
        d: " Stateless",
        ans: "ans1"
    },
    {
        Question:"Q8: Which of the following is not true about Java beans?",
        a: "Implements java.io.Serializable interface",
        b: "Extends java.io.Serializable class",
        c: "Provides no argument constructor",
        d: "Provides setter and getter methods for its properties",
        ans: "ans2"
    },
    {
        Question:"Q9: Which file separator should be used by MANIFEST file?",
        a: " /",
        b: " \ ",
        c: "–",
        d: "//",
        ans: "ans1"
    },
    {
        Question:"Q10:  Which of the following is correct error when loading JAR file with duplicate name?",
        a: "java.io.NullPointerException",
        b: "java.lang.ClassNotFound",
        c: "java.lang.ClassFormatError",
        d: "java.lang.DuplicateClassError",
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