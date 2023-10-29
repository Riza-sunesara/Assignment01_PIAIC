"use strict";
let fname = "sAna kHan";
console.log("Upper Case: " + fname.toUpperCase());
console.log("lower Case: " + fname.toLowerCase());
let titleCase = fname.toLowerCase().split(' ');
for (var i = 0; i < titleCase.length; i++) {
    titleCase[i] = titleCase[i].charAt(0).toUpperCase() + titleCase[i].slice(1);
}
console.log("title Case: " + titleCase.join(' '));
