"use strict";
let magicians = ["abc", "efg", "hij", "klm"];
//for Q43
let copy = [...magicians];
function show_magicians(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(`magician: ${list[i]}`);
    }
}
show_magicians(magicians);
//Q42(great_Magicians).ts
console.log("Q42(great_Magicians)");
function make_great(list) {
    for (let i = 0; i < list.length; i++) {
        list[i] = "The Great " + list[i];
    }
    return list;
}
// make_great(magicians);
// show_magicians(magicians);
//note:uncomment above two comments to see result of Q42
//Q43(Unchanged_Magicians).ts
console.log("Q43(Unchanged_Magicians)");
let great_magicians = make_great(copy);
console.log("The original array");
show_magicians(magicians);
console.log("The copy of original array");
show_magicians(great_magicians);
console.log("The original array to check");
show_magicians(magicians);
