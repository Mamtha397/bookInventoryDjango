function createBook(){

  let bookName = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let category = document.getElementById("category").value;
  let date = new Date();

  let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("success").innerText = "Saved Successfully";
      }
    };
    xhttp.open("GET", "http://localhost:5000/api/v1/inventoryIn?name="+bookName+"&des="+description+"&category="+category+"&date="+date.toDateString(), true);
    xhttp.send();
}

function logout(){
  localStorage.clear();
  window.location.replace("/website/index.html");
}