<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Display PDF</title>
   
    </style>
  </head>
  <body>

   <h1> Display Notes </h1>

  
    <div class="div1">
    
      <?php
      include 'dbconnection.php';

      $sql="SELECT loginsystemm from pdf_file";
      $query=mysqli_query($conn,$sql);
      while ($info=mysqli_fetch_array($query)) {
        ?>
   /<?php echo $info['pdf'] ; ?>
    <?php
      }

      ?>

    </div>

  </body>
</html>
