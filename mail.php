<?php
/**
 * CONTACT FORM PROCESSOR - MGG SYSTEMS
 * Template Name: MGG Systems (Solar Panel Cleaning)
 * Author: MGG Systems
 * * Instructions:
 * 1. Upload to your server (requires PHP Mail enabled).
 * 2. Send POST requests from your website contact form to this script.
 */

// Only process POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 1. SETTINGS: RECIPIENT EMAIL
    $to = "mggindustries.company@gmail.com"; 

    // 2. SETTINGS: EMAIL SUBJECT
    $subject = "New Inspection Request - MGG Systems";

    // 3. INPUT DATA: Sanitize and collect form fields
    // strip_tags removes HTML to prevent XSS attacks
    $name    = strip_tags(trim($_POST["name"]));
    $email   = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone   = strip_tags(trim($_POST["phone"]));
    $message = strip_tags(trim($_POST["message"]));

    // 4. VALIDATION: Check if mandatory fields are valid
    if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code
        http_response_code(400);
        echo "Please fill in all fields correctly.";
        exit;
    }

    // 5. CONTENT: Build the email body
    $email_content = "You have a new inspection request from MGG Systems website:\n\n";
    $email_content .= "Client Name: $name\n";
    $email_content .= "Client Email: $email\n";
    $email_content .= "Client Phone: " . ($phone ? $phone : "Not provided") . "\n\n";
    $email_content .= "Message Details:\n$message\n\n";
    $email_content .= "--- End of Message ---";

    // 6. HEADERS: Crucial for avoiding Spam filters
    // We send FROM the server's domain to satisfy DMARC/SPF checks
    $server_name = $_SERVER['SERVER_NAME'];
    $from_email = "noreply@" . $server_name;

    $headers = "From: MGG Systems Contact Form <$from_email>\r\n";
    $headers .= "Reply-To: $email\r\n"; // Clicking 'Reply' will email the client, not the server
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // 7. DELIVERY: Try to send the email
    // The '-f' parameter tells the server to use a specific sender envelope
    if (mail($to, $subject, $email_content, $headers, "-f $from_email")) {
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Server error.";
    }

} else {
    // Not a POST request
    http_response_code(403);
    echo "Access denied. Please submit the form properly.";
}
?>