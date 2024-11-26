let estado = "apagado";

function controlarBoton(){
    if (estado == "apagado") {
        estado = "prendido";
        console.log("Estoy prendido");
        document.getElementById('fire').style.background='#dede00';
        document.getElementById('container').style.background='#fdf9b9';
    }else{
        estado = "apagado"
        console.log("Estoy apagado");
        document.getElementById('fire').style.background='#d3cc94';
        document.getElementById('container').style.background='#8b8b68';
    }
}

