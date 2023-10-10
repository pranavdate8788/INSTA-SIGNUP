let nameError = document.getElementById("name-error");
let numberError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let passError = document.getElementById("pass-error")
let btn = document.getElementById("signupbtn")

function validateName() {
    let name = document.getElementById("name").value;


    if (name.length == 0) {
        nameError.style.display = "flex";
        nameError.innerHTML = '<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i> Please Enter a name';
        nameError.style.color = "red";
        return false;
    }
    else if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.style.display = "flex";
        nameError.innerHTML = '<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i> Write Full Name';
        nameError.style.color = "red";
        return false;
    }
    else {
        nameError.style.display = "flex"
        nameError.innerHTML = '<i class="fa-solid fa-circle-check fa-xl" style="color: #08fd72;"></i> Valid ';
        nameError.style.color = "green"
        return true;
    }

}
function validateNumber() {
    let number = document.getElementById("number").value;

    if (number.length == 0) {
        numberError.style.display = "flex";
        numberError.innerHTML = '<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i> Please Enter number';
        numberError.style.color = "red";
        return false;
    }
    if (number.length !== 10 || !/^\d{10}$/.test(number)) {
        numberError.style.display = "flex";
        numberError.innerHTML = '<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i> Write 10 digit number';
        numberError.style.color = "red";
        return false;
    }
    else {
        numberError.style.display = "flex"
        numberError.innerHTML = '<i class="fa-solid fa-circle-check fa-xl" style="color: #08fd72;"></i> Valid ';
        numberError.style.color = "green"
        return true;
    }
    //   numberError.innerHTML="";
}
function validateMail() {
    let mail = document.getElementById("mail").value;

    if (mail.length == 0) {
        emailError.style.display = "flex";
        emailError.innerHTML = '<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i> Please Enter email-id';
        emailError.style.color = "red";
        return false;
    }
    if (!mail.match(/^[A-za-z\._\-[0-9]+[@][A-Za-z]+[\.][a-z]{2,4}$/)) {
        emailError.style.display = "flex";
        emailError.innerHTML = '<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i> Enter valid email-id';
        emailError.style.color = "red";
        return false;
    }
    else {
        emailError.style.display = "flex"
        emailError.innerHTML = '<i class="fa-solid fa-circle-check fa-xl" style="color: #08fd72;"></i> Valid ';
        emailError.style.color = "green"
        return true;
    }
    //    emailError.innerHTML="";
}
function validatePass() {
    let password = document.getElementById("password").value;
    if (password.length < 5 || password.length > 12) {
        passError.style.display = "flex";
        passError.innerHTML = '<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i> Password length should be between 5 & 12';
        passError.style.color = "red";
        return false;
    }
    else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).+$/
    )) {
        passError.style.display = "flex";
        passError.innerHTML = '<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i>Password must contain atleast one uppercase ,one lowercase & one special character ';
        passError.style.color = "red";
        return false;
    }
    else {
        passError.style.display = "flex"
        passError.innerHTML = '<i class="fa-solid fa-circle-check fa-xl" style="color: #08fd72;"></i> Valid ';
        passError.style.color = "green"
        return true;
    }
}
function validateForm() {
    let sumbitError = document.getElementById("fixerror");

    if (!validateName() || !validateNumber() || !validateMail() || !validatePass()) {
        sumbitError.style.display = "block"
        sumbitError.innerHTML = '<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i> Please Fix The Error';
        sumbitError.style.color = "red";
        setTimeout(function () { sumbitError.style.display = 'none'; }, 7000);
        return false;
    }


    //    document.querySelector(".form").innerHTML=' <i class="fa-solid fa-circle-check fa-xl" style="color: #08fd72;"></i>FORM SUMBITTED SUCESSFULLY'
    //    document.querySelector(".form").style.color="green"
    //    document.querySelector(".form").style.display="flex"

    else {

        let nameofUser = document.getElementById("name").value;
        let numberofUser = document.getElementById("number").value;
        let usernameofUser = document.getElementById("username").value;
        let mailofUser = document.getElementById("mail").value;
        let passwordofUser = document.getElementById("password").value;
        const userData = {
            name: nameofUser,
            mail: mailofUser,
            phone: numberofUser,
            password: passwordofUser,
            username: usernameofUser
        }

        signupUser(userData)
    }
}
const signupUser = async (userData) => {
    try {
        const resp = await fetch("http://localhost:5000/signupInsta", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(userData)
        })
        const data = await resp.json();
        console.log(data);
        window.location.href = "http://127.0.0.1:5500/client/login.html";
    }
    catch (error) {
        console.log(error.message);
    }
}