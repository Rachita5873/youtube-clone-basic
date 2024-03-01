var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.addEventListener("click", ()=>{
    sideBar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
});

