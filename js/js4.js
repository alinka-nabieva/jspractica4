'use strict';
let a = Number(prompt('Введите a'));
let b = Number(prompt('Введите b'));
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
