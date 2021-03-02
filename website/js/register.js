function createUser(){

  let email = document.getElementById("email").value;
  let name = document.getElementById("userName").value;
  let password = document.getElementById("password").value;

  let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("success").innerText = "Saved Successfully";
      }
    };
    xhttp.open("GET", "http://localhost:5000/api/v1/createUser?userName="+name+"&email="+email+"&password="+password, true);
    xhttp.send();
}