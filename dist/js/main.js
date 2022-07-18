
var menuBar = document.getElementById("navBar");
var menu = document.getElementById("menu");

window.onscroll=function(){
    if(window.pageYOffset >= menu.offsetTop){
        menuBar.classList.add("sticky");
    
    }
    else{
        menuBar.classList.remove("sticky");
    }
}