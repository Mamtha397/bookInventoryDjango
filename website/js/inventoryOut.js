function searchBook(){

  let bookName = document.getElementById("search").value;

  let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var resultJson = JSON.parse(this.responseText);
        // console.log(resultJson.data,"resultJson.data");
        let newHTML = '';
        for(let i=0;i<resultJson.data.length;i++){
          let name = (resultJson.data[i][1]).replace(/ /g,"_")
          let userName = localStorage.getItem('user');
          let inDate = (resultJson.data[i][4]).replace(/ /g,"_")
          newHTML +=`<tr>
          <td>${resultJson.data[i][1]}</td>
          <td><button onclick=takeOut('${name}','${userName}','${inDate}')>Take Out</button></td>
      </tr>`
        }
        document.getElementById("tableBody").innerHTML = newHTML;
      }
    };
    xhttp.open("GET", "http://localhost:5000/api/v1/inventoryOut?search="+bookName, true);
    xhttp.send();
}

function takeOut(name, userName, inDate){
  let newName = name.replace(/_/g, ' ');
  let newInDate = inDate.replace(/_/g, ' ');
  let date = new Date();

  let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("success").innerText = "SuccessFully Taken Out";
      }
    };
    xhttp.open("GET", "http://localhost:5000/api/v1/takenOut?name="+newName+"&userName="+userName+"&inDate="+newInDate+"&outDate="+date.toDateString(), true);
    xhttp.send();
}

function logout(){
  localStorage.clear();
  window.location.replace("/website/index.html");
}