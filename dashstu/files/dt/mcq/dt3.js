const quizDB = [
    {
       Question:"Q1: Which of the following combinations of logic gates can decode binary 1101?",
       a: "One 4-input AND gate",
       b: "One 4-input AND gate, one inverter",
       c: "One 4-input AND gate, one OR gate",
       d: "One 4-input NAND gate, one inverter",
       ans: "ans2"
    },
    {
        Question:"Q2: What is the indication of a short to ground in the output of a driving gate?",
       a: "Only the output of the defective gate is affected",
       b: "There is a signal loss to all load gates",
       c: "The node may be stuck in either the HIGH or the LOW state",
       d: "The affected node will be stuck in the HIGH state",
       ans: "ans2"
    },
    {
        Question:"Q3: The carry propagation can be expressed as ________",
        a: "Cp = AB",
        b: "Cp = A + B",
        c: "All but Y0 are LOW",
        d: "All but Y0 are HIGH",
        ans: "ans2"
    },
    {
        Question:"Q4: 3 bits full adder contains ________",
        a: "3 combinational inputs",
        b: "4 combinational inputs",
        c: "6 combinational inputs",
        d: "8 combinational inputs",
        ans: "ans4"
    },
    {
        Question:"Q5: What is a multiplexer?",
        a: "It is a type of decoder which decodes several inputs and gives one output",
        b: "A multiplexer is a device which converts many signals into one",
        c: "It takes one input and results into many output",
        d: "It is a type of encoder which decodes several inputs and gives one output",
        ans: "ans2"
    },
    {
        Question:"Q6: Which combinational circuit is renowned for selecting a single input from multiple inputs & directing the binary information to output line?",
        a: "Data Selector",
        b: "Data distributor",
        c: "Both data selector and data distributor",
        d: "DeMultiplexer",
        ans: "ans1"
    },
    {
        Question:"Q7:  It is possible for an enable or strobe input to undergo an expansion of two or more MUX ICs to the digital multiplexer with the proficiency of large number of ___________",
        a: "Inputs",
        b: "Outputs",
        c: "Selection lines",
        d: "Enable lines",
        ans: "ans1"
    },
    {
        Question:"Q8: Which is the major functioning responsibility of the multiplexing combinational circuit?",
        a: "Decoding the binary information",
        b: "Generation of all minterms in an output function with OR-gate",
        c: "Generation of selected path between multiple sources and a single destination",
        d: "Encoding of binary information",
        ans: "ans3"
    },
    {
        Question:"Q9: What is the function of an enable input on a multiplexer chip?",
        a: "To apply Vcc",
        b: "To connect ground",
        c: "To active the entire chip",
        d: "To active one half of the chip",
        ans: "ans3"
    },
    {
        Question:"Q10:  One multiplexer can take the place of ___________",
        a: "Several SSI logic gates",
        b: "Combinational logic circuits",
        c: "Several Ex-NOR gates",
        d: "Several SSI logic gates or combinational logic circuits",
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