/* 
    Name: Camila Oropeza Llindis  
    File: homework2.js
    Date Created: 06-22-2026
    Date Updated: 06-28-2026
    Version: 1.0 
    Purpose: MIS 3371 Homework 2 to learn how to use JavaScript and create a patient form. 
*/

//this is the JavaScript for today's date to showcase on the page//
document.getElementById("today").innerHTML = new Date().toLocaleDateString();

//this is the JavaScript that connects to the display data button//
function reviewInformation()
{
    var patientForm=document.getElementById("patientform");
    var reviewOutput;
    var datatype;
    var i;
// Creates Table Headers//
    reviewOutput= "<h2> Please Review the Following Information </h2>";
    reviewOutput= reviewOutput + "<table class='output'>";
    reviewOutput= reviewOutput + "<tr><th>Field</th><th>Information Entered</th></tr>";
//Beginning of Loop that will check all values of the form//
    for (i = 0; i < patientForm.length; i++)
    {
        datatype = patientForm.elements[i].type;

    switch (datatype)
    {
        case "checkbox":
            if (patientForm.elements[i].checked)
            {
                reviewOutput = reviewOutput + "<tr><td>" + patientForm.elements[i].name + "</td>";
                reviewOutput = reviewOutput + "<td>" + patientForm.elements[i].value + "</td></tr>";
            }
            break;
// This is for checkbox buttons to show if the user clicked Yes
        case "radio":
            if (patientForm.elements[i].checked)
            {
                reviewOutput = reviewOutput + "<tr><td>" + patientForm.elements[i].name + "</td>";
                reviewOutput = reviewOutput + "<td>" + patientForm.elements[i].value + "</td></tr>";
            }
            break;
//This is for radio buttons to show which option they selected
        case "button":
        case "submit":
        case "reset":
            break;
//This is to keep the password private
        case "password":
            reviewOutput = reviewOutput + "<tr><td>" + patientForm.elements[i].name + "</td>";
            reviewOutput = reviewOutput + "<td>Hidden for privacy</td></tr>";
            break;

//Password review display adapted with assistance from OpenAI ChatGPT.
        default:
            reviewOutput = reviewOutput + "<tr><td>" + patientForm.elements[i].name + "</td>";
            if (patientForm.elements[i].name == "userid")
        {
                reviewOutput = reviewOutput + "<td>" + patientForm.elements[i].value.toLowerCase() + "</td></tr>";
        }
            else
        {
                reviewOutput = reviewOutput + "<td>" + patientForm.elements[i].value + "</td></tr>";
        }
    }
    }

reviewOutput = reviewOutput + "</table>";
document.getElementById("outputformdata").innerHTML = reviewOutput;

openReview();
}

//This is the animation for the PopUp inspired by W3Schools 
function openReview()
{
    document.getElementById("reviewPopup").style.display = "block";
}

function closeReview()
{
    document.getElementById("reviewPopup").style.display = "none";
}

// Displays the selected pain level
var slider = document.getElementById("pain");
var output = document.getElementById("painlevel");

output.innerHTML = slider.value;

slider.oninput = function()
{
    output.innerHTML = this.value;
}

