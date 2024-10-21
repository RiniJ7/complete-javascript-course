'use strict';

const Person = function( firstName,birthYear) {
//console.log(this);
this.firstName = firstName;
this.birthYear= birthYear;

//method created inside a constructor function. Not a good practice
//all objects created from this function carry this method affects the perfomance
//this.calcAge = function() {
   // console.log(2024- this.birthyear);
//}

};
const jonas = new Person('Jonas', '1991');
console.log(jonas);
//new Person('Jonas', '1900');

const matilda = new Person ('Matilda', '1995');
console.log(matilda);
const jack = new Person ('Jack', '1988');
console.log(jack);

//1. New empty object is created
//2. function is called, this = {},this key word is assigned to  an empty object
//3. {} linked to prototype
//4. function automatically return {}

console.log(jonas instanceof Person);
//returns true

//Prototypes
Person.prototype.calcAge = function (){
    console.log(2024-this.birthYear);
};

jonas.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__== Person.prototype);
//will return true