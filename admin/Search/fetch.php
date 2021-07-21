<?php

include('database_connection.php');

$column = array('id', 'fname', 'lname',

 'email', 'password', 'contactno','year','gender','posting_date');

$query = "
SELECT * FROM users
";

if(isset($_POST['filter_gender']) && $_POST['filter_gender'] != '')
{
 $query .= '
 WHERE gender = "'.$_POST['filter_gender'].'" 
 
 
 ';
}

if(isset($_POST['order']))
{
 $query .= 'ORDER BY '.$column[$_POST['order']['0']['column']].' ';
}
else
{
 $query .= 'ORDER BY id DESC ';
}

$query1 = '';

if($_POST["length"] != -1)
{
 $query1 = 'LIMIT ' . $_POST['start'] . ', ' . $_POST['length'];
}

$statement = $connect->prepare($query);

$statement->execute();

$number_filter_row = $statement->rowCount();

$statement = $connect->prepare($query . $query1);

$statement->execute();

$result = $statement->fetchAll();



$data = array();

foreach($result as $row)
{
 $sub_array = array();
 $sub_array[] = $row['id'];
 $sub_array[] = $row['fname'];
 $sub_array[] = $row['lname'];
 $sub_array[] = $row['email'];
 $sub_array[] = $row['password'];
 $sub_array[] = $row['contactno'];
 $sub_array[] = $row['year'];
 $sub_array[] = $row['gender'];
 $sub_array[] = $row['posting_date'];
 $data[] = $sub_array;
}

function count_all_data($connect)
{
 $query = "SELECT * FROM users";
 $statement = $connect->prepare($query);
 $statement->execute();
 return $statement->rowCount();
}

$output = array(
 "draw"       =>  intval($_POST["draw"]),
 "recordsTotal"   =>  count_all_data($connect),
 "recordsFiltered"  =>  $number_filter_row,
 "data"       =>  $data
);

echo json_encode($output);
