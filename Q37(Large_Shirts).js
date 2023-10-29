"use strict";
function make_Shirt(size, Text) {
    if (size === "" && Text === "") {
        console.log(`You have given the size of T-shirt as: Large\nThe text to be printed on the shirt is: I Love Typescript`);
    }
    else if (Text == "") {
        console.log(`You have given the size of T-shirt as: ${size}\nThe text to be printed on the shirt is: I Love Typescript`);
    }
    else {
        console.log(`You have given the size of T-shirt as: ${size}\nThe text to be printed on the shirt is: ${Text}`);
    }
}
make_Shirt("", ""); //for default 
make_Shirt("Medium", ""); //for size medium and text as default
make_Shirt("Small", "I Love Pakistan"); //for another size and text
