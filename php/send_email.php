<?php
// send_email.php

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // 1. REPLACE THIS WITH YOUR ACTUAL EMAIL ADDRESS
    $to = "your-email@example.com"; 
    $subject = "New Contact Form Submission";

    // 2. Retrieve and sanitize input data from JS FormData
    $name    = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
    $email   = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
    $phone   = isset($_POST['phone']) ? trim(strip_tags($_POST['phone'])) : '';
    $message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : '';

    // 3. Validate required fields
    if (empty($name) || empty($email)) {
        echo "ERROR_EMPTY";
        exit;
    }

    // Validate email address format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "ERROR_INVALID_EMAIL";
        exit;
    }

    // 4. Construct the email message body
    $body = "You have received a new contact form submission:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    if (!empty($phone)) {
        $body .= "Phone: $phone\n";
    }
    if (!empty($message)) {
        $body .= "Message:\n$message\n";
    }

    // 5. Configure mail headers (supports UTF-8 encoding)
    $domain = $_SERVER['SERVER_NAME'] ?? 'localhost';
    $headers = "From: no-reply@" . $domain . "\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // 6. Send the email
    if (mail($to, $subject, $body, $headers)) {
        // Return success response expected by JavaScript
        echo "SUCCESS";
    } else {
        echo "ERROR_MAIL_FAILED";
    }

} else {
    // Block direct browser access to the file
    http_response_code(403);
    echo "Forbidden";
}
?>