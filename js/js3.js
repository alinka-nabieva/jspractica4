'use strict';
let num = 0;
do {
    num = prompt('Введите число больше 10');
    if (!num) break;
} while (num <= 10)