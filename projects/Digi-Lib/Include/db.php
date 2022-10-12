<?php
 $servername = "www.remotemysql.com";
 $username = "s44Qs7zRwI";
 $password = "iH8CgHGUJu";
 
 
 try {
   $ConnectingDB = new PDO("mysql:host=$servername;dbname=s44Qs7zRwI", $username, $password);
   // set the PDO error mode to exception
   $ConnectingDB->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   //echo "Connected successfully";
 } catch(PDOException $e) {
   echo "Connection failed: " . $e->getMessage();
 }

// EOF
