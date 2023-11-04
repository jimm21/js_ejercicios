function CambiarDatos(n){
    let name = ["Satélite A", "Satélite B", "Satélite C"];
    let orbita = ["Órbita Circular", "Órbita cementerio", "Órbita Polar"];
    let year_launch = [2010, 2012, 2015];

    const infoElement = document.getElementsByClassName("info-satelite")[0];
    infoElement.innerHTML = `<h2>Información del satélite</h2>`;
    infoElement.innerHTML += `<p>Nombre: ${name[n-1]}</p>`;
    infoElement.innerHTML += `<p>Órbita: ${orbita[n-1]}</p>`;
    infoElement.innerHTML += `<p>Lanzamiento: ${year_launch[n-1]}</p>`;

}

window.onload = function(){
    var barra = document.getElementsByTagName("nav")[0];
    var opciones = barra.getElementsByClassName("opciones")[0];
    var lugar = opciones.getElementsByTagName("li");

    var enlace1 = lugar[0].getElementsByTagName("a")[0];
    var enlace2 = lugar[1].getElementsByTagName("a")[0];
    var enlace3 = lugar[2].getElementsByTagName("a")[0];

    enlace1.addEventListener("click", function(){CambiarDatos(1)}, false);
    enlace2.addEventListener("click", function(){CambiarDatos(2)}, false);
    enlace3.addEventListener("click", function(){CambiarDatos(3)}, false);
}