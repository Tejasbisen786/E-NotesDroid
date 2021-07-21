const quizDB = [
    {
       Question:"Q1: Which of the following is a valid declaration of an object of class Box?",
       a: "Box obj = new Box();",
       b: "Box obj = new Box;",
       c: "obj = new Box();",
       d: "new Box obj;",
       ans: "ans1"
    },
    {
        Question:"Q2:  Which of these access specifiers must be used for main() method?",
       a: "private",
       b: "public",
       c: "protected",
       d: "none of the mentioned",
       ans: "ans2"
    },
    {
        Question:"Q3: What will be the output of the following Java code?Class access  { Public int x; Private int y; Void cal(int a, int b) {X = a + 1;Y = b; } } Public class access_specifier { Public static void main(String args[]) {Access obj = new access(); Obj.cal(2, 3); System.out.println(obj.x + “ “ + obj.y); }}",
        a: "3 3",
        b: "2 3",
        c: "Runtime Error",
        d: "Compilation Error",
        ans: "ans2"
    },
    {
        Question:"Q4: Which of the following is a method having same name as that of its class?",
        a: "Finalize",
        b: "Delete",
        c: "Class",
        d: "Constructor",
        ans: "ans4"
    },
    {
        Question:"Q5:Which of this statement is incorrect?",
        a: "All object of a class are allotted memory for the all the variables defined in the class",
        b: "If a function is defined public it can be accessed by object of other class by inheritation",
        c: "main() method must be made public",
        d: "All object of a class are allotted memory for the methods defined in the class",
        ans: "ans4"
    },
    {
        Question:"Q6: Which of these operators is used to allocate memory for an object?",
        a: "malloc",
        b: "alloc",
        c: "new",
        d: "give",
        ans: "ans1"
    },
    {
        Question:"Q7:What is the process of defining two or more methods within same class that have same name but different parameters declaration?",
        a: "method overloading",
        b: "method overriding",
        c: "method hiding",
        d: "none of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q8: Which of the following is a valid long literal?",
        a: "Relative Application Development",
        b: "Rapid Application Development",
        c: "Rapid Application Document",
        d: "None of the mentioned",
        ans: "ans3"
    },
    {
        Question:"Q9: How can a protected modifier be accessed?",
        a: "accessible only within the class",
        b: "accessible only within package",
        c: "accessible within package and outside the package but through inheritance only",
        d: "accessible by all",
        ans: "ans3"
    },
    {
        Question:"Q10:  Which one of the following is not an access modifier?",
        a: "Public",
        b: "Private",
        c: "Protected",
        d: "Void",
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