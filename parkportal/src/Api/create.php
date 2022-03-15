<?php
echo "hello";
die;
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");



$servername = "192.168.99.3:3307";
$database = "dbparkingmgmt";
$username = "sc_14";
$password = "123456";
 
$con = mysqli_connect($servername, $username, $password, $database);
 
$method = $_SERVER['REQUEST_METHOD'];
 
 
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}
 
 
switch ($method) {
    
    case 'POST':
        $firstname = $_POST["firstname"];
        $lastname = $_POST["lastname"];
        $contact_no = $_POST["contactno"];
        $email = $_POST["email"];
 
      $sql = "insert into tbl_owner (firstname, lastname, contactno, email) values ('$firstname', '$lastname', '$contact_no', '$email')"; 
      break;
}
 
// run SQL statement
// $result = mysqli_query($con,$sql);
 
// // die if SQL statement failed
// if (!$result) {
//   http_response_code(404);
//   die(mysqli_error($con));
// }
 
 if ($method == 'POST') {
    echo json_encode($result);
  } else {
    echo mysqli_affected_rows($con);
  }
 
$con->close();