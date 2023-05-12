

// function to show password

function myFunction() {
    var x = document.getElementById("userPassword");
        if (x.type === "password") {
            x.type = "text"; 
        } 
        else {
            x.type = "password"; 
        }
    }


// local storage functions 

let storage = window.localStorage;



function store(){ 
    var name = document.getElementById('userName').value;
    var id = document.getElementById('id').value;
    var password = document.getElementById('password').value;
   
    let user = new User(name,password,id);
    let users = [];

    if(storage.getItem("UsersData") == null){

        users[0] = JSON.stringify(user);

        storage.setItem("UsersData", JSON.stringify(users));

    }else{

        users = JSON.parse(storage.getItem("UsersData"));
        users[users.length] = JSON.stringify(user);


        storage.setItem("UsersData", JSON.stringify(users));

    }

    location.reload();

}

function edit(){ 

// alert(document.getElementById("userId").selectedIndex);

var UserIndex = document.getElementById("userId").selectedIndex;
console.log(UserIndex);

let users = JSON.parse(storage.getItem("UsersData"));

let user = JSON.parse(users[UserIndex]);

// console.log(users[UserIndex]);
console.log(document.getElementById("userId").value);

document.getElementById("userId").selectedIndex = UserIndex;

document.getElementById("userName").value = user.name;

document.getElementById("userPassword").value = user.password;

storage.setItem("UsersData", JSON.stringify(users));


}

function save(){

    UserIndex = document.getElementById("userId").selectedIndex;

    let users = JSON.parse(localStorage.getItem("UsersData"));
    let editeduser = JSON.parse(users[UserIndex]);

    
    editeduser.name = document.getElementById("userName").value;
    editeduser.password = document.getElementById("userPassword").value;

    // alert(UserIndex);


    users[UserIndex] = JSON.stringify(editeduser);

    localStorage.setItem("UsersData",JSON.stringify(users))

}


function deleteUser(){

    if(storage.getItem("UsersData") == null){
        alert("No Users to Delete.");
    }

    else{

        let confirmation = confirm("Are you sure you want to delete this user?");

        if(confirmation){
            
            var UserIndex = document.getElementById("userId").selectedIndex;

            let users = JSON.parse(storage.getItem("UsersData"));

            users.splice(UserIndex, 1);

            storage.setItem("UsersData", JSON.stringify(users));


            alert("User Deleted.");

            location.reload();
            window.location.href = "home.html";

        }
    

    }
}


// function to auto generate random user password 
function generateRandomPassword(length) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()"; // List of characters to include in the password
    var password = "";
    
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length); // Generate random index to pick a character
        password += characters[randomIndex]; // Append the randomly picked character to the password
    } return password;
}

function generateAndSetPassword() {
    var generatedPassword = generateRandomPassword(8); // Generate a random password with length 8
    document.getElementById("password").value = generatedPassword; // Set the generated password as the value of the input field
}


// function to generate user id initialy 100

var counter = 100;
function generateRandomId() {
    if(localStorage.getItem("UsersData")== null){
        return 100;
    }
    else if(localStorage.getItem("UsersData")== '[]'){
        return 100;
    }
    else{
    let users = JSON.parse(storage.getItem("UsersData"));

    var counter = JSON.parse(users[users.length - 1]).id;
    counter++; // Generate random ID 

    }
    

    return counter;
}

function generateAndSetId() {
    var generatedId = generateRandomId(); // Generate a random ID
    document.getElementById("id").value = generatedId; // Set the generated ID as the value of the input field
  
}
    
function getUserIDs(){

    let users = JSON.parse(storage.getItem("UsersData"));
    users.forEach(function(mUserID) {
        let userID = JSON.parse(mUserID).id;
                
        $('#userId').append(`<option value="${userID}">${userID}</option>`);
                                
    });

    $('#userId').append(`<option value="---" selected hidden></option>`);


}

function redirect(){
    window.location.href = "home.html";
}

   
