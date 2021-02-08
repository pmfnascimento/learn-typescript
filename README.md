## Typescript

#### 1 - Declaração de Variaveis
[✓] Criar um ficheiro main.ts, compilar e correr o main.js<br>
[✓] Export main.ts e Recompilar ( * tsc main --watch )<br>
[✓] Declaração de variáveis usando o let e o const<br>

#### 2 - Tipo de Variaveis
[✓] boolean<br>
[✓] Number<br>
[✓] String<br>
[✓] Multiplas linha e incorporar valores<br>
[✓] Null and undefined<br>
[✓] Arrays<br>
[✓] Multi tipos de arrays Tuple (Não podem ser alterados pela ordem da declaração)<br>
[✓] Enum<br>
[✓] AnyType (Pode assumir qualquer tipo de variáveis)<br>
[✓] Unknown<br>
[✓] Interferencia do tipo de variáveis<br>
[✓] união de tipos de variáveis<br>

#### 2 - Funções
[✓] opção de parametros<br>
[✓] parametros por defeito<br>
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

[✓] - Criação de interfaces<br>

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
#### 4 - Classes e Modificadores de Acesso<br>

[✓] - Classes<br>

```js
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

```
[✓] - Heranças<br>

```js
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

```
