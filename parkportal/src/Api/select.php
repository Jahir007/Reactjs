<?php

// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

// include database and object files
require_once 'database.php';

// get database connection
$database = new Database();
$db = $database->dbconnect();

$query = mysqli_query($db, "select * from tbl_master");
$rs = mysqli_fetch_array($query);

if (is_array($rs) && sizeof($rs) >= 0) {
    echo json_encode($rs);
} else {
    echo json_encode(array("message" => "Product does not exist."));
}
?>