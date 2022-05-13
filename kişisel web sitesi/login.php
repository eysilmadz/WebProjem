<?php


session_start();
ob_start();


if(($_POST["yourMail"]=="b211210081@sakarya.edu.tr") && ($_POST["sifre"]=="211210081"))
{

$_SESSION["login"] = "true";
$_SESSION["yourMail"] = "b211210081@sakarya.edu.tr";
$_SESSION["sifre"] = "211210081";

echo "Hosgeldiniz b211210081. Başarıyla giriş yaptınız. Hakkında sayfasına yonlendiriliyorsunuz. Lütfen bekleyin..";								
header("Refresh:2; url=Hakkımda.html");

}
elseif(($_POST["yourMail"]=="") && ($_POST["sifre"]==""))
{
    echo "Kullanici adi veya sifre bos birakilmamalidir";
    body("Refresh: 2; url=login.html");
}

else
{
	echo "Kullanici adi veya sifreniz yanlis.";
	header("Refresh: 2; url=login.html");
}


ob_end_flush();


?>