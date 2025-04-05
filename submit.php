<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection
    $conn = new mysqli("localhost", "root", "", "contact_form_db");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST['subject']; // Ensure this is set
    $message = $_POST["message"];

    // Insert into database
    $sql = "INSERT INTO contacts (name, email, subject, message) VALUES ('$name', '$email', '$subject', '$message')";
    if ($conn->query($sql) === TRUE) {
        $successMessage = "Message Sent Successfully!";
    } else {
        $successMessage = "Error: " . $conn->error;
    }

    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message Sent</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="success-container">
        <h1><?php echo $successMessage; ?></h1>
        <a href="index.html">Go Back</a>
    </div>
</body>
</html>