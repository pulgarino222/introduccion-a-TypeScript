// pnto 1 Crea un tipo personalizado para un objeto Producto con propiedades id, nombre, y precio.
type producto = {
    id: number,
    nombre: string,
    precio: number
}
/* Cómo ayuda el tipado estático a prevenir errores en el manejo de variables y constantes?
Cuando se refactoriza código, el tipado estático permite al compilador identificar todas las partes del código afectadas por los cambios. 
Esto ayuda a evitar errores sutiles y asegura que los cambios no introduzcan inconsistencias.
*/

//Implementa una función que determine si un número es par utilizando operadores aritméticos y booleanos.
function numeroParImpar(numero: number) {
    const reciduo: number = numero % 2
    const validacion: boolean = reciduo === 0
    switch (validacion) {
        case true:
            console.log("numero es par")
            break;
        case false:
            console.log("el numero es impar");
            break;

    }

}
numeroParImpar(8)

/*¿Qué ventajas ofrece el uso de operadores en un lenguaje tipado como TypeScript?
Detección Temprana de Errores en tiempo de compilacion no de ejecucion
Mejor Autocompletado y Navegación en el Editor
Tipado Fuerte y Explicativo */


//Implementa una función que clasifique un número en positivo, negativo o cero usando if y switch
function PositiveOrNegative(numero: number) {
    const clasification: boolean = numero > 0 || numero < 0
    const positiveNegative: boolean = numero > 0
    if (numero !== undefined) {
        if (clasification) {
            switch (positiveNegative) {
                case true:
                    console.log("el numero es positivo")
                    break;
                default:
                    console.log("el numero es negativo")
                    break;
            }
        } else {
            console.log("el numero es 0")
        }
    }
}

PositiveOrNegative(0)


//¿Cuándo es preferible usar un operador ternario en lugar de una estructura if?

/*R/=
Asignaciones en Línea
Condiciones Simples y Expresiones Cortas:
Retorno Condicional en Funciones Cortas: function obtenerSaludo(hora: number): string {
    return hora < 12 ? "Buenos días" : "Buenas tardes";
}*/



//Implementa una función que recorra un array de nombres y los imprima en consola.
function arrayNames() {
    const names: string[] = ['felipe', 'juan', 'daniela', 'geraldine', 'manuela', 'camila']
    names.forEach(name => {
        console.log(name)

    });
}

arrayNames()

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

let numeros: number[] = [1, 2, 3, 4, 5];

// Utilizamos `reduce` para sumar todos los elementos del arreglo
let suma: number = numeros.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
}, 0); // 0 es el valor inicial del acumulador

console.log(suma)


//Implementa una función que reciba un array de strings y retorne la concatenación de todos los elementos
function arraysConca(array: string[]) {
    let conca: string = ""
    for (let i = 0; i < array.length; i++) {
        conca += array[i]
    }
    console.log(conca)
}

arraysConca(['h', 'o', 'l', 'a'])

//Define un array de objetos User con propiedades id y name, e imprime el nombre de cada usuario en consola.

type User = {
    id: number;
    name: string;
}

const users: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
users.forEach(user => {
    console.log(user.name);
});

function mostValue(numbers: number[]): number | undefined {
    if (numbers.length === 0) {
        return undefined; // Retorna undefined si el arreglo está vacío
    }

    let mostValue: number = numbers[0]; // Inicializa mostValue con el primer elemento del arreglo

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > mostValue) {
            mostValue = numbers[i]; // Actualiza mostValue si se encuentra un valor mayor
        }
    }

    return mostValue;
}
let numbers = [3, 2, 1, 9, 5];
console.log(mostValue(numbers));




/*Tarea: Define un objeto Car con propiedades marca, modelo y año. Crea una instancia de Car e imprime sus propiedades en consola.
Tarea 2: Con base en el objeto Car, crea una clase que posea un metodo estatico que reciba un objeto Car y retorne un string con la información del carro.
Tarea 3: Implementa una función que reciba un objeto Car y retorne un nuevo objeto con las mismas propiedades, pero con el año incrementado en 1.*/

interface car {
    marca: string,
    modelo: string,
    año: number
}

let cars: car = {
    marca: 'jeep',
    modelo: 'rocket',
    año: 2023
}

console.log(`${cars.modelo}`)

class CarInfo {
    static obtenerInfo(car: car): string {
        return `Marca: ${car.marca}, Modelo: ${car.modelo}, Año: ${car.año}`;
    }
}

const infoDelCarro = CarInfo.obtenerInfo(cars);
console.log(infoDelCarro);

function incrementarAño(car:car): car {

    return {
        ...car,          // Copia todas las propiedades del objeto original
        año: car.año + 1 // Incrementa el año en 1
    };
}

console.log(incrementarAño(cars))
//¿Qué ventajas ofrece el uso de tipos personalizados en objetos?
/*Definición Clara de Estructuras
Validación de Tipos en Tiempo de Compilación:
Reusabilidad y Composición
*/