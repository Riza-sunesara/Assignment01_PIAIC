"use strict";
function order(name, ...more_items) {
    console.log(`Dear ${name}, your sandwhich has these items:\n`);
    for (let i = 0; i < more_items.length; i++) {
        console.log(`${more_items[i]}\n`);
    }
}
order("Fahad", "chicken", "cheese", "lettuce");
order("laiba", "beef", "cucumber", "tomato", "mayo");
order("Uzma", "peanut butter", "jelly");
