'use strict';

const Person = function( firstName,birthYear) {
//console.log(this);
this.firstName = firstName;
this.bithYear= birthYear;

};
const jonas = new Person('Jonas', '1991');
console.log(jonas);
//new Person('Jonas', '1900');

const matilda = new Person ('Matilda', '1995');
console.log(matilda);

//1. New empty object is created
//2. function is called, this = {},this key word is assigned to  an empty object
//3. {} linked to prototype
//4. function automatically return {}