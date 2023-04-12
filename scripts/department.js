let storage = window.localStorage;

let students = JSON.parse(storage.getItem("StudentsData"));
let StudentIndex = storage.getItem("StudentIndex");
let studentToSetDepartment = JSON.parse(students[StudentIndex]);

function assignDepartment(){
 
  document.getElementById("SID").innerHTML = studentToSetDepartment.id;
  document.getElementById("SName").innerHTML = studentToSetDepartment.name;
  document.getElementById("SDepartment").innerHTML = studentToSetDepartment.department;

  // Check if student's level is 3
  if (studentToSetDepartment.level != 3) {

    alert("Error: This action is only applicable for students at level 3.");
    goToProfile();
    
  }

}

function Submitted() {

  //Get the selected department from the dropdown list
  let departmentSelect = document.getElementsByName("Department")[0];
  let selectedDepartment = departmentSelect.options[departmentSelect.selectedIndex].text;
  //no selection
  if (selectedDepartment == "Select a department") {
    alert("Error: Please choose a department.");
    return;
  }
  else{

  // Set the department of the student
  studentToSetDepartment.department = selectedDepartment;
  students[StudentIndex] = JSON.stringify(studentToSetDepartment);
  storage.setItem("StudentsData", JSON.stringify(students));

  alert("Department has been set successsfully!");

  goToProfile();

  }

}

function goToProfile(){

  window.location.href = "show_profile.html?id=" + StudentIndex;

}
