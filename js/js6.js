'use strict';
let checkAge = (age) => { (age > 18) ? alert(true) : alert(confirm('Родители разрешили?')) };
let age = prompt('Ведите свой возраст');
checkAge(age);
