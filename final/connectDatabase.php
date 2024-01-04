<?php

   echo "這是 AppServ 主網站 <br>";

   $db_link= mysqli_connect("localhost", "root", "12345678", "course_db1")

              or die("MySQL 伺服器連結失敗 <br>");

       echo "course_db1 資料庫開啟成功 <br>";

       mysqli_close($db_link);

?>