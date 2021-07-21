const quizDB = [
    {
       Question:"Q1: Data Model is collection of conceptual tools for describing –",
       a: "Data",
       b: "All of these",
       c: "Data Schema",
       d: "Consistency Constraints",
       ans: "ans2"
    },
    {
        Question:"Q2: Entity is a _________",
       a: "Object of relation",
       b: "Present working model",
       c: "Thing in real world",
       d: "Model of relation",
       ans: "ans3"
    },
    {
        Question:"Q3: In a one-to-many relationship, the entity that is on the one side of the relationship is called a(n) ________ entity.",
        a: "parent ",
        b: "child",
        c: "instance",
        d: "subtype",
        ans: "ans1"
    },
    {
        Question:"Q4: State whether the following statements about data flow model are True or False. I. Data flow model shows how the order for the goods moves from process to process. II. Data flow diagrams are good way to describe sub-system with complex interfaces.",
        a: "True, False",
        b: "False, True",
        c: "False, False",
        d: "True, True",
        ans: "ans1"
    },
    {
        Question:"Q5: ………….. may be used to show how the system reacts to internal and external events",
        a: "Entity-relation diagram",
        b: "Data flow diagram",
        c: "Objects class diagram",
        d: "State transaction diagram",
        ans: "ans4"
    },
    {
        Question:"Q6: A _________ is a graphical representation that depicts information flow and the transforms that are applied as data moves from input to output.",
        a: "data flow diagram",
        b: "state transition diagram",
        c: "control specification",
        d: "workflow diagram",
        ans: "ans2"
    },
    {
        Question:"Q7: DFD takes an input-process-output view of a system",
        a: "True ",
        b: "False",
        c: "Can be true",
        d: "None of the above",
        ans: "ans1"
    },
    {
        Question:"Q8: The behavioral model indicates how software will respond to _____ or_____",
        a: "Input , output ",
        b: "External events , External stimuli",
        c: "System, flow",
        d: "None of the mentioned",
        ans: "ans2"
    },
    {
        Question:"Q9: The maximum number of objects that can participate in a relationship is called________ .",
        a: "Cardinality",
        b: "Attributes",
        c: "Operations",
        d: "Transformers",
        ans: "ans1"
    },
    {
        Question:"Q10: The entity relationship set is represented in E-R diagram as",
        a: "Divided rectangles",
        b: "Undivided rectangles",
        c: "Dashed lines",
        d: "Diamond ",
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