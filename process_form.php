<?php
// Establish database connection (adjust credentials as needed)
$host = 'iakash.digital:2083';
$dbname = ' https://iakash.digital:2083/cpsess3931308052/3rdparty/phpMyAdmin/index.php?route=/database/structure&db=iaka8452_form_submit;
$username =  https://iakash.digital:2083/cpsess3931308052/3rdparty/phpMyAdmin/index.php?route=/database/structure&db=iaka8452_form_submit;';


try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username,);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

// Process form data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $address = $_POST['address'];

    // Insert data into the database
    $stmt = $pdo->prepare("INSERT INTO users (full_name, email, mobile, address) VALUES (?, ?, ?, ?)");
    $stmt->execute([$full_name, $email, $mobile, $address]);

    // Redirect to a thank-you page
    header("Location: BLOGPAGE.html");
    exit;
}
?>
