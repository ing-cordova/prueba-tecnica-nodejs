// Se debe crear una función que devuelva una permutación de Josephus, tomando como
// parámetros un array inicial de elementos a permutar como si estuvieran en un círculo y
// contar cada k lugares hasta que no quede ninguno.
// Consejos y notas: ayuda empezar a contar desde 1 hasta n, en lugar del rango habitual
// de 0 a n-1; k siempre será >=1.
// Por ejemplo, con una matriz=[1,2,3,4,5,6,7] y k=3, la función debería actuar de esta
// manera.
// n=7, e=3 => se tienen 7 elementos y se elimina el tercero en la posición cada vez hasta
// que queda 1.
// [1,2,3,4,5,6,7] – secuencia inicial
// [1,2,4,5,6,7] => el 3 se elimina
// [1,2,4,5,7] => el 6 se elimina
// [1,4,5,7] => el 2 se elimina, etc.

//Codigo implementado por: Andres Eduardo Cordova Orellana para prueba técnica TechyWe

function josephusPermutation(array, k) {
    if (array.length === 0 || k <= 0) {
        return [];
    }

    const output = [];

    for (let i = 0; i < array.length; i++) {
        let position = (i + 1) % array.length;

        if (position % k === 0) {
            output.push(array[position]);
        }
    }
    return output;
}

//Adjunto ejemplos para poder probar el funcionamiento.

console.log('1..', josephusPermutation([1, 2, 3, 4, 5, 6, 7], 3)); //[4,7,1]
console.log('2..', josephusPermutation([1, 2, 3], 2)); //[3,1]
console.log('3..', josephusPermutation([2, 3, 4, 5, 6, 7, 8, 9], 3)); //[5,8,2]