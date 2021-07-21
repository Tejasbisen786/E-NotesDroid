<?php
include 'Notesdrod/db.php';


?>





<!DOCTYPE html>
<html lang="en">
  

<head>
  <style>



  </style>

  <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
      crossorigin="anonymous"
    ></script>

    
  
  <!-- basic -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!-- mobile metas -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1">
  <!-- site metas -->
  <title>NoteDroid</title>
  <meta name="keywords" content="">
  <meta name="description" content="">
  <meta name="author" content="">
  <!-- fevicon -->
  <link rel="icon" href="Notesdrod/images/title.png" type="image/gif" />
  <!-- bootstrap css -->
  <link rel="stylesheet" href="Notesdrod/css/bootstrap.min.css">
  <!-- style css -->
  <link rel="stylesheet" href="Notesdrod/css/style.css">
  <!-- Responsive-->
  <link rel="stylesheet" href="Notesdrod/css/responsive.css">  
  <!-- Scrollbar Custom CSS -->
  <link rel="stylesheet" href="Notesdrod/css/jquery.mCustomScrollbar.min.css">
  <!-- Tweaks for older IEs-->
  <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen">
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
</head>
<!-- body -->

<!-- <body class="main-layout"> -->
  <!-- loader  -->
  <!-- <div class="loader_bg">
    <div class="loader"><img src="images/loading.gif" alt="#" /></div>
  </div> -->
  <!-- end loader -->
  <!-- header -->
  <header>
    <!-- header inner -->
    <div class="header-top">
      <div class="header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-2 col-lg-4 col-md-4 col-sm-3 col logo_section">
              <div class="full">
                <div class="center-desk">
                  <div class="logo">
                    <a href="index.html"><img src="Notesdrod/images/NEW LOGO .png" alt="#" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-10 col-lg-8 col-md-8 col-sm-9">
         
               <div class="menu-area">
                <div class="limit-box">
                  <nav class="main-menu ">
                    <ul class="menu-area-main">
                      <li class="active"> <a href="http://localhost/Notesdroid%20Final/NotesDroid/index.php">Home</a> </li>
                      <li> <a href="#about">About</a> </li>
                      <li> <a href="http://localhost/Notesdroid%20Final/NotesDroid/Studentlogin/indexh.php">Student Login</a> </li>
                      <li> <a href="http://localhost/Notesdroid%20Final/NotesDroid/admin/index.php">Faculty Login</a> </li>
                     
                     
                     <li> <a href="#"><img src="Notesdrod/icon/icon_b.png" alt="#" /></a></li>
                     </ul>
                   </nav>
                 </div>
               </div> 
              </div>
           </div>
         </div>
       </div>
     </div>
     <!-- end header inner -->

     <!-- end header -->
     <section class="slider_section">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">

            <div class="container-fluid padding_dd">
              <div class="carousel-caption">
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="text-bg">
                     <span>Welcome To  Nagpur</span>
                      <h1>NotesDroid</h1>
                      <p>NotesDroid, the Socio-Academic Portal of GPN, Department 
                      of <strong style="color:#0dcaf0;"> INFORMATION TECHNOLOGY</strong> We started out with a team of Four
                       with an aim to provide everything that is necessary to the 
                      students during the three years of Diploma. </p>
                      <!-- <form class="Vegetable">
                <input class="Vegetable_fom" placeholder="Vegetable" type="text" name=" Vegetable">
                <button class="Search_btn">Search</button>
              </form> -->
                      <a href="#">Student Login </a> <a href="#">Faculty Login</a>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="images_box">
                      <figure><img src="Notesdrod/images/img3.png"></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">

            <div class="container-fluid padding_dd">
              <div class="carousel-caption">

                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="text-bg">
                      <span>Welcome To Nagpur</span>
                      <h1>NotesDroid</h1>
                      <p>NotesDroid, the Socio-Academic Portal of GPN, Department 
                      of <strong style="color:#0dcaf0;"> INFORMATION TECHNOLOGY</strong> We started out with a team of Four
                       with an aim to provide everything that is necessary to the 
                      students during the three years of Diploma. </p>
                      <!-- <form class="Vegetable">
                <input class="Vegetable_fom" placeholder="Vegetable" type="text" name=" Vegetable">
                <button class="Search_btn">Search</button>
              </form> -->
                      <a href="#">Contact Us</a> <a href="#">Vegetable</a>
                    </div>
                  </div>

                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="images_box">
                      <figure><img src="Notesdrod/images/im.png"></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>


          <div class="carousel-item">

            <div class="container-fluid padding_dd">
              <div class="carousel-caption ">
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="text-bg">
                      <span>Welcome To  Nagpur</span>
                      <h1>NotesDroid</h1>
                      <p>NotesDroid, the Socio-Academic Portal of GPN, Department 
                      of <strong style="color:#0dcaf0;"> INFORMATION TECHNOLOGY</strong> We started out with a team of Four
                       with an aim to provide everything that is necessary to the 
                      students during the three years of Diploma. </p>
                       <!-- <form class="Vegetable">
                <input class="Vegetable_fom" placeholder="Vegetable" type="text" name=" Vegetable">
                <button class="Search_btn">Search</button>
              </form> -->
                      <a href="#">Contact Us</a> <a href="#">Vegetable</a>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="images_box">
                      <figure><img src="Notesdrod/images/img4.png"></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
   

    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
 

