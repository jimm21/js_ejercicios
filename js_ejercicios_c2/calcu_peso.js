function CalcularPesos(){

    let pesoTierra = parseFloat(document.getElementById("peso").value);

    if (isNaN(pesoTierra)){
        document.getElementById("resultados").textContent("Por favor, ingrese un peso válido.");
        return;
    }

    const pesosEnPlanetas = {
        mercurio: pesoTierra * 0.38, 
        venus: pesoTierra * 0.91, 
        marte: pesoTierra * 0.38, 
        jupiter: pesoTierra * 2.34, 
        saturno: pesoTierra * 1.06, 
        urano: pesoTierra * 0.92, 
        neptuno: pesoTierra * 1.19,
    };
    
    const resultadosElement = document.getElementById("resultados");
    resultadosElement.innerHTML = "<h2>Pesos en otros planetas:</h2>";
    
    for (const planeta in pesosEnPlanetas){
        resultadosElement.innerHTML += `<p>${planeta.charAt(0).toUpperCase() + planeta.slice(1)}: ${pesosEnPlanetas[planeta].toFixed(2)} kg</p>`;
    }

}