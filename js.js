
var MyName = document.getElementById("name")
var MyAge = document.getElementById("date")
var MyEmail = document.getElementById("email")
var MyEducation = document.getElementById("Education")
var CompletedHigherEdu = document.getElementById("radioDefault1")
var NoHigherEdu = document.getElementById("radioDefault2")
var Economics = document.getElementById("checkbox1")
var Sociology = document.getElementById("checkbox2")
var Biology = document.getElementById("checkbox3")
var Statistics = document.getElementById("checkbox4")
var IT = document.getElementById("checkbox5")
let i = 1;


console.log(MyName, MyAge, MyEmail, MyEducation, CompletedHigherEdu, NoHigherEdu)

function validateForm() {
    err.innerHTML = "";
    if (MyName.value == "") {
        err.innerHTML += "Name is required.<br>";
    }
    if (MyAge.value == "") {
        err.innerHTML += "Age is required.<br>";
    }
    if (MyEmail.value == "") {
        err.innerHTML += "Email is required.<br>";
    }
    if (MyEducation.value == "") {
        err.innerHTML += "Education is required.<br>";
    }
    if (!CompletedHigherEdu.checked && !NoHigherEdu.checked) {
        err.innerHTML += "Please select an option for higher education.<br>";
    }
    
    if (err.innerHTML != "") {
        return false;
    }
    
    return true;
}


for (let index = 0; index < i; index++) {
    const element = array[index];
}
console.log(element);

var submitted = document.getElementById("done");
let message = document.getElementById("thanks")
submitted.addEventListener("click", function() {
    i = i+1;
}
)
console.log(i);