
let emailError=document.getElementById("email-error");
let passError=document.getElementById("pass-error")
let btn=document.getElementById("login")

    function validateMail() {
        let mail=document.getElementById("mail").value;
        
            if(mail.length==0){
                emailError.style.display="flex";
                emailError.innerHTML='<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i> Please Enter email-id';
                emailError.style.color="red";
                return false;
            }
        if (!mail.match(/^[A-za-z\._\-[0-9]+[@][A-Za-z]+[\.][a-z]{2,4}$/)) {
                emailError.style.display="flex";
                emailError.innerHTML='<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i> Enter valid email-id';
                emailError.style.color="red";
                return false;
            }
           else{
            emailError.style.display="flex"
                emailError.innerHTML='<i class="fa-solid fa-circle-check fa-xl" style="color: #08fd72;"></i> Valid ';
                emailError.style.color="green"
                return true;
           }
    //    emailError.innerHTML="";
        }
      function validatePass(){
        let password=document.getElementById("password").value;
        if (password.length<5 || password.length>12) {
            passError.style.display="flex";
            passError.innerHTML='<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i> Password length should be between 5 & 12';
            passError.style.color="red";
            return false;
        }
        else if (!password.match (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).+$/
        )) {
            passError.style.display="flex";
            passError.innerHTML='<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i>Password must contain atleast one uppercase ,one lowercase & one special character ';
            passError.style.color="red";
            return false;
        }
        else{
            passError.style.display="flex"
                passError.innerHTML='<i class="fa-solid fa-circle-check fa-xl" style="color: #08fd72;"></i> Valid ';
                passError.style.color="green"
                return true;
           }
      }
        function validateForm(){
let sumbitError=document.getElementById("fixerror");

            if(!validateMail() || !validatePass()){
                sumbitError.style.display="block"
                sumbitError.innerHTML='<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i> Please Fix The Error';
                sumbitError.style.color="red";
                setTimeout( function() {sumbitError.style.display='none';},7000);
                return false;
            }
          else{
           document.querySelector(".form").innerHTML=' <i class="fa-solid fa-circle-check fa-xl" style="color: #08fd72;"></i>FORM SUMBITTED SUCESSFULLY'
           document.querySelector(".form").style.color="green"
           document.querySelector(".form").style.display="flex"
    
          }
        }