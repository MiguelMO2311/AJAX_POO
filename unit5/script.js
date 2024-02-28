var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // La respuesta del servidor se encuentra en 'this.responseText'
       console.log(this.responseText);
    }
};
xhttp.open("GET", "miarchivo.php", true);
xhttp.send();


