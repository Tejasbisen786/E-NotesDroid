<?php
session_start();
if (strlen($_SESSION['id']==0)) {
  header('location:logout.php');
  } else{
	
?><!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="dashstyle.css" />
    <link
      rel="stylesheet"
      href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
    />

    <title>Dashboard</title>
    <style>
      .containerb {
        padding: 0;
        margin-top: 3rem;
        margin-left: 10rem;
        margin-right: 10rem;
        margin-bottom: 2.8rem;
        background: none;
        border-radius: 5px;
        /* height: 550px; 
           width: 900px;  */
        box-shadow: inset -1px -1px 2px rgba(0, 0, 0, 0.548),
          inset 1px 1px 2px rgba(0, 0, 0, 0.678);
        /* overflow-y: scroll; */
      }
      h1 {
        text-align: center;
        font-family: "Jost", sans-serif;
      }
      p{
        margin-left: 4rem;
        margin-right: 4rem;
        
      }


      .topnav {
  overflow: hidden;
  background-color: #465D88;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a:hover {
  background-color: #ddd;
  color: black;
}


.topnav a.active {
  background-color:crimson;
  color: white;
}
.topnav a.actives {
  background-color:#465D88;
  color: white;
}
h1.notes{

color: crimson;
font-weight: 700;
font-family: 'Times New Roman', Times, serif;

}
    </style>
  </head>

  <body>
    <div class="container">
      <div class="sidenav">
        <p class="adminheading">
          <span style="color: crimson; font: 2em poppin"> Notes</span
          ><span style="color: rgb(14, 161, 247); font: 2em poppin">Droid</span>
        </p>
        <br />

        <a
          href="dashboard.php"
          class="dashatag"
          style="background-color: rgb(201, 197, 197)"
          ><span class="las la-igloo"></span> Dashboard</a
        >

        <a href="faculty.html" class="dashatag"
          ><span class="las la-users"></span> Faculty</a
        >

        <a href="course.html" class="dashatag"
          ><span class="las la-clipboard-list"></span> Courses</a
        >

        <a href="aboutus.html" class="dashatag"
          ><span class="las la-box"></span> About Us</a
        >

        
      </div>
     

     
      <div class="main" id="ppp">
  
      <div class="topnav">
  <a class="active" href="#home">Welcome To NotesDroid</a> 
  <a href="#"> Welcome &nbsp;  <?php echo $_SESSION['name'];?></a>
    <a href="http://localhost/Notesdroid%20Final/NotesDroid/Studentlogin/logout.php">Logout</a> 
  
</div>


        <div class="containerb">
          
          <h1 class="notes">Welcome to NotesDroid</h1>
         
          <p>
          NotesDroid, the Socio-Academic Portal of GPN department 
            of INFORMATION TECHNOLOGY. We started out with a team of 
            Four with an aim to provide everything that is necessary 
            to the students during the three years of diploma and now, 
             we have a  team of hardworking and committed students working 
             in IT department. The aim of NotesDroid is to provide all the
              details about the various courses studying in our diploma 
              period in IT sector under its GPN Portal Section which
               includes everything about  IT Department  and updates 
               related to courses and under its Academics Section where
                all the content related to academics i.e. notes, files,
                 books, exam papers, MCQ test etc. has been provided. <br> By 
                 using this website complexity of searching data is Reduce 
                  as all data is integrated in a single block.(of all subject 
                  related data is available). Due to this accessing of data 
                  become easy. By this website every student get all details 
                  of their Courses. And Progress of  students can be analysis
                   by giving MCQ tests. <br> <br>And Faculty they can manipulated update, 
                   control, modify all the courses and staff.They have special 
                   Previlage of Update, insert, Modify all data. The main purpose
                    is to provide all the data of their courses like Cirriculum, Notes, Books, 
                    Question papers and can solve MCQ test.<br><br><br><br><br>
          </p>
        </div>
      </div>
    </div>
  </body>
</html>
<?php } ?>