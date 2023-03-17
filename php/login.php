<?php

$host = "localhost";
$dbname = "signup_db";
$username = "root";
$password = ""; 

$mysqli = new mysqli(hostname : $host,
                    username : $username,
                    password : $password,
                    database : $dbname);
if ($mysqli->connect_errno)
{
    die("Connection error : " . $mysqli->connect_error);

} 
else    
{
    $sql=sprintf("SELECT * FROM user_signup WHERE email_id='%s'",
        $mysqli->real_escape_string($_POST["email_id"])); 
    $result=$mysqli->query($sql);
    $user=$result->fetch_assoc();
    if($user){
        if($_POST['pass']===$user['pass']){
            echo '{"status" : "success"}';
        }
        else{
            echo '{"status" : "failure"}';
        }
    }
    else{
        echo '{"status" : "failure"}';
    }
    
}
?>