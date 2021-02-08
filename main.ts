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


// Funções

function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(5, 10);

// opção de parametros

function add1(num1: number, num2?: number): number {
    if (num2) {
        return num1 + num2;
    } else {
        return num1;
    }
}


add1(5);

// parametros por defeito

function add2(num1: number, num2: number = 10): number {
    if (num2) {
        return num1 + num2;
    } else {
        return num1;
    }
}
add2(5, 10); // 10
add2(5); // 10

// Interfaces

interface Person {
    firstName: string;
    lastName?: string;// Opcional
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
    firstName: 'Bruce',
    lastName: 'Wayn'
}

fullName(p);

// Classes e Modificadores de Acesso

class Employee {
    public employeeName: string;

    constructor(employeeName) {
        this.employeeName = employeeName;

    }

    greet() {
        console.log(`Good morning ${this.employeeName}`);
    }
}

let employee1 = new Employee('Bruce');
console.log(employee1.employeeName);
employee1.greet();

// Herança

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log('Manager delegates work');
    }
}

let manager1 = new Manager('Wayn');
console.log(manager1.employeeName);
manager1.delegateWork();
manager1.greet();
console.log(manager1.employeeName);

// Modificadores de Acesso
// Public, private, protected
