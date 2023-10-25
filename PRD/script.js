// Get the modal
var modal = document.getElementById('login');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



document.addEventListener("DOMContentLoaded", function() {
 // Get a reference to the clickable div by its id
 const main = document.getElementById('main');
 const nav = document.getElementById('nav');
 const check = document.getElementById('checkbox-trigger');
 const container = document.getElementById('container-menu');
 

 // Function to start JavaScript when the div is clicked
 function startJavaScript() {
    //alert('JavaScript started!');
    // Add your JavaScript code here
    
    if (main.style.width == '83%'){
       // Add a 1-second delay before changing the width
      setTimeout(function() {
        main.style.width = '96%';
        nav.style.width = '4%';
        container.style.width = '4%';
        container.style.minHeight = '50px';
      }, 1000); // 1000 milliseconds (1 second)
    }else{
      main.style.width = '83%';
      nav.style.width = '17%';
      container.style.width = '17%';
      container.style.minHeight = '333px';
    } 
 }

 // Add a click event listener to the clickable div
 check.addEventListener('click', startJavaScript);
});