<?php

include('noteheader.php');
include('database_connection.php');


// $country = '';
// $query = "SELECT DISTINCT gender FROM duptest ORDER BY gender ASC";
// $statement = $connect->prepare($query);
// $statement->execute();
// $result = $statement->fetchAll();
// foreach($result as $row)
// {
//  $gender .= '<option value="'.$row['gender'].'">'.$row['gender'].'</option>';
// }

?>

<html>
 <head>
  <title>Custom Search in jQuery Datatables using PHP Ajax</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
  <script src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
  <script src="https://cdn.datatables.net/1.10.12/js/dataTables.bootstrap.min.js"></script>  
  <link rel="stylesheet" href="https://cdn.datatables.net/1.10.12/css/dataTables.bootstrap.min.css" />
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  
 </head>
 <body>
  <div class="container box">
   <h3 align="center">Student Search</h3>
   <br />
   <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
     <div class="form-group">
      <select name="filter_gender" id="filter_gender" class="form-control" required>
       <option value="">Select Academic Year</option>
       <option value="1st Year">1st Year</option>
       <option value="2nd Year">2nd Year</option>
       <option value="3rd Year">3rd Year</option>
      </select>
     </div>
     
     </div>
     <div class="form-group" align="center">
      <button type="button" name="filter" id="filter" class="btn btn-info">Filter</button>
     </div>
    </div>
    <div class="col-md-4"></div>
   </div>
   <div class="table-responsive">
    <table id="customer_data" class="table table-bordered table-striped">
     <thead>
      <tr>
       <th width="10%">Student Id</th>
       <th width="10%">First Name</th>
       <th width="25%">Last Name</th>
       <th width="15%">Email Id</th>
       <th width="15%">Password</th>
       <th width="15%">Branch Name</th>
       <th width="15%">Academic Year</th>
       <th width="15%">Branch Name </th>
       <th width="10%">Reg.Date </th>
      </tr>
     </thead>
    </table>
    <br />
    <br />
    <br />
   </div>
  </div>
 </body>
</html>

<script type="text/javascript" language="javascript" >
 $(document).ready(function(){
  
  fill_datatable();
  
  function fill_datatable(filter_gender = '')
  {
   var dataTable = $('#customer_data').DataTable({
    "processing" : true,
    "serverSide" : true,
    "order" : [],
    "searching" : false,
    "ajax" : {
     url:"fetch.php",
     type:"POST",
     data:{
      filter_gender:filter_gender
     }
    }
   });
  }
  
  $('#filter').click(function(){
   var filter_gender = $('#filter_gender').val();
//    var filter_country = $('#filter_country').val();
   if(filter_gender != '')
   {
    $('#customer_data').DataTable().destroy();
    fill_datatable(filter_gender);
   }
   else
   {
    alert('Select the Academic Year');
    $('#customer_data').DataTable().destroy();
    fill_datatable();
   }
  });
  
  
 });
 
</script>
