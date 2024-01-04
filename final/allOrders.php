<?php include('header.php'); 
include('functions.php'); 

if(!isStaff()) header("Location: /memberOrders.php");
?>

<h1>收到的訂單</h1>
<h2>職員的登入信箱是:<?php echo $_SESSION['email'];?></h2>

<?php

$orderQ = mysqli_query($dbConnection, "SELECT * FROM `order`");

while ($order = mysqli_fetch_assoc($orderQ)) {

    $gemQ = mysqli_query($dbConnection, 'SELECT * FROM `gem` WHERE gem_id='.$order['gem_id']);
    $gem = mysqli_fetch_assoc($gemQ);
    $memberQ = mysqli_query($dbConnection, "SELECT * FROM `member` WHERE `member_email`='".$order['client_email']."'");
    $member = mysqli_fetch_assoc($memberQ);

    echo '<div class="order"><p>';
    echo '客戶稱呼 : '.$order['client_name'].'<br/>';
    echo '客戶電郵 : '.$order['client_email'].'<br/>';
    echo '想預訂 : '.$gem['name'].'  '.$order['quantity'].'件 <br/>';
    echo '地址 : '.$member['address'].'<br/>';
    echo '電話 : '.$member['phone'].'<br/>';
    echo '付款方式 : '.$member['payment'].'<br/>';
    echo '下單時間 : '.$order['order_time'].'<br/>';
    echo '</p></div>';
    
}
?>

