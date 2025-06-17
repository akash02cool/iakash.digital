<?php
$servername = "127.0.0.1:3306";
$username = "u123853485_MYPORTFOLIO";
$password = "akash02@1997";
$dbname = "u123853485_form";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$full_name = "John Doe";
$full_email_id = "john.doe@example.com";
$full_mobile_no = "1234567890";
$address = "123 Main St, Anytown, USA";

$sql = "INSERT INTO form (full_name, full_email_id, full_mobile_no, address) VALUES ('$full_name', '$full_email_id', '$full_mobile_no', '$address')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
