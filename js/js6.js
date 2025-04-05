'use strict';
let checkAge = (age) => { (age > 18) ? true : confirm('Родители разрешили?') };
let age = prompt('Ведите свой возраст');
checkAge(age);