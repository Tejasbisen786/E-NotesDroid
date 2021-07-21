const quizDB = [
    {
       Question:"Q1: How many junction/s do a diode consist?",
       a: "0",
       b: "1",
       c: "2",
       d: "3",
       ans: "ans2"
    },
    {
        Question:"Q2: If the positive terminal of the battery is connected to the anode of the diode, then it is known as",
       a: "Forward biased",
       b: "Reverse biased",
       c: "Equilibrium",
       d: "Schottky barrier",
       ans: "ans1"
    },
    {
        Question:"Q3: During reverse bias, a small current develops known as",
        a: "Forward current",
        b: "Reverse current",
        c: "Reverse saturation current",
        d: "Active current",
        ans: "ans3"
    },
    {
        Question:"Q4: If the voltage of the potential barrier is V0. A voltage V is applied to the input, at what moment will the barrier disappear?",
        a: "V< V0",
        b: "V= V0",
        c: "V> V0",
        d: "V<< V0",
        ans: "ans2"
    },
    {
        Question:"Q5: What is the maximum electric field when Vbi=2V , VR=5V and width of the semiconductor is 7cm?",
        a: "-100V/m",
        b: "-200V/m",
        c: "100V/m",
        d: "200V/m",
        ans: "ans2"
    },
    {
        Question:"Q6: When the diode is reverse biased with a voltage of 6V and Vbi=0.63V. Calculate the total potential.",
        a: "6V",
        b: "6.63V",
        c: "5.27V",
        d: "0.63V",
        ans: "ans2"
    },
    {
        Question:"Q7: Which of the following equations represent the correct expression for the shift in the energy levels for the p-n junction?",
        a: "Eo = Ecn – Ecp",
        b: "Eo = Ecp – Ecn",
        c: "Eo = Ecp + Ecn",
        d: "Eo = -Ecp – Ecn",
        ans: "ans2"
    },
    {
        Question:"Q8: Calculate the Eo given that Nd=1.5*1010cm-3, Na=1.5*1010cm-3 at temperature 300K?",
        a: "1.5*1010eV",
        b: "0.256eV",
        c: "0eV",
        d: "4.14*10-21eV",
        ans: "ans3"
    },
    {
        Question:"Q9: In a p-n junction, the valence band edge of the p material is greater than which of the following band?",
        a: "Conduction band edge of n material",
        b: "Valence band edge of n material",
        c: "Conduction band edge of p material",
        d: "Fermi level of p material",
        ans: "ans2"
    },
    {
        Question:"Q10:  Calculate the value of Dp when µp=400cm/s and VT=25mV.",
        a: "1",
        b: "0.01",
        c: "0.1",
        d: "10",
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