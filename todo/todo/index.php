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

<body>
<img src="crayon.png" width="7%" height="7%"/>
    <form action="data.php" method="get">
        <input type="text"  name="todo-data"  placeholder="Edit"/>
        <input type="hidden" name="action" value="add"/>
    </form>

    <?php
    $req = mysqli_query($conn, 'SELECT * FROM todolist;');

    while ($row = mysqli_fetch_object($req)) {
        echo '<a class="todo" href="data.php?action=delete&id=' . $row->id . '">' . $row->todo . '</a>   ';
        echo '<a class="update" href="update.php?id=' . $row->id . '">update</a><br>';
    }

    ?>

</body>

</html>