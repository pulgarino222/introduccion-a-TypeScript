"use strict";
//Se crea una instancia del tipo Producto
let producto = {
    id: 1,
    nombre: "Arroz",
    precio: 20000
};
//console.log(producto);
//2. Operadores (aritméticos, booleanos)
function numeroPar(number) {
    // Un número es par si el resto de su división por 2 es 0
    return number % 2 === 0;
}
//   console.log(numeroPar(4)); // true
//   console.log(numeroPar(7)); // false
//   console.log(numeroPar(0)); // true
//   console.log(numeroPar(-2)); // true
//3. Estructuras de decisión (if, switch, ternarios)
function clasificarNumero(number) {
    if (number > 0) {
        console.log("Número positivo");
    }
    else if (number < 0) {
        console.log("Número negativo");
    }
    else {
        console.log("Número cero");
    }
    switch (number) {
        case 0:
            console.log("Cero");
        case 1:
            console.log("Número positivo");
        case -1:
            console.log("Número negativo");
            break;
        default:
            console.log("Número no reconocido");
    }
}
;
//console.log(clasificarNumero(-1));
//4. Estructuras de iteración (while, for, foreach, map)
let names = ['luis', 'carlos', 'felipe', 'alejandro', 'oscar'];
function getNames(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
    ;
}
;
//getNames(names)
//Estructuras de Datos y Funciones
//1. Arrays | Listas
//Tarea 1: Crea un array de números y calcula la suma de todos sus elementos utilizando un metodo reduce.
let numeros = [1, 2, 3, 4, 5];
let total = numeros.reduce((acumulador, elemento) => {
    return acumulador + elemento;
});
//console.log(total);
//Tarea 2: Implementa una función que reciba un array de strings y retorne la concatenación de todos los elementos.
let nombres = ['luis', 'carlos', 'felipe', 'alejandro', 'oscar'];
function concatArray(array) {
    return array.join('');
}
const users = [
    {
        id: 1,
        name: 'Luis'
    },
    {
        id: 1,
        name: 'carlos'
    },
    {
        id: 1,
        name: 'alejandro'
    },
    {
        id: 1,
        name: 'andres'
    },
    {
        id: 1,
        name: 'julian'
    }
];
users.forEach(user => {
    //console.log(user.name);
});
//Tarea 4: Implementa una función que reciba un array de números y retorne el mayor valor.
let arrayNumber = [5, 3, 6, 4, 5, 1, 12, 6];
function returnNumber(numbers) {
    return Math.max(...numbers);
}
;
//console.log(returnNumber(arrayNumber));
function findMaxValue(numbers) {
    if (numbers.length === 0) {
        console.error("Array esta vacio");
    }
    let maxValue = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxValue) {
            maxValue = numbers[i];
        }
    }
    return maxValue;
}
;
let car = {
    marca: 'Toyota',
    modelo: 'Landcruiser',
    year: 2018
};
//console.log(car);
//Tarea 2: Con base en el objeto Car, crea una clase que posea un metodo estatico que reciba un objeto Car y retorne un string con la información del carro.
class CarInfo {
    static getInfo(car) {
        return `Marca: ${car.marca}, Modelo: ${car.modelo}, year: ${car.year}`;
    }
    ;
}
;
//console.log(CarInfo.getInfo(car));
//Tarea 3: Implementa una función que reciba un objeto Car y retorne un nuevo objeto con las mismas propiedades, pero con el año incrementado en 1.
function info(car) {
    car.year++;
    return car;
}
;
//console.log(info(car));
function info2(car) {
    return Object.assign(Object.assign({}, car), { year: car.year++ });
}
//console.log(info2(car));
//3. Funciones
// Tarea1: Implementa una función que reciba un array de números y retorne el mayor valor.
let arrayNumber2 = [5, 3, 6, 4, 5, 1, 12, 6];
function firstFunction(array) {
    let maxValue = array[0];
    array.forEach(number => {
        number > maxValue ? number = maxValue : number;
    });
    return maxValue;
}
;
//console.log(findMaxValue(arrayNumber2));
//Tarea 2: Implementa una funcion que reciba tres parametros y retorne error si almenos uno de los parametros pasados no es del tipo de los dos primeros parametros. 
//Asegurarse que los dos primeros parametros sean del mismo tipo.
function validate(para1, para2, para3) {
    return typeof para1 && typeof para2 !== typeof para3 ? `Para3: ${typeof para3}, no es del mismo tipo de para1 y para2` : `Para3: ${typeof para3}, es del mismo tipo de para1 y para2`;
}
;
console.log(validate("hola", "luis", "1"));
