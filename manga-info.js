'use strict'

$(function(){
    
   const leftContainer = document.getElementById('left');
   //const rightContainer = document.getElementById('right');
   const chapterTable = document.createElement("table");
   chapterTable.setAttribute('id', 'table')
   const descriptionBox = document.getElementById("description");
   const descriptionText = document.createElement("p");
   const titleText = document.createElement("h1");
   const mangaImage = document.createElement("img");
   const mangaCard = document.createElement('div');
       
   
   chapterTable.setAttribute('class', 'chapterTable');  
   descriptionBox.appendChild(titleText);
   descriptionBox.appendChild(mangaImage);  

   descriptionBox.appendChild(descriptionText);
    descriptionBox.appendChild(chapterTable);
    
    var mangaChapterEndPoint = 'https://www.mangaeden.com/api/manga/';
    var mangaid = getQueryVariable("clickedid");
    console.log (mangaid);
    fetchChapters(mangaid).then(function(data){ 
                  console.log(data);  
                  var chapters = data.chapters;
                  var description = data.description;
                  var mangaTitle = data.title;
                  var image = data.image;
                  description.replace(/\n/g, " ");
                  renderChapters(chapters);
                  renderDescriptionTitle(mangaTitle, description);
                  renderCoverImage(image);
        
            
        
                $("body").on("click", "td", function(event){ 
                var clickedChapter = $(this);
                var clickedChapterId = clickedChapter.data('id')
                window.open("reading-page.html?clickedid=" + clickedChapterId);
               
           });
                    
             });
    
    
    
    function renderCoverImage(image) {
        mangaImage.src = 'https://cdn.mangaeden.com/mangasimg/' + image;
    }
    
    function renderDescriptionTitle(title, description) {
        
        titleText.textContent = title;
        descriptionText.textContent = description;
    }
    
    function renderChapters(chapters) {
           
        for (var index in chapters) {
            var currentChapter = chapters[index][2];
            var currentChapterDate = new Date(chapters[index][1]*1000).toDateString();
            var currentChapterID = chapters[index][3];
            var row = chapterTable.insertRow();
            var cell = $('<td id=chapter>' + currentChapter +'</td>');
            var cell2 = $('<td>' + currentChapterDate + '</td>');
            cell.data('id', currentChapterID);
            chapterTable.appendChild(row);
            cell.appendTo(row);
            cell2.appendTo(row);
        }
        
    }
    
    function fetchChapters(id) { 
        return $.get(mangaChapterEndPoint + id);
    } 
    
    function getQueryVariable(id) {
        var query = window.location.search.substring(1);
        return query.split("=")[1];
    }
    
    function handleError() {
        console.error(error);
    }
    
    
    
    
    
    
});