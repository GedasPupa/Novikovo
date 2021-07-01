"use strict";


let a, b, rest;

[a, b, ...rest] = [3, 5, 7, 9, 13];

console.log(rest);
console.log(!5);
console.log(isNaN('Nnnnn'));

(() => console.log('first'))();
(function() {console.log('second')})();
(function test(){console.log('third')})(); // no test(); needed!!! now test() is not defined because it's in the closed scope
