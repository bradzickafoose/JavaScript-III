//The this keyword in Javascript
function Brain(thinking){
    this.thought = thinking;
}

let myBrain = new Brain('Wave your hand: 👋🏻');

console.log(myBrain.thought);

// Prework 'this'
function Person(obj) {
  this.name = obj.name;
  this.age = obj.age;
  this.speak = function() {
    console.log(`This new binding`, this);
    return `Hello, my name is ${this.name}, and I am ${this.age} years old!`;
  }
}

const brad = new Person({name: 'Bradley', age: 37});
const sara = new Person({name: 'Sara', age: 21});

brad.speak();
sara.speak();

brad.speak.call(sara);
sara.speak.apply(brad);

//Constructor & Prototypes
function Fruit(attrs) {
  this.type = attrs.type;
  this.name = attrs.name;
  this.isRipe = attrs.isRipe;
  this.calories = attrs.calories;
}

Fruit.prototype.shipped = function(destination) {
  console.log(`Shipping ${this.name} to ${destination}`);
};

Fruit.prototype.calculateCals = function() {
  console.log(`Calories in ${this.name} are ${this.calories * 200}`);
};

function Banana (bananaAttrs) {
  Fruit.call(this, bananaAttrs);
  this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;
}

Banana.prototype = Object.create(Fruit.prototype);

Banana.prototype.checkIfMonkeysLikeIt = function() {
  if(this.doMonkeysLikeIt) {
      return true;
    } else {
      return false;
    }
  };

function Kiwi(kiwiAttrs) {
  Fruit.call(this, kiwiAttrs);
  this.isFuzzy = kiwiAttrs.isFuzzy;
}

Kiwi.prototype = Object.create(Fruit.prototype);

Kiwi.prototype.checkIfFuzzy = function() {
    if(this.isFuzzy) {
      return true;
    } else {
      return false;
    }
}

const newKiwi = new Kiwi({
  doMonkeysLikeIt: true,
  type: 'Tree',
  name: 'Kiwi',
  isRipe: false,
  calories: 0.7
});

const newBanana = new Banana({
  doMonkeysLikeIt: true,
  type: 'Tree',
  name: 'Banana',
  isRipe: false,
  calories: 0.1
});

console.log(newBanana.shipped('Alaska'));
console.log(newKiwi.shipped('Colorado'));
console.log(newBanana.checkIfMonkeysLikeIt());
console.log(newKiwi.checkIfFuzzy());
console.log(newBanana.calculateCals());
console.log(newKiwi.calculateCals());



