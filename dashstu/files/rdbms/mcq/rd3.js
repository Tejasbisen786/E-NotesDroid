const quizDB = [
    {
       Question:"Q1: Which level of RAID refers to disk mirroring with block striping?",
       a: "RAID level 1",
       b: "RAID level 2",
       c: "RAID level 0",
       d: "RAID level 3",
       ans: "ans1"
    },
    {
        Question:"Q2: A unit of storage that can store one or more records in a hash file organization is denoted as",
       a: "Buckets",
       b: "Disk pages",
       c: "Blocks",
       d: "Nodes",
       ans: "ans1"
    },
    {
        Question:"Q3: The file organization which allows us to read records that would satisfy the join condition by using one block read is",
        a: "Heap file organization",
        b: "Sequential file organization",
        c: "Clustering file organization",
        d: "Hash file organization",
        ans: "ans3"
    },
    {
        Question:"Q4: What are the correct features of a distributed database?",
        a: "Is always connected to the internet",
        b: "Always requires more than three machines",
        c: "Users see the data in one global schema",
        d: "Have to specify the physical location of the data when an update is done",
        ans: "ans3"
    },
    {
        Question:"Q5: Each tablespace in an Oracle database consists of one or more files called",
        a: "Files",
        b: "name space",
        c: "datafiles",
        d: "PFILE",
        ans: "ans3"
    },
    {
        Question:"Q6: The management information system (MIS) structure with one main computer system is called a",
        a: "Hierarchical MIS structure",
        b: "Distributed MIS structure",
        c: "Centralized MIS structure",
        d: "Decentralized MIS structure",
        ans: "ans3"
    },
    {
        Question:"Q7: A top-to-bottom relationship among the items in a database is established by a",
        a: "Hierarchical schema",
        b: "Network schema",
        c: "Relational schema",
        d: "All of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q8: Choose the RDBMS which supports full fledged client server application development",
        a: "dBase V",
        b: "Oracle 7.1",
        c: "FoxPro 2.1",
        d: "Ingress",
        ans: "ans2"
    },
    {
        Question:"Q9: One approach to standardization storing of data?",
        a: "MIS",
        b: "Structured programming",
        c: "CODASYL specification",
        d: "None of the mentioned",
        ans: "ans3"
    },
    {
        Question:"Q10:  The highest level in the hierarchy of data organization is called",
        a: "Data bank",
        b: "Data base",
        c: "Data file",
        d: "Data record",
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