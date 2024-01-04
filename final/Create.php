<?php include 'header.php'; ?>

<h1>會員註冊</h1>

<form action="/functions.php?op=createMember" method="post">


  <label >姓名:</label>
  <input type="text" name="member_name"><br/>

  <label >信箱: </label>
  <input type="email" name="member_email" require><br/>

  <label >密碼: </label>
  <input type="password"  name="member_password"><br/>

  <label >電話: </label>
  <input type="phone"  name="phone"><br/>

  <label >地址: </label>
  <input type="text"  name="address"><br/>
  <br>
  <label >付款方式: </label>
  <input type="radio" name="payment"  value="信用卡">信用卡
  <input type="radio" name="payment"  value="貨到付款">貨到付款
  
  <br>
  <input class="buyBtn" type="submit" value="確定">

</form> 
