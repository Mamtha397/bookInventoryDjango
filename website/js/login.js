function login(){

  let name = document.getElementById("userName").value;
  let password = document.getElementById("password").value;

  let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var resultJson = JSON.parse(this.responseText);
        console.log(resultJson);
        localStorage.setItem("user",resultJson.data[0][0])
        window.location.replace("/website/account.html");
      }
    };
    xhttp.open("GET", "http://localhost:5000/api/v1/login?user="+name+"&password="+password, true);
    xhttp.send();
}