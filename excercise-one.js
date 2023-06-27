// Desarrollar un método que acepte 3 valores entero. La función debería devolver
// verdadero si se puede construir un triángulo con los lados de la longitud dada y falso en
// cualquier otro caso.
// (En este caso, todos los triángulos deben tener una superficie mayor que 0 para ser
// aceptados).

//Codigo implementado por: Andres Eduardo Cordova Orellana para prueba técnica TechyWe

function canConstructTriangle(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {
        return false;
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
        return false;
    }

    const s = (a + b + c) / 2;
    const area = s * (s - a) * (s - b) * (s - c);
    if (area <= 0) {
        return false;
    }

    return true;
}

//Adjunto ejemplos para poder probar el funcionamiento.

console.log(canConstructTriangle(1, 2, 3)); //false
console.log(canConstructTriangle(3, 4, 5)); //true
console.log(canConstructTriangle(1, 1, 1)); //true
console.log(canConstructTriangle(0, 1, 1)); //false
console.log(canConstructTriangle(-1, 1, 1)); //false
