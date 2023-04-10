let error_msg = "Wrong Credentials. Please Try Again.";
let form = document.getElementById("loginForm");

function validate_input()
{
    let user_name = form.userName.value;
    let password = form.password.value;
    if(user_name == "admin" && password == "admin")
    {
        window.location.href = '/home.html';
        // alert("you have logged in successfully");
    }
    else
    {
        document.getElementById("error-message").innerHTML = error_msg;
    }
}
