/*const a = 2;
const b = 3;

let soma = a + b;
console.log (soma);

let subtracao = a - b;
console.log (subtracao);

let multiplicacao = a * b;
console.log (multiplicacao);

let divisao = a / b;
console.log (divisao);

let modulo = a % b;
console.log (modulo); */

let a = 65;
let b = 100;
let c = 15;

let somaTriangulo = a + b + c;

let triangulo = a > 0 && b > 0 && c > 0;

if (triangulo) {
    if (somaTriangulo===180) {
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log("Erro: ângulo inválido")
};