</section>
</div>
</header>


<!-- about  -->
<div id="about" class="about">
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div class="about-box">
          <h2>About us</h2>
          <p>NotesDroid, the Socio-Academic Portal of GPN department 
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
                 books, exam papers, MCQ test etc. has been provided. By 
                 using this website complexity of searching data is Reduce 
                  as all data is integrated in a single block.(of all subject 
                  related data is available). Due to this accessing of data 
                  become easy. By this website every student get all details 
                  of their Courses. And Progress of  students can be analysis
                   by giving MCQ tests. And Faculty they can manipulated update, 
                   control, modify all the courses and staff.They have special 
                   Previlage of Update, insert, Modify all data. The main purpose
                    is to provide all the data of their courses like Cirriculum, Notes, Books, Question papers and can solve MCQ test.</p> 
               
          <a href="https://www.gpnagpur.ac.in/gpnagpur_new/)">Read more</a>



        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 padding_rl">
        <div class="about-box_img">
        <br>
          <br>
          <br>
          <figure><img src="Notesdrod/images/newabout.jpg" alt="#" /></figure>
          <!-- <figure><img src="Notesdrod/images/newabout1.jpg" alt="#" /></figure> -->

          <br>
          <br>
          <br>
          <br>
          <br>
          <figure><img src="Notesdrod/images/newabout2.jpg" alt="#" /></figure>
        </div>
      </div>
    </div>

  </div>
</div>
<!-- end abouts -->



