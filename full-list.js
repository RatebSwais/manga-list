'use strict'

$(function(){
    
   const leftContent = document.getElementById('left2');
   const listTable = document.createElement('table');
   listTable.setAttribute('id', 'fullList');
   var chapterEndPoint = 'https://www.mangaeden.com/api/list/0';
       
    
   getfullList().then(function(data){
       console.log(data.manga);
       
       
   }); 
    
    
    
    function getfullList() {
        return $.get(chapterEndPoint);
    }
    
});