<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) {
  http_response_code(400);
  echo json_encode(['error' => 'Invalid request']);
  exit;
}

$fullName = trim($input['fullName'] ?? '');
$email = trim($input['email'] ?? '');
$projectDetails = trim($input['projectDetails'] ?? '');
$honeypot = trim($input['honeypot'] ?? '');

if (!empty($honeypot)) {
  http_response_code(400);
  echo json_encode(['error' => 'Bad request']);
  exit;
}

if ($fullName === '' || $email === '' || $projectDetails === '') {
  http_response_code(400);
  echo json_encode(['error' => 'All fields are required.']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['error' => 'Invalid email address.']);
  exit;
}

$to = 'infineth@infineth.com';
$subject = 'InfinEth Contact Form: ' . $fullName;
$message = "Name: $fullName\nEmail: $email\n\nMessage:\n$projectDetails\n";
$headers = "From: $fullName <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

$success = mail($to, $subject, $message, $headers);

if ($success) {
  echo json_encode(['message' => 'Your message was sent successfully.']);
  exit;
}

http_response_code(500);
echo json_encode(['error' => 'Unable to send message. Please try again later.']);
exit;
