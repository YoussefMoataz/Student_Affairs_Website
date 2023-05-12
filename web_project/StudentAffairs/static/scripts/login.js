let error_msg = "Wrong Credentials. Please Try Again.";
let form = document.getElementById("loginForm");
let storage = window.localStorage;
let usersArr = [];
let show_pass_icon = "<i class=\"fa-solid fa-eye\">";
let hide_pass_icon = "<i class=\"fa-solid fa-eye-slash\"></i>";
let show_pass = false;
storage.setItem("CurrentUser", "undefined");

usersArr[0] = JSON.stringify(new User("admin", "admin", "0"));
usersArr = usersArr.concat(JSON.parse(storage.getItem("UsersData")));


function show_password()
{
    if(show_pass)
    {
        document.getElementById("show-pass-icon").innerHTML = hide_pass_icon;
        show_pass = false;
        document.getElementById("password").setAttribute("type", "password");
    }
    else
    {
        document.getElementById("show-pass-icon").innerHTML = show_pass_icon;
        show_pass = true;
        document.getElementById("password").setAttribute("type", "text");
    }
}

function validate_input()
{
    let user_name = form.userName.value;
    let password = form.password.value;
    let current_user;
    let found = false;
    for(let i = 0; i < usersArr.length; i++)
    {
        current_user = JSON.parse(usersArr[i]);
        if(user_name == current_user["name"] && password == current_user["password"])
        {
            storage.setItem("CurrentUser", JSON.stringify(current_user));
            window.location.href = '/home.html';
            found = true;
        }
    }
    if(!found)
    {
        document.getElementById("error-message").innerHTML = error_msg;
        document.getElementById("userName").style.borderColor = "red";
        document.getElementById("user-icon").style.backgroundColor = "red";
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("pass-icon").style.backgroundColor = "red";
    }
}
