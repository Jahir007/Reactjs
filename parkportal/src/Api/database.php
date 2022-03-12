<?php

class Database {

    // specify your own database credentials
    private $host = "192.168.99.3:3307";
    private $db_name = "dbparkingmgmt";
    private $username = "sc_14";
    private $password = '123456';
    public $conn;

    // get the database connection
    // public function getConnection() {

    //     $this->conn = null;

    //     try {
    //         $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
    //         $this->conn->exec("set names utf8");
    //     } catch (PDOException $exception) {
    //         echo "Connection error: " . $exception->getMessage();
    //     }

    //     return $this->conn;
    // }

    public function dbconnect() {
        $con = mysqli_connect($this->host, $this->username, $this->password, $this->db_name);

// Check connection
        if (mysqli_connect_errno()) {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
            exit();
        }
        return $con;
    }

}

?>