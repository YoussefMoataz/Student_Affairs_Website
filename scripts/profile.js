/* 
    Author: Youssef Moataz
    
    This is used for:
        -Add profile page
        -Show profile page
        -Edit profile page
*/

function formSubmitted(){

    var id = document.getElementById("studentID").value;
    var name = document.getElementById("studentName").value;
    var dateOfBirth = document.getElementById("studentBirthDate").value;
    var gpa = document.getElementById("studentGPA").value;
    var level = document.getElementById("studentLevel").value;
    var department = document.getElementById("studentDepartment").value;
    var email = document.getElementById("studentEmail").value;
    var phone = document.getElementById("studentPhone").value;

    var gender = "";
    var radios = document.getElementsByName("studentGender");
    for (var i = 0; i < 2; i++) {
        if (radios[i].checked) {
            gender = radios[i].value;
            break;
        }
    }

    var status = document.getElementById("studentStatus").checked;
    
    let student = new Student(id, name, dateOfBirth, gpa, level, department, email, phone, gender, status);


    var students = [];

    let storage = window.localStorage;

    if(storage.getItem("StudentsData") == null){

        students[0] = JSON.stringify(student);

        storage.setItem("StudentsData", JSON.stringify(students));

    }else{

        students = JSON.parse(storage.getItem("StudentsData"));

        students[students.length] = JSON.stringify(student);

        storage.setItem("StudentsData", JSON.stringify(students));

    }

    alert("Saved");
    
    // alert(JSON.stringify(student));

    // alert(id + name + dateOfBirth + gpa + level + department + email + phone + gender + status );

}