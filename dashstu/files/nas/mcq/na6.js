const quizDB = [
    {
       Question:"Q1: What security principal is assigned as the owner of files and folders created by the operating system?",
       a: "The Administrator account",
       b: "The Administrators group",
       c: "The SYSVOL special identity",
       d: "The SYSTEM special identity",
       ans: "ans2"
    },
    {
        Question:"Q2: Which of the following commands creates a computer account for computer1.sales .contoso.com?",
       a: "Dsadd computer CN=computer1,CN=sales,DC=contoso,DC=com",
       b: "Dsadd comp CN=computer1,CN=sales,DC=contoso,DC=com",
       c: "Dsmod computer CN=computer1,CN=sales,DC=contoso,DC=com",
       d: "Dsrm computer CN=computer1,CN=sales,DC=contoso,DC=com",
       ans: "ans1"
    },
    {
        Question:"Q3: After you create a new printer and share it out, users can start printing to the device even if you have not made any permission assignments for the printer. How is this possible?",
        a: "The default permission assignment for a newly created printer is Everyone, Full Control.",
        b: "The default permission assignment for a newly created printer is Everyone, Print.",
        c: "The default permission assignment for a newly created printer is Domain Users, Print.",
        d: "The default permission assignment for a newly created printer is Domain Users, Full Control.",
        ans: "ans2"
    },
    {
        Question:"Q4: By default, members of which Active Directory groups can assign ownership of an NTFS file or folder to another user?",
        a: "Administrators, Backup Operators",
        b: "Administrators, Backup Operators, Server Operators",
        c: "Administrators, Server Operators",
        d: "Administrators, Backup Operators, Account Operators",
        ans: "ans1"
    },
    {
        Question:"Q5: Which of the following is considered a standard NTFS permission?",
        a: "List Folder Contents",
        b: "Read Extended Attributes",
        c: "Create Folders/Append Data",
        d: "List Folder/Read Data",
        ans: "ans1"
    },
    {
        Question:"Q6: Which of the following tasks can be performed with the Full Control share permission but not the Change share permission?",
        a: "Changing the name of the file",
        b: "Changing file permissions",
        c: "Changing the contents of the file",
        d: "Deleting the file",
        ans: "ans2"
    },
    {
        Question:"Q7: You want a user to take ownership of a file or folder that she did not create. Which of the following groups do you not add her to?",
        a: "Administrators group",
        b: "Backup Operators group",
        c: "Creator/Owner special identity",
        d: "Server Operators group",
        ans: "ans3"
    },
    {
        Question:"Q8: Which of the following statements is true of global groups?",
        a: "Global groups can include only users from within their domain.",
        b: "Global groups can include users from any domain in the tree.",
        c: "Global groups can include users from any domain in the forest.",
        d: "Global groups can include users from any domain in Active Directory",
        ans: "ans1"
    },
    {
        Question:"Q9: Which of the following media has the largest data storage capacity?",
        a: "Zip cartridge",
        b: "CD",
        c: "DVD",
        d: "Jaz cartridge",
        ans: "ans3"
    },
    {
        Question:"Q10:  What utility do you use to mark specific Active Directory objects as authoritative?",
        a: "ADutil.exe",
        b: "Auth.exe",
        c: "DSAuth.exe",
        d: "Ntdsutil.exe",
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