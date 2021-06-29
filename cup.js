"use strict";

function Cup(color, maxVolume) {
    this.color = color;
    this.maxVolume = maxVolume;
    this.volume = 0;
}

Cup.prototype.brew = function(vol) {
    if (vol <= 0) {
        console.log('First you need some water!!!');
    } else if (vol > (this.maxVolume - this.volume)) {
        this.volume = this.maxVolume;
        console.log('Cup is full - ' + this.maxVolume);
    } else {
        this.volume += vol;
        console.log('Coffee is ready - ' + this.volume);
    }
}

Cup.prototype.drink = function(vol) {
    if (this.volume === 0) {
        console.log('Ehhh, cup is emty. Brew first!');
    } else if (vol <= 0) {
        console.log('Wtf r u doing???');
    } else if (vol >= this.volume) {
        console.log('Nice, you just drinked ' + this.volume + ' coffee!\r\nNow the cup is empty!');
        this.volume = 0;
    } else {
        this.volume -= vol;
        console.log('Nice, you just drinked ' + vol + ' coffee!\r\nYou still have ' + this.volume + ' coffee.');
    }
}

function Thermos(color, maxVolume) {
    Cup.apply(this, arguments);
    this.temperature = 21;
}
Thermos.prototype = Object.create(Cup.prototype);
Thermos.prototype.constructor = Thermos;

Thermos.prototype.warmUp = function(vol) {
    this.temperature += vol;
}
Thermos.prototype.cool = function(vol) {
    this.temperature -= vol;
}

const therm1 = new Thermos('Dark blue', 900);
therm1.brew(0);
therm1.brew(1000);
therm1.warmUp(70);
therm1.cool(14)
therm1.drink(-10);
therm1.drink(777);
console.log(therm1);

// let puodas = new Cup('Green', 300);
// puodas.brew(180);
// puodas.brew(170);
// puodas.drink(0);
// puodas.drink(200);
// puodas.drink(500);
// puodas.drink(10);
// console.log(puodas);