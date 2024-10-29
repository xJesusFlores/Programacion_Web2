//Funciones en JavaScript

function suma (n1,n2){

    return parseInt(n1)+parseInt(n2);
}
    /*Se usa parseInt ya que la funcion let + prompt en JScript returna 
    texto (String)y para este caso se son numeros enteros (INT)*/


let numero1 = prompt("Ingresa el numero 1: ");
let numero2 = prompt("Ingresa el numero 2: ");

let resultado = suma (numero1,numero2); //Recibe n1 y n2 la funcion;

console.log("El resultado es: "+resultado);