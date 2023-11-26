let buton0 = document.querySelector(".b-0");
let buton1 = document.querySelector(".b-1");
let buton2 = document.querySelector(".b-2");
let buton3 = document.querySelector(".b-3");
let buton4 = document.querySelector(".b-4");
let buton5 = document.querySelector(".b-5");
let buton6 = document.querySelector(".b-6");
let buton7 = document.querySelector(".b-7");
let buton8 = document.querySelector(".b-8");
let buton9 = document.querySelector(".b-9");
let butonIgual = document.querySelector(".b-igual");
let butonPunto = document.querySelector(".b-punto");
let butonSuma = document.querySelector(".b-mas");
let butonResta = document.querySelector(".b-menos");
let butonMulti = document.querySelector(".b-multi");
let butonDiv = document.querySelector(".b-div");
let ventana = document.querySelector(".ventana");
let borrar = document.querySelector(".b-CE");
let operacion = "";
let resultado = 0;
let primerNumero = 0;
let segundoNumero = 0;


buton0.addEventListener("click", function(e){
    ventana.value += "0";
})
buton1.addEventListener("click", function(e){
    ventana.value += "1";
})
buton2.addEventListener("click", function(e){
    ventana.value += "2";
})
buton3.addEventListener("click", function(e){
    ventana.value += "3";
})
buton4.addEventListener("click", function(e){
    ventana.value += "4";
})
buton5.addEventListener("click", function(e){
    ventana.value += "5";
})
buton6.addEventListener("click", function(e){
    ventana.value += "6";
})
buton7.addEventListener("click", function(e){
    ventana.value += "7";
})
buton8.addEventListener("click", function(e){
    ventana.value += "8";
})
buton9.addEventListener("click", function(e){
    ventana.value += "9";
})

butonPunto.addEventListener("click", function(e){
    ventana.value += ".";
})

butonSuma.addEventListener("click", function(e){
    if(ventana.value.includes(".")){
        primerNumero = parseFloat(ventana.value);
        ventana.value = "";
        operacion = "+";
    } 
    else{
        primerNumero = parseInt(ventana.value);
        ventana.value = "";
        operacion = "+";
    }
})

butonResta.addEventListener("click", function(e){
    if(ventana.value.includes(".")){
        primerNumero = parseFloat(ventana.value);
        ventana.value = "";
        operacion = "-";
    } 
    else{
        primerNumero = parseInt(ventana.value);
        ventana.value = "";
        operacion = "-";
    }
})

butonMulti.addEventListener("click", function(e){
    if(ventana.value.includes(".")){
        primerNumero = parseFloat(ventana.value);
        ventana.value = "";
        operacion = "*";
    } 
    else{
        primerNumero = parseInt(ventana.value);
        ventana.value = "";
        operacion = "*";
    }
})

butonDiv.addEventListener("click", function(e){
    if(ventana.value.includes(".")){
        primerNumero = parseFloat(ventana.value);
        ventana.value = "";
        operacion = "/";
    } 
    else{
        primerNumero = parseInt(ventana.value);
        ventana.value = "";
        operacion = "/";
    }
})

butonIgual.addEventListener("click", function(e){
    if(ventana.value.includes(".")){
        segundoNumero = parseFloat(ventana.value);
        if(operacion == "+"){
            resultado = primerNumero+segundoNumero;
        }
        else if(operacion == "-"){
            resultado = primerNumero-segundoNumero;
        }
        else if(operacion == "*"){
            resultado = primerNumero*segundoNumero; 
        }
        else{
            resultado = primerNumero/segundoNumero;
        }
        ventana.value = resultado;
    } 
    else{
        segundoNumero = parseInt(ventana.value);
        if(operacion == '+'){
            resultado = primerNumero+segundoNumero;
        }
        else if(operacion == '-'){
            resultado = primerNumero-segundoNumero;
        }
        else if(operacion == '*'){
            resultado = primerNumero*segundoNumero; 
        }
        else{
            resultado = primerNumero/segundoNumero;
        }
        ventana.value = resultado;
    }
})

borrar.addEventListener("click", function(e){
    ventana.value = "";
    resultado = 0;
    primerNumero = 0;
    segundoNumero = 0;
})

