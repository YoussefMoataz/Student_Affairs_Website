var nav = document.querySelector(".nav");
nav.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
})

var menu = document.querySelector(".iconMenu");
menu.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
})

const element = document.getElementById("h");
const newelment = document.getElementById("t");
element.innerHTML = newelment.innerHTML;

if(window.location.href.includes("show_profile.html")){
    document.getElementById("profilePage").style.display = "none";
}