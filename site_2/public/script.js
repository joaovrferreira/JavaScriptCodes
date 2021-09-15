function carregarTitulo() {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText)
            var titulo = document.getElementById('title')
            titulo.innerHTML = json.title
        }
    }
    xhttp.open('GET', 'http://localhost:3000/joao')
    xhttp.send();
}