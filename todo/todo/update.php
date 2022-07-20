<?php
include 'db.connexion.php';
?>

<!DOCTYPE html>
<html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todolist</title>

    <link rel="stylesheet" href="./css/styles.css" type="text/css">

</head>

<?php
// print_r($_GET);
$id = $_GET['id'];
?>

<body>

    <?php
    $req = mysqli_query($conn, 'SELECT * FROM todolist;');

    echo '<form action="data.php" method="get">';
    echo '<input type="text" name="update">';
    echo '<input type="hidden" name="action" value="update">';
    echo '<input type="hidden" name="id" value="' . $id . '">';
    echo '</form>';

    ?>

</body>

</html>