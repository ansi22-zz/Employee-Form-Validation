// function to check for white-space
function containsWhitespace(str) {
  return /\s/.test(str);
}

// function to check for marital-status and set active/inactive spouse textfield
function maritalStatus() {
  let marital = document.forms["empform"]["marital"];
  if (marital[0].checked == true) {
    document.getElementById("spousename").disabled = false;
  } else if (marital[1].checked == true) {
    document.getElementById("spousename").disabled = true;
  }
}

//function to validate form
function validateForm() {
  let firstName = document.forms["empform"]["firstname"].value;
  let lastName = document.forms["empform"]["secondname"].value;
  let gender = document.forms["empform"]["gender"];
  let marital = document.forms["empform"]["marital"];
  let description = document.forms["empform"]["description"].value;
  let spouseName = document.forms["empform"]["spousename"].value;

  // checks for empty fields
  if (firstName == null || firstName == "") {
    alert("First name can't be empty!");
    return 0;
  } else if (lastName == null || lastName == "") {
    alert("Last name can't be empty!");
    return 0;
  } else if (gender[0].checked == false && gender[1].checked == false) {
    alert("Please select your gender!");
    return 0;
  } else if (marital[0].checked == false && marital[1].checked == false) {
    alert("Please select your Marital status!");
    return 0;
  }
  
  if (marital[0].checked == true) {
    if (spouseName == null || spouseName == "") {
      alert("Spouse name can't be empty!");
      return 0;
    }
    if (containsWhitespace(spouseName) == true) {
      alert("Whitespace found in Spouse Name, click respective field to edit!");
      return 0;
    }
  }

  if (description == null || description == "") {
    alert("Description can't be empty!");
    return 0;
  }

  if (document.getElementById("check").checked == false) {
    alert("Checkbox not marked!");
    return 0;
  }

  // checks for white-space
  if (containsWhitespace(firstName) == true) {
    alert("Whitespace found in First Name, click respective field to edit!");
    return 0;
  }

  if (containsWhitespace(lastName) == true) {
    alert("Whitespace found in Last Name, click respective field to edit!");
    return 0;
  }
  
  //thankyou alert if everything works fine
  alert(
    "Employee input has been saved, to input other record press reset button. Thankyou!"
  );
}