<!-- vegetable -->
<div id="vegetable" class="vegetable">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div  class="titlepage">
          <h2> Our <strong class="llow"> Department</strong></h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
        <div class="vegetable_shop">
          <h2>INFORMATION TECHNOLOGY</h2>
          <p>“The Department of Information Technology is established in 2001, Information Technology continually push the capability and applicability of computer in every industry and every facet of modern life.
            Our vision is to promote excellence in 
            teaching and learning to produce lifelong
             learners who can compete globally to serve
              information industry and society.”
          </p>
        </div>
      </div>
       <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 ">
        <div class="vegetable_img">
         <figure><img src="Notesdrod/images/v11.jpg" alt="#"/></figure>
         <span>IT</span>
        </div>
      </div>
       <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 ">
        <div class="vegetable_img margin_top">
         <figure><img src="Notesdrod/images/v3.jpg" alt="#"/></figure>
         <span>IT</span>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- end vegetable -->




   <!-- clients -->
    <div id="testimonial" class="clients">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="titlepage">
                        <h2>faculty</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="clients_red">
        <div class="container">
            <div id="testimonial_slider" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ul class="carousel-indicators">
                    <li data-target="#testimonial_slider" data-slide-to="0" class=""></li>
                    <li data-target="#testimonial_slider" data-slide-to="1" class="active"></li>
                    <li data-target="#testimonial_slider" data-slide-to="2" class=""></li>
                </ul>
                <!-- The slideshow -->
                <div class="carousel-inner">
                    <div class="carousel-item">
                        <div class="testomonial_section">

                            <div class="full testimonial_cont">
                                <div class="row">
                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 pa_right">
                                        <div class="testomonial_img">
                                            <figure><img src="Notesdrod/images/prni.jpg" alt="#"/></figure>
                                            <i><img src="Notesdrod/images/test_con.png" alt="#"/></i>
                                        </div>
                                    </div>
                                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 pa_left">
                                        <div class="cross_inner">
                                            <h3>Dr. Manoj B. Daigavane , Principal,
                                             <br><strong class="ornage_color"> Government Polytechnic, Nagpur</strong></h3>
                                            <p>“The institute has adopted a new mission and vision for the institute and also for its several programmes. The vision of the institute is to become a 
                                              “Centre of Excellence” providing quality technical education and training.”
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item active">

                        <div class="testomonial_section">
                            <div class="full center">
                            </div>
                            <div class="full testimonial_cont ">
                                <div class="row">
                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 pa_right">
                                        <div class="testomonial_img">
                                            <figure><img src="Notesdrod/images/prni.jpg" alt="#"/></figure>
                                            <i><img src="Notesdrod/images/test_con.png" alt="#"/></i>
                                        </div>
                                    </div>
                                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 pa_left">
                                        <div class="cross_inner">
                                            <h3>Jomono<br><strong class="ornage_color">review</strong></h3>
                                            <p>It is a long established fact that a reader will be distracted by the readable 
                                              content of a page when looking at its layout. The point of using 
                                             
                                              
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="carousel-item">

                        <div id="testomonial" class="testomonial_section">
                            <div class="full center">
                            </div>
                            <div class="full testimonial_cont ">
                                <div class="row">
                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 pa_right">
                                        <div class="testomonial_img">
                                            <figure><img src="Notesdrod/images/n.png" alt="#"/></figure>
                                            <i><img src="Notesdrod/images/test_con.png" alt="#"/></i>
                                        </div>
                                    </div>
                                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 pa_left">
                                        <div class="cross_inner">
                                            <h3> Mrs. Anjali Mahajan<br><strong class="ornage_color">Hod Of IT Department</strong></h3>
                                            <p>“Our vision is to promote excellence in teaching and learning to
                                               produce lifelong learners who can compete globally to serve information 
                                               industry and society.”
                                              
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
  
    <!-- end clients -->







<!-- contact -->
<div id="contact" class="contact">
  <div class="container">
   <div class="row">
     <div class="col-md-12">
                <div class="titlepage">
                  <h2>Contact <strong class="llow">us</strong></h2>
                </div>
   </div>

</div>
    <div class="white_color">
      <div class="row">

        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
           
           <form name="frmContact" id="" frmContact"" method="post"
            action="" enctype="multipart/form-data"
            onsubmit="validateContactForm()" class="contact_bg">





            <div class="row">
              <div class="col-md-12">
              
                <div class="col-md-12">
                  <input class="contactus" placeholder="Your Name" type="text" name="userName" required>
                </div>
                <div class="col-md-12">
                  <input class="contactus" placeholder="Email" type="text" name="userEmail" required>
                </div>
                <div class="col-md-12">
                  <input class="contactus" placeholder="Phone Number" type="text" name="subject" required>
                </div>
                <div class="col-md-12">
                  <textarea class="textarea" placeholder="Message" type="text" name="content" required></textarea>
                </div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">

                <input type="submit" name="send" class="send"
                    value="Send" />

                  <!-- <button class="send">Send</button> -->
                </div>
              </div>
            </form>
          </div>
            </div>


            <script src="https://code.jquery.com/jquery-2.1.1.min.js"
        type="text/javascript"></script>
    <script type="text/javascript">
        function validateContactForm() {
          alert("Your form submitted Successfully...!!");

         
            // var valid = true;

            // $(".info").html("");
            // $(".input-field").css('border', '#e0dfdf 1px solid');
            // var userName = $("#userName").val();
            // var userEmail = $("#userEmail").val();
            // var subject = $("#subject").val();
            // var content = $("#content").val();
            
            // if (userName == "") {
            //     $("#userName-info").html("Required.");
            //     $("#userName").css('border', '#e66262 1px solid');
            //     valid = false;
            // }
            // if (userEmail == "") {
            //     $("#userEmail-info").html("Required.");
            //     $("#userEmail").css('border', '#e66262 1px solid');
            //     valid = false;
            // }
            // if (!userEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/))
            // {
            //     $("#userEmail-info").html("Invalid Email Address.");
            //     $("#userEmail").css('border', '#e66262 1px solid');
            //     valid = false;
            // }

            // if (subject == "") {
            //     $("#subject-info").html("Required.");
            //     $("#subject").css('border', '#e66262 1px solid');
            //     valid = false;
            // }
            // if (content == "") {
            //     $("#userMessage-info").html("Required.");
            //     $("#content").css('border', '#e66262 1px solid');
            //     valid = false;
            // }
            // return valid;
        }
