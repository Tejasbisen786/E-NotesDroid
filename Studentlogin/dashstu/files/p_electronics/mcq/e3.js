const quizDB = [
    {
       Question:"Q1: When transistors are used in digital circuits they usually operate in the:",
       a: "active region",
       b: "breakdown region",
       c: "saturation and cutoff regions",
       d: "linear region",
       ans: "ans3"
    },
    {
        Question:"Q2: Three different Q points are shown on a dc load line. The upper Q point represents the:",
       a: "minimum current gain",
       b: "intermediate current gain",
       c: "maximum current gain",
       d: "cutoff point",
       ans: "ans3"
    },
    {
        Question:"Q3: A transistor has a mca12_1001a1.gif of 250 and a base current, IB, of 20 mu.gif A. The collector current, IC, equals:",
        a: "500 mu.gif A",
        b: "5 mA",
        c: "50 mA",
        d: "5 A",
        ans: "ans2"
    },
    {
        Question:"Q4: A current ratio of IC/IE is usually less than one and is called:",
        a: "beta",
        b: "theta",
        c: "alpha",
        d: "omega",
        ans: "ans3"
    },
    {
        Question:"Q5:With the positive probe on an NPN base, an ohmmeter reading between the other transistor terminals should be:",
        a: "open",
        b: "infinite",
        c: "low resistance",
        d: "high resistance",
        ans: "ans3"
    },
    {
        Question:"Q6: In a C-E configuration, an emitter resistor is used for",
        a: "stabilization",
        b: "ac signal bypass",
        c: "collector bias",
        d: "higher gain",
        ans: "ans1"
    },
    {
        Question:"Q7: Voltage-divider bias provides",
        a: "an unstable Q point",
        b: "a stable Q point",
        c: "a Q point that easily varies with changes in the transistor's current gain",
        d: "a Q point that is stable and easily varies with changes in the transistor’s current gain",
        ans: "ans2"
    },
    {
        Question:"Q8: To operate properly, a transistor's base-emitter junction must be forward biased with reverse bias applied to which junction?",
        a: "collector-emitter",
        b: "base-collector",
        c: "base-emitter",
        d: "collector-base",
        ans: "ans4"
    },
    {
        Question:"Q9: The ends of a load line drawn on a family of curves determine:",
        a: "saturation and cutoff",
        b: "the operating point",
        c: "the power curve",
        d: "the amplification factor",
        ans: "ans1"
    },
    {
        Question:"Q10:  If VCC = +18 V, voltage-divider resistor R1 is 4.7 komega.gif, and R2 is 1500omega.gif, what is the base bias voltage?",
        a: "8.70 V",
        b: "4.35 V",
        c: "2.90 V",
        d: "0.7 V",
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