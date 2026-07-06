/* 
    Name: Camila Oropeza Llindis  
    File: homework3.js
    Date Created: 06-30-2026
    Date Updated: 
    Version: 1.0 
    Purpose: MIS 3371 Homework 3 to learn how to use JavaScript and create a patient form. 
*/

//--------------------------------------------------------------------------------------------------------------------------
//GLOBAL SETUP
//this is the JavaScript for today's date to showcase on the page//
document.getElementById("today").innerHTML = new Date().toLocaleDateString();
//Tracks whether the form has any validation errors
let error_flag = 0;

//--------------------------------------------------------------------------------------------------------------------------
//REVIEW POPUP
//this is the JavaScript that connects to the display data button//
function reviewForm()
{
    let patientForm=document.getElementById("patientform");
    let reviewOutput;
    let datatype;
    let i;
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
        case "radio":
            if (patientForm.elements[i].checked)
            {
                reviewOutput = reviewOutput + "<tr><td>" + patientForm.elements[i].name + "</td>";
                reviewOutput = reviewOutput + "<td>" + patientForm.elements[i].value + "</td></tr>";
            }
            break;
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

//--------------------------------------------------------------------------------------------------------------------------
//SLIDER
let slider = document.getElementById("pain");
let output = document.getElementById("painlevel");

output.innerHTML = slider.value;

slider.oninput = function()
{
    output.innerHTML = this.value;
}

//--------------------------------------------------------------------------------------------------------------------------
//PATIENT INFORMATION FORM VALIDATION
function checkfirstname()
{
    let firstnameinput = document.getElementById("firstname").value;
    if (firstnameinput.length < 1)
    {
        document.getElementById("firstnameText").innerHTML = "First name is required";
        error_flag = 1;  
    }
    else
    {
        if (firstnameinput.match(/^[A-Za-z'-]{1,30}$/))
        {
            document.getElementById("firstnameText").innerHTML = "";
        }
        else
        {
            document.getElementById("firstnameText").innerHTML = "First name must contain only letters, apostrophes, and dashes";
            error_flag = 1;
        }
    }
}
function checkmiddleinitial()
{
    let middleinitialinput = document.getElementById("middleinitial").value;
    if (middleinitialinput.length < 1)
    {
        document.getElementById("middleinitialText").innerHTML = "";
    }
    else
    {
        if (middleinitialinput.match(/^[A-Za-z]{1}$/))
        {
            document.getElementById("middleinitialText").innerHTML = "";
        }
        else
        {
            document.getElementById("middleinitialText").innerHTML = "Middle initial must contain only letters";
            error_flag = 1;
        }
    }
}
function checklastname()
{
    let lastnameinput = document.getElementById("lastname").value;
    if (lastnameinput.length < 1)
    {
        document.getElementById("lastnameText").innerHTML = "Last name is required";
        error_flag = 1;
    }
    else
    {
        if (lastnameinput.match(/^[A-Za-z'-]{1,30}$/))
        {
            document.getElementById("lastnameText").innerHTML = "";
        }
        else
        {
            document.getElementById("lastnameText").innerHTML = "Last name must contain only letters, apostrophes, and dashes";
            error_flag = 1;
        }
    }
}
function checkgender()
{
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let other = document.getElementById("other").checked;

    if (!male && !female && !other)
    {
        document.getElementById("genderText").innerHTML = "Please select a gender";
        error_flag = 1;
    }
    else
    {
        document.getElementById("genderText").innerHTML = "";
    }
}
//function inspired by W3Schools JavaScript Date: https://www.w3schools.com/js/js_dates.asp
function checkdob()
{
    let dobinput = document.getElementById("dob").value;
    if (dobinput.length < 1)
    {
        document.getElementById("dobText").innerHTML = "Date of Birth is required";
        error_flag = 1;
    }
    else
    {
        let dobdate = new Date(dobinput);
        let today = new Date();
        let oldestDate = new Date();
        oldestDate.setFullYear(today.getFullYear() - 120);

        if (dobdate > today)
        {
            document.getElementById("dobText").innerHTML = "Date of Birth cannot be in the future";
            error_flag = 1;
        }
        else if (dobdate < oldestDate)
        {
            document.getElementById("dobText").innerHTML = "Date of Birth cannot be more than 120 years ago";
            error_flag = 1;
        }
        else
        {
            document.getElementById("dobText").innerHTML = "";
        }
    }
}
function checkemail()
{
    let emailinput = document.getElementById("email").value;
    emailinput = emailinput.toLowerCase();
    document.getElementById("email").value = emailinput;
    if (emailinput.length < 1)
    {
        document.getElementById("emailText").innerHTML = "Email is required";
        error_flag = 1;
    }
    else
    {
        if (emailinput.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/))
        {
            document.getElementById("emailText").innerHTML = "";
        }
        else
        {
            document.getElementById("emailText").innerHTML = "Enter an email in the format name@email.com";
            error_flag = 1;
        }
    }
}
function checkphone()
{
    let phoneinput = document.getElementById("phone").value;
    if (phoneinput.length < 1)
    {
        document.getElementById("phoneText").innerHTML = "Phone number is required";
        error_flag = 1;
    }
    else
    {
        if (phoneinput.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/))
        {
            document.getElementById("phoneText").innerHTML = "";
        }
        else
        {
            document.getElementById("phoneText").innerHTML = "Phone number must be in this format: 000-000-0000";
            error_flag = 1;
        }
    }
}
function checkssn()
{
    let ssninput = document.getElementById("ssn").value;
    if (ssninput.length === 3)
    {
        ssninput = ssninput + "-";
    }
    else if (ssninput.length === 6)
    {
        ssninput = ssninput + "-";
    }
    document.getElementById("ssn").value = ssninput;
    if (ssninput.length < 1)
    {
        document.getElementById("ssnText").innerHTML = "Social Security Number is required";
        error_flag = 1;
    }
    else 
    {
        if (ssninput.match(/^[0-9]{3}-[0-9]{2}-[0-9]{4}$/))
        {
            document.getElementById("ssnText").innerHTML = "";
        }
        else
        {
            document.getElementById("ssnText").innerHTML = "Enter a 9-digit Social Security Number in the format 123-45-6789";
            error_flag = 1;
        }
    }
}

//--------------------------------------------------------------------------------------------------------------------------
//ADDRESS FORM VALIDATION
function checkaddress1()
{
    let address1input = document.getElementById("address1").value;

    if (address1input.length < 2)
    {
        document.getElementById("address1Text").innerHTML = "Address Line 1 is required";
        error_flag = 1;
    }
    else
    {
        if (address1input.match(/^[A-Za-z0-9\s,'-]{2,30}$/))
        {
            document.getElementById("address1Text").innerHTML = "";
        }
        else
        {
            document.getElementById("address1Text").innerHTML = "Invalid characters in address";
            error_flag = 1;
        }
    }
}
function checkaddress2()
{
    let address2input = document.getElementById("address2").value;

    if (address2input.length < 1)
    {
        document.getElementById("address2Text").innerHTML = "";
    }
    else
    {
        if (address2input.match(/^[A-Za-z0-9\s,#'-]{2,30}$/))
        {
            document.getElementById("address2Text").innerHTML = "";
        }
        else
        {
            document.getElementById("address2Text").innerHTML = "Invalid characters in address";
            error_flag = 1;
        }
    }
}
function checkcity()
{
    let cityinput = document.getElementById("city").value;

    if (cityinput.length < 2)
    {
        document.getElementById("cityText").innerHTML = "City is required";
        error_flag = 1;
    }
    else
    {
        if (cityinput.match(/^[A-Za-z\s'-]{2,30}$/))
        {
            document.getElementById("cityText").innerHTML = "";
        }
        else
        {
            document.getElementById("cityText").innerHTML = "City must contain only letters, apostrophes, and dashes";
            error_flag = 1;
        }
    }
}
function checkstate()
{
    let stateinput = document.getElementById("state").value;

    if (stateinput == "")
    {
        document.getElementById("stateText").innerHTML = "Please select a state";
        error_flag = 1;
    }
    else 
    {
        document.getElementById("stateText").innerHTML = "";
    }
}
function checkzip()
{
    let zipinput = document.getElementById("zip").value;

    if (zipinput.length < 1)
    {
        document.getElementById("zipText").innerHTML = "Zip code is required";
        error_flag = 1;
    }
    else if (zipinput.length < 5)
    {
        document.getElementById("zipText").innerHTML = "Zip code must be 5 digits";
        error_flag = 1;
    }
    else
    {
        if (zipinput.match(/^[0-9]{5}$/))
        {
            document.getElementById("zipText").innerHTML = "";
        }
        else
        {
            document.getElementById("zipText").innerHTML = "Invalid zip code format";
            error_flag = 1;
        }
    }
}

//--------------------------------------------------------------------------------------------------------------------------
//REASON FOR VISIT FORM VALIDATION
function checksymptoms()
{
    let symptomsinput = document.getElementById("symptoms").value;
    if (symptomsinput.length < 1)
    {
        document.getElementById("symptomsText").innerHTML = "";
    }
    else if (symptomsinput.match(/^[A-Za-z0-9\s.,'-]{2,250}$/))
    {
        document.getElementById("symptomsText").innerHTML = "";
    }
    else
    {
        document.getElementById("symptomsText").innerHTML = "Please only use letters, numbers and basic punctuation";
        error_flag = 1;
    }
}
function checkvaccinated()
{
    let yes = document.getElementById("vac_yes").checked;
    let no = document.getElementById("vac_no").checked;

    if (!yes && !no)
    {
        document.getElementById("vaccinatedText").innerHTML = "Please select Yes or No";
        error_flag = 1;
    }
    else
    {
        document.getElementById("vaccinatedText").innerHTML = "";
    }   
}
function checkinsurance()
{
    let yes = document.getElementById("insur_yes").checked;
    let no = document.getElementById("insur_no").checked;

    if (!yes && !no)
    {
        document.getElementById("insuranceText").innerHTML = "Please select Yes or No";
        error_flag = 1;
    }
    else
    {
        document.getElementById("insuranceText").innerHTML = "";
    }
}
//--------------------------------------------------------------------------------------------------------------------------
//ACCOUNT VALIDATION
//Checks if user ID meets requirements
function checkuserid()
{
    let useridinput = document.getElementById("userid").value;

    if (useridinput.length < 1)
    {
        document.getElementById("useridText").innerHTML = "User ID is required";
        error_flag = 1;
    }
    else
    {
        if (useridinput.match(/^[A-Za-z][A-Za-z0-9_-]{4,19}$/))
        {
            document.getElementById("useridText").innerHTML = "";
        }
        else
        {
            document.getElementById("useridText").innerHTML = "User ID must start with a letter and be 5 to 20 characters";
            error_flag = 1;
        }
    }
}
//Checks if password meets requirements
function passwordentry()
{
    let passwordoutput;

    let passwordinput = document.getElementById("password").value;
    let userid = document.getElementById("userid").value.toLowerCase();
    let firstname = document.getElementById("firstname").value.toLowerCase();
    let lastname = document.getElementById("lastname").value.toLowerCase();

    if (passwordinput.length < 1)
    {
        passwordoutput = "Password is required";
        error_flag = 1;
    }
    else if (passwordinput.search(/[A-Z]/) < 0)
    {
        passwordoutput = "Enter at least one uppercase letter";
        error_flag = 1;
    }
    else if (passwordinput.search(/[a-z]/) < 0)
    {
        passwordoutput = "Enter at least one lowercase letter";
        error_flag = 1;
    }
    else if (passwordinput.search(/[0-9]/) < 0)
    {
        passwordoutput = "Enter at least one number";
        error_flag = 1;
    }
    else if (passwordinput.search(/[!@#%^&*()_\-+=\\\/><.,`~]/) < 0)
    {
        passwordoutput = "Enter at least one special character";
        error_flag = 1;
    }
    else if (passwordinput.search(/["']/) >= 0)
    {
        passwordoutput = "Password must not contain quotes. Please remove it";
        error_flag = 1;
    }
    else if (passwordinput.length < 8)
    {
        passwordoutput = "Enter at least 8 characters";
        error_flag = 1;
    }
    else if (passwordinput.length > 20)
    {
        passwordoutput = "Password cannot be longer than 20 characters";
        error_flag = 1;
    }
    else if (userid != "" && passwordinput.toLowerCase().includes(userid))
    {
        passwordoutput = "Password cannot contain your User ID";
        error_flag = 1;
    }
    else if (firstname != "" && passwordinput.toLowerCase().includes(firstname))
    {
        passwordoutput = "Password cannot contain your first name";
        error_flag = 1;
    }
    else if (lastname != "" && passwordinput.toLowerCase().includes(lastname))
    {
        passwordoutput = "Password cannot contain your last name";
        error_flag = 1;
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
    let x = document.getElementById("password").value;
    let y = document.getElementById("repassword").value;

    if (y.length < 1)
    {
        document.getElementById("passwordText2").innerHTML = "Please re-enter your password";
        error_flag = 1;
    }
    else if (x === y)
    {
        document.getElementById("passwordText2").innerHTML = "Passwords match!";
    }
    else
    {
        document.getElementById("passwordText2").innerHTML = "Passwords do not match!";
        error_flag = 1;
    }
}
//--------------------------------------------------------------------------------------------------------------------------
//FINAL FORM VALIDATION
function validateForm()
{
    error_flag = 0;

    checkfirstname();
    checkmiddleinitial();
    checklastname();
    checkgender();
    checkdob();
    checkemail();
    checkphone();
    checkssn();

    checkaddress1();
    checkaddress2();
    checkcity();
    checkstate();
    checkzip();

    checksymptoms();
    checkvaccinated();
    checkinsurance();

    checkuserid();
    passwordentry();
    checkpassword2();

    if (error_flag == 1)
    {
        document.getElementById("submit").disabled = true;
        return false;
    }
    else
    {
        document.getElementById("submit").disabled = false;
        return true;
    }
}

//--------------------------------------------------------------------------------------------------------------------------
//RESET BUTTON
//Button reset adapted with assistance from OpenAI ChatGPT.
function clearForm()
{
    document.getElementById("firstnameText").innerHTML = "";
    document.getElementById("middleinitialText").innerHTML = "";
    document.getElementById("lastnameText").innerHTML = "";
    document.getElementById("genderText").innerHTML = "";
    document.getElementById("dobText").innerHTML = "";
    document.getElementById("emailText").innerHTML = "";
    document.getElementById("phoneText").innerHTML = "";
    document.getElementById("ssnText").innerHTML = "";
    document.getElementById("address1Text").innerHTML = "";
    document.getElementById("address2Text").innerHTML = "";
    document.getElementById("cityText").innerHTML = "";
    document.getElementById("stateText").innerHTML = "";
    document.getElementById("zipText").innerHTML = "";
    document.getElementById("vaccinatedText").innerHTML = "";
    document.getElementById("insuranceText").innerHTML = "";
    document.getElementById("useridText").innerHTML = "";
    document.getElementById("passwordText").innerHTML = "";
    document.getElementById("passwordText2").innerHTML = "";
    document.getElementById("submit").disabled = true;

    document.getElementById("symptomsText").innerHTML = "";
}


/*
MIS 3371 Homework 2 examples provided by Professor Jake Messinger.
W3Schools HTML Forms: https://www.w3schools.com/html/html_forms.asp
W3Schools CSS: https://www.w3schools.com/css/
W3Schools JavaScript Date: https://www.w3schools.com/js/js_dates.asp
Some form structure and date logic were adapted and customized for this assignment.
*/