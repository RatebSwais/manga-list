'use strict'

$(function(){
    
   const leftContainer = document.getElementsByClassName("left-content");
   const list = document.createElement("ul");
   list.setAttribute('class', 'chapter-list');
   const listItem = document.createElement("li"); 
   listItem.setAttribute('class', 'chapters');
   leftContainer.appendChild(list);
   list.appendChild(listItem);
    
    var chapterEndPoint = '';
    
    
    fetchChapters().then(function (data, status){
        
       if(status == 'success') {
           
       } 
        
        else {
            handleError();
        }
        
    });
    
    
    
    function fetchChapters() {
        return $.get()
    }
    
    function handleError() {
        console.error(error);
    }
    
    
    
    
    
    
});