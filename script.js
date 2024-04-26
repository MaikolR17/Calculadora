var total = document.querySelector("#display");

var num1 = "";
var num2 = "";
var operacion = "";

function press(num) {
    num1 += num;
    total.innerHTML = num1;
}

function setOP(key) {
    operacion = key;
    num2 = num1;
    num1 = "";
}

function clr() {
    num1 = "";
    num2 = "";
    operacion = "";
    total.innerHTML = "0";
}

function calculate() {
    var a = parseInt(num2);
    var b = parseInt(num1);
    var resultado = 0;
    switch (operacion) {
        case "+":
            resultado = a + b;
            break;
        case "-":
            resultado = a - b
            break;
        case "*":
            resultado = a * b;
            break;
        case "/":
            resultado = a / b;
            break;
    }
    num1 = resultado;
    operacion = "";
    total.innerHTML = resultado;
}