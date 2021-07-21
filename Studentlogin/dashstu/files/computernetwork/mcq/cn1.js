const quizDB = [
    {
       Question:"Q1: Which of these is a standard interface for serial data transmission?",
       a: "ASCII",
       b: "RS232C",
       c: "2",
       d: "Centronics",
       ans: "ans2"
    },
    {
        Question:"Q2: Which type of topology is best suited for large businesses which must carefully control and coordinate the operation of distributed branch outlets?",
       a: "Ring",
       b: "Local area",
       c: "Hierarchical",
       d: "Star",
       ans: "ans4"
    },
    {
        Question:"Q3: Which of the following transmission directions listed is not a legitimate channel?",
        a: "Simplex",
        b: "Half Duplex",
        c: "Full Duplex",
        d: "Double Duplex",
        ans: "ans4"
    },
    {
        Question:"Q4: 'Parity bits' are used for which of the following purposes?",
        a: "Encryption of data",
        b: "To transmit faster",
        c: "To detect errors",
        d: "To identify the user",
        ans: "ans3"
    },
    {
        Question:"Q5: What kind of transmission medium is most appropriate to carry data in a computer network that is exposed to electrical interferences?",
        a: "Unshielded twisted pair",
        b: "Optical fiber",
        c: "Coaxial cable",
        d: "Microwave",
        ans: "ans2"
    },
    {
        Question:"Q6: A collection of hyperlinked documents on the internet forms the ?.?",
        a: "World Wide Web (WWW)",
        b: "E-mail system",
        c: "Mailing list",
        d: "Hypertext markup language",
        ans: "ans1"
    },
    {
        Question:"Q7: The location of a resource on the internet is given by its?",
        a: "Protocol",
        b: "URL",
        c: "E-mail address",
        d: "ICQ",
        ans: "ans2"
    },
    {
        Question:"Q8: The term HTTP stands for?",
        a: "Hyper terminal tracing program",
        b: "Hypertext tracing protocol",
        c: "Hypertext transfer protocol",
        d: "Hypertext transfer program",
        ans: "ans3"
    },
    {
        Question:"Q9: A proxy server is used as the computer?",
        a: "with external access",
        b: "acting as a backup",
        c: "performing file handling",
        d: "accessing user permissions",
        ans: "ans1"
    },
    {
        Question:"Q10: Which one of the following would breach the integrity of a system?",
        a: "Looking the room to prevent theft",
        b: "Full access rights for all users",
        c: "Fitting the system with an anti-theft device",
        d: "Protecting the device against willful or accidental damage",
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