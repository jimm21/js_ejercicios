function MostrarDetalles(){
    let name = "Explorer 1";
    let tripulacion = 4;
    let v_max = 100000; //Km/h
    let c_max = 10; // 10 toneladas
    const detallesElement = document.getElementById("detalles");
    detallesElement.innerHTML = `<p>Nombre: ${name}</p>`;
    detallesElement.innerHTML += `<p>Tripulación: ${tripulacion} astronautas</p>`;
    detallesElement.innerHTML += `<p>Velocidad máxima: ${v_max} Km/h`;
    detallesElement.innerHTML += `<p>Carga máxima: ${c_max} toneladas`;

}