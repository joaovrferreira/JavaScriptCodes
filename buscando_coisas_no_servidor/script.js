function buscar() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange =function() {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText)
            // console.log(json)
            var títuloElement = document.getElementById("título");
            títuloElement.innerHTML = json.title;
        }
    }

    xhttp.open("GET", "localhost:3000")
    xhttp.send(); 
}