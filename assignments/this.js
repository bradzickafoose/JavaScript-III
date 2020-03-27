/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding – if no other rules apply - the 'this' keyword defaults to the window object (global object in Node) - unless using strict 'use strict' in which case it defaults to undefined.
* 2. Implicit Binding - when the function is invoked 'this' refers to what's left of the dot.
* 3. New Binding - using the 'new' keyword constructs a new object, and 'this' points to it.
* 4. Explicit Binding – we can explicitly tell the Javascript engine to set "this" to point to a certain value using call, apply or bind.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// function cat(){
//     console.log(this);
// }
// cat();

// Principle 2

// code example for Implicit Binding
let myRobot = { 
    name: 'Johnny 5',
    greeting: 'more input 🤖!',
    robot: function() {
        // console.log(this.greeting);
        return `I am a robot, ${this.greeting}`
    }
};

console.log(myRobot.robot());

// Principle 3

// code example for New Binding
function Brain(thinking){
    this.thought = thinking;
}

let myBrain = new Brain('Wave your hand: 👋🏻');

console.log(myBrain.thought)



// Principle 4
// code example for Explicit Binding

function drums() {
    console.log(this.brand);
}

let myDrums = {
    brand: 'Pearl',
    type: 'Forum Series'
}

// drums.call(`'and' ${myDrums.type}`);
drums.call(myDrums)

// Example 2
function person(attributes) {
    this.name = attributes,
    this.tagLine = function () {
        return `Hey, my name is ${this.name}`
    }
}

const Max = new person('Max')

console.log(Max.tagLine())

// Example 3
function freakyFriday(messedUp) {
	this.greeting = `Houston, we have a problem!`;
	this.name = messedUp;
	this.speak = function(param1, param2, param3) {
		return `${this.name}, ${this.greeting}, I love ${param1}, ${param2}, and ${param3}`;
	};
}
const ourLikes = [ 'React', 'Javascript', 'HTML' ];
const Tess = new freakyFriday('Jamie Lee Curtis');
const Anna = new freakyFriday('Lindsay Lohan');

console.log(Tess.speak());
console.log(Anna.speak());

console.log(Tess.speak.call(Anna, ...ourLikes));
console.log(Anna.speak.apply(Tess, ourLikes));