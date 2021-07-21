const quizDB = [
    {
       Question:"Q1: In which of the following, a person is constantly followed/chased by another person or group of several peoples?",
       a: "Phishing",
       b: "Bulling",
       c: "Stalking",
       d: "Identity theft",
       ans: "ans3"
    },
    {
        Question:"Q2: Which one of the following can be considered as the class of computer threats?",
       a: "Dos Attack",
       b: "Phishing",
       c: "Soliciting",
       d: "Both A and C",
       ans: "ans1"
    },
    {
        Question:"Q3: Which of the following is considered as the unsolicited commercial email?",
        a: "Virus",
        b: "Malware",
        c: "Spam",
        d: "All of these",
        ans: "ans3"
    },
    {
        Question:"Q4: Which of the following usually observe each activity on the internet of the victim, gather all information in the background, and send it to someone else?",
        a: "Malware",
        b: "Spyware",
        c: "Adware",
        d: "All of the above",
        ans: "ans2"
    },
    {
        Question:"Q5: _______ is a type of software designed to help the user's computer detect viruses and avoid them.",
        a: "Malware",
        b: "Adware",
        c: "Antivirus",
        d: "Both B and C",
        ans: "ans3"
    },
    {
        Question:"Q6: Which one of the following is a type of antivirus program?",
        a: "Quick heal",
        b: "Mcafee",
        c: "Kaspersky",
        d: "All of the above",
        ans: "ans4"
    },
    {
        Question:"Q7: It can be a software program or a hardware device that filters all data packets coming through the internet, a network, etc. it is known as the_______:",
        a: "Antivirus",
        b: "Firewall",
        c: "Cookies",
        d: "Malware",
        ans: "ans2"
    },
    {
        Question:"Q8: Which of the following refers to stealing one's idea or invention of others and use it for their own benefits?",
        a: "Piracy",
        b: "Plagiarism",
        c: "Intellectual property rights",
        d: "All of the above",
        ans: "ans4"
    },
    {
        Question:"Q9: Which of the following refers to exploring the appropriate, ethical behaviors related to the online environment and digital media platform?",
        a: "Cyber low",
        b: "Cyberethics",
        c: "Cybersecurity",
        d: "Cybersafety",
        ans: "ans2"
    },
    {
        Question:"Q10:  Which of the following refers to the violation of the principle if a computer is no more accessible?",
        a: "Access control",
        b: "Confidentiality",
        c: "Availability",
        d: "All of the above",
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