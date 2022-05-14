function iletisimcntrl()
{
    var ad=document.forms["iletisimm"]["ad"].value;
    var soyad=document.forms["iletisimm"]["soyad"].value;
    var email=document.forms["iletisimm"]["email"].value;
    var konu=document.forms["iletisimm"]["konu"].value;
    var bolum=document.forms["iletisimm"]["bolum"].value;
    var yorum=document.forms["iletisimm"]["yorum"].value;
    if(ad==null||ad==""){
        alert("Bu Alan Zorunlu!")
        return false;
    }
    if(soyad==null||soyad==""){
        alert("Bu Alan Zorunlu!")
        return false;
    }
    if(email==null||email==""){
        alert("Bu Alan Zorunlu!")
        return false;
    }
    if(konu==null||konu==""){
        alert("Bu Alan Zorunlu!")
        return false;
    }
    if(bolum==null||bolum==""){
        alert("Bu Alan Zorunlu!")
        return false;
    }
    if(yorum==null||yorum==""){
        alert("Bu Alan Zorunlu!")
        return false;
    }
}