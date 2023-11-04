window.onload = function(){
    const planetas = ["Mercurio", "Venus", "Tierra", "Marte", "Jupiter", "Urano", "Neptuno"];
    let cnt = planetas.length;

    const los_planetas = document.getElementsByClassName("planetas")[0];
    const section1 = document.getElementsByClassName("habitables")[0];
    const section2 = document.getElementsByClassName("rocosos")[0];

    planetas.forEach(function(planeta){
        los_planetas.innerHTML += `<li>${planeta.charAt(0).toUpperCase() + planeta.slice(1)}</li>`
    });

    los_planetas.innerHTML += `<p>Los cuales en total son ${cnt}, siendo:</p>`

    function encontrarPlanetasHabitables(planetas)
    {
        const habitables = [];
        planetas.forEach(function(planeta)
        {
            if(planeta == "Tierra" || planeta == "Marte"){
                habitables.push(planeta);
            }
        });
        return habitables;
    }

    function encontrarPlanetasRocosos(planetas)
    {
        const rocosos = [];
        planetas.forEach(function(planeta)
        {
            if(planeta != "Tierra" && planeta != "Marte"){
                rocosos.push(planeta);
            }
        });
        return rocosos;
    }

    const planetasHabitables = encontrarPlanetasHabitables(planetas);
    section1.innerHTML += planetasHabitables.join(", ") + "<br>";

    const planetasRocosos = encontrarPlanetasRocosos(planetas);
    section2.innerHTML += planetasRocosos.join(", ") + "<br>";
}