</script>

















      
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <br>
          <br>
<div id="maps">

  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!
  1d12514.938332220847!2d79.07724445334401!3d21.163799903529448!3m2
  !1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa5b6f549445117d4!2sGovernm
  ent%20Polytechnic!5e0!3m2!1sen!2sin!4v1623306903922!5m2!1sen!2sin" 
  style="border:0;" allowfullscreen="" loading="lazy" width="420" height="500px"></iframe>
          </div>
           </div>
          </div>
        </div>

      </div>
    </div>
</div>
</div>
    <!-- end contact -->

    <!--  footer -->
    <footr>
      <div class="footer ">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
             <a href="#" class="logo_footer"> <img src="Notesdrod/images/NEW LOGO .png" alt="#"/></a>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 ">
                  <div class="address">
                    <h3>Address </h3>
                    <ul class="loca">
                      <li>
                        <a href="#"></a>Near Mangalwari Bazar,
                        <br> Sadar, Nagpur, Maharashtra 440001  </li>
                        <li>
                          <a href="#"></a>(+0712 256 4483) </li>
                          <li>
                            <a href="#"></a>HOD: armahajan@rediffmail.com </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="address">
                          <h3>Useful Link</h3>
                          <ul class="Menu_footer">
                          <li class="active"> <a href="https://www.gpnagpur.ac.in/gpnagpur_new/"> OFFICIAL WEBSITE </a></li>
                            <li><a href="https://gpnagpur.ac.in/ced/">CED PORTAL</a> </li>
                            <li><a href="https://gpnagpur.ac.in/gpn/">COLLEGE ONLINE</a> </li>
                            <li><a href="https://gpnagpur.edugrievance.com/">GRREVANCE REDRESSAL PORTAL</a> </li>
                          </ul>
                        </div>
                      </div>
                     

                      <div class="col-lg-4 col-md-6 col-sm-6 ">
                        <div class="address">
                          <h3>Newsletter</h3>
                           <form class="news">
                           <input class="newslatter" placeholder="Enter your email" type="text" name=" Enter your email">
                            <button class="submit">Subscribe</button>
                            </form>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
              <div class="copyright">
                <div class="container">
                  <p>Copyright © 2021 NotesDroid |Design by <a href="https://tejaswebcreation.business.site/">Tejas,Yogeshree,Janvhi,Shivani </a></p>
                </div>
              </div>
            </div>
          </footr>
          <!-- end footer -->
          <!-- Javascript files-->
          <script src="Notesdrod/js/jquery.min.js"></script>
          <script src="Notesdrod/js/popper.min.js"></script>
          <script src="Notesdrod/js/bootstrap.bundle.min.js"></script>
          <script src="Notesdrod/js/jquery-3.0.0.min.js"></script>
          <script src="Notesdrod/js/plugin.js"></script>
          <!-- sidebar -->
          <script src="Notesdrod/js/jquery.mCustomScrollbar.concat.min.js"></script>
          <script src="Notesdrod/js/custom.js"></script>
          <script src="https:cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>


          <script>
// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {
      lat: 40.645037,
      lng: -73.880224
    },
  });

  var image = 'Notesdrod/images/maps-and-flags.png';
  var beachMarker = new google.maps.Marker({
    position: {
      lat: 40.645037,
      lng: -73.880224
    },
    map: map,
    icon: image
  });
}
</script>
<!-- google map js -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8eaHt9Dh5H57Zh0xVTqxVdBFCvFMqFjQ&callback=initMap"></script>
<!-- end google map js -->



</body>

</html>