function ComenzarMision(){
    alert("Mision espacial iniciada, buena suerte viajero!");

    let segundo = 10;
    const cuentaRegresivaElement = document.getElementById("cuentaRegresiva");

    function actualizarCuentaRegresiva(){
        cuentaRegresivaElement.textContent=`La misión comenzará en ${segundo} segundos...`;
        segundo--;
        if(segundo < 0) {
            cuentaRegresivaElement.textContent = "La mision ha comenzado!";
        }
    }

    setInterval(actualizarCuentaRegresiva, 1000);
}
