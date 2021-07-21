const quizDB = [
    {
       Question:"Q1: In what order do managers typically perform the managerial functions?",
       a: "organising, planning, controlling, leading",
       b: "organising, leading, planning, controlling",
       c: "planning, organising, leading, controlling",
       d: "planning, organising, controlling, leading",
       ans: "ans3"
    },
    {
        Question:"Q2: Management exist at the______ level of the organization.",
       a: "Lower",
       b: "Middle",
       c: "Top",
       d: "All the above",
       ans: "ans4"
    },
    {
        Question:"Q3: Management is",
        a: "An art",
        b: "A science",
        c: "Both a & b",
        d: "None of the mentioned",
        ans: "ans3"
    },
    {
        Question:"Q4: Coordinating people and human resources to accomplish organizational goals is the process of",
        a: "Directing",
        b: "Planning",
        c: "Leadership",
        d: "Management",
        ans: "ans3"
    },
    {
        Question:"Q5: Which one of the following is not the principle of Henry Fayol?",
        a: "Harmony not discord",
        b: "Division of work",
        c: "Unity of command",
        d: "Discipline",
        ans: "ans1"
    },
    {
        Question:"Q6: Planning, organising, directing and controlling are the: ",
        a: "Goals of management",
        b: "Functions of management",
        c: "Results of management",
        d: "All mentioned above",
        ans: "ans2"
    },
    {
        Question:"Q7: Which one is not a recognized key skill of management?",
        a: "Conceptual skills",
        b: "Human skills",
        c: "Technical skills",
        d: "Writing skills",
        ans: "ans4"
    },
    {
        Question:"Q8: Supervisory management spends most of his/her time on",
        a: "Planning and organising",
        b: "Planning and controlling",
        c: "Organising and controlling",
        d: "Directing and controlling",
        ans: "ans4"
    },
    {
        Question:"Q9: Directing and controlling",
        a: "Arts, commerce and science",
        b: "Arts, science and Engineering",
        c: "Arts, commerce and Engineering",
        d: "Art , science and profession",
        ans: "ans4"
    },
    {
        Question:"Q10:  Planning function of management is performed by______",
        a: "Top management",
        b: "Middle management",
        c: "Lower management",
        d: "All of the above",
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