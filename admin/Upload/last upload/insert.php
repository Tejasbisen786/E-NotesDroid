
  <?php
      include 'header.php';
      ?>


<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Insert PDF</title>
    <style media="screen">
      /* div{
        /* border: 2px solid black;
        width: 500px;
        /* margin-left: 370px; */
        /* margin-top: 50px; */ */
        /* padding: 30px; */
      } */
      form{
        margin-left: 70px;
      }

      /* *{

        background-color: #FAACA8;
background-image: linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%);


      } */
      label{
        font-size: 25px;
        font-weight: bold;
      }
      #pdf{
        argin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
        /* font-size: 20px;
        font-weight: bold;
        margin-top: 20px;
        margin-left: 120px;
        text-align: center;
        padding: 10px; */
      }
      /* #upload{
        font-size: 20px;
        font-weight: bold;
        margin-right: 100px;
        color: red;
      } */

      #pdf{background-image: linear-gradient(to right, #E55D87 0%, #5FC3E4  51%, #E55D87  100%)}
      #pdf:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         
        #upload{background-image: linear-gradient(to right, #E55D87 0%, #5FC3E4  51%, #E55D87  100%)}


         #upload{
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }

          #upoad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         
        
      }
      .upload{
        display: block;
        border: 2px red;
        text-align: center;
        max-width: 500px;
       height: 300px;
      color: red;
      background-color: lightblue;
      
      border: groove;
      }
    </style>
  </head>
  <body>
    <br>
    <br>
    <div class="upload">
      <form class="" action="insert.php" method="post" enctype="multipart/form-data">
        
        <input id="pdf" type="file" name="pdf" value="" required>
        <br>
        <br>
        <br>
        <input id="upload" type="submit" name="submit" value="Upload">


       

        <?php
        include 'db.php';

        if (isset($_POST['submit'])) {
          $pdf=$_FILES['pdf']['name'];
          $pdf_type=$_FILES['pdf']['type'];
          $pdf_size=$_FILES['pdf']['size'];
          $pdf_tem_loc=$_FILES['pdf']['tmp_name'];
          $pdf_store="pdf/".$pdf;

          move_uploaded_file($pdf_tem_loc,$pdf_store);

          $sql="INSERT INTO pdf_file(pdf) values('$pdf')";
          $query=mysqli_query($conn,$sql);
            echo 'File upload Sucessfully';


        }



         ?>
         

      </form>
      </div>
      


       
        
       
   
  </body>
</html>
