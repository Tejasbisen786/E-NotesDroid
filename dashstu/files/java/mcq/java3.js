const quizDB = [
    {
       Question:"Q1: Which of this keyword must be used to inherit a class?",
       a: "super",
       b: "this",
       c: "extent",
       d: "extends",
       ans: "ans4"
    },
    {
        Question:"Q2: Which of these is correct way of calling a constructor having no parameters, of superclass A by subclass B?",
       a: "super(void);",
       b: "superclass.();",
       c: "super.A();",
       d: "super();",
       ans: "ans4"
    },
    {
        Question:"Q3: Which of these keywords can be used to prevent Method overriding?",
        a: "static",
        b: "constant",
        c: "protected",
        d: "final",
        ans: "ans4"
    },
    {
        Question:"Q4: What will be the output of the following Java program?Final class A {Int I; } Class B extends A {Int j;System.out.println(j + “ “ + i); } Class inheritance {Public static void main(String args[]){B obj = new B();Obj.display(); }}",
        a: "2 2",
        b: "3 3",
        c: "Runtime Error",
        d: "Compilation Error",
        ans: "ans4"
    },
    {
        Question:"Q5: Which of these is not a correct statement?",
        a: "Every class containing abstract method must be declared abstract",
        b: "Abstract class defines only the structure of the class not its implementation",
        c: "Abstract class can be initiated by new operator",
        d: "Abstract class can be inherited",
        ans: "ans3"
    },
    {
        Question:"Q6: Which of these packages contains abstract keyword?",
        a: "java.lang",
        b: "java.util",
        c: "java.io",
        d: "java.system",
        ans: "ans1"
    },
    {
        Question:"Q7:Which of the following is the correct way of implementing an interface salary by class manager?",
        a: "class manager extends salary {}",
        b: "class manager implements salary {}",
        c: "class manager imports salary {}",
        d: "none of the mentioned",
        ans: "ans1"
    },
    {
        Question:"Q8: What will be the output of the following Java program?Package pkg;Class output {  Public static void main(String args[]){ StringBuffer s1 = new StringBuffer(“Hello”);S1.setCharAt(1, x);System.out.println(s1);} }",
        a: "xello",
        b: "xxxxx",
        c: "Hxllo",
        d: "Hexlo",
        ans: "ans3"
    },
    {
        Question:"Q9:Which of these keywords is used to define packages in Java?",
        a: "pkg",
        b: "Pkg",
        c: "package",
        d: "Package",
        ans: "ans3"
    },
    {
        Question:"Q10:  What will be the output of the following Java program?Package pkg; Class output {Public static void main(String args[]){StringBuffer s1 = new StringBuffer(“Hello World”);S1.insert(6 , “Good “);System.out.println(s1); } }",
        a: "HelloGoodWorld",
        b: "HelloGoodWorld",
        c: "Compilation error",
        d: "Runtime error",
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