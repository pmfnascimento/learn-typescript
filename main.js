"use strict";
exports.__esModule = true;
var message = 'Hello Welcome Back';
console.log(message);
// Declaração de variáveis
var x = 20;
var y = 20;
var sum;
var title = 'Typescript';
// Tipos de Variáveis
// boolean
var isBeginner = true;
// Number
var total = 32;
// String
var name = 'Typescript';
//Multiplas linha e incorporar valores
var sentence = "My name is " + name + "\nthis is a mutipline string with variables";
console.log(sentence);
// Null and undefined
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// Arrays
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// Multi tipos de arrays Tuple
// Não podem ser alterados pela ordem da declaração
var person1 = ['Typescript', 23];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
// AnyType
// Pode assumir qualquer tipo de variáveis
var randomValue = 0;
randomValue = 1;
randomValue = 'Typescript';
var myVariable = 10;
console.log(myVariable);
// Unknown
var myVariable1 = 'str';
myVariable1.toUpperCase();
console.log(myVariable1);
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// Interferencia do tipo de variáveis
var a;
a = 10;
a = true;
var b = 20;
// união de tipos de variáveis
var multiType;
multiType = 20;
multiType = true;
// Funções
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// opção de parametros
function add1(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add1(5);
// parametros por defeito
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add2(5, 10); // 10
add2(5); // 10
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayn'
};
fullName(p);
