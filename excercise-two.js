// Utilizando un array variable de strings y un número entero R. Realizar una función que
// devuelva la primera cadena más larga que consta de R cadenas consecutivas tomadas en
// el array.
// Ejemplos:
// variable = ["abcd", "efghij", "klmnop", "qrst", "cuenta", "uvwxyz"], k = 2
// Concatenando las cadenas consecutivas de variable por 2, obtenemos:
// abcdefghij (longitud 10) concatenación de variable[0] y variable[1]
// efghijklmnop (" 12) concatenación de variable[1] y variable[2]
// klmnopqrst (" 10) concatenación de variable[2] y variable[3]
// qrstcuenta (" 10) concatenación de variable[3] y variable[4]
// cuentauvwxyz (" 12) concatenación de variable[4] y variable[5]
// Dos cadenas son las más largas: " efghijklmnop" y " cuentauvwxyz".
// El primero que se tiene es " efghijklmnop", así que el método debería devolver "
// efghijklmnop".
// Nota
// cadenas consecutivas: siguen una tras otra sin interrupción

//Codigo implementado por: Andres Eduardo Cordova Orellana para prueba técnica TechyWe

function longestConsecutiveStrings(array, r) {
    if (array.length === 0 || r <= 0) {
        return "";
    }

    let longestString = "";

    for (let i = 0; i < array.length - r + 1; i++) {

        let currentString = array[i];
        for (let j = 1; j < r; j++) {
            currentString += array[i + j];
        }

        if (currentString.length > longestString.length) {
            longestString = currentString;
        }
    }

    return longestString;
}

//Adjunto ejemplos para poder probar el funcionamiento.

console.log(longestConsecutiveStrings(["zone", "abigail", "theta", "form", "libe", "zas"], 2)); //abigailtheta
console.log(longestConsecutiveStrings(["abcd", "efghij", "klmnop", "qrst", "cuenta", "uvwxyz"], 2)); //efghijklmnop