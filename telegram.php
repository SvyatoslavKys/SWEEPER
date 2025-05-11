<?php
include 'cfg.php';

$data = json_decode(file_get_contents('php://input'), true);
$message = $data['message'] ?? 'Brak treści';

$url = "https://api.telegram.org/bot$telegram_token/sendMessage";
$params = [
    'chat_id' => $chat_id,
    'text' => $message
];


$options = [
    'http' => [
        'method'  => 'POST',
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'content' => http_build_query($params),
    ]
];

$context = stream_context_create($options);
file_get_contents($url, false, $context);

echo json_encode(['status' => 'ok']);
