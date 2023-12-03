var nameError=document.getElementById("name-error");
var emailError=document.getElementById("email-error");
var messageError=document.getElementById("message-error");

function validateName(){
    var name=document.getElementById("name").value;

    if(name.length == 0){
        nameError.innerHTML="Name is required";
        return false;
    }

    nameError.innerHTML="Valid"
    return true;


}


function validateEmail(){
    var email=document.getElementById("email").value;

    if(email.length == 0){
        emailError.innerHTML="Email is required";
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){

        emailError.innerHTML="Enter valid email";
        return false;

    }
    emailError.innerHTML="Valid"
    return true;



}

function validateMessage(){

    var message=document.getElementById("message").value;
    var required=30;
    var left=required-message.length;

    if(message.length == 0){
        messageError.innerHTML="Message is required";
        return false;
    }
    if(left>0){
        messageError.innerHTML= "min. "+left + " characters required";
        return false;

    }
    
    messageError.innerHTML="";
    return true;
}


function validateForm(){


    if(!validateName() || !validateEmail() || !validateMessage()){

        return false;
    }
    else{
        return true;
    }

}

var f=document.getElementById("formdata");
f.setAttribute("novalidate", "");

f.addEventListener("submit", function(event){


    if(validateForm=="true"){

        f.submit();
    }
    else{
        event.preventDefault();
    }

});