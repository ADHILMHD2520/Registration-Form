function validateForm() {
  const fname = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const Phone = document.getElementById("Phone").value;
  const male = document.getElementById("male").checked;
  const female = document.getElementById("female").checked;
  const Mern = document.getElementById("Mern").checked;
  const Django = document.getElementById("Django").checked;
  const ml = document.getElementById("ml").checked;
  const duration = document.getElementById("duration").value;
  const pwd = document.getElementById("pwd").value;
  const confpwd = document.getElementById("conf-pwd").value;
  const m6=document.getElementById("m6").value;
  const m12=document.getElementById("m12").value;
  const m3=document.getElementById("m3").value;

  const msg=document.getElementById("wel");

  nameErr.textContent = "";
  emailErr.textContent = "";
  PhoneError.textContent = "";
  genderErr.textContent = "";
  courseErr.textContent = "";
  durationErr.textContent = "";
  pwdErr.textContent = "";
  pwdErrl.textContent="";

  isValid = true;

  if (fname === "") {
    nameErr.textContent = "Please enter your name properly";
    console.log("name is not enterted");
    isValid = false;
  }


  if (email === "" || !email.includes("@") || !email.includes(".")) {
        emailErr.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if(Phone.length!=10){
        PhoneError.textContent="Please Enter Valid Mobile Number."
    }

    if(pwd.length<6){
        pwdErr.textContent="Please enter a password with at least 6 characters";
        isValid = false;

    }

    if(pwd!=confpwd){
        pwdErrl.textContent="Password mismatch";
        isValid=false;
    }

    if(!male && !female){
        genderErr.textContent="Please select any of the gender."
        isValid=false;
    }

    if(!Mern && !Django && !ml){
        courseErr.textContent="Atlease Choose one course";
        isValid=false;
    }

    if(!m6&&!m3&&!m12){
        durationErr.textContent="Please select the duration"
        isValid=false
    }

    console.log(pwd);
    console.log(confpwd);
    console.log(pwd===confpwd);


    



  if (isValid) {
    // alert("Form submitted successfully!");
    document.getElementById("wel").innerHTML="Welcome"


    return true;
  } else {
    document.getElementById("wel").innerHTML="Try Again"

    return false;
  }
}
