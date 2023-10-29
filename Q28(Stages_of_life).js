"use strict";
let age = 12;
if (age < 2) {
    console.log("the person is a baby");
}
else if (age >= 2 && age < 4) {
    console.log("the person is a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("the person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("the person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("the person is an adult");
}
//Q31(No_Users) starts
else if (age < -1) {
    console.log("We need to find some users!");
}
//ends
else {
    console.log("the person is an elder");
}