// Checks passwords, user ID, first name and last name
function passwordentry()
{
    var passwordinput;
    var passwordoutput;
    var userid;
    var firstname;
    var lastname;

    passwordinput = document.getElementById("password").value;
    userid = document.getElementById("userid").value.toLowerCase();
    firstname = document.getElementById("firstname").value.toLowerCase();
    lastname = document.getElementById("lastname").value.toLowerCase();

    //Checks uppercase letters
    if (passwordinput.search(/[A-Z]/) < 0)
    {
        passwordoutput = "Enter at least one uppercase letter";
    }
    //Checks lowercase letters
    else if (passwordinput.search(/[a-z]/) < 0)
    {
        passwordoutput = "Enter at least one lowercase letter";
    }
    //Checks numbers
    else if (passwordinput.search(/[0-9]/) < 0)
    {
        passwordoutput = "Enter at least one number";
    }
    else if (passwordinput.search(/[!@#%^&*()_\-+=\\\/><.,`~]/) < 0)
    {
        passwordoutput = "Enter at least one special character";
    }
    //Checks if password contains quotes
    else if (passwordinput.search(/["']/) >= 0)
    {
        passwordoutput = "Password must not contain quotes. Please remove it";
    }
    //Checks minimum password length
    else if (passwordinput.length < 8)
    {
        passwordoutput = "Enter at least 8 characters";
    }
    //Checks maximum password length
    else if (passwordinput.length > 30)
    {
        passwordoutput = "Password cannot be longer than 30 characters";
    }
    //Checks if password contains the User ID
    else if (userid != "" && passwordinput.toLowerCase().includes(userid))
    {
        passwordoutput = "Password cannot contain your User ID";
    }
    //Checks if password contains first name
    else if (firstname != "" && passwordinput.toLowerCase().includes(firstname))
    {
        passwordoutput = "Password cannot contain your first name";
    }
    //Checks if password contains last name
    else if (lastname != "" && passwordinput.toLowerCase().includes(lastname))
    {
        passwordoutput = "Password cannot contain your last name";
    }
    else
    {
        passwordoutput = "Password meets requirements";
    }

    document.getElementById("passwordText").innerHTML = passwordoutput;
}

// Checks if both passwords match
function checkpassword2()
{
    var x;
    var y;

    x = document.getElementById("password").value;
    y = document.getElementById("repassword").value;

    if (x == y)
    {
        document.getElementById("passwordText2").innerHTML = "Passwords match";
    }
    else
    {
        document.getElementById("passwordText2").innerHTML = "Passwords do not match!";
    }
}

//Makes sure user can't submit if passwords different
function validatePasswords()
{
    var password1;
    var password2;

    password1 = document.getElementById("password").value;
    password2 = document.getElementById("repassword").value;

    if (password1 != password2)
    {
        alert("Passwords do not match. In order to submit the form the passwords must match");
        return false;
    }
    
    return true;
}

// Checks phone number format
function checkphone()
{
    var phoneinput;
    var phoneoutput;

    phoneinput = document.getElementById("phone").value;

    // Checks if phone number is empty
    if (phoneinput == "")
    {
        phoneoutput = "";
    }
    // Checks phone number format
    else if (phoneinput.search(/[0-9]{3}-[0-9]{3}-[0-9]{4}/) < 0)
    {
        phoneoutput = "Phone number must be in this format: 000-000-0000";
    }
    else
    {
        phoneoutput = "";
    }

    document.getElementById("phoneText").innerHTML = phoneoutput;
}

// Checks Social Security Number format
function checkssn()
{
    var ssninput;
    var ssnoutput;

    ssninput = document.getElementById("ssn").value;

    // Checks if Social Security Number is empty
    if (ssninput == "")
    {
        ssnoutput = "";
    }
    // Checks if Social Security Number has exactly 9 digits
    else if (ssninput.search(/^[0-9]{9}$/) < 0)
    {
        ssnoutput = "Enter a 9-digit Social Security Number";
    }
    else
    {
        ssnoutput = "";
    }

    document.getElementById("ssnText").innerHTML = ssnoutput;
}

// Checks email format
function checkemail()
{
    var emailinput;
    var emailoutput;

    emailinput = document.getElementById("email").value;

    // Checks if email is empty
    if (emailinput == "")
    {
        emailoutput = "";
    }
    // Checks email format
    else if (emailinput.search(/.+@.+/) < 0)
    {
        emailoutput = "Enter an email in the format name@email.com";
    }
    else
    {
        emailoutput = "";
    }

    document.getElementById("emailText").innerHTML = emailoutput;
}

/*
MIS 3371 Homework 2 examples provided by Professor Jake Messinger.
W3Schools HTML Forms: https://www.w3schools.com/html/html_forms.asp
W3Schools CSS: https://www.w3schools.com/css/
W3Schools JavaScript Date: https://www.w3schools.com/js/js_dates.asp
Some form structure and date logic were adapted and customized for this assignment.
*/
