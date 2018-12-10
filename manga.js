    'use strict'
    $(function(){

    const app = document.getElementById("root");
    const container = document.createElement("div");
    container.setAttribute('class', 'container'); 
    app.appendChild(container);   
    var mangalist = {};    
    var mangaListEndPoint = 'https://www.mangaeden.com/api/list/0/';    
    var badimage = 'https://cdn1.iconfinder.com/data/icons/file-type-18/512/file__type__document__format__computer__jpg__image_-512.png';    
    var limitedmangalist;
    
    //Begin
    fetchManga().then(function (data, status){
        if(status == 'success'){ 

           remapManga(data);
           limitmangalist();
           renderManga(); 
            
           $("body").on("click", "img", function(event){ 
              var clickedCard = $(this);
              var clickedCardId = clickedCard.data('id')
               window.open("manga-info.html?clickedid=" + clickedCardId);
               
           });
            
        }

        
        
        else {
            handleError();
        }

    });   

    function limitmangalist() {
      limitedmangalist = Object.keys(mangalist).slice(0, 21).reduce(function(newObj, current){
          newObj[current] = mangalist[current];
          return newObj;
      }, {});
      };                                                                                                                   
    function renderManga(){
    for (var index in limitedmangalist){
        
        var currentManga = limitedmangalist[index];
        const card = document.createElement("div");
        card.setAttribute('class', 'card');
        const coverImage = $('<img>', {'src': 'https://cdn.mangaeden.com/mangasimg/' + currentManga.image});
        coverImage.on("error", function() {
        $(this).attr('src', badimage);
        });        
        coverImage.data('id', currentManga.id);
        const h1 = document.createElement("h1");
        h1.textContent = currentManga.title;
        container.appendChild(card);
        coverImage.appendTo(card);
        card.appendChild(h1);
    };
    }
    
    function fetchManga() {
        return $.get(mangaListEndPoint);
    }
        
    function remapManga(data){
        for (var index = 0; index < data.manga.length; index++){
            var currentManga = data.manga[index];
            mangalist[currentManga.i] = {
                'title': currentManga.t, 
                'id': currentManga.i, 
                'alias': currentManga.a,
                'status': currentManga.s,
                'category': currentManga.c,
                'lastChapterDate': currentManga.ld,
                'hits': currentManga.h,
                'image': currentManga.im,
                
            };
            
        };
     }
        
    function handleError() {
        console.error(error);
    } 

    });

