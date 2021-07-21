const quizDB = [
    {
       Question:"Q1: How constructor can be used for a servlet?",
       a: "Initialization",
       b: "Constructor function",
       c: "Initialization and Constructor function",
       d: "Setup() method",
       ans: "ans3"
    },
    {
        Question:"Q2:  Which of the following code is used to get an attribute in a HTTP Session object in servlets?",
       a: "session.getAttribute(String name)",
       b: "session.alterAttribute(String name)",
       c: "session.updateAttribute(String name)",
       d: "session.setAttribute(String name)",
       ans: "ans1"
    },
    {
        Question:"Q3: Which method is used to get three-letter abbreviation for locale’s country in servlets?",
        a: "Request.getISO3Country()",
        b: "Locale.getISO3Country()",
        c: "Response.getISO3Country()",
        d: "Local.retrieveISO3Country()",
        ans: "ans1"
    },
    {
        Question:"Q4:  Which of the following code retrieves the body of the request as binary data?",
        a: "DataInputStream data = new InputStream()",
        b: "DataInputStream data = response.getInputStream()",
        c: "DataInputStream data = request.getInputStream()",
        d: "DataInputStream data = request.fetchInputStream()",
        ans: "ans3"
    },
    {
        Question:"Q5:When destroy() method of a filter is called?",
        a: "The destroy() method is called only once at the end of the life cycle of a filter",
        b: "The destroy() method is called after the filter has executed doFilter method",
        c: "The destroy() method is called only once at the begining of the life cycle of a filter",
        d: "The destroyer() method is called after the filter has executed",
        ans: "ans1"
    },
    {
        Question:"Q6:  Which of the following is true about servlets?",
        a: "Servlets execute within the address space of web server",
        b: "Servlets are platform-independent because they are written in java",
        c: "Servlets can use the full functionality of the Java class libraries",
        d: "Servlets execute within the address space of web server, platform independent and uses the functionality of java class libraries",
        ans: "ans4"
    },
    {
        Question:"Q7: How is the dynamic interception of requests and responses to transform the information done?",
        a: "servlet container",
        b: "servlet config",
        c: "servlet context",
        d: "servlet filter",
        ans: "ans4"
    },
    {
        Question:"Q8: Which of the below is not a session tracking method?",
        a: "URL rewriting",
        b: "History",
        c: "Cookies",
        d: "SSL sessions",
        ans: "ans2"
    },
    {
        Question:"Q9: Which of the following is stored at client side?",
        a: "URL rewriting",
        b: "Hidden form fields",
        c: "SSL sessions",
        d: "Cookies",
        ans: "ans4"
    },
    {
        Question:"Q10:  Which of the following is not true about session?",
        a: "All users connect to the same session",
        b: "All users have same session variable",
        c: "Default timeout value for session variable is 20 minutes",
        d: "New session cannot be created for a new user",
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