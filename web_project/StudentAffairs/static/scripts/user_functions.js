function getData(){
    var name = document.getElementById('userName').value;
    var id = document.getElementById('userId').value;
    var password = document.getElementById('userPassword').value;


    if(name == ""){
        alert("You entered an empty name!!");
        return false;
    }

    return true;
}



// function to show password

function togglePasswordVisibility() {
    var passwordField = document.getElementById("userPassword");
    var toggleButton = document.getElementById("showPass");
    
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.textContent = "Hide Password";
    } else {
        passwordField.type = "password";
        toggleButton.textContent = "Show Password";
    }
}

function myFunction() {
    var x = document.getElementById("userPassword");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// local storage functions 

let storage = window.localStorage;



// function store(){ 
    
//     let user = new User(name,password,id);
//     let users = [];

//     if(storage.getItem("UsersData") == null){

//         users[0] = JSON.stringify(user);

//         storage.setItem("UsersData", JSON.stringify(users));

//     }else{

//         users = JSON.parse(storage.getItem("UsersData"));
//         users[users.length] = JSON.stringify(user);


//         storage.setItem("UsersData", JSON.stringify(users));

//     }

//     location.reload();

// }

// function edit(){ 

// // alert(document.getElementById("userId").selectedIndex);

// var UserIndex = document.getElementById("userId").selectedIndex;
// console.log(UserIndex);

// let users = JSON.parse(storage.getItem("UsersData"));

// let user = JSON.parse(users[UserIndex]);

// // console.log(users[UserIndex]);
// console.log(document.getElementById("userId").value);

// document.getElementById("userId").selectedIndex = UserIndex;

// document.getElementById("userName").value = user.name;

// document.getElementById("userPassword").value = user.password;

// storage.setItem("UsersData", JSON.stringify(users));


// }

// function save(){

//     UserIndex = document.getElementById("userId").selectedIndex;

//     let users = JSON.parse(localStorage.getItem("UsersData"));
//     let editeduser = JSON.parse(users[UserIndex]);

    
//     editeduser.name = document.getElementById("userName").value;
//     editeduser.password = document.getElementById("userPassword").value;

//     // alert(UserIndex);


//     users[UserIndex] = JSON.stringify(editeduser);

//     localStorage.setItem("UsersData",JSON.stringify(users))

// }


// function deleteUser(){

//     if(storage.getItem("UsersData") == null){
//         alert("No Users to Delete.");
//     }

//     else{

//         let confirmation = confirm("Are you sure you want to delete this user?");

//         if(confirmation){
            
//             var UserIndex = document.getElementById("userId").selectedIndex;

//             let users = JSON.parse(storage.getItem("UsersData"));

//             users.splice(UserIndex, 1);

//             storage.setItem("UsersData", JSON.stringify(users));


//             alert("User Deleted.");

//             location.reload();
//             window.location.href = "home.html";

//         }
    

//     }
// }

   
