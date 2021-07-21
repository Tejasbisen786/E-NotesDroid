const quizDB = [
    {
       Question:"Q1: The given hexadecimal number (1E.53)16 is equivalent to ____________",
       a: "(35.684)8",
       b: "(36.246)8",
       c: "(34.340)8",
       d: "(35.599)8",
       ans: "ans2"
    },
    {
        Question:"Q2: The octal number (651.124)8 is equivalent to ______",
       a: "(1A9.2A)16",
       b: "(1B0.10)16",
       c: "(1A8.A3)16",
       d: "(1B0.B0)16",
       ans: "ans1"
    },
    {
        Question:"Q3: The octal equivalent of the decimal number (417)10 is _____",
        a: "(641)8",
        b: "(619)8",
        c: "(640)8",
        d: "(598)8",
        ans: "ans1"
    },
    {
        Question:"Q4: Convert the hexadecimal number (1E2)16 to decimal.",
        a: "480",
        b: "483",
        c: "482",
        d: "484",
        ans: "ans3"
    },
    {
        Question:"Q5: (170)10 is equivalent to ____________",
        a: "(FD)16",
        b: "(DF)16",
        c: "(AA)16",
        d: "(AF)16",
        ans: "ans3"
    },
    {
        Question:"Q6: Convert (214)8 into decimal.",
        a: "(140)10",
        b: "(141)10",
        c: "(142)10",
        d: "(130)10",
        ans: "ans1"
    },
    {
        Question:"Q7:  Convert (0.345)10 into an octal number.",
        a: "(0.16050)8",
        b: "(0.26050)8",
        c: "(0.19450)8",
        d: "(0.24040)8",
        ans: "ans2"
    },
    {
        Question:"Q8: Convert the binary number (01011.1011)2 into decimal.",
        a: "(11.6875)10",
        b: "(11.5874)10",
        c: "(10.9876)10",
        d: "(10.7893)10",
        ans: "ans1"
    },
    {
        Question:"Q9: Octal to binary conversion: (24)8 =?",
        a: "(111101)2",
        b: "(010100)2",
        c: "(111100)2",
        d: "(101010)2",
        ans: "ans2"
    },
    {
        Question:"Q10:  Convert binary to octal: (110110001010)2 =?",
        a: "(5512)8",
        b: "(6612)8",
        c: "(4532)8",
        d: "(6745)8",
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