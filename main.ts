export { }
let message = 'Hello Welcome Back';
console.log(message);

// Declaração de variáveis
let x = 20;
const y = 20;

let sum;

const title = 'Typescript';

// Tipos de Variáveis

// boolean
let isBeginner: boolean = true;

// Number
let total: number = 32;

// String
let name: string = 'Typescript';

//Multiplas linha e incorporar valores
let sentence: string = `My name is ${name}
this is a mutipline string with variables`;

console.log(sentence);

// Null and undefined
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

// Arrays
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Multi tipos de arrays Tuple
// Não podem ser alterados pela ordem da declaração
let person1: [string, number] = ['Typescript', 23];

// Enum
enum Color { Red = 5, Green, Blue };
let c: Color = Color.Green;
console.log(c);

// AnyType
// Pode assumir qualquer tipo de variáveis
let randomValue: any = 0;
randomValue = 1;
randomValue = 'Typescript';

let myVariable: any = 10;
console.log(myVariable);

// Unknown
let myVariable1: unknown = 'str';
(myVariable1 as string).toUpperCase();
console.log(myVariable1);

function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === 'object' &&
        "name" in obj;
}

if (hasName(myVariable)) {
    console.log(myVariable.name);
}

// Interferencia do tipo de variáveis

let a;
a = 10;
a = true;
let b = 20;

// união de tipos de variáveis

let multiType: number | boolean;
multiType = 20;
multiType = true;


