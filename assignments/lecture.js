// Window Binding - if none of the other rules apply - the this keyword defaults to the window object (global object in Node) - unless you use strict in which case it defaults to undefined.
// need to be aware of window binding but it's not something you are going to use on purpose
// 'use strict';
// strict mode - prevents window binding from breaking our code but will return undefined
function ghost(){
  console.log(this.boo);
}

const boo = "👻"; 

// ghost();


// Implicit Binding
// implicit === automatic
// when the function is invoked this refers to what's left of the dot

let myGhost = {
  name: 'Casper',
  boo: 'boooo 👻!',
  ghost: function() {
    console.log(this.boo);
  }
}

myGhost.ghost(); //invoking function here

let petOne = {
  name: 'Bella',
  species: 'dog',
  pronoun: 'she',
  favFood: 'tacos',
  eat: function(){
    console.log(`${this.name} is a ${this.species} and ${this.pronoun} likes to eat ${this.favFood}`);
  }
}

// petOne.eat();

//BREAK OUT
// The  this keyword: IMPLICIT BINDING Breakout
// Build a  person object.
// - it has a “name” prop.
// - it has an “age” prop.
// - it has a “location” prop.
// - it has a “greet” method that logs “hi, I am name, I’m from location and I am age years old” (do NOT use hard-coded name age or location!)

let person = {
  name: 'Brad',
  age: 37,
  location: 'Durham',
  greet: function() {
    console.log(`Hi, I am ${this.name}, I am from ${this.location} and I am ${this.age} years old.`)
  }
}

person.greet();

//Explicit Binding
// we can explicitly tell the Javascript engine to set "this" to point to a certain value using call, apply or bind

// call & apply can be used to invoke a function immediately
// call – we pass in arguments one by one
// apply – we pass additional arguments in as arrays
// with both the first argument tells us what "this" is

function ghost(){
  console.log(this.boo);
}

let myGhost = {
  name: 'Casper',
  boo: 'boooooooo 👻!'
}

ghost.call(myGhost); // invoking the function here

// BIND
// used to create a new function that's permanently bound to a "this" value

function ghost(){
  console.log(this.boo);
}

let myGhost = {
  name: 'Casper',
  boo: 'boooo! '
}

// friendlyGhost = ghost.bind(myGhost);

// friendlyGhost(); // the function is being invoked here

// BREAK OUT
function callOfTheWild(){
  console.log(`${this.name} says ${this.sound}`);
}

const dog = {
  name: 'Bella',
  species: 'dog',
  sound: 'woof woof'
}

// callOfTheWild.call(dog); //invoke the function

// NEW binding
// using the new keyword constructs a new object, and this points to it.

function Ghost(saying) {
  this.thing = saying;
}

let myGhost = new Ghost('Casper the friendly 👻');

// console.log(myGhost.thing);


// BREAK OUT
// Create a function of called food and pass in a parameter of favourite set this food to your parameter
// Create a new function using the new keyword called myFavouriteFood and pass in the parameter of your favourite cuisine
// Console log my favourite food is: and the result

function Food(favourite) {
  this.fav = favourite;
}

let myFavouriteFood = new Food('Apple');

// console.log(myFavouriteFood.fav);


// Prototypes

// A constructor function constructs other objects - that's it's whole purpose!

function Pet(attributes){
  this.newName = attributes.name,
  this.newSpecies = attributes.species,
  this.newPronoun = attributes.pronoun,
  this.newFavFood = attributes.favFood,
  this.newSound = attributes.sound
  // console.log(this);
}
  
Pet.prototype.eat = function(){
    return `${this.newName} is a ${this.newSpecies} and ${this.newPronoun} likes to eat ${this.newFavFood}.`;
}

Pet.prototype.speak = function(){
  return `${this.newName} says ${this.newSound}`;
}

let petOne = new Pet({
  name: 'Bella',
  species: 'dog',
  pronoun: 'she',
  favFood: 'tacos',
  sound: 'woof woof'
});

let petTwo = new Pet({
  name: 'Bailey',
  species: 'dog',
  pronoun: 'he',
  favFood: 'shrimp',
  sound: 'WOOF WOOF!'
});

let petThree = new Pet({
  name: 'Winston',
  species: 'cat',
  pronoun: 'he',
  favFood: 'steak',
  sound: 'meow meow'
});

let petFour = new Pet({
  name: 'Glass',
  species: 'cat',
  pronoun: 'she',
  favFood: 'apple-smoked ham',
  sound: 'MEOW MEOW!'
});

// console.log(petOne.eat());
// console.log(petTwo.eat());
// console.log(petThree.eat());
// console.log(petFour.eat());

// console.log(petOne.speak());
// console.log(petTwo.speak());
// console.log(petThree.speak());
// console.log(petFour.speak());

