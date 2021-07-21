<?php
include 'db.php';
include 'noteheader.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="Dashboard">
    <meta name="keyword" content="Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">

    <title>Admin | Manage Users</title>
    <link href="assets/css/bootstrap.css" rel="stylesheet">
    <link href="assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
    <link href="assets/css/style.css" rel="stylesheet">
    <link href="assets/css/style-responsive.css" rel="stylesheet">
  </head>
  <body>
  <br>
  <br>
  <br>
  <br>
  

	                  
                  <div class="col-md-12">
                      <div class="content-panel">
                          <table class="table table-striped table-advance table-hover">
	                  	  	  <h4><i class="fa fa-angle-right"></i> All User Details </h4>
	                  	  	  <hr>
                              <thead>
                              <tr>
                                  
                                  <th class="hidden-phone">Contact Id</th>
                                  <th> User-Name</th>
                                  <th> User-Email</th>
                                  <th>Subject</th>
                                  <th>Content</th>
                                  
                              </tr>
                              </thead>
                              <tbody>
                              <?php $ret=mysqli_query($conn,"select * from tblcontact");
							  $cnt=1;
							  while($row=mysqli_fetch_array($ret))
							  {?>
                              <tr>
                           
                                  <td><?php echo $row['contact_id'];?></td>
                                  <td><?php echo $row['user_name'];?></td>
                                  <td><?php echo $row['user_email'];?></td>
                                  <td><?php echo $row['subject'];?></td>  
                                  <td><?php echo $row['content'];?></td>
                                 
                                  
                                     
                              </tr>
                              <?php $cnt=$cnt+1; }?>
                             
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
		</section>
      </section
  ></section>
   
  </body>
</html>
<?php  ?>