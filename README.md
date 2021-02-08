## Typescript

#### 1 - Declaração de Variaveis
[&#x2714;] Criar um ficheiro main.ts, compilar e correr o main.js<br>
[&#x2714;] Export main.ts e Recompilar ( * tsc main --watch )<br>
[&#x2714;] Declaração de variáveis usando o let e o const

#### 2 - Tipo de Variaveis
[&#x2714;] boolean
[&#x2714;] Number<br>
[&#x2714;] String<br>
[&#x2714;] Multiplas linha e incorporar valores<br>
[&#x2714;] Null and undefined<br>
[&#x2714;] Arrays<br>
[&#x2714;] Multi tipos de arrays Tuple (Não podem ser alterados pela ordem da declaração)<br>
[&#x2714;] Enum<br>
[&#x2714;] AnyType (Pode assumir qualquer tipo de variáveis)<br>
[&#x2714;] Unknown<br>
[&#x2714;] Interferencia do tipo de variáveis<br>
[&#x2714;] união de tipos de variáveis<br>

#### 2 - Funções
[&#x2714;] opção de parametros<br>
[&#x2714;] parametros por defeito<br>
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

[&#x2714;] - Criação de interfaces<br>

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
