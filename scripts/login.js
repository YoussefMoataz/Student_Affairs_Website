let error_msg = "Wrong Credentials. Please Try Again.";
let form = document.getElementById("loginForm");
let usersArr = [];
storage.setItem("currentUser", "undefined");
usersArr = JSON.parse(storage.getItem("UsersData"));

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
            storage.setItem("currentUser", JSON.stringify(current_user));
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
