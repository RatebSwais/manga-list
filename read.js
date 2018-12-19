'use strict' 

$(function(){
    
    const chapterWrapper = document.getElementById("chapterwrap");
    const chapterDiv = document.createElement("div");
    chapterWrapper.appendChild(chapterDiv);
    var chapterImage = document.createElement("img");
    chapterImage.setAttribute('id', 'cimage');
    chapterImage.setAttribute('class', 'img-responsive');
    chapterDiv.appendChild(chapterImage);
    
    var chapterEndPoint = 'https://www.mangaeden.com/api/chapter/';
    var chapterID = getQueryResult();
    renderChapterPages(chapterID);


    function renderChapterPages(id) {
        $.get(chapterEndPoint + id).then(function(data){
            var reversecImages = data.images;
            var cImages = reversecImages.slice(0).reverse();
            var currentImage = 0;
            console.log(cImages);
            
            document.getElementById('cimage').src = 'https://cdn.mangaeden.com/mangasimg/' + cImages[currentImage][1];
            chapterImage.onclick = function() {
                currentImage += 1; 
                if(currentImage >= cImages.length) {
                    currentImage = 0;
                }
                
                document.getElementById('cimage').src = 'https://cdn.mangaeden.com/mangasimg/' + cImages[currentImage][1];
            }      
            
            
            
        });
    }
    
    function getQueryResult() {
        var query = window.location.search.substring(1);
        return query.split("=")[1];
    }
    
});