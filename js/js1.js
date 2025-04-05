'use strict';
let a = prompt('Ведите a');
let b = prompt('Ведите b');
number(a, b);
function number(a, b) {
    for (let i = a; i < b; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}