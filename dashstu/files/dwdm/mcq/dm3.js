const quizDB = [
    {
       Question:"Q1: Which of the following refers to the problem of finding abstracted patterns (or structures) in the unlabeled data?",
       a: "Supervised learning",
       b: "Unsupervised learning",
       c: "Hybrid learning",
       d: "Reinforcement learning",
       ans: "ans2"
    },
    {
        Question:"Q2:  Which one of the following refers to querying the unstructured textual data?",
       a: "Information access",
       b: "Information update",
       c: "Information retrieval",
       d: "Information manipulation",
       ans: "ans3"
    },
    {
        Question:"Q3: Which of the following can be considered as the correct process of Data Mining?",
        a: "Infrastructure, Exploration, Analysis, Interpretation, Exploitation",
        b: "Exploration, Infrastructure, Analysis, Interpretation, Exploitation",
        c: "Exploration, Infrastructure, Interpretation, Analysis, Exploitation",
        d: "Exploration, Infrastructure, Analysis, Exploitation, Interpretation",
        ans: "ans1"
    },
    {
        Question:"Q4: Which of the following is an essential process in which the intelligent methods are applied to extract data patterns?",
        a: "Warehousing",
        b: "Data Mining",
        c: "Text Mining",
        d: "Data Selection",
        ans: "ans2"
    },
    {
        Question:"Q5: What is KDD in data mining?",
        a: "Knowledge Discovery Database",
        b: "Knowledge Discovery Data",
        c: "Knowledge Data definition",
        d: "Knowledge data house",
        ans: "ans1"
    },
    {
        Question:"Q6: The adaptive system management refers to",
        a: "Science of making machine performs the task that would require intelligence when performed by humans.",
        b: "A computational procedure that takes some values as input and produces some values as the output.",
        c: "It uses machine learning techniques, in which programs learn from their past experience and adapt themself to new conditions or situations.",
        d: "All of the above.",
        ans: "ans3"
    },
    {
        Question:"Q7: For what purpose, the analysis tools pre-compute the summaries of the huge amount of data?",
        a: "In order to maintain consistency",
        b: "For authentication",
        c: "For data access",
        d: "To obtain the queries response",
        ans: "ans4"
    },
    {
        Question:"Q8: What are the functions of Data Mining?",
        a: "Association and correctional analysis classification",
        b: "Prediction and characterization",
        c: "Cluster analysis and Evolution analysis",
        d: "All of the above",
        ans: "ans4"
    },
    {
        Question:"Q9: Which of the following statements is incorrect about the hierarchal clustering?",
        a: "The hierarchal type of clustering is also known as the HCA",
        b: "The choice of an appropriate metric can influence the shape of the cluster",
        c: "In general, the splits and merges both are determined in a greedy manner",
        d: "All of the above",
        ans: "ans1"
    },
    {
        Question:"Q10: Which one of the following can be considered as the final output of the hierarchal type of clustering?",
        a: "A tree which displays how the close thing are to each other",
        b: "Assignment of each point to clusters",
        c: "Finalize estimation of cluster centroids",
        d: "None of the above",
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