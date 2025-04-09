'use strict';
let a = Number(prompt('Ведите a'));
let b = Number(prompt('Ведите b'));
number(a, b);
function number(a, b) {
    for (let i = a; i < b; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
