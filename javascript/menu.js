//MENU HAMBURGUESA
/*
const menu = document.querySelector(".menu"); 
const OpenMenuBtn = document.querySelector(".open-menu"); 
const CloseMenuBtn = document.querySelector(".close-menu"); 

function toggleMenu(){
    menu.classList.toggle("menu_opened"); 
    
}
OpenMenuBtn.addEventListener("click", toggleMenu)
CloseMenuBtn.addEventListener("click", toggleMenu)
*/
const OpenBtn = document.querySelector(".nav-bar");
function myFunction() {
    var y = document.getElementById("esconder");
    
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}
OpenBtn.addEventListener("click", myFunction)

function myFunctionaside() {
    var y = document.getElementById("esconderaside");
    
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}
OpenBtn.addEventListener("click", myFunctionaside)

function myFunctionfooter() {
    var y = document.getElementById("esconderfooter");
    
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}
OpenBtn.addEventListener("click", myFunctionfooter)





const btnMenu = document.querySelector("#btnMenu"); 
const menu = document.querySelector("#menu"); 
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar"); 
}); 
const subMenuBtn = () => document.querySelectorAll(".submenu_btn"); 









/*
for (let i=0; i< subMenuBtn.length; i++){
    subMenuBtn[i].addEventListener("click", function(){

    const subMenu = this.
    const height = subMenu.scrollHeight; 
    subMenu.style.height = height + "px"; 


    })
}
*/


