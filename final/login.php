<?php include('header.php'); ?>

<h1>員工登入</h1>

<form action="functions.php?op=checkLogin_staff" method="post">

  <label for="email">信箱:</label>
  <input type="email" id="email" name="email"  require><br>
  
  <label for="password">密碼:</label>
  <input type="password" id="password" name="password" value="">
  
  <br>
  <input class="buyBtn" input type="submit" value="登入">
  
</form> 


