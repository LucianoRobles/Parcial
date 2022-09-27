function irA(pagina) {
    window.location.href = pagina;
}

function changeViewDark(idClase){
    console.log("Entro aca")
    document.getElementById(idClase).style.background = "black";
    document.getElementById(idClase).style.color = "white";
    document.getElementById(idClase).style.borderLeft = "solid white 4px " ;
}

function changeViewWhite(idClase){
    console.log("Entro aca")
    document.getElementById(idClase).style.background = "whitesmoke";
    document.getElementById(idClase).style.color = "black";
    document.getElementById(idClase).style.borderLeft = "solid 4px black" ;
}
