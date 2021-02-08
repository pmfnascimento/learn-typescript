## Typescript

#### 1 - Declaração de Variaveis
[&#x2714;] Criar um ficheiro main.ts, compilar e correr o main.js
[&#x2714;] Export main.ts e Recompilar ( * tsc main --watch )
[&#x2714;] Declaração de variáveis usando o let e o const

#### 2 - Tipo de Variaveis
[&#x2714;] boolean
[&#x2714;] Number
[&#x2714;] String
[&#x2714;] Multiplas linha e incorporar valores
[&#x2714;] Null and undefined
[&#x2714;] Arrays
[&#x2714;] Multi tipos de arrays Tuple (Não podem ser alterados pela ordem da declaração)
[&#x2714;] Enum
[&#x2714;] AnyType (Pode assumir qualquer tipo de variáveis)
[&#x2714;] Unknown
[&#x2714;] Interferencia do tipo de variáveis
[&#x2714;] união de tipos de variáveis

#### 2 - Funções
[&#x2714;] opção de parametros
[&#x2714;] parametros por defeito
```js
function add1(num1: number, num2?: number = 10): number {
    if (num2) {
        return num1 + num2;
    } else {
        return num1;
    }
}
```
#### 3 - Interfaces

[&#x2714;] - Criação de interfaces

```js
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

```
