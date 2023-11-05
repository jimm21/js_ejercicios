
let n = 0; //Representa el número de imagen

function Carrusel(){
	//Ruta de las imágenes
	const ruta = [
        "https://images.pexels.com/photos/3805983/pexels-photo-3805983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/13142386/pexels-photo-13142386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/6498998/pexels-photo-6498998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];
	//Obtener el elemento imagen de la página
	const bgImageElement = document.getElementsByClassName("fondo")[0];
    bgImageElement.style.backgroundImage = `url(${ruta[n]})`;
	n++;
	if( n > 3) n = 0;

	//Temporizador: 1000 milisegundos -> 1 segundo
	window.setTimeout("Carrusel()",4000);
}

window.onload = function(){
	Carrusel();
}