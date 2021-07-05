"use strict";
const fs = require('fs');

fs.readFile('4.txt', (error, data) => {
    let stringas = '' + data;
    fs.readFile('3.txt', (error, data) => {
        stringas += ' ' + data;
        fs.readFile('1.txt', (error, data) => {
            stringas += ' ' + data;
            const masyvas = stringas.split(' ');
            for (let i=0; i<masyvas.length-1; i++) {
                for (let j=i+1; j<masyvas.length; j++) {
                    if (masyvas[i].length < masyvas[j].length) {
                        let tmp = masyvas[i];
                        masyvas[i] = masyvas[j];
                        masyvas[j] = tmp;
                    }
                }
            }
            for (let i in masyvas) {
                console.log(masyvas[i]);
            }
            fs.readFile('5.txt', (error, data) => {
                console.log('' + data);
                fs.readFile('2.txt', (error, data) => {
                    console.log('' + data);
                })
            })
        })
    })
})

/*
//NAMU DARBAS:
// susikurti 5 failus:
1.txt
2.txt
3.txt
4.txt
5.txt
perskaityti failus tokia tvarka: 4, 3, 1 ; rezultatus sudeti i viena string'a
ta stringa suskaldyti zodziais (per tarpa); atspausdinti kiekviena zodi ilgejimo tvarka;
PO TO perskaityti failus: 5, 2 ; atspausdinti ju turini
*/