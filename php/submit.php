<?php
if (!empty($_POST['name']) AND !empty($_POST['email']) AND !empty($_POST['message'])) {
    
    $theme = 'subject';
    
    $letter = 'message:\r\n';
    $letter .= 'name:'.$_POST['name'].'\r\n';
    $letter .= 'email:'.$_POST['email'].'\r\n';
    $letter .= 'email:'.$_POST['message'].'\r\n';
    if (mail ('2oksanaderevianko@gmail.com', $theme, $letter)) {

   header('Location:/');
} else {
    header('Location:/');
}
}
