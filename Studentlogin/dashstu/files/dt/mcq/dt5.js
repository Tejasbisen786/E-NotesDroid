const quizDB = [
    {
       Question:"Q1: Latches constructed with NOR and NAND gates tend to remain in the latched condition due to which configuration feature?",
       a: "Low input voltages",
       b: "Synchronous operation",
       c: "Gate impedance",
       d: "Cross coupling",
       ans: "ans4"
    },
    {
        Question:"Q2: One example of the use of an S-R flip-flop is as ___________",
       a: "Transition pulse generator",
       b: "Racer",
       c: "Switch debouncer",
       d: "Astable oscillator",
       ans: "ans3"
    },
    {
        Question:"Q3: The truth table for an S-R flip-flop has how many VALID entries?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        ans: "ans3"
    },
    {
        Question:"Q4: When both inputs of a J-K flip-flop cycle, the output will _________",
        a: "Be invalid",
        b: "Change",
        c: "Not change",
        d: "Toggle",
        ans: "ans3"
    },
    {
        Question:"Q5:  Which of the following is correct for a gated D-type flip-flop?",
        a: "The Q output is either SET or RESET as soon as the D input goes HIGH or LOW",
        b: "The output complement follows the input when enabled",
        c: "Only one of the inputs can be HIGH at a time",
        d: "The output toggles if one of the inputs is held HIGH",
        ans: "ans1"
    },
    {
        Question:"Q6: A basic S-R flip-flop can be constructed by cross-coupling of which basic logic gates?.",
        a: "AND or OR gates",
        b: "XOR or XNOR gates",
        c: "NOR or NAND gates",
        d: "AND or NOR gates",
        ans: "ans3"
    },
    {
        Question:"Q7:  The logic circuits whose outputs at any instant of time depends only on the present input but also on the past outputs are called ________________",
        a: "Combinational circuits",
        b: "Sequential circuits",
        c: "Latches",
        d: "Flip-flops",
        ans: "ans2"
    },
    {
        Question:"Q8: Whose operations are more faster among the following?",
        a: "Combinational circuits",
        b: "Sequential circuits",
        c: "Latches",
        d: "Flip-flops",
        ans: "ans1"
    },
    {
        Question:"Q9: How many types of sequential circuits are?",
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        ans: "ans1"
    },
    {
        Question:"Q10:  The sequential circuit is also called ___________",
        a: "Flip-flop",
        b: "Latch",
        c: "Strobe",
        d: "Adder",
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