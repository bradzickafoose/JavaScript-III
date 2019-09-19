
// Coding Challenge 13: Create a function to return true if both arguments are true, and return false otherwise.

function returnsTrue(arr1, arr2) {
  if(arr1 === true && arr2 === true){
    return true
  } else {
    return false
  }
}
console.log(returnsTrue(true,true));

//Coding Challenge 14: Add a Method to the Person's prototype called "shoutName" that returns the person's name in all uppercase letters.

function Person(name) {
  this.name = name;
}
Person.prototype.shoutName = function() {
  return this.name.toUpperCase();
};

const john = new Person('John');
console.log(john.shoutName(), '<-- should be "JOHN"');

// Coding Challenge 15: Modify the function to return the total summed age of all of the people.
function getSummedAge(people) {
    return people.reduce((sum,i)=>sum+i.age,0);
}

/* Do not modify code below this line */
const examplePeopleArray = [
 { name: 'John', age: 10 },
 { name: 'Jack', age: 20 },
 { name: 'Jane', age: 25 }
];
console.log(getSummedAge(examplePeopleArray), '<-- should be 55');