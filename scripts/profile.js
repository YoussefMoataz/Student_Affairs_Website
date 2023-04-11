/* 
    Author: Youssef Moataz
    
    This is used for:
        -Add profile page
        -Show profile page
        -Edit profile page
*/

let storage = window.localStorage;

let indexOfItemToEdit = -1;

function formSubmitted(){

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
    
    let student = new Student(id, name, dateOfBirth, gpa, level, department, email, phone, gender, status);


    let students = [];

    
    if(storage.getItem("StudentsData") == null){
        // no students saved

        students[0] = JSON.stringify(student);

        storage.setItem("StudentsData", JSON.stringify(students));

    }else{

        students = JSON.parse(storage.getItem("StudentsData"));

        if(indexOfItemToEdit == -1){

            // not updating, just adding a profile
            students[students.length] = JSON.stringify(student);

        }else{

            // updating profile
            students[indexOfItemToEdit] = JSON.stringify(student);

        }

        storage.setItem("StudentsData", JSON.stringify(students));

    }

    // done updating or adding, remove the current index
    storage.removeItem("StudentIndex");


    alert("Saved");

    // redirect to another page
    window.location.href = "all_students.html";
    
    // alert(JSON.stringify(student));

    // alert(id + name + dateOfBirth + gpa + level + department + email + phone + gender + status );

}

function getProfileDataToEdit(){


    if(storage.getItem("StudentIndex") != null && 
    storage.getItem("StudentIndex") != -1 &&
    document.referrer.includes("all_students.html") // check update not add student request
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

function goToDepartmentAssignment(){

    if(leavePageConfirmation()){

        window.location.href = "department_assignment.html";

    }

}

function leavePageConfirmation(){

    return confirm("Are you sure you want to leave this page ?");

}