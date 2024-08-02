var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/* Cómo ayuda el tipado estático a prevenir errores en el manejo de variables y constantes?
Cuando se refactoriza código, el tipado estático permite al compilador identificar todas las partes del código afectadas por los cambios.
Esto ayuda a evitar errores sutiles y asegura que los cambios no introduzcan inconsistencias.
*/
//Implementa una función que determine si un número es par utilizando operadores aritméticos y booleanos.
function numeroParImpar(numero) {
    var reciduo = numero % 2;
    var validacion = reciduo === 0;
    switch (validacion) {
        case true:
            console.log("numero es par");
            break;
        case false:
            console.log("el numero es impar");
            break;
    }
}
numeroParImpar(8);
/*¿Qué ventajas ofrece el uso de operadores en un lenguaje tipado como TypeScript?
Detección Temprana de Errores en tiempo de compilacion no de ejecucion
Mejor Autocompletado y Navegación en el Editor
Tipado Fuerte y Explicativo */
//Implementa una función que clasifique un número en positivo, negativo o cero usando if y switch
function PositiveOrNegative(numero) {
    var clasification = numero > 0 || numero < 0;
    var positiveNegative = numero > 0;
    if (numero !== undefined) {
        if (clasification) {
            switch (positiveNegative) {
                case true:
                    console.log("el numero es positivo");
                    break;
                default:
                    console.log("el numero es negativo");
                    break;
            }
        }
        else {
            console.log("el numero es 0");
        }
    }
}
PositiveOrNegative(0);
//¿Cuándo es preferible usar un operador ternario en lugar de una estructura if?
/*R/=
Asignaciones en Línea
Condiciones Simples y Expresiones Cortas:
Retorno Condicional en Funciones Cortas: function obtenerSaludo(hora: number): string {
    return hora < 12 ? "Buenos días" : "Buenas tardes";
}*/
//Implementa una función que recorra un array de nombres y los imprima en consola.
function arrayNames() {
    var names = ['felipe', 'juan', 'daniela', 'geraldine', 'manuela', 'camila'];
    names.forEach(function (name) {
        console.log(name);
    });
}
arrayNames();
/*
Inmutabilidad
Método map: Crea un nuevo arreglo con los resultados de aplicar la función, dejando el arreglo original inalterado. Esto fomenta la inmutabilidad, un principio importante en la programación funcional.

Ejemplo con map:

typescript
Copy code
let numeros: number[] = [1, 2, 3];
let cuadrados = numeros.map(x => x * x);
// numeros: [1, 2, 3]
// cuadrados: [1, 4, 9]

Composición de Funciones
*/
//Crea un array de números y calcula la suma de todos sus elementos utilizando un metodo reduce
var numeros = [1, 2, 3, 4, 5];
// Utilizamos `reduce` para sumar todos los elementos del arreglo
var suma = numeros.reduce(function (acumulador, valorActual) {
    return acumulador + valorActual;
}, 0); // 0 es el valor inicial del acumulador
console.log(suma);
//Implementa una función que reciba un array de strings y retorne la concatenación de todos los elementos
function arraysConca(array) {
    var conca = "";
    for (var i = 0; i < array.length; i++) {
        conca += array[i];
    }
    console.log(conca);
}
arraysConca(['h', 'o', 'l', 'a']);
var users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
users.forEach(function (user) {
    console.log(user.name);
});
function mostValue(numbers) {
    if (numbers.length === 0) {
        return undefined; // Retorna undefined si el arreglo está vacío
    }
    var mostValue = numbers[0]; // Inicializa mostValue con el primer elemento del arreglo
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > mostValue) {
            mostValue = numbers[i]; // Actualiza mostValue si se encuentra un valor mayor
        }
    }
    return mostValue;
}
var numbers = [3, 2, 1, 9, 5];
console.log(mostValue(numbers));
var cars = {
    marca: 'jeep',
    modelo: 'rocket',
    año: 2023
};
console.log("".concat(cars.modelo));
var CarInfo = /** @class */ (function () {
    function CarInfo() {
    }
    CarInfo.obtenerInfo = function (car) {
        return "Marca: ".concat(car.marca, ", Modelo: ").concat(car.modelo, ", A\u00F1o: ").concat(car.año);
    };
    return CarInfo;
}());
var infoDelCarro = CarInfo.obtenerInfo(cars);
console.log(infoDelCarro);
function incrementarAño(car) {
    return __assign(__assign({}, car), { año: car.año + 1 // Incrementa el año en 1
     });
}
console.log(incrementarAño(cars));
//¿Qué ventajas ofrece el uso de tipos personalizados en objetos?
/*Definición Clara de Estructuras
Validación de Tipos en Tiempo de Compilación:
Reusabilidad y Composición
*/
//Implementa una funcion que reciba rest parameters y retorne error si almenos uno de los parametros pasados no es del tipo de los dos primeros parametros. Asegurarse que los dos primeros parametros sean del mismo tipo.
function whatTypes() {
    var type = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        type[_i] = arguments[_i];
    }
    var mensaje = "";
    if (type.length < 2) {
        mensaje = "se necesitan mas parametros";
        return mensaje;
    }
    else {
        for (var i = 0; i < type.length; i++) {
            if ((typeof type[i]) === (typeof type[0] && (typeof type[1]))) {
                mensaje = "todos los tipos son iguales ";
            }
            else {
                mensaje = "al menos un tipo no es igual error ".concat(type[i]);
            }
        }
    }
    return mensaje;
}
console.log(whatTypes("l", "n", 4));
