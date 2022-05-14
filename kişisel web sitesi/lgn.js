function formcntrl(){
    var yourMail=document.forms["formm"]["yourMail"].value;
    var sifre=document.forms["formm"]["sifre"].value;
    if(yourMail==null||yourMail=="")
    {
        alert("Bu Alan Zorunlu!");
        return false;
    }
    if(sifre==null||sifre=="")
    {
        alert("Bu Alan Zorunlu!");
        return false;
    }
}