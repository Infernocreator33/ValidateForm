var cName = document.getElementById("myName");
var email = document.getElementById("myEmail");
var phone = document.getElementById("myPhone");
var submitButton = document.getElementById("submitButton");
var radioButtons = document.getElementsByName("radioOptions");
var errorMessage = document.getElementById("errorMessage");
var frm = document.forms[0];
var formValid = true;
var emailPattern = RegExp("[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+");
var phonePattern = RegExp("([0-9]{3})-([0-9]{3})-([0-9]{4})");

submitButton.addEventListener("click", checkForm);
function checkForm()
{
     for(let i = 0; i < radioButtons.length;++i){
        if(radioButtons[i].checked){
            formValid = true;
            break;
        }
     } 
    if(cName.value.length < 6){
        cName.style.backgroundColor = "red";
        formValid = false;
    }else{
        cName.style.backgroundColor = "white";
    }
   if(!emailPattern.test(email.value)){
        email.style.backgroundColor = "red";
        formValid = false;
   }else{
        email.style.backgroundColor = "white";
    }
    if(!phonePattern.test(phone.value)){
        phone.style.backgroundColor = "red";
        formValid = false;
    }else{
        phone.style.backgroundColor = "white";
    }

    if(formValid === false){
        errorMessage.className = "show";
    }   
    else{
        errorMessage.className = "hide";
        return true;
    }
}

function submitValue(frm)
{    
    var output = "";
    var formLength = document.getElementById("myForm").length;
    for(i = 0; i < formLength; i++)
    {
        console.log(frm.elements[i].name + " = " + frm.elements[i].value + "<br/>")
        output += frm.elements[i].name + " = " + frm.elements[i].value + "<br/>";
    }
    document.write(output);
}