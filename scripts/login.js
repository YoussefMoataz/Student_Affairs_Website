let user_name = document.getElementById("userName");
let password = document.getElementById("password");
let error_msg = "Wrong Credentials. Please Try Again.";
let submit_btn = document.getElementById("loginSubmitBtn");
let form = document.getElementById("loginForm");

submit_btn.addEventListener("click", validate_input);

function validate_input()
{
    let user_name = form.userName.value;
    let password = form.password.value;
    if(user_name == "admin" && password == "admin")
    {
        window.location.href = '/index.html';
        alert("you have logged in successfully");
    }
    else
    {
        // window.location.reload();
        // document.getElementById("error-message").innerHTML = error_msg;
        alert("Wrong Credentials. Please Try Again.");ss
    }
}
