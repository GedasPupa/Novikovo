"use strict";

class Cup {
    constructor(color, maxVolume) {
        this.color = color;
        this.maxVolume = maxVolume;
        this.volume = 0;
    }
    brew (vol) {
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
    drink(vol) {
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
    
}


class Thermos extends Cup {
    constructor(color, maxVolume) {
        // Cup.apply(this, arguments);
        // Cup.call(this, color, maxVolume);
        super(...arguments);
        this.temperature = 21;
    }
    brew(vol) {
        console.log('Čia gi papildome TERMOSĄ.');
        super.brew(vol);
        this.temperature -= 5;
    }
    warmUp(vol) {
        this.temperature += vol;
    }
    cool(vol) {
        this.temperature -= vol;
        console.log('Now TEMP is: ' + this.temperature);
    }
}
// Thermos.prototype = Object.create(Cup.prototype);
// Thermos.prototype.constructor = Thermos;

// Thermos.prototype.warmUp = function(vol) {
//     this.temperature += vol;
// }
// Thermos.prototype.cool = function(vol) {
//     this.temperature -= vol;
// }

class Sikpuodis extends Cup {
    constructor(color, maxVolume) {
        super(...arguments);
    }
    drink(vol) {
        console.log('Sito sudo ' + vol + 'ml NEGERIU!!!');
    }
}

const s = new Sikpuodis("black", 1000);
const term1 = new Thermos("black", 1000);
let o = s;

if (o instanceof Cup) {
    o.brew(0.5);
    if (o instanceof Thermos) {
        o.warmUp(10000);
    }
    o.drink(100);
}

if (o instanceof Object) {
    console.log('OOOOO tai yra Objektas!!!!!');
}

// let o = Object.create(null);   ----- Būdas sukurti objektą, kuris neturi savybės __proto__

term1.brew(777);
term1.drink(888);
term1.cool(10);
console.log(term1);