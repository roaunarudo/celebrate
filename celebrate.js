
//-------------------------------------------All about form-------------------------------------------

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
if(f){

   f.setAttribute("novalidate", "");
   f.addEventListener("submit", function(event){

    
    if(validateForm() == true){
        

        f.submit();
        
    }
    else{
        event.preventDefault();
    }

});

}




//-------------------------------------------Image Carousal-------------------------------------------

/*(function(){
var slide=document.querySelectorAll(".cimg");
var len=slide.length;
var counter=1;

if(counter<=len){

    setInterval(function() {

        for(var i=0;i<len;i++){

            if(slide[i].classList.length == 1){

                slide[i].classList.add("hide");
                console.log("hi"); 
                if(i == (len-1)){
                    slide[0].classList.remove("hide");
                    
                }
                else{
                    slide[i+1].classList.remove("hide");
                }
                
            }
            

        }
        counter++;
  
        if (counter === len) {
          counter = 1;
        }
      }, 4000);
}
})();*/

var firstIndex=0;
function automaticSlide(){

    setTimeout(automaticSlide, 2500);

    var pics;
    const img=document.querySelectorAll(".cimg");
    for(pics=0;pics<img.length;pics++){
        //img[pics].style.display="none";
        img[pics].classList.add("hide");

    }
    firstIndex++;
    if(firstIndex>img.length){
        firstIndex=1;
    }
    //img[firstIndex-1].style.display="block";
    img[firstIndex-1].classList.remove("hide");
    

}


//-------------------------Burger Menu---------------------

const menuBtn=document.getElementById("menu-icon");
let menuOpen=false;

menuBtn.addEventListener("click",function(){
    

    if(!menuOpen){

        menuBtn.classList.add("open");
        menuOpen=true;
        document.getElementById("menu2").classList.remove("hide-menu");
        document.getElementById("menu2").classList.add("menu-active");
        
        document.body.style="overflow:hidden";
    }
    else{

        menuBtn.classList.remove("open");
        menuOpen=false;
        document.getElementById("menu2").classList.add("hide-menu");
        document.getElementById("menu2").classList.remove("menu-active");
        document.body.style="overflow:none";

    }

});

function contact(){
    document.getElementById("menu2").classList.add("hide-menu");
    document.body.style="overflow:none";
    menuBtn.classList.remove("open");
}
