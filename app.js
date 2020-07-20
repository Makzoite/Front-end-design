// Get the recent year to update in copyright section
var date = new Date();
document.getElementById("copyright").innerText = date.getFullYear();

// Resposive design 
// Responsive design for small width devices
window.showResposiveMenus = function () {
  var resposiveMobile = document.getElementById("resposiveMobile");
  if (resposiveMobile.style.display == "block") {
    resposiveMobile.style.display = "none";
    document.getElementById("bodySection1").style.marginTop = "52px";
  }
  else {
    resposiveMobile.style.display = "block";
    document.getElementById("bodySection1").style.marginTop = "150px";
  }
}
// end of resposive design


//On form submit
window.formSubmit = function () {
  var displayErrorMessage = false;

  // First name validation
  if (document.getElementById("firstNameText").value.trim() == "") {
    document.getElementById("firstNameError").style.display = "block";
    document.getElementById("firstNameOutline").className = "mdc-notched-outline error-box";
    displayErrorMessage = true;
  }
  else{
    document.getElementById("firstNameError").style.display = "none";
    document.getElementById("firstNameOutline").className = "mdc-notched-outline";
  }
  //end of first name validation

  // Last name validation
  if (document.getElementById("lastNameText").value.trim() == "") {
    document.getElementById("lastNameError").style.display = "block";
    document.getElementById("lastNameOutline").className = "mdc-notched-outline error-box";
    displayErrorMessage = true;
  }
  else{
    document.getElementById("lastNameError").style.display = "none";
    document.getElementById("lastNameOutline").className = "mdc-notched-outline";
  }
  // end of last name validation

  // Email validation
  if (document.getElementById("emailText").value.trim() == "") {
    document.getElementById("emailError").style.display = "block";
    document.getElementById("emailOutline").className = "mdc-notched-outline error-box";
    displayErrorMessage = true;
  }
  else{
    document.getElementById("emailError").style.display = "none";
    document.getElementById("emailOutline").className = "mdc-notched-outline";
  }
  // end of email validation

  // Phone number validation
  if (document.getElementById("phoneNumberText").value.trim() == "") {
    document.getElementById("phoneNumberError").style.display = "block";
    document.getElementById("phoneNumberOutline").className = "mdc-notched-outline error-box";
    displayErrorMessage = true;
  }
  else{
    document.getElementById("phoneNumberError").style.display = "none";
    document.getElementById("phoneNumberOutline").className = "mdc-notched-outline";
  }
  // end of phone number validation

  if (displayErrorMessage) {
    document.getElementById("errorMessage").style.display = "block";
  }
  else {
    document.getElementById("formSubmitting").style.display = "block";
    document.getElementById("formContainer").style.display = "none";

    // show spinner loading for 2 seconds
    setTimeout(function(){ 
      document.getElementById("formSubmitting").style.display = "none";
      document.getElementById("formSubmitted").style.display = "block"; 
    }, 2000);
  }
}

// end of form submit