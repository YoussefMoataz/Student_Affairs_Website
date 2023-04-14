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


if(window.location.href.includes("home.html")){
    document.getElementById("home").style.backgroundColor= "var(--main-background-color)";
    document.getElementById("home").style.color="black";
}


if(window.location.href.includes("add_user.html")){
    document.getElementById("add_user").style.backgroundColor= "var(--main-background-color)";
    document.getElementById("add_user").style.color="black";
}


if(window.location.href.includes("view_user.html")){
    document.getElementById("view_user").style.backgroundColor= "var(--main-background-color)";
    document.getElementById("view_user").style.color="black";
}


if(window.location.href.includes("all_students.html")){
    document.getElementById("all_students").style.backgroundColor= "var(--main-background-color)";
    document.getElementById("all_students").style.color="black";
}




