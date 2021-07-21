const quizDB = [
    {
       Question:"Q1:  Which of the following statements for a simple graph is correct?",
       a: "Every path is a trail",
       b: "Every trail is a path",
       c: "Every trail is a path as well as every path is a trail",
       d: "Path and trail have no relation",
       ans: "ans1"
    },
    {
        Question:"Q2: What is the number of edges present in a complete graph having n vertices?",
       a: "(n*(n+1))/2",
       b: "(n*(n-1))/2",
       c: "n",
       d: "Information given is insufficient",
       ans: "ans2"
    },
    {
        Question:"Q3: A connected planar graph having 6 vertices, 7 edges contains _____________ regions.",
        a: "15",
        b: "3",
        c: "1",
        d: "11",
        ans: "ans2"
    },
    {
        Question:"Q4: If a simple graph G, contains n vertices and m edges, the number of edges in the Graph G'(Complement of G) is ___________",
        a: "(n*n-n-2*m)/2",
        b: "(n*n+n+2*m)/2",
        c: "(n*n-n-2*m)/2",
        d: "(n*n-n+2*m)/2",
        ans: "ans1"
    },
    {
        Question:"Q5: Which of the following properties does a simple graph not hold?",
        a: "Must be connected",
        b: "Must be unweighted",
        c: "Must have no loops or multiple edges",
        d: "Must have no multiple edges",
        ans: "ans1"
    },
    {
        Question:"Q6: What is the maximum number of edges in a bipartite graph having 10 vertices?",
        a: "24",
        b: "21",
        c: "25",
        d: "16",
        ans: "ans3"
    },
    {
        Question:"Q7: Which of the following is true?",
        a: "A graph may contain no edges and many vertices",
        b: "A graph may contain many edges and no vertices",
        c: "A graph may contain no edges and no vertices",
        d: "A graph may contain no vertices and many edges",
        ans: "ans2"
    },
    {
        Question:"Q8: For a given graph G having v vertices and e edges which is connected and has no cycles, which of the following statements is true?",
        a: "v=e",
        b: "v = e+1",
        c: "v + 1 = e",
        d: " v = e-1",
        ans: "ans2"
    },
    {
        Question:"Q9: For which of the following combinations of the degrees of vertices would the connected graph be eulerian?",
        a: "1,2,3",
        b: "2,3,4",
        c: "2,4,5",
        d: "1,3,5",
        ans: "ans1"
    },
    {
        Question:"Q10:  A graph with all vertices having equal degree is known as a __________",
        a: "Multi Graph",
        b: "Regular Graph",
        c: "Simple Graph",
        d: "Complete Graph",
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