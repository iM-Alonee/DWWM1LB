<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todolist</title>
    <link rel="stylesheet" href="./css/styles.css" type="text/css">
</head>
<body>
    <div class="titre">Todolist</div>   
</body>
</html>
<?php

$conn = mysqli_connect('localhost', 'root', '', 'exercice');

if (!$conn) {
    die('Erreur de connexion');
}



