"use strict";

let p = new Promise((resolve, reject) => {
    console.log('start promise function');
    if (Math.random()>0.5) {
        console.log('resolving promise');
        resolve('resolve value');
    } else {
        console.log('rejecting promise');
        reject('reject value');
    }
    console.log('finish promise function');
});
// let p = new Promise((resolve, reject) => {
//     console.log('start promise function');
//     setTimeout(() => {
//         if (Math.random()>1) {
//             console.log('resolving promise');
//             resolve('resolve value11111111');
//         } else {
//             console.log('rejecting promise');
//             reject('reject value');
//         }
//     }, 100);
//     console.log('finish promise function');
// })
p.then(
    value => {
        console.log('promise was resolved with ' + value);
        return 'NEW resolve value';
    }
    // ,
    // reason => {
    //     console.log('promise was rejected with reason ' + reason);
    //     return 'new reject VALUEeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
    // }
).then(
    v => {
        console.log('P2 resolved WITH: ' + v);
    }
)
// .then(
//     null,
//     reason => {
//         console.log('ATMETIMO REASONAS ' + reason);
//     }
// )
// arba:
.catch(reason => { console.log('CIA CATCHAS: ' + reason)});

// SVARBU !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111
// .then(null, reason=> {'......' + reason})
//yra visiskai tas pats kas:
// .catch(reason => {'......' + reason})

console.log('PROGRAM FINISHED');