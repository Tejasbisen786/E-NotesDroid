const quizDB = [
    {
       Question:"Q1: The 32-bit control register, that is used to hold global machine status, independent of the executed task is",
       a: "CR0",
       b: "CR2",
       c: "CR3",
       d: "All of the mentioned",
       ans: "ans4"
    },
    {
        Question:"Q2: The descriptor table that the 80386 supports is",
       a: "GDT (Global descriptor table)",
       b: "IDT (Interrupt descriptor table)",
       c: "LDT (Local descriptor table)",
       d: "All of the mentioned",
       ans: "ans4"
    },
    {
        Question:"Q3: The registers that are together, known as system address registers are",
        a: "GDTR and IDTR",
        b: "IDTR and LDTR",
        c: "TR and GDTR",
        d: "LDTR and TR",
        ans: "ans1"
    },
    {
        Question:"Q4:  Which of the following is a system segment register?",
        a: "GDTR",
        b: "LDTR",
        c: "IDTR",
        d: "None of the mentioned",
        ans: "ans2"
    },
    {
        Question:"Q5: The test register(s) that is provided by 80386 for page caching is",
        a: "test control registers",
        b: "page cache registers",
        c: "test control and test status registers",
        d: "test control and page cache registers",
        ans: "ans3"
    },
    {
        Question:"Q6: Among eight debug registers, DR0-DR7, the registers that are reserved by Intel are",
        a: "DR0, DR1, DR2",
        b: "DR4, DR5",
        c: "DR1, DR4",
        d: "DR5, DR6, DR7",
        ans: "ans2"
    },
    {
        Question:"Q7: The registers that are used to store four program controllable break point addresses are",
        a: "DR5-DR7",
        b: "DR0-DR1",
        c: "DR6-DR7",
        d: "DR0-DR3",
        ans: "ans4"
    },
    {
        Question:"Q8: The register DR6 hold",
        a: "break point status",
        b: "break point control information",
        c: "break point status and break point control information",
        d: "none of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q9:  The flag bits that indicate the privilege level of current IO operations are",
        a: "Virtual mode flag bits",
        b: "IOPL flag bits",
        c: "Resume flag bits",
        d: "None of the mentioned",
        ans: "ans2"
    },
    {
        Question:"Q10:  The registers that are not available for programmers are",
        a: "data and address registers",
        b: "instruction pointers",
        c: "segment descriptor registers",
        d: "flag registers",
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