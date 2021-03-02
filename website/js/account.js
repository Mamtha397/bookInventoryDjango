getUserAccount();

function getUserAccount(){

  var user = localStorage.getItem("user");

  let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var resultJson = JSON.parse(this.responseText);
        console.log(resultJson.data,"resultJson.data");
        let newHTML = '';
        for(let i=0;i<resultJson.data.length;i++){
          newHTML +=`<tr>
          <td>${resultJson.data[i][1]}</td>
          <td>${resultJson.data[i][3]}</td>
          <td>${resultJson.data[i][4]}</td>
      </tr>`
        }
        document.getElementById("tableBody").innerHTML = newHTML;
      }
    };
    xhttp.open("GET", "http://localhost:5000/api/v1/getAccount?user="+user, true);
    xhttp.send();
}

function logout(){
  localStorage.clear();
  window.location.replace("/website/index.html");
}