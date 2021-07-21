const quizDB = [
    {
       Question:"Q1: The goal of clustering a set of data is to",
       a: "divide them into groups of data that are near each other",
       b: "choose the best data from the set",
       c: "determine the nearest neighbors of each of the data",
       d: "predict the class of data",
       ans: "ans1"
    },
    {
        Question:"Q2:  The k-means algorithm..",
       a: "always converges to a clustering that minimizes the mean-square vector-representative distance",
       b: "can converge to different final clustering, depending on initial choice of representatives",
       c: "is typically done by hand, using paper and pencil",
       d: "should only be attempted by trained professionals",
       ans: "ans2"
    },
    {
        Question:"Q3: The choice of k, the number of clusters to partition a set of data into,...",
        a: "is a personal choice that shouldn't be discussed in public",
        b: "depends on why you are clustering the data",
        c: "should always be as large as your computer system can handle",
        d: "has maximum 10",
        ans: "ans2"
    },
    {
        Question:"Q4: Which of the following statements about the K-means algorithm are correct?",
        a: "For different initializations, the K-means algorithm will definitely give the same clustering results",
        b: "The centroids in the K-means algorithm may not be any observed data points.",
        c: "For static initializations, the K-means algorithm will definitely give the same clustering results",
        d: "The K-means algorithm can detect non-convex clusters.",
        ans: "ans2"
    },
    {
        Question:"Q5: Considering the K-median algorithm, if points (0, 3), (2, 1), and (-2, 2) are the only points which are assigned to the first cluster now, what is the new centroid for this cluster?",
        a: "(0,2)",
        b: "(2,1)",
        c: "(2,0)",
        d: "(1,2)",
        ans: "ans1"
    },
    {
        Question:"Q6: What is a Dendrogram?",
        a: "A tree diagram used to illustrate the arrangement of clusters in hierarchical clustering.",
        b: "A tree diagram used to illustrate the arrangement of clusters in partitional clustering.",
        c: "A type of hierarchical clustering",
        d: "A type of bar chart diagram to visualize k-means clusters.",
        ans: "ans1"
    },
    {
        Question:"Q7: The most important part of _____ is selecting the variables on which clustering is based.",
        a: "interpreting and profiling clusters",
        b: "selecting a clustering procedure",
        c: "assessing the validity of clustering",
        d: "formulating the clustering problem",
        ans: "ans4"
    },
    {
        Question:"Q8: The most commonly used measure of similarity is the _____ or its square.",
        a: "euclidean distance",
        b: "city-block distance",
        c: "Chebychev’s distance",
        d: "Manhattan distance",
        ans: "ans1"
    },
    {
        Question:"Q9: _____ is a clustering procedure where all objects start out in one giant cluster. Clusters are formed by dividing this cluster into smaller and smaller clusters.",
        a: "Non-hierarchical clustering",
        b: "Divisive clustering",
        c: "Agglomerative clustering",
        d: "K-means clustering",
        ans: "ans2"
    },
    {
        Question:"Q10:  Which of the following is required by K-means clustering?",
        a: "defined distance metric",
        b: "number of clusters",
        c: "initial guess as to cluster centroids",
        d: "all answers are correct",
        ans: "ans4"
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