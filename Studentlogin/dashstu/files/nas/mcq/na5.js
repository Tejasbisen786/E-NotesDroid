const quizDB = [
    {
       Question:"Q1: The field that covers a variety of computer networks, both public and private, that are used in everyday jobs.",
       a: "Artificial Intelligence",
       b: "ML",
       c: "Network Security",
       d: "IT",
       ans: "ans3"
    },
    {
        Question:"Q2: Which is not an objective of network security?",
       a: "Identification",
       b: "Authentication",
       c: "Access control",
       d: "Lock",
       ans: "ans4"
    },
    {
        Question:"Q3: Which of these is a part of network identification?",
        a: "UserID",
        b: "Password",
        c: "OTP",
        d: "fingerprint",
        ans: "ans1"
    },
    {
        Question:"Q4: The process of verifying the identity of a user.",
        a: "Authentication",
        b: "Identification",
        c: "Validation",
        d: "Verification",
        ans: "ans1"
    },
    {
        Question:"Q5: Joystick allows the movements with",
        a: "90 degree angle",
        b: "180 degree angle",
        c: "360 degree angle",
        d: "45 degree angle",
        ans: "ans3"
    },
    {
        Question:"Q6: CHAP stands for?",
        a: "Challenge Handshake authentication protocol",
        b: "Challenge Hardware authentication protocol",
        c: "Circuit Hardware authentication protocol",
        d: "Circuit Handshake authentication protocol",
        ans: "ans1"
    },
    {
        Question:"Q7: Security features that control that can access resources in the OS.",
        a: "Authentication",
        b: "Identification",
        c: "Validation",
        d: "Access control",
        ans: "ans4"
    },
    {
        Question:"Q8: An algorithm in encryption is called ____________",
        a: "Algorithm",
        b: "Procedure",
        c: "Cipher",
        d: "Module",
        ans: "ans3"
    },
    {
        Question:"Q9: The information that gets transformed in encryption is ____________",
        a: "Plain text",
        b: "Parallel text",
        c: "Encrypted text",
        d: "Decrypted text",
        ans: "ans1"
    },
    {
        Question:"Q10:  The process of transforming plain text into unreadable text.",
        a: "Decryption",
        b: "Encryption",
        c: "Network Security",
        d: "Information Hiding",
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