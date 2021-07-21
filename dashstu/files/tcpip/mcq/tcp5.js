const quizDB = [
    {
       Question:"Q1: What is the format of IP address?",
       a: "34 bit",
       b: "64 bit",
       c: "16 bit",
       d: "32 bit",
       ans: "ans4"
    },
    {
        Question:"Q2:  Version 6 of IP address has how many bits.",
       a: "64 bits",
       b: "128 bits",
       c: "32 bits",
       d: "256 bits",
       ans: "ans2"
    },
    {
        Question:"Q3: IANA stands for __________",
        a: "Internet Assigned Numbers Authority",
        b: "Internal Assigned Numbers Authority",
        c: "Internet Associative Numbers Authoritative",
        d: "Internal Associative Numbers Authority",
        ans: "ans1"
    },
    {
        Question:"Q4: RIR stands for ________",
        a: "Regional Internal Registries",
        b: "Registries Internet Regional",
        c: "Regional Internet Registries",
        d: "Registries Internal Regional",
        ans: "ans3"
    },
    {
        Question:"Q5: How many version /s of IP’s are there?",
        a: "4 versions",
        b: "3 versions",
        c: "2 versions",
        d: "1 version",
        ans: "ans3"
    },
    {
        Question:"Q6: Many desktops and operating systems include which protocol?",
        a: "IPv6 protocol",
        b: "IPv4 protocol",
        c: "Both IPv6 and IPv4 protocol",
        d: "IPv3 protocol",
        ans: "ans1"
    },
    {
        Question:"Q7: VLSM stands for ________",
        a: "Version Length Subnet Masking",
        b: "Variable Length Subnet Masking",
        c: "Variable Length Surface Masking",
        d: "Version Length Surface Masking",
        ans: "ans2"
    },
    {
        Question:"Q8: The design of the Internet protocol suites adhere to the ________ principle.",
        a: "Data corruption",
        b: "Connection oriented",
        c: "End to End principle",
        d: "Reliability",
        ans: "ans3"
    },
    {
        Question:"Q9:  ___________ adjusts the segment size to be smaller than MTU",
        a: "Internet Protocol 6",
        b: "User Datagram Protocol",
        c: "Internet Protocol 4",
        d: "Transmission Control Protocol",
        ans: "ans4"
    },
    {
        Question:"Q10:  Networking Hardware Address is referred with ________",
        a: "IP address",
        b: "MAC address",
        c: "NIC",
        d: "Organizationally Unique Identifier",
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