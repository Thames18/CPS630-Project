<?php

$servername = "localhost";
$username = "bestdonationap";
$password = "cps630-2019";
$database = "database";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

echo "Connected successfully";
?>