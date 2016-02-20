// Validate email 
//I am not that good with js so I had to look this one up. 
//I understand what is happening and how to do it now after looking it up for future use
function validateEmail(email){ 
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(email)){
    document.getElementById('email').style.background ='#ccffcc';
    document.getElementById('emailError').style.display = "none";
    return true;
  }else{
    document.getElementById('email').style.background ='#FF6666';
    document.getElementById(x + 'Error').style.display = "block";

    return false;
  }
}

//Validate phone
//Same as above but using a different check
//validate number
function validatePhone(phone){ 
  var re = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  if(re.test(phone)){
    document.getElementById('phone').style.background ='#ccffcc';
    document.getElementById('phoneError').style.display = "none";
    return true;
  }else{
    document.getElementById('phone').style.background ='#FF6666';
    document.getElementById(x + 'Error').style.display = "block";

    return false;
  }
}

function checkPass()
{
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('pass');
    var pass2 = document.getElementById('conpass');
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#ccffcc";
    var badColor = "#FF6666";
    var Char = "#White"
    //Compare the values in the password field 
    //and the confirmation field
    if(pass1.value == pass2.value){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass2.style.backgroundColor = goodColor;
        message.style.color = Char;
        message.innerHTML = "Passwords Match!"
    }else{
        //The passwords do not match.
        pass2.style.backgroundColor = badColor;
        message.style.color = Char;
        message.innerHTML = "Passwords Do Not Match!"
    }
}  