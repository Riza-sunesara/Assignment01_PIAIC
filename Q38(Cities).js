"use strict";
function describe_city(city, Country) {
    if (Country == "") {
        console.log(`${city} is a city of Pakistan`);
    }
    else {
        console.log(`${city} is a city of ${Country}`);
    }
}
describe_city("Karachi", "");
describe_city("Houston", "USA");
