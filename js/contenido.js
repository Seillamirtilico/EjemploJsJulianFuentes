function nuevoParrafo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;
    contenido.innerHTML = contenido.innerHTML + '<p>' + texto + '</p>';
    }

    document.getElementById('imagen').onchange = function(evt) {
        var entradaArchivo = evt.target,
            archivos = entradaArchivo.files;
        if (FileReader && archivos && archivos.length) {
            var imagen = new FileReader();
            imagen.onload = function() {
                var etiquetaImg = document.createElement("img");
                etiquetaImg.setAttribute('src', imagen.result);
                etiquetaImg.setAttribute('width', '200px');
                etiquetaImg.setAttribute('height', '180px');
                var contenido = document.getElementById('contenido');
                contenido.appendChild(etiquetaImg);
            }
            imagen.readAsDataURL(archivos[0]);
        }
    }

    function imprimir(){
        var divContents = document.getElementById("contenido").innerHTML;
        var a = window.open('', '', 'height=500, width=500');
        a.document.write('<html>');
        a.document.write('<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />');
        a.document.write('<body > <h1>Resultado</h1> <br>');
        a.document.write(divContents);
        a.document.write('</body></html>');
        a.document.close();
        a.print();
        }

     function nuevoTitulo() {
            var contenido = document.getElementById('contenido');
            var texto = document.getElementById("texto").value;
            contenido.innerHTML = contenido.innerHTML + '<h2>' + texto + '</h2>';
        }

    function nuevoEnlace() {
            var contenido = document.getElementById('contenido');
            
            // Pedir la URL y el texto del enlace
            var url = prompt("Ingrese la URL del enlace:");
            var texto = prompt("Ingrese el texto del enlace:");
        
            // Verificar que el usuario ingresó ambos valores
            if (url && texto) {
                contenido.innerHTML += '<a href="' + url + '" target="_blank">' + texto + '</a><br>';
            } else {
                alert("Debe ingresar tanto la URL como el texto del enlace.");
            }
        }
            
            
        
    