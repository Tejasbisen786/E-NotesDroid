const quizDB = [
    {
       Question:"Q1: Which transmission media has the highest transmission speed in a network?",
       a: "coaxial cable",
       b: "twisted pair cable",
       c: "optical fiber",
       d: "electrical cable",
       ans: "ans3"
    },
    {
        Question:"Q2: Bits can be send over guided and unguided media as analog signal by",
       a: "digital modulation",
       b: "amplitude modulation",
       c: "frequency modulation",
       d: "phase modulation",
       ans: "ans1"
    },
    {
        Question:"Q3: Which data communication method is used to transmit the data over a serial communication link?",
        a: "Simplex",
        b: "Half Duplex",
        c: "Full Duplex",
        d: "Double Duplex",
        ans: "ans3"
    },
    {
        Question:"Q4: The method of communication in which transaction takes place in both directions,but only in one direction at a time, is called ?",
        a: "Simplex",
        b: "Four wire circuit",
        c: "Full duplex",
        d: "Half-duplex",
        ans: "ans4"
    },
    {
        Question:"Q5: In communication satellite, multiple repeaters are known as?",
        a: "Detectors",
        b: "Modulators",
        c: "Stations",
        d: "Transponders",
        ans: "ans4"
    },
    {
        Question:"Q6: Loss in signal power as light travels down the fiber is called?",
        a: "Attenuation",
        b: "Propagation",
        c: "Scattering",
        d: "Interruption",
        ans: "ans1"
    },
    {
        Question:"Q7: Which of the following devices modulates digital signals into analog signals that can be sent over traditional telephone lines?",
        a: "Router",
        b: "Gateway",
        c: "Switch",
        d: "Modem",
        ans: "ans4"
    },
    {
        Question:"Q8: Which of the following performs modulation and demodulation?",
        a: "fiber optics",
        b: "switch",
        c: "modulator",
        d: "modem",
        ans: "ans4"
    },
    {
        Question:"Q9: The process of converting analog signals into digital signals so they can be processed by a receiving computer is referred to as",
        a: "modulation",
        b: "demodulation",
        c: "synchronizing",
        d: "digitising",
        ans: "ans4"
    },
    {
        Question:"Q10: Which of the following communication modes support two-way traffic but in only one direction at a time?",
        a: "simplex",
        b: "half duplex",
        c: "three-quarters duplex",
        d: "none of the above",
        ans: "ans2"
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