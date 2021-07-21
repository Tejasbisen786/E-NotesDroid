const quizDB = [
    {
       Question:"Q1: What is IC 723?",
       a: "A voltage regulator",
       b: "A full-wave rectifier",
       c: "A half-wave rectifier",
       d: "A clipper",
       ans: "ans1"
    },
    {
        Question:"Q2: What is line regulation?",
       a: "The process of keeping Zener diode voltage constant inspite of changes in AC supply",
       b: "The process of keeping load voltage constant irrespective of the fluctuation in AC supply or the line voltage",
       c: "The process of keeping load voltage constant irrespective of fluctuation in load current",
       d: "The process of keeping Zener current constant irrespective of fluctuation in AC supply",
       ans: "ans2"
    },
    {
        Question:"Q3: What is load regulation?",
        a: "The process of keeping the load voltage constant irrespective of any change in AC supply",
        b: "The process of keeping the load voltage constant irrespective of variations in load current",
        c: "The process of keeping load voltage constant irrespective of variations in source current",
        d: "The process of keeping load current constant irrespective of variations in AC supply",
        ans: "ans2"
    },
    {
        Question:"Q4: Which of these is a not drawback of Zener diode shunt regulator?",
        a: "The output voltage is fixed",
        b: "The output voltage can vary with temperature",
        c: "Variation in load current needs to be minimal",
        d: "It is difficult to design",
        ans: "ans4"
    },
    {
        Question:"Q5: In a power supply, the output voltage can vary due to multiple reasons. Which of these is not true if it is found that the output voltage is constant?",
        a: "The voltage stability factor is very high",
        b: "The output resistance is zero",
        c: "The temperature coefficient is zero",
        d: "The voltage stability factor is very small",
        ans: "ans1"
    },
    {
        Question:"Q6: What is not related to a transistorized series regulator?",
        a: "The output can be varied by using a variable resistor",
        b: "The output is independent of temperature",
        c: "The overload and short circuit protection is not required",
        d: "The circuit has negative feedback responsible for regulation",
        ans: "ans3"
    },
    {
        Question:"Q7: In a transistorized series regulator, how is the overload and short-circuit protection provided?",
        a: "By the use of a thermistor",
        b: "By using two additional diodes and a current sensing resistor to protect the series transistor",
        c: "By using a diode and an additional resistor to protect the transistor",
        d: "By using a diode along with a capacitor of a small capacitance value in series",
        ans: "ans2"
    },
    {
        Question:"Q8:  What is the output of the IC 7924?",
        a: "12V",
        b: "-12V",
        c: "24V",
        d: "-24V",
        ans: "ans4"
    },
    {
        Question:"Q9: In the IC 7805, what is the minimum input voltage for proper functioning?",
        a: "5V",
        b: "6V",
        c: "7V",
        d: "8V",
        ans: "ans3"
    },
    {
        Question:"Q10:  For best operation of a BJT, which region must the operating point be set at?",
        a: "Active region",
        b: "Cutoff region",
        c: "Saturation region",
        d: "Reverse active region",
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