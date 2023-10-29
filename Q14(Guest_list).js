"use strict";
let guest = ["Ali", "Sara", "Danish", "Hashim"];
let invite = "I invite you to my dinner party at 9:00pm sharp at Event hall";
for (let i = 0; i < guest.length; i++) {
    console.log("Dear " + guest[i] + ", " + invite);
}
//Q15(change_guest_list)
console.log("Q15(change_guest_list)");
console.log("\nGuests who can't make it on the event are:\n" + guest[2] + "\n");
guest.splice(2, 1, "Jamal");
for (let i = 0; i < guest.length; i++) {
    console.log("Dear " + guest[i] + ", " + invite);
}
//Q16(inviting 3 more)
console.log("Q16(inviting 3 more)");
console.log("I have found a bigger table\n");
guest.unshift("Kashish");
guest.splice(Math.floor(guest.length / 2), 0, "Amin");
guest.push("Fiza");
for (let i = 0; i < guest.length; i++) {
    console.log(guest[i]);
}
//Q17(shrinking list)
console.log("Q17(shrinking list)");
console.log("Sorry, but I can invite only two people for dinner as there is space for 2 people only");
for (let i = guest.length - 1; i > 1; i--) {
    console.log(`Sorry ${guest[i]} that I can’t invite you to dinner`);
    guest.pop();
}
for (let i = 0; i < guest.length; i++) {
    console.log(guest[i]);
}
console.log("\n" + guest.length + " people in total are invited\n");
guest.pop();
guest.pop();
for (let i = 0; i < guest.length; i++) {
    console.log(guest[i]);
}
//Q19(Dinner_guests)
console.log("Q19(Dinner_guests)");
let number_guest = 0;
for (let i = 0; i < guest.length; i++) {
    number_guest++;
}
console.log(`number of guest invited till now ${number_guest}\n`);
