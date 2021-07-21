<?php
include 'noteheader.php';
?>


<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		@import url(https://fonts.googleapis.com/css?family=Open+Sans:700,300);

		.frame {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 400px;
			height: 400px;
			margin-top: -200px;
			margin-left: -200px;
			border-radius: 2px;
			box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
			overflow: hidden;
			/* background: linear-gradient(to top right, darkmagenta 0%, hotpink 100%); */
			background: rgb(0, 36, 36);
			background: linear-gradient(90deg, rgba(0, 36, 36, 1) 0%, rgba(85, 187, 201, 1) 57%, rgba(85, 208, 226, 1) 99%);
			color: #333;
			font-family: "Open Sans", Helvetica, sans-serif;
		}

		.center {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 300px;
			height: 260px;
			border-radius: 3px;
			box-shadow: 8px 10px 15px 0 rgba(0, 0, 0, 0.2);
			background: #fff;
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			flex-direction: column;
		}

		.title {
			width: 100%;
			height: 50px;
			border-bottom: 1px solid #999;
			text-align: center;
		}

		h1 {
			font-size: 16px;
			font-weight: 300;
			color: #666;
		}

		.dropzone {
			width: 100px;
			height: 80px;
			border: 1px dashed #999;
			border-radius: 3px;
			text-align: center;
		}

		.upload-icon {
			margin: 25px 2px 2px 2px;
		}

		.upload-input {
			position: relative;
			top: -62px;
			left: 0;
			width: 100%;
			height: 100%;
			opacity: 0;
		}

		.btn {
			display: block;
			width: 140px;
			height: 40px;
			background: crimson;
			color: #fff;
			border-radius: 3px;
			border: 0;
			box-shadow: 0 3px 0 0 crimson;
			;
			transition: all 0.3s ease-in-out;
			font-size: 14px;
		}

		.btn:hover {
			background: rgb(0, 36, 36);
			background: linear-gradient(90deg, rgba(0, 36, 36, 1) 0%, rgba(85, 187, 201, 1) 57%, rgba(85, 208, 226, 1) 99%);
			box-shadow: 0 3px 0 0 #55d0e2;
			;
		}

		body {

			background-color: #f2f2f2;
		}

		
	</style>
</head>

<body>
	<div class="frame">
		<div class="center">
			<div class="title">
				<h1>Drop file to upload</h1>
			</div>

			<div class="dropzone">
				<img src="http://100dayscss.com/codepen/upload.svg" class="upload-icon" />

         <form class="" action="index.php"  method="post" enctype="multipart/form-data">


				<input id="pdf" type="file" name="pdf" value="" required class="upload-input" />
			
				</div>

				<input id="upload"  class="btn" type="submit" name="submit" value="Upload">

			<!-- <button type="button" class="btn" name="uploadbutton">Upload file</button> -->

			
			
		</div>


		<!-- <form class="" action="index.php"  method="post" enctype="multipart/form-data">
        
        <input id="pdf" type="file" name="pdf" value="" required>
        <br>
        <br>
        <br>
        <input id="upload" type="submit" name="submit" value="Upload"> -->



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

		  echo '<script>alert("File Upload Sucessfully")</script>';
		

        }



         ?>
         

      </form>















	</div>





	

</body>

</html>