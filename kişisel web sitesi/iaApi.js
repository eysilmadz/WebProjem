function fonkcagır(){
    $.getJSON('http://www.omdbapi.com/?t=anne+with+an+E&apikey=fb9d3b17').then(function(response)
    { 
        var resim = response.Poster;
        console.log(response)
        var baslik = response.Title;
        var imdb = response.imdbRating;
        var yazar = response.Writer;
        var konu = response.Plot;
        var aktorler = response.Actors;
        var oduller = response.Awards;

         $('.resimm').attr('src',resim);
         document.querySelector('.moviebaslik').innerHTML+=baslik;
         document.querySelector('.movieimdb').innerHTML+=imdb;
         document.querySelector('.movieyazar').innerHTML+=yazar;
         document.querySelector('.moviekonu').innerHTML+=konu;
         document.querySelector('.movieaktorler').innerHTML+=aktorler;
         document.querySelector('.movieoduller').innerHTML+=oduller;


    });


    
}
fonkcagır();