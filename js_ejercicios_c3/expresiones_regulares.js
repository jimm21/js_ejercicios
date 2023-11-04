window.onload = function(){
    function evaluarCoordenadas(coordenadas){
        let validas = [];
        let patron = /^[+-]?\d*\.?\d+\s*,\s*[+-]?\d*\.?\d+\s*,\s*[+-]?\d*\.?\d+$/;
        coordenadas.forEach(function(coordenada) {
            if(patron.test(coordenada)){
                validas.push(coordenada);
            }
        });
    
        return validas;
    }
    
    const coordenadas = [
                            "2.2, 4.0, 0.22",
                            "2, -4.2, -2",
                            "0, 1.22, 5",
                            "0, 0, 0",
                            "x, y, z",
                            "2, 3",
                            "2",
                            "2, 1, 2, 3"
                        ];
    const coordenadasValidas = evaluarCoordenadas(coordenadas);
    
    const coordenadasElement = document.getElementById("coordenadas");
    const coordenadasValidasElement = document.getElementById("validas");
    
    coordenadas.forEach(function(coordenada){
        coordenadasElement.innerHTML += `<li>${coordenada}</li>`;
    });
    
    coordenadasValidas.forEach(function(coordenada){
        coordenadasValidasElement.innerHTML += `<li>${coordenada}</li>`;
    });
}



