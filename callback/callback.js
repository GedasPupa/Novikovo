"use strict";
const fs = require('fs');

console.log('------------pradzia-----------\r\n');

fs.readFile('a.txt', (err, data) => {
    data += '' + data;
    console.log(data);
    fs.readFile('b.txt', (err, data) => {
        data += '' + data;
        console.log(data);
        fs.readFile('c.txt', (err, data) => {
            data += '' + data;
            console.log(data);
        });
    });
});

// function perskaiciau(err, data) {
//     console.log(" " + data);
// }

// fs.readFile('a.txt', perskaiciau);
// fs.readFile('b.txt', perskaiciau);

// function test1() {
//     console.log('1');
// }
// function test2() {
//     console.log('2');
// }
// function test3() {
//     console.log('3'); 
// }

// setTimeout(test2, 3);
// setTimeout(test1, 5);
// setTimeout(test3, 1);

// for (let i=0; i<1000000; i++) {
//     for (let j=0; j<10000; j++) {
//     }
// }

let m = [2, 5, 1, 7];

m.sort((e1, e2) => {
    console.log("Lyginame", e1, e2);
    return e2 - e1;
});

console.log(m);
console.log('');

console.log('------------pabaiga-----------\r\n');

/*

//NAMU DARBAS:
// susikurti 5 failus:
1.txt
1.txt
1.txt
1.txt
1.txt
perskaityti failus tokia tvarka: 4, 3, 1 ; rezultatus sudeti i viena string'a
ta stringa suskaldyti zodziais (per tarpa); atspausdinti kiekviena zodi ilgejimo tvarka;
PO TO perskaityti failus: 5, 2 ; atspausdinti ju turini

*/