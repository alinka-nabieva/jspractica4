'use strict';
let a = prompt('Введите a');
let b = prompt('Введите b');
alert(min(a, b));
function min(a, b) {
    if (a < b) {
        return a
    } else if (b < a) {
        return b;
    } else {
        return 'Они равны';
    }
}