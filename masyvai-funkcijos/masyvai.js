"use strict";

let masyvas = [101, -500, 87, -5, 1, -3, 10, 100, -100];

for (let i=0; i<masyvas.length-1; i++) {
    for(let j=i+1; j<masyvas.length; j++) {
        if (masyvas[i]>masyvas[j]) {
            let laikinas = masyvas[i];
            masyvas[i] = masyvas[j];
            masyvas[j] = laikinas;        
        }
    }
}

// console.log(masyvas);

// NAMŲ DARBAS:
let m = [1, 2, 3, 4, 5];
let rez =[[],[],[],[], []];
//console.log(rez) reikia gauti tokius rezultatus:
// 1 variantas: 
// [
//     [ 1, 2, 3, 4, 5 ],
//     [ 2, 3, 4, 5, 1 ],
//     [ 3, 4, 5, 1, 2 ],
//     [ 4, 5, 1, 2, 3 ],
//     [ 5, 1, 2, 3, 4 ]
//   ]
// 2 variantas:
// [
//     [ 1, 2, 3, 4, 5 ],
//     [ 5, 1, 2, 3, 4 ],
//     [ 4, 5, 1, 2, 3 ],
//     [ 3, 4, 5, 1, 2 ],
//     [ 2, 3, 4, 5, 1 ]
//   ]
// for (let i = 0; i < rez.length; i++) {
//     if (i === 0) {
//         for (let j in m) {
//             rez[i][j] = m[j];
//         }
//     } else { 
//         for (let j in m) {
//             rez[i][j] = rez[i-1][j];
//         }
//         let tmp = rez[i][0];
//         for (let k=0; k<rez[i].length-1; k++) {
//             rez[i][k] = rez[i][k+1];
//         }
//         rez[i][rez[i].length-1] = tmp;
//     }
// }
// 2 var.:
// for (let i = 0; i < rez.length; i++) {
//     if (i === 0) {
//         for (let j in m) {
//             rez[i][j] = m[j];
//         }
//     } else { 
//         for (let j in m) {
//             rez[i][j] = rez[i-1][j];
//         }
//         let tmp = rez[i][rez[i].length-1];
//         for (let k=rez[i].length-1; k>0; k--) {
//             rez[i][k] = rez[i][k-1];
//         }
//         rez[i][0] = tmp;
//     }
// }


// // Aleksando sprendinukas (Nesamonė!!! :) ):
// 1 variantas:
for (let x=0; x<rez.length; x++) {
    for (let y=0; y<m.length; y++) {
        rez[x][y] = m[(x + y) % m.length];
    }
}
console.log(rez);

// 2 variantas:
for (let x=0; x<rez.length; x++) {
    for (let y=0; y<m.length; y++) {
        rez[x][(x + y) % m.length] = m[y];
    }
}

console.log(rez);
