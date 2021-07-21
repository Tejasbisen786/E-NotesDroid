const quizDB = [
    {
       Question:"Q1: _____________ Is the process of testing the system With each one of Supported software and hardware configuration.",
       a: "Configuration testing",
       b: "Hardware testing",
       c: "Compatibility testing",
       d: "None of the mentioned",
       ans: "ans1"
    },
    {
        Question:"Q2: Common traits to a good UI",
       a: "Flexible",
       b: "Intuitive ",
       c: "Consistent",
       d: "All mentioned above",
       ans: "ans4"
    },
    {
        Question:"Q3: Types of compatibility testing are",
        a: "Software",
        b: "Hardware ",
        c: "Network",
        d: "All mentioned above",
        ans: "ans4"
    },
    {
        Question:"Q4: File save and file load comes under _______",
        a: "Compatibility testing",
        b: "Website testing",
        c: "Data sharing testing",
        d: "None of the mentioned",
        ans: "ans3"
    },
    {
        Question:"Q5: The combination of white box testing and black box testing is ____. ",
        a: "X-ray testing",
        b: "Grey box testing",
        c: "Dynamic testing",
        d: "Static testing",
        ans: "ans2"
    },
    {
        Question:"Q6: Identify the testing method applied in the following. All fields (Textbox, dropdown, radio button, etc) and buttons should be accessible by keyboard shortcuts and the user should be able to perform all operations by using keyboard.",
        a: "Website testing",
        b: "Usability testing",
        c: "Compatibility testing",
        d: "None of the above",
        ans: "ans2"
    },
    {
        Question:"Q7: . Identify the testing method applied in the following. Verify password rules are implemented on all authentication pages like Registration, forgot password, change password",
        a: "Security testing",
        b: "Configuration testing",
        c: "Website testing",
        d: "Software testing",
        ans: "ans1"
    },
    {
        Question:"Q8: Area that should be tested during interface testing are",
        a: "Application server",
        b: "Web server",
        c: "Database server ",
        d: "All of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q9: DDE stands for _______",
        a: "Data determinate establishment",
        b: "Dynamic data exchange",
        c: "Dynamic database exchange",
        d: "None of the above",
        ans: "ans2"
    },
    {
        Question:"Q10: ____________ is conducted to evaluate the compliance of system or component with specified performance requirements.",
        a: "Compatibility testing",
        b: "Hardware testing",
        c: "Performance testing",
        d: "Configuration testing",
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