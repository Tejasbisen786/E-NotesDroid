const quizDB = [
    {
       Question:"Q1: For isotopes of an element",
       a: "They are atoms of the same atomic number with different mass",
       b: "The only difference in composition between isotopes of the same element is the number of neutrons in the nucleus",
       c: "The atomic weight of an element is an average of the weight of the isotopes of the element in the proportions in which they normally occur in nature",
       d: "All of these",
       ans: "ans3"
    },
    {
        Question:"Q2: Best characterizes electron affinity is",
       a: "Neutral atoms with unfilled orbitals having repulsion for electrons",
       b: "Neutral atoms of noble gases having attraction for electrons",
       c: "Neutral atoms with unfilled orbitals having attraction for electrons",
       d: "Atoms that lie to the upper left of the periodic table",
       ans: "ans3"
    },
    {
        Question:"Q3: The instrument which may be used to measure the optical activity of compounds is",
        a: "Infrared spectrometer",
        b: "Atomic absorption spectrometer",
        c: "Polarimeter",
        d: "Fluoroscope",
        ans: "ans3"
    },
    {
        Question:"Q4: The excitation of outer electrons in atoms and molecules is associated with which of the following bands of radiation?",
        a: "X-rays",
        b: "Gamma rays",
        c: "Ultra violet",
        d: "Infrared",
        ans: "ans3"
    },
    {
        Question:"Q5:The emission of an alpha particle from the nuclear of 226Ra88 will yield",
        a: "223Ra86",
        b: "222Ra86",
        c: "222Ra88",
        d: "222Ra88",
        ans: "ans2"
    },
    {
        Question:"Q6: Which of the following is a polymer",
        a: "Plastic",
        b: "Glycogen",
        c: "Starch",
        d: "All of these",
        ans: "ans3"
    },
    {
        Question:"Q7: Which of the following statements is correct",
        a: "Copper has partially filled conduction band",
        b: "Diamond has completely filled conduction band but empty valence band",
        c: "Silicon has a partially filled conduction band and an empty valence band",
        d: "The energy gap between conduction and valence bands in diamond is smaller than in silicon",
        ans: "ans1"
    },
    {
        Question:"Q8: Polarisation is a measure of",
        a: "Dielectric constant per unit volume",
        b: "Voltage gradient to produce electrical breakout",
        c: "Product of charge and distance",
        d: "Excess charge density",
        ans: "ans1"
    },
    {
        Question:"Q9: Ultra violet radiation is emitted when electron jumps from an outer stationary orbit to",
        a: "First stationary orbit",
        b: "Second stationary orbi",
        c: "Third stationary orbit",
        d: "Fourth stationary orbit",
        ans: "ans1"
    },
    {
        Question:"Q10:  N-type semiconductors are",
        a: "Negatively charged",
        b: "Produced when indium is added as an impurity to germanium",
        c: "Produced when phosphorous is added as an impurity to silicon",
        d: "None of these",
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