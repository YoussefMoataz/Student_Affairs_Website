/* 
    Author: Youssef Moataz
    
    This is used for:
        -Add profile page
        -Show profile page
        -Edit profile page
*/

let storage = window.localStorage;

let indexOfItemToEdit = -1;

let formStudent = null;

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

    
    formStudent = new Student(id, name, dateOfBirth, gpa, level, department, email, phone, gender, status);

    return true;

}

function saveOrUpdateProfile(){

    let students = [];

    if(storage.getItem("StudentsData") == null){
         // no students saved

        students[0] = JSON.stringify(formStudent);

        storage.setItem("StudentsData", JSON.stringify(students));

    }else{

        students = JSON.parse(storage.getItem("StudentsData"));

        if(indexOfItemToEdit == -1){

            // not updating, just adding a profile
            students[students.length] = JSON.stringify(formStudent);

        }else{

            // updating profile
            students[indexOfItemToEdit] = JSON.stringify(formStudent);

        }

        storage.setItem("StudentsData", JSON.stringify(students));

    }

}

function formSubmitted(){

    if(getFormData()){

        saveOrUpdateProfile();
        
        // done updating or adding, remove the current index
        storage.removeItem("StudentIndex");

        alert("Saved");

        // redirect to another page
        window.location.href = "all_students.html";

    }

}

function getProfileDataToEdit(){


    if(storage.getItem("StudentIndex") != null && 
    storage.getItem("StudentIndex") != -1 &&
    (document.referrer.includes("all_students.html") || 
    document.referrer.includes("department_assignment.html")) &&
    window.location.href.includes("id=") // check update not add student request
    ){

        indexOfItemToEdit = storage.getItem("StudentIndex");

        let students = JSON.parse(storage.getItem("StudentsData"));

        let student = JSON.parse(students[indexOfItemToEdit]);

        // alert(student.name);

        document.getElementById("deleteButton").style.display = "initial";
        document.getElementById("saveButton").innerHTML = "Save";

        document.getElementById("studentID").value = student.id;
        document.getElementById("studentName").value = student.name;
        document.getElementById("studentBirthDate").value = student.dateOfBirth;
        document.getElementById("studentGPA").value = student.gpa;
        document.getElementById("studentLevel").value = student.level;
        document.getElementById("studentDepartment").value = student.department;
        document.getElementById("studentEmail").value = student.email;
        document.getElementById("studentPhone").value = student.phone;
        // to get the selected radio button
        document.getElementsByName("studentGender")[1 - student.gender].checked = true;
        document.getElementById("studentStatus").checked = student.status;


        document.getElementById("studentDepartment").addEventListener("click", goToDepartmentAssignment);

    }

}


function goToDepartmentAssignment(){
    
    let studentLevel = JSON.parse(JSON.parse(storage.getItem("StudentsData"))[storage.getItem("StudentIndex")]).level;
    
    // Check if student's level is 3
    if (studentLevel != 3) {
        
        alert("Error: This action is only applicable for students at level 3.");
        return;
        
    }

    if(confirm("Are you sure you want to save this page before assigning department ?")){
        
        if(getFormData()){

            saveOrUpdateProfile();

            window.location.href = "department_assignment.html";

        }

    }
    
}

function deleteProfile(){

    if(storage.getItem("StudentsData") == null){

        alert("No Students to delete !");

    }else{

        let confirmDelete = confirm("Are you sure you want to delete ?");

        if(confirmDelete){
            let students = JSON.parse(storage.getItem("StudentsData"));

            students.splice(indexOfItemToEdit, 1);

            storage.setItem("StudentsData", JSON.stringify(students));

            storage.removeItem("StudentIndex");

            alert("Deleted !");

            // redirect to another page
            window.location.href = "all_students.html";
        }

    }

}

function generateStudentID(){
    
    if(storage.getItem("StudentsData") == null){
        
        let date = new Date();
        let currentYear = date.getFullYear();

        // 20230001 first ID example
        document.getElementById("studentID").value = currentYear.toString() + "0001";
        

    }else{

        let students = JSON.parse(storage.getItem("StudentsData"));
        let lastStudent = JSON.parse(students[students.length - 1]);

        // generate next id
        document.getElementById("studentID").value = parseInt(lastStudent.id) + 1;

    }

}

function checkLevel(){

    if(document.getElementById("studentLevel").value < 3){
        document.getElementById("studentDepartment").value = "";
    }

}