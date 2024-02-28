
// Este código crea una solicitud HTTP, establece una función de devolución de llamada que se ejecutará cuando
//  la respuesta esté lista, y luego envía la solicitud. Cuando la respuesta esté lista, la función de devolución de llamada 
//  procesará la respuesta. Si la solicitud fue realizada con exito (código de estado HTTP 200), entonces se procesará la respuesta. 
//  Si hubo un problema, se registrará un mensaje de error.

var httpRequest;
if (window.XMLHttpRequest) { // Google Crome, Safari, ..
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { 
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {  // solicitud realizada
        if (httpRequest.status === 200) {  // con exito
            var response = JSON.parse(httpRequest.responseText);
            // Aquí puedes hacer algo con la respuesta
            console.log(response);

            // Usando getResponseHeader()
            var contentType = httpRequest.getResponseHeader("Content-Type");
            console.log("Content-Type: " + contentType);
        } else {
            // Hubo un problema con la solicitud
            console.log("Hubo un problema con la solicitud.");
        }
    }
};

// Usando open()
httpRequest.open('GET', 'http://tu-url.com', true);

// Usando send()
httpRequest.send();

// Después de un tiempo, si necesitas abortar la solicitud, puedes usar abort()
setTimeout(function() {
    httpRequest.abort();
}, 5000);  // Abortar después de 5 segundos

