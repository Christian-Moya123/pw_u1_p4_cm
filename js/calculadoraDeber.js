var a;
var b;
var operacion;
function init() {
    var resultado = document.getElementById("resultado")
    var suma = document.getElementById("suma")
    var resta = document.getElementById("resta")
    var por = document.getElementById("por")
    var divicion = document.getElementById("divicion")
    var uno = document.getElementById("uno")
    var dos = document.getElementById("dos")
    var tres = document.getElementById("tres")
    var cuatro = document.getElementById("cuatro")
    var cinco = document.getElementById("cinco")
    var seis = document.getElementById("seis")
    var siete = document.getElementById("siete")
    var ocho = document.getElementById("ocho")
    var nueve = document.getElementById("nueve")
    var cero = document.getElementById("cero")
    var igual = document.getElementById("igual")
    var reset = document.getElementById('reset')

    function agregarNumero(numero) {
        resultado.value += numero;
    }

    function limpiar() {
        resultado.value = ""
    }

    function resetear(){
        resultado.value = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
    }

    uno.onclick = () => agregarNumero("1");
    dos.onclick = () => agregarNumero("2");
    tres.onclick = () => agregarNumero("3");
    cuatro.onclick = () => agregarNumero("4");
    cinco.onclick = () => agregarNumero("5");
    seis.onclick = () => agregarNumero("6");
    siete.onclick = () => agregarNumero("7");
    ocho.onclick = () => agregarNumero("8");
    nueve.onclick = () => agregarNumero("9");
    cero.onclick = () => agregarNumero("0");


    suma.onclick = () => {
        a = resultado.value;
        operacion = "+";
        limpiar();

    }

    resta.onclick = () => {
        a = resultado.value;
        operacion = "-";
        limpiar();

    }

    por.onclick = () => {
        a = resultado.value;
        operacion = "*";
        limpiar();

    }

    divicion.onclick = () => {
        a = resultado.value;
        operacion = "/";
        limpiar();

    }

    igual.onclick = () => {
        b = resultado.value;
        resolver();

    }

    reset.onclick = () => {
        resetear()
    }

    function resolver() {
        var res = 0;
        console.log(a,b)
        a = parseFloat(a)
        b = parseFloat(b)

        if (operacion === "+") {
            res = parseFloat(a) + parseFloat(b);
        } else if (operacion === "-") {
            res = parseFloat(a) - parseFloat(b);
        } else if (operacion === "*") {
            res = parseFloat(a) * parseFloat(b);
        } else if (operacion === "/") {
            res = parseFloat(a) / parseFloat(b);
        }


        resultado.value = res;
    }
}