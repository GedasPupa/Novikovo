"use strict";

let sk = 2;

// veikia tik iki 100 (arba paskutiniame else if reikia vardinti visus pirminius skaicius)
// while (sk <= 100) {
//     if (sk < 4 && (sk % 2 === 0 || sk % 3 === 0)) {
//         console.log(sk);
//     } else if (sk < 10 && (sk % 2 !==0 && sk % 3 !== 0)) {
//         console.log(sk);
//     } else if ((sk % 2 !== 0 && sk % 3 !== 0 && sk % 5 !== 0 && sk % 7 !== 0 && sk % 9 !== 0)) {
//         console.log(sk);
//     }
//     sk++;
// }

console.log(new Date().getTime());
while (sk <= 110) {
    let pirminis = true;
    let i = 2;
    while (i < sk && pirminis) {
        sk % i === 0 ? pirminis = false : null;
        i++;
    }
    pirminis ? console.log(sk) : null;
    sk++;
}
console.log(new Date().getTime());