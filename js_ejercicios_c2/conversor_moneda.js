function convertirDinero(){
    let tasaDeCambio = 10;
    let cantidadDolares = parseFloat(document.getElementById("dinero").value);
    if (isNaN(cantidadDolares)) {
        document.getElementById("resultado").textContent =
            "Por favor ingrese una cantida válida en dólares";
        return;
    }
    const cantidadCreditosEspaciales = cantidadDolares * tasaDeCambio;
    const resultadoElement = document.getElementById("resultado");
    document.getElementById("resultado").innerHTML = `<p> ${cantidadDolares} dolares equivale  
        a ${cantidadCreditosEspaciales} créditos espaciales.</p>`;
}