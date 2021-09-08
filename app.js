
/////////////////////////////////////////////NIVELL 1///////////////////////////////////////////////////////////////

console.log("Hola mundo");   //exercici 1


/////////////////////////////////////////////////////////


alert("Me llamo Toni");     //exercici 2

//////////////////////////////////////////////////////////

var nom = "Toni";
var cognom = "Oliver";

console.log(nom + " " + cognom); // exercici 3

/////////////////////////////////////////////////////////

var num1 = 5;
var num2 = 8;

console.log("La suma de ", num1, " i ", num2, " es igual a ", num1 + num2); // exercici 4

///////////////////////////////////////////////////////////////////////////

var nota = prompt("Introduce tu nota")

if (nota < 5) {
    alert("La siento has suspendido con un " + nota);
} else {
    alert("¡felicidades! has aprobado con un " + nota);   // exercici 5
}

/////////////////////////////////////////////////////////////////////////////

var string = "Tinc un cotxe de color blau";
string = string.replace("blau", "verd");
console.log(string);


var string2 = "Tinc un cotxe de color blau";
string2 = string2.replace(/o/g, "u");
console.log(string2);                                  // exercici 6

/////////////////////////////////////////////////////////////////////////////

var array = ["taula", "cadira", "ordinador", "llibreta"];

for (var i = 0; i < array.length; i++) {
    console.log("L'objecte " + array[i] + " és a la posició " + i);
}                                                                      // exercici 7

///////////////////////////////////////////////////////////////////////////

operacion = prompt("Introduce uno de los siguentes operdores: sumar , restar o multiplicar");

numA = parseInt(prompt("Introduce un numero"));

numB = parseInt(prompt("Introduce otro numero"));


function calculadora(operador, num1, num2) {

    if (operador == "sumar") {
        alert("El resultado es " + (num1 + num2));
    } else if (operador == "restar") {
        alert("El resultado es " + (num1 - num2));
    } else if (operador == "multiplicar") {
        alert("El resultado es " + (num1 * num2));

    } else {
        alert("No has introducido un operador válido (sumar, restar o multiplicar)");
    }

}

calculadora(operacion, numA, numB);                                     // exercici 9



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// NIVELL 2 //////////////////////////////////////////////////////////////////////


operacion = prompt("Introduce uno de los siguentes operdores: sumar , restar , multiplicar o dividir");

numA = parseInt(prompt("Introduce un numero"));

numB = parseInt(prompt("Introduce otro numero"));


function calculadora(operador, num1, num2) {

    if (operador == "sumar") {
        alert("El resultado es " + (num1 + num2));
    } else if (operador == "restar") {
        alert("El resultado es " + (num1 - num2));
    } else if (operador == "multiplicar") {
        alert("El resultado es " + (num1 * num2));
    } else if (operador == "dividir") {
        if (num2 == 0){
            alert("La operación no se puede realizar")
        }else{
            alert("El resultado es " + (num1 / num2));
        }
    }
    
    
    else {
        alert("No has introducido un operador válido (sumar, restar , multiplicar o dividir)");
    }

}

calculadora(operacion, numA, numB);                                    
