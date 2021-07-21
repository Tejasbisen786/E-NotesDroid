const quizDB = [
    {
       Question:"Q1: When does Exceptions in Java arises in code sequence?",
       a: "Run Time",
       b: "Compilation Time",
       c: "Can Occur Any Time",
       d: "None of the mentioned",
       ans: "ans1"
    },
    {
        Question:"Q2: Which of these keywords is not a part of exception handling?",
       a: "try",
       b: "finally",
       c: "thrown",
       d: "Catch",
       ans: "ans3"
    },
    {
        Question:"Q3: Which of these keywords are used for the block to be examined for exceptions?",
        a: "try",
        b: "catch",
        c: "throw",
        d: "check",
        ans: "ans1"
    },
    {
        Question:"Q4: What will be the output of the following Java code?Class Output { Public static void main(String args[])  { Try {Int a = 0;Int b = 5; Int c = b / a;System.out.print(“Hello”); } Catch(Exception e) { System.out.print(“World”); }  }}",
        a: "Hello",
        b: "World",
        c: "HelloWOrld",
        d: "Compilation Error",
        ans: "ans2"
    },
    {
        Question:"Q5: What will be the output of the following Java program?Package pkg; Class output {Public static void main(String args[]){StringBuffer s1 = new StringBuffer(“Hello  World”);S1.insert(6 , “Good “);System.out.println(s1);}}",
        a: "HelloGoodWorld",
        b: "HellGoodoWorld",
        c: "Compilation error",
        d: "Runtime errorr",
        ans: "ans2"
    },
    {
        Question:"Q6: Which of this method is used to find out that a thread is still running or not?",
        a: "run()",
        b: "Alive()",
        c: "isAlive()",
        d: "checkRun()",
        ans: "ans3"
    },
    {
        Question:"Q7:Which of this method can be used to make the main thread to be executed last among all the threads?",
        a: "stop()",
        b: "sleep()",
        c: "join()",
        d: "call()",
        ans: "ans2"
    },
    {
        Question:"Q8: Which of these method is used to explicitly set the priority of a thread?",
        a: "set()",
        b: "make()",
        c: "setPriority()",
        d: "makePriority()",
        ans: "ans3"
    },
    {
        Question:"Q9: What is multithreaded programming?",
        a: "It’s a process in which two different processes run simultaneously",
        b: "It’s a process in which two or more parts of same process run simultaneously",
        c: "It’s a process in which many different process are able to access same information",
        d: "It’s a process in which a single process can access information from many sources",
        ans: "ans2"
    },
    {
        Question:"Q10:  What is the name of the thread in the following Java Program?Class multithreaded_programing { Public static void main(String args[]) { Thread t = Thread.currentThread();System.out.println(t);  } }",
        a: "main",
        b: "Thread",
        c: "System",
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