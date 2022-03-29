<?php

require_once "config.php";

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
 header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

$_POST =file_get_contents("php://input");
$_POST=json_decode($_POST,true);

    // if the form's update button is clicked, we need to procss the form
    	if (is_array($_POST) && sizeof($_POST) > 0) {
		$categoryid = $_POST['categoryid'];
		// $id = $_POST['id'];
		$lcnumber = $_POST['lcnumber'];
        $description = $_POST['description'];
        $photo = $_POST['photo'];
        $ownerid = $_POST['ownerid'];
        $createdt = $_POST['createdt'];

		// write the update query
		$sql = "UPDATE `tbl_vehicle` SET `category_id`='$categoryid',`lc_number`='$lcnumber',`description`='$description', `photo`='$photo', `owner_id`='$ownerid',  created_date_time = $createdt WHERE `category_id`='$categoryid'";

		// execute the query
		$result = $conn->query($sql);

		if ($result == TRUE) {
			echo "Record updated successfully.";
		}else{
			echo "Error:" . $sql . "<br>" . $conn->error;
		}
	}
    

    // if the 'id' variable is set in the URL, we know that we need to edit a record
if (isset($_GET['ownerid'])) {
	$ownerid= $_GET['ownerid'];

	// write SQL to get user data
	$sql = "SELECT * FROM `tbl_vehicle` WHERE `owner_id`='$ownerid'";

	//Execute the sql
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		
		while ($row = $result->fetch_assoc()) {
            $categoryid = $row['categoryid'];
            // $id = $_POST['id'];
            $lcnumber = $row['lcnumber'];
            $description = $row['description'];
            $photo = $row['photo'];
            $ownerid = $row['ownerid'];
            $createdt = $row['createdt'];
			// $id = $row['id'];
		}

	} else{
		// If the 'id' value is not valid, redirect the user back to view.php page
		header('Location: view.php');
	}

}
?>