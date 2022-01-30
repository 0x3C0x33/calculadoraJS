function igual(elementoLogico) {
    var historial1 , historial2 , resultado;
    if (calculadora.historial1.value == "") {
        calculadora.historial1.value = calculadora.calc_consola.value;
        calculadora.calc_consola.value = "";
    }  
    if (elementoLogico == 10) {
        historial1 = parseFloat(calculadora.historial1.value);
        historial2 = parseFloat(calculadora.calc_consola.value);
        elementoLogico = parseFloat(calculadora.elementoLogico.value);
        switch (elementoLogico) {
            case 1:resultado = historial1 + historial2;break;
            case 4:resultado = historial1 / historial2;break;
            case 2:resultado = historial1 - historial2;break;
            case 3:resultado = historial1 * historial2;break;
            case 5:resultado = Math.pow(historial1,historial2);break;
            default:limpiar();
        }
        limpiar2();
        calculadora.elementoLogico.value = elementoLogico;
        calculadora.calc_consola.value = resultado;
        varHisto = parseInt(calculadora.varHistorial.value);
        calculadora.varHistorial.value = varHisto + 1;
        histo();
    }
    if (elementoLogico >= 1 || elementoLogico <= 5 ) {
        calculadora.elementoLogico.value = elementoLogico;
    }
}

function limpiar(params) {
    calculadora.calc_consola.value = "";
    calculadora.historial1.value = "";
    calculadora.elementoLogico.value = "";
}

function limpiar2(params) {
    calculadora.elementoLogico.value = "";
    calculadora.historial1.value = "";
}

function num(numero) {
    
    if (isNaN(calculadora.calc_consola.value)) {
        calculadora.calc_consola.value = "";
    }
    if (numero == 10) {
        numero = ".";
    }
    var historial = calculadora.calc_consola.value;
    calculadora.calc_consola.value = historial + numero;
}

function retroceso(params) {
    let numeros = Array.from(calculadora.calc_consola.value);
    calculadora.calc_consola.value = "";   
    for (let i = 0; i < numeros.length-1; i++) {
        calculadora.calc_consola.value += numeros[i];
    }
}

function historial(numHisto) {
    switch (numHisto) {
        case 1: calculadora.calc_consola.value = calculadora.histo1.value;break;
        case 2: calculadora.calc_consola.value = calculadora.histo2.value;break;
        case 3: calculadora.calc_consola.value = calculadora.histo3.value;break;
        case 4: calculadora.calc_consola.value = calculadora.histo4.value;break;
        case 5: calculadora.calc_consola.value = calculadora.histo5.value;break;
    }
}

function histo() {
    var variable = parseInt(calculadora.varHistorial.value);

    if (variable == 6) {
        variable = 1;
        calculadora.varHistorial.value = 1;     
    }
    switch (variable) {
        case 1:calculadora.histo1.value = calculadora.calc_consola.value;break;
        case 2:calculadora.histo2.value = calculadora.calc_consola.value;break;
        case 3:calculadora.histo3.value = calculadora.calc_consola.value;break;
        case 4:calculadora.histo4.value = calculadora.calc_consola.value;break;
        case 5:calculadora.histo5.value = calculadora.calc_consola.value;break;
    }
}
