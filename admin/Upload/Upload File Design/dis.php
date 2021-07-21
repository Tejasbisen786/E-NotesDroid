<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Display PDF</title>
   
    </style>
  </head>
  <body>
  

    <div class="row">
<div class="col-lg-12">
        <div class="table-responsive">

<form action="" method="post">
            <table class="table table-bordered table-striped table-hover">


            <thead>
                    <tr>
                        <th>File Name</th>                  
                        <th>View</th>
                       
                        
                    </tr>
                </thead>
                <tbody>

                 <?php
                 include 'db.php';

              

                 $sql="SELECT pdf from pdf_file";
$run_query = mysqli_query($conn, $sql) or die(mysqli_error($conn));
if (mysqli_num_rows($run_query) > 0) {
while ($row = mysqli_fetch_array($run_query)) {
  
      $id = ['id'];
      $pdf = $row['pdf'];

      foreach($id as $ids){
     
  }
  
    echo "<tr>";
    // echo "<td>$id</td>";
    echo "<td> ($ids)</td> ";                                                                                                                      
    echo "<td>$pdf</td>";
  
    echo "<td><a href='pdf/$pdf' target='_blank' style='color:green'>
    View </a></td>";
    echo "<td><a onClick=\"javascript: return confirm('Are you sure you
     want to delete this post?')\" href='?del=$ids'><i class='fa fa-times' 
     style='color: red;'></i>delete</a></td>";
  

    echo "</tr>";

}
}
else {
    echo "<script>alert('Not notes yet! Start uploading now');
    window.location.href= 'index.php';</script>";
}

if (isset($_POST['del'])) {
  $note_del = mysqli_real_escape_string($conn, $_POST['del']);
  $file_uploader =  $file = $row['pdf'];
  $del_query = "DELETE FROM pdf_file WHERE id='$note_del' AND pdf = '$file_uploader' ";
  $run_del_query = mysqli_query($conn, $del_query) or die (mysqli_error($conn));
  if (mysqli_affected_rows($conn) > 0) {
      echo "<script>alert('note deleted successfully');
      window.location.href='display.php';</script>";
  }
  else {
   echo "<script>alert('error occured.try again!');</script>";   
  }
  }
?>    



                </tbody>
            </table>
</form>
</div>
</div>
</div>




























  </body>
</html>
