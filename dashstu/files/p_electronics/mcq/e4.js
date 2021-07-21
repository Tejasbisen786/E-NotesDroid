const quizDB = [
    {
       Question:"Q1: Which of the following isn’t a type of rectifier?",
       a: "Precision Half-wave Rectifier",
       b: "Bridge Rectifier",
       c: "Peak Rectifier",
       d: "None of the mentioned",
       ans: "ans4"
    },
    {
        Question:"Q2: For a half wave or full wave rectifier the Peak Inverse Voltage of the rectifier is always",
       a: "Greater than the input voltage",
       b: "Smaller than the input voltage",
       c: "Equal to the input voltage",
       d: "Greater than the input voltage for full wave rectifier and smaller for the half wave rectifier",
       ans: "ans2"
    },
    {
        Question:"Q3: For a half-wave rectifier having diode voltage VD and supply input of VI, the diode conducts for π – 2Θ, where Θ is given by",
        a: "tan -1 VD/VI",
        b: "tan-1 VD/VI – VI",
        c: "sin-1 VD/VI",
        d: "sin-1 VD/VI – VI",
        ans: "ans3"
    },
    {
        Question:"Q4: Bridge rectifier is an alternative for",
        a: "Full wave rectifier",
        b: "Peak rectifier",
        c: "Half wave rectifier",
        d: "None of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q5:Which of the following is true for a bridge rectifier?",
        a: "The peak inverse voltage or PIV for the bridge rectifier is lower when compared to an identical center tapped rectifier",
        b: "The output voltage for the center tapped rectifier is lower than the identical bridge rectifier",
        c: "A transistor of higher number of coil is required for center tapped rectifier than the identical bridge rectifier",
        d: "All of the mentioned",
        ans: "ans4"
    },
    {
        Question:"Q6: The diode rectifier works well enough if the supply voltage is much than greater than 0.7V. For smaller voltage (of few hundreds of millivolt) input which of the following can be used?",
        a: "Superdiode",
        b: "Peak rectifier",
        c: "Precision rectifier",
        d: "None of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q7: A simple diode rectifier has ‘ripples’ in the output wave which makes it unsuitable as a DC source. To overcome this one can use",
        a: "A capacitor in series with a the load resistance",
        b: "A capacitor in parallel to the load resistance",
        c: "Both of the mentioned situations will work",
        d: "None of the mentioned situations will work",
        ans: "ans2"
    },
    {
        Question:"Q8: Consider a peak rectifier fed by a 60-Hz sinusoid having a peak value Vp = 100 V. Let the load resistance R = 10 kΩ. Calculate the fraction of the cycle during which the diode is conducting",
        a: "1.06 %",
        b: "2.12 %",
        c: "3.18%",
        d: "4.24%",
        ans: "ans3"
    },
    {
        Question:"Q9: Find V0 when VI is 2V",
        a: "0V",
        b: "0.7V",
        c: "1V",
        d: "1.7V",
        ans: "ans1"
    },
    {
        Question:"Q10:  Photodiodes are part of",
        a: "Optoelectronics",
        b: "High Intensity Discharge",
        c: "Low pressure Discharge",
        d: "None of these",
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