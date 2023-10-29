"use strict";
let Car = "subaru";
let Bike = "honda";
let Fname = "saleem";
let Age = 19;
let Gender = "male";
console.log("Is your name salim? I predict True.");
console.log(Fname == 'Salim');
console.log("Is your name saleem? I predict True.");
console.log(Fname == 'saleem');
console.log("Is your car == 'civic'? I predict True.");
console.log(Car == 'civic');
console.log("Is your car == 'subaru'? I predict True.");
console.log(Car == 'subaru');
console.log("Is your bike == 'yamaha'? I predict True.");
console.log(Bike == 'yamaha');
console.log("Is your car == 'honda'? I predict True.");
console.log(Bike == 'honda');
console.log("Is your age <= 18 ? I predict True.");
console.log(Age <= 18);
console.log("Is your age >= 18 ? I predict True.");
console.log(Age >= 18);
console.log("Are you a female? I predict True.");
console.log(Gender == 'female');
console.log("Are you a male? I predict True.");
console.log(Gender == 'male');
//Q24(More_Conditonal_Tests)
console.log("Q24(More_Conditonal_Tests)");
// Tests for equality and inequality with strings
console.log("Is your name not Salem? I predict True.");
console.log(Fname != 'Salem');
console.log("Is your name not saleem? I predict True.");
console.log(Fname != 'saleem');
// Tests using the lower case function
console.log("Is your name SALEEM? I predict True.");
console.log(Fname.toLowerCase() == 'SALEEM'.toLowerCase()); //*** 
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is your age < 18 ? I predict True.");
console.log(Age <= 18);
console.log("Is your age > 18 ? I predict True.");
console.log(Age >= 18);
console.log("Is your age <= 18 ? I predict True.");
console.log(Age == 18);
console.log("Is your age >= 18 ? I predict True.");
console.log(Age != 18);
// Tests using "and" and "or" operators
console.log("Is your name == 'saleem' and age <= 18 ? I predict True.");
console.log(Fname == 'saleem' && Age <= 18);
console.log("Is your name == 'saleem' and age >= 18 ? I predict True.");
console.log(Fname == 'saleem' && Age >= 18);
console.log("Is your name == 'saleem' or age <= 18 ? I predict True.");
console.log(Fname == 'saleem' || Age <= 18);
console.log("Is your name == 'saleem' or age >= 18 ? I predict True.");
console.log(Fname == 'salim' || Age <= 18);
// Test whether an item is in a array
let fruits = ['Apple', 'Banana', 'Orange', 'Pineapple'];
console.log("Is Pineapple present in fruits? I predict True.");
console.log(fruits.indexOf('Pineapple') !== -1);
// Test whether an item is not in a array
console.log("Is cherry present in fruits? I predict True.");
console.log(fruits.indexOf('cherry') !== -1);
