'use strict'

$(function(){
    
   const leftContainer = document.getElementById('left');
   const chapterTable = document.createElement("table"); 
   chapterTable.setAttribute('class', 'chapterTable');  
   leftContainer.appendChild(chapterTable);
    console.dir(chapterTable.rows);
    
    var mangaChapterEndPoint = 'https://www.mangaeden.com/api/manga/';
    var mangaid = getQueryVariable("clickedid");
    console.log (mangaid);
    fetchChapters(mangaid).then(function(data){ 
                  console.log(data);  
                  var chapters = data.chapters;
                  renderChapters(chapters);
             });
    
    
    
    
    
    function renderChapters(chapters) {
        for (var index in chapters) {
            var currentChapter = chapters[index][2];
            console.log(currentChapter);
            var row = chapterTable.insertRow();
            var cell = row.insertCell();
            cell.textContent = currentChapter;   
            chapterTable.appendChild(row);
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