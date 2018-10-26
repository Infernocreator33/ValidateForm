var cName = document.getElementById("myName");
var email = document.getElementById("myEmail");
var phone = document.getElementById("myPhone");
var submitButton = document.getElementById("submitButton");
var radioButtons = document.getElementsByName("radioOptions");
var field2 = document.getElementById("field2");
var mySelect = document.getElementById("mySelect");
var selectOptions = document.getElementsByName("selectOptions");
var field3 = document.getElementById("field3");
var errorMessage = document.getElementById("errorMessage");
var frm = document.forms[0];
var formValid = true;
var emailPattern = RegExp("[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+");
var phonePattern = RegExp("([0-9]{3})-([0-9]{3})-([0-9]{4})");

submitButton.addEventListener("click", checkForm);
submitButton.addEventListener("click", submitValue);
function checkForm()
{
     for(let i = 0; i < radioButtons.length;++i){
        if(radioButtons[i].checked == false){
            formValid = false;
            field2.style.backgroundColor = "red";
        }
        else
        {
            formValid = true;
            field2.style.backgroundColor = "white";
            break;
        }
     }
     for(let i = 0; i < mySelect.length; i++)
     {
         if(selectOptions[i].selected)
         {
            formValid = true;
            field3.style.backgroundColor = "white";
            break;
         }
         else
         {
            formValid = false;
            field3.style.backgroundColor = "red";
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

function submitValue()
{    
    if(formValid === true)
    {
        var output = "";
        var formLength = document.getElementById("myForm").length;
        for(i = 1; i < formLength; i++)
        {
            console.log(frm.elements[i].name + " = " + frm.elements[i].value + "<br/>")
            output += frm.elements[i].name + " = " + frm.elements[i].value + "<br/>";
            if(i >= 5 && i <=7)
            {
                console.log(frm.elements[i].checked);
                output += frm.elements[i].checked + "<br/>";
            }
        }
        document.write(output);
    }
    else
    {
        frm.cName.focus();
        frm.reset();
    }
}


