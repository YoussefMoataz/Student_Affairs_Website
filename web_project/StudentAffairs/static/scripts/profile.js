/* 
    Author: Youssef Moataz
    
    This is used for:
        -Add profile page
        -Show profile page
        -Edit profile page
*/

function getFormData(){

    let id = document.getElementById("studentID").value;
    let name = document.getElementById("studentName").value;
    let dateOfBirth = document.getElementById("studentBirthDate").value;
    let gpa = document.getElementById("studentGPA").value;
    let level = document.getElementById("studentLevel").value;
    let department = document.getElementById("studentDepartment").value;
    let email = document.getElementById("studentEmail").value;
    let phone = document.getElementById("studentPhone").value;

    let gender = "";
    let radios = document.getElementsByName("studentGender");
    // get the selected gender
    for (var i = 0; i < 2; i++) {
        if (radios[i].checked) {
            gender = radios[i].value;
            break;
        }
    }

    let status = document.getElementById("studentStatus").checked;


    if(id == ""){
        alert("ID can't be empty");
        return false;
    }

    if(name == ""){
        alert("Name can't be empty");
        return false;
    }

    if(gender == ""){
        alert("Please select a gender");
        return false;
    }

    if(!validateLevel()){
        alert("Level must be between 1 and 4");
        return false;
    }

    if(!validateGPA()){
        alert("GPA must be between 0 and 4");
        return false;
    }

    if(!validateBirthDate()){
        alert("Date of birth must be before today");
        return false;
    }

    if(!validateEmail()){
        alert("Please enter a valid email address");
        return false;
    }

    if(!validatePhone()){
        alert("Please enter a valid phone number");
        return false;
    }


    return true;

}

function goToDepartmentAssignment(){
    

    if(confirm("Are you sure you want to save this page before assigning department ?")){
        
        if(getFormData()){

            saveOrUpdateProfile();

            window.location.href = "department_assignment.html";

        }

    }
    
}

function validateLevel(){

    if(document.getElementById("studentLevel").value < 0 || document.getElementById("studentLevel").value > 4){

        return false;

    }else{

        return true;

    }

}

function validateGPA(){

    // can be 4 characters: "1.23"
    if(document.getElementById("studentGPA").value.length > 4 || document.getElementById("studentGPA").value.length == 0){

        return false;

    }

    if (document.getElementById("studentGPA").value > 0 && document.getElementById("studentGPA").value <= 4){

        return true;

    }else if(document.getElementById("studentGPA").value == 0 && document.getElementById("studentLevel").value == 1){

        return true;

    }else{
        
        return false;

    }

}

function validateBirthDate(){

    return new Date(document.getElementById("studentBirthDate").value) < new Date(new Date().toDateString());

}

function validateEmail(){

    const emailRegex = /^[0-z]+[@][a-z]+(\.[a-z]{2,4})+$/;

    return emailRegex.test(document.getElementById("studentEmail").value);

}

function validatePhone(){

    const phoneRegex = /^[+]?[0-9]{11,12}$/;

    return phoneRegex.test(document.getElementById("studentPhone").value);

}