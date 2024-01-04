<?php include('header.php'); 
include('functions.php'); 
?>

<h1>收到的訂單</h1>
<h2>你的登入信箱是:<?php echo $_SESSION['email'];?></h2>

<?php

$email=$_SESSION['email'];

$orderQ = mysqli_query($dbConnection, "SELECT * FROM `order`WHERE client_email='".$_SESSION['email']."'" );

while ($order = mysqli_fetch_assoc($orderQ)) {

    $gemQ = mysqli_query($dbConnection, 'SELECT * FROM `gem` WHERE gem_id='.$order['gem_id']);
    $gem = mysqli_fetch_assoc($gemQ);

    echo '<div class="order"><p>';
    echo '客戶稱呼 : '.$order['client_name'].'<br/>';
    echo '客戶電郵 : '.$order['client_email'].'<br/>';
    echo '想預訂 : '.$gem['name'].' '.$order['quantity'].'個 <br/>';
    echo '下單時間 : '.$order['order_time'].'<br/>';
    echo '</p></div>';

}
?>

