window.onload = function(){

    class NaveEspacial{
        constructor(nombre, capacidad, v_max){
            this.nombre = nombre;
            this.capacidad = capacidad; //toneladas
            this.v_max = v_max; //km/h
        }
    }
    
    function encontrarNaveVeloz(naves)
    {
        let velocidad_max = -1;
        let naveVeloz;
        naves.forEach(function(nave) {        
            if (nave.v_max > velocidad_max){
                velocidad_max = nave.v_max;
                naveVeloz = nave;
            }
        });
        
        return naveVeloz;
    }
    
    function encontrarCapacidadFlota(naves)
    {
        let capacidad = 0;
        naves.forEach(function(nave) {
            capacidad += nave.capacidad;
        });
    
        return capacidad;
    }
    
    const naveTesla = new NaveEspacial("TeslaDog", 20, 12);
    const naveAuron = new NaveEspacial("Auron2000", 12, 25);
    const naveTorpedo = new NaveEspacial("RBB21x", 10, 50);
    const naves = [naveTesla, naveAuron, naveTorpedo];
    
    const naveVeloz = encontrarNaveVeloz(naves);
    const capacidadFlota = encontrarCapacidadFlota(naves);
    
    const navesElement = document.getElementById("naves");
    for(const nave of naves){
        navesElement.innerHTML += `<div>
                                        <li>Nombre: ${nave.nombre}</li>
                                        <li>Capacidad: ${nave.capacidad} toneladas</li>
                                        <li>Velocidad máxima: ${nave.v_max} km/h</li>    
                                    </div>` 
    }

    const resultadosElement = document.getElementById("resultados");
    resultadosElement.innerHTML = "<h2>Nave super:</h2>";
    resultadosElement.innerHTML += `<p>La nave más velos es ${naveVeloz.nombre} con una velocidad de ${naveVeloz.v_max} km/h`;
    resultadosElement.innerHTML += "<h2>Capacidad flota:</h2>";
    resultadosElement.innerHTML += `<p>Toda la flota tiene una capacidad de carga de ${capacidadFlota} toneladas`;
    
}


