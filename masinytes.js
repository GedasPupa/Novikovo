"use strict";

let finish = false;
let simtas = 100;
const masinytes = [];

class Masinyte {
    constructor(pavadinimas) {
        this.pavadinimas = pavadinimas;
        this.greitis = 0;
        this.kelias = 0;
    }
}

function generuok() {
    for (let i=0; i<8; i++) {
        masinytes.push(new Masinyte(`auto${i+1}`));
    }
}

function arLaimejo (vardas, kelias) {
    if (kelias >= 1000) {
        console.log('Finišas, nugalėjo: ' + vardas + '!!!\r\nNuvažiuota: ' + kelias);
        finish = true;
    }
}

function simtasKm (vardas, kelias) {
    if (kelias >= simtas) {
        console.log(`Nuvaziuota ${kelias}km. Laimi: ${vardas}`);
        simtas += 100;
    }
}

function lenktynes(masinytes) {
    while (!finish) {
        for (let i=0; i<8; i++) {
            let randNumber = Math.random();
            if (randNumber < 0.2) {
                masinytes[i].greitis -= Math.floor(Math.random() * 5);
                masinytes[i].kelias -= masinytes[i].greitis;
                simtasKm(masinytes[i].pavadinimas, masinytes[i].kelias);
                arLaimejo(masinytes[i].pavadinimas, masinytes[i].kelias);
            } else if (randNumber < 0.7) {
                masinytes[i].greitis += Math.floor(Math.random() * 10);
                masinytes[i].kelias += masinytes[i].greitis;
                simtasKm(masinytes[i].pavadinimas, masinytes[i].kelias);
                arLaimejo(masinytes[i].pavadinimas, masinytes[i].kelias);
            } else {
                simtasKm(masinytes[i].pavadinimas, masinytes[i].kelias);
                arLaimejo(masinytes[i].pavadinimas, masinytes[i].kelias);
            }
        }  
    }
}

function rusiuok() {
    for (let i=0; i<8; i++) {
        for (let j=i+1; j<8; j++) {
            if (masinytes[i].kelias < masinytes[j].kelias) {
                let tmp = masinytes[i];
                masinytes[i] = masinytes[j];
                masinytes[j] = tmp;
            } else if (masinytes[i].kelias === masinytes[j].kelias && masinytes[i].greitis > masinytes[j].greitis) {
                let tmp = masinytes[i];
                masinytes[i] = masinytes[j];
                masinytes[j] = tmp;
            }
        }
    }
}

generuok();
lenktynes(masinytes);
rusiuok();

console.log(masinytes);
console.log(masinytes[0]);