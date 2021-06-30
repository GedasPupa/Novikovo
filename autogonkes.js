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

    hundredKm() {
        if (this.distance >= hundred) {
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

// console.log(cars);
console.log(cars[0]);