function showDateTime() {
    document.getElementById("datetime").innerHTML
    "Date & Time:" + new Date();
}

function validateForm() {
    if(
        document.getElementById("name").value == "" ||
        document.getElementById("email").value == "" ||
        document.getElementById("message").value == ""
    ) {

      alert("Please fill all fields");
      return false;
     }
     alert("From submitted successfully!");
     return true;
    }