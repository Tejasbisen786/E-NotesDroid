const quizDB = [
    {
       Question:"Q1: Choose the correct statement regarding superkeys",
       a: "A superkey is an attribute or a group of multiple attributes that can uniquely identify a tuple",
       b: "A superkey is a tuple or a set of multiple tuples that can uniquely identify an attribute",
       c: "Every superkey is a candidate key",
       d: "A superkey is an attribute or a set of attributes that distinguish the relation from other relations",
       ans: "ans1"
    },
    {
        Question:"Q2: What is an Instance of a Database?",
       a: "The logical design of the database system",
       b: "The entire set of attributes of the Database put together in a single relation",
       c: "The state of the database system at any given point of time",
       d: "The initial values inserted into the Database immediately after its creation",
       ans: "ans3"
    },
    {
        Question:"Q3: What is a foreign key?",
        a: "A foreign key is a primary key of a relation which is an attribute in another relation",
        b: "A foreign key is a superkey of a relation which is an attribute in more than one other relations",
        c: "A foreign key is an attribute of a relation that is a primary key of another relation",
        d: "A foreign key is the primary key of a relation that does not occur anywhere else in the schema",
        ans: "ans3"
    },
    {
        Question:"Q4:  What action does ⋈ operator perform in relational algebra",
        a: "Output specified attributes from all rows of the input relation and remove duplicate tuples from the output",
        b: "Outputs pairs of rows from the two input relations that have the same value on all attributes that have the same name",
        c: "Output all pairs of rows from the two input relations (regardless of whether or not they have the same values on common attributes)",
        d: "Return rows of the input relation that satisfy the predicate",
        ans: "ans1"
    },
    {
        Question:"Q5: What does the “x” operator do in relational algebra?",
        a: "Output specified attributes from all rows of the input relation. Remove duplicate tuples from the output",
        b: "Output pairs of rows from the two input relations that have the same value on all attributes that have the same name",
        c: "Output all pairs of rows from the two input relations (regardless of whether or not they have the same values on common attributes)",
        d: "Returns the rows of the input relation that satisfy the predicate",
        ans: "ans3"
    },
    {
        Question:"Q6: An attribute is a __________ in a relation.",
        a: "Row",
        b: "Column",
        c: "Value",
        d: "Tuple",
        ans: "ans2"
    },
    {
        Question:"Q7: What is the method of specifying a primary key in a schema description?",
        a: "By writing it in bold letters",
        b: "By underlining it using a dashed line",
        c: "By writing it in capital letters",
        d: "By underlining it using a bold line",
        ans: "ans4"
    },
    {
        Question:"Q8: Statement 1: A tuple is a row in a relation Statement 2: Existence of multiple foreign keys in a same relation is possible",
        a: "Both the statements are true",
        b: "Statement 1 is correct but Statement 2 is false",
        c: "Statement 1 is false but Statement 2 is correct",
        d: "Both the statements are false",
        ans: "ans1"
    },
    {
        Question:"Q9: Which of the following information does an SQL DDL not specify?",
        a: "The schema for each relation",
        b: "The integrity constraints",
        c: "The operations on the tuples",
        d: "The security and authorization information for each relation",
        ans: "ans3"
    },
    {
        Question:"Q10:  What does the notnull integrity constraint do?",
        a: "It ensures that at least one tuple is present in the relation",
        b: "It ensures that at least one foreign key is present in the relation",
        c: "It ensures that all tuples have a finite value on a specified attribute",
        d: "It ensures that all tuples have finite attributes on all the relations",
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