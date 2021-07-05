"use strict";

function faktorialas(sk) {
    if (sk === 0) {
        return 1;
    }
    return sk * faktorialas(sk - 1);
}
console.log('FAKTORIALAS:');
console.log(faktorialas(170));

// REKURSINĖ FUNKCIJA
// Parašyti Fibonači skaičius iki nurodyto maksimalaus. Input: 1, 1, maxSk

function fibonacci(sk1, sk2, max) {
    if (sk1 > max) return;
    // console.log('Fibonacci: ' + (sk1));
    return fibonacci(sk2, (sk1+sk2), max);
};

fibonacci(1,1,21);

// Novikovo:

// function fib(sk1, sk2, max) {
//     console.log(sk1);
//     let next = sk1+sk2;
//     if (next < max) {
//         fib(sk2, next, max);
//     } else {
//         console.log(sk2);
//     }
// }
// fib(1,1,100);


function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
let div = function(a, b) {
    return a / b;
}

function calc(n1, n2, calculate) {
    if (typeof calculate == "function") { 
        return calculate(n1, n2);
    } else undefined;
}

// console.log(calc(10, 5, mul));
// console.log(calc(7, 3, 7)); ---> undefined

// typeof

function suma(a, b, c) {
    console.log(a, typeof a);
    console.log(b, typeof b);
    console.log(c, typeof c);
    console.log('--------------------');

    let suma = 0;
    if (typeof a === "number") {
        suma += a;
    }
    if (typeof b === "number") {
        suma += b;
    }
    if (typeof c === "number") {
        suma += c;
    }
    return suma;
}

console.log(suma(7, 7, 7));

// Function ARGUMENTS:

function sumArguments() {
    let s = 0;
    for (let i in arguments) {
        if (typeof arguments[i] === "number") {
            s += arguments[i];
        }
    }
    return 'Susumuota su "arguments": ' + s;
}

console.log(sumArguments("aa", "bb", 1, 2, 7, 7, 4));

function pasisveikinimas(vardas="bevardis", pavarde="bepavardis") {
    // console.log(arguments);
    console.log('Labas ' + pavarde + ' ' + arguments[1] + ' ' + vardas + ' ' + arguments[0])
}

pasisveikinimas(undefined, undefined, "Jonas", "Jonaitis");

function kitoksPasisveikinimas(zmogusObjektas) {
    console.log('LABA ' + zmogusObjektas.vardas + ' ' + zmogusObjektas.pavarde);
    zmogusObjektas.jauPasveikintas = true;
}
const z = {
    vardas: "Petras",
    pavarde: "Petraitis"
};

kitoksPasisveikinimas(z);
console.log(z);