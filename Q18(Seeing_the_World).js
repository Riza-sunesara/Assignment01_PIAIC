"use strict";
let country = ["America", "Canada", "Pakistan", "Spain", "Morroco"];
console.log(country);
//alphabetical order
console.log([...country].sort());
console.log(country);
//reverse alphabetical order
console.log([...country].sort().reverse());
console.log(country);
//again reverse
console.log(country.reverse());
//again reverse yeh original form hogi
console.log(country.reverse());
//sort original array
console.log(country.sort());
//reverse original array
console.log(country.sort().reverse());
/* Q22(Intentional_Error)

for (let i = 0; i < country.length; i--) {
    console.log(country[i]);
}

corrected version
*/
for (let i = 0; i < country.length; i++) {
    console.log(country[i]);
}
