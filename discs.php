<?php

//getting json
$data_url = __DIR__ . '/data.json';

//data's content
$json_data = file_get_contents($data_url);

//decoding from json to php
$discs = json_decode($json_data,true);

$genre = $_POST['chosen_genre'] ?? '';

if($genre){
    $discs = array_filter($discs, function ($disc) {
        return $disc['genre'] === $_POST['chosen_genre'];
    });
}

//encoding (from php to json)
header ('Content-Type: application/json');
echo json_encode($discs);

?>