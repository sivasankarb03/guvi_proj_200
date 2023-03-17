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
        echo '{"status" : "failure"}';
    }
    else{
    $sql = "INSERT INTO user_signup (name,email_id,pass,pno,dob) VALUES(?,?,?,?,?)";
    $stmt = $mysqli->stmt_init();
    if(! $stmt->prepare($sql)){
        die("SQL error:".$mysqli->error);
    }
    $stmt->bind_param("sssss",$_POST["name"],$_POST['email_id'],$_POST['pass'],$_POST['pno'],$_POST['dob']);
    $stmt->execute(); 
    echo '{"status" : "success"}';
    }
     
}
?>