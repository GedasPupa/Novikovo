"use strict";

let finish = false;
let hundred = 100;
const cars = [];

class Car {
    constructor(name) {
        this.name = name;
        this.speed = 0;
        this.distance = 0;
    }

    accelerate() {
        this.speed += Math.floor(Math.random() * 10 + 1);
        this.distance += this.speed;
    }

    brake() {
        this.speed -= Math.floor(Math.random() * 5 + 1);
        if (this.speed < 0) {
            this.speed = 0;
        }
        this.distance -= this.speed;
    }

    justGo() {
        this.distance += this.speed;
    }

    hundredKm() {
        if (this.distance >= hundred && !finish) {
            console.log(`Nuvaziuota ${hundred}km. Laimi: ${this.name}`);
            hundred += 100;
        }
    }

    isWinner() {
        if (this.distance >= 1000 && !finish) {
            console.log('Finišas!!!!!!!!! The Winner is: ' + this.name + '!!!\r\nNuvažiuota: ' + this.distance);
            finish = true;
        }
    }
}

class sporstCar extends Car{
    constructor(name) {
        super(name);
        this.spoilerUp = false;
    }

    changeSpoiler() {
        const rand = Math.random();
        if (rand >= 0.5) {
            this.spoilerUp = !this.spoilerUp;
        }
    }

    accelerate() {
        if (!this.spolerUp) {
            super.accelerate();
            super.accelerate();
        } else {
            super.accelerate();
        }
    }

    brake() {
        if (this.spoilerUp) {
            super.brake();
            super.brake();
        } else {
            super.brake();
        }
    }
}

function generuok() {
    for (let i=0; i<8; i++) {
        if (i<6) {
            cars.push(new Car(`auto${i+1}`));
        } else {
            cars.push(new sporstCar(`sportsAuto${i+1}${i+1}${i+1}`));
        }
    }
}

function lenktynes(cars) {
    while (!finish) {
        for (let i=0; i<cars.length; i++) {
            if (cars[i] instanceof sporstCar) {
                cars[i].changeSpoiler();
            }
            let randNumber = Math.random();
            if (randNumber < 0.2) {
                cars[i].brake();
                cars[i].hundredKm();
                cars[i].isWinner();                
            } else if (randNumber < 0.7) {
                cars[i].accelerate();
                cars[i].hundredKm();
                cars[i].isWinner();
            } else {
                cars[i].justGo();
                cars[i].hundredKm();
                cars[i].isWinner();
            }
        }  
    }
}

function rusiuok() {
    for (let i=0; i<cars.length-1; i++) {
        for (let j=i+1; j<cars.length; j++) {
            if (cars[i].distance < cars[j].distance) {
                let tmp = cars[i];
                cars[i] = cars[j];
                cars[j] = tmp;
            } else if (cars[i].distance === cars[j].distance && cars[i].speed < cars[j].speed) {
                let tmp = cars[i];
                cars[i] = cars[j];
                cars[j] = tmp;
            }
        }
    }
}

generuok();
lenktynes(cars);
rusiuok();

console.log(cars);
console.log(cars[0]);

/*
UŽDUOTIS:

yra 8 masinos

pavadinimas
greitis: 0
kelias: 0

masinos lenktyniauja (ciklas)

kiekvienos iteracijos metu:
visos masinos gali pakeisti savo greiti
    random skaicius
    jei random < 0.2 - masina stabdo (t.y. mazeja masinos greitis 1..5 (random))
    jei random < 0.7 - masina gazuoja (t.y. dideja masinos greitis 1..10 (random))
    priesingu atveju masinos greitis nesikeicia
visos masinos pavaziuoja: per tiek, koks yra jos greitis

lenktynes baigiasi, kai bent viena masina nuvaziuoja 1000 km

reikia surusiuoti masinas pagal nuvaziuota kelia,
jei dvieju masinu kelias vienodas - pirmesne yra ta, kurios didesnis greitis

atspausdinti turnyrine lentele

* kas 100 km spausdinti lyderi

PAPILDOMA UŽDUOTIS (KLASĖS):

dvi masinos turi buti sportines

sportine masina turi tureti spoileri (pradzioj nuleistas)

jei spoileris yra pakeltas - sportine masina stabdo 2x greiciau (gazuoja standartiskai)
jei spoileris yra nuleistas - sportine masina gazuoja 2x greiciau (stabdo standartiskai)

lenktyniu metu kieviena sportine masina su 50% tikimybe pakeicia spoilerio pozicija

*/