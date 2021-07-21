const quizDB = [
    {
       Question:"Q1: Which page directive should be used in JSP to generate a PDF page?",
       a: "contentType",
       b: "generatePdf",
       c: "typePDF",
       d: "contentPDF",
       ans: "ans1"
    },
    {
        Question:"Q2:  Which tag should be used to pass information from JSP to included JSP?",
       a: "Using <%jsp:page> tag",
       b: "Using <%jsp:param> tag",
       c: "Using <%jsp:import> tag",
       d: "Using <%jsp:useBean> tag",
       ans: "ans1"
    },
    {
        Question:"Q3: Application is instance of which class?",
        a: "javax.servlet.Application",
        b: "javax.servlet.HttpContext",
        c: "javax.servlet.Context",
        d: "javax.servlet.ServletContext",
        ans: "ans4"
    },
    {
        Question:"Q4:  Which option is true about session scope?",
        a: "Objects are accessible only from the page in which they are created",
        b: "Objects are accessible only from the pages which are in same session",
        c: "Objects are accessible only from the pages which are processing the same request",
        d: "Objects are accessible only from the pages which reside in same application",
        ans: "ans2"
    },
    {
        Question:"Q5:Which one is the correct order of phases in JSP life cycle?",
        a: "Initialization, Cleanup, Compilation, Execution",
        b: "Initialization, Compilation, Cleanup, Execution",
        c: "Compilation, Initialization, Execution, Cleanup",
        d: "Cleanup, Compilation, Initialization, Execution",
        ans: "ans3"
    },
    {
        Question:"Q6: “request” is instance of which one of the following classes?",
        a: "Reques",
        b: "HttpRequest",
        c: "HttpServletRequest",
        d: "ServletRequest",
        ans: "ans3"
    },
    {
        Question:"Q7: Which is mandatory in <jsp:useBean /> tag?",
        a: "id, class",
        b: "id, type",
        c: "type, property",
        d: "type,id",
        ans: "ans1"
    },
    {
        Question:"Q8: Which one of the following is correct for directive in JSP?",
        a: "<%@directive%>",
        b: "<%!directive%>",
        c: "<%directive%>",
        d: "<%=directive%>",
        ans: "ans1"
    },
    {
        Question:"Q9: Which of the following action variable is used to include a file in JSP?",
        a: "jsp:setProperty",
        b: "jsp:getProperty",
        c: "jsp:include",
        d: "jsp:plugin",
        ans: "ans3"
    },
    {
        Question:"Q10:  Which attribute uniquely identification element?",
        a: "ID",
        b: "Class",
        c: "Name",
        d: "Scope",
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