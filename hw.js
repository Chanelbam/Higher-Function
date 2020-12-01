// Observe the list of people below
const people = [ { name: "John Doe", age: 16 },
                 { name: "Thomas Calls", age: 19 },
                 { name: "Liam Smith", age: 20 },
                 { name: "Jessy Pinkman", age: 18 }
                ];
​
// Observe the coffeeLovers list containing people who are coffee lovers
const coffeeLovers = ["John Doe", "Liam Smith", "Jessy Pinkman"];
​
// use map, filter, and reduce to do the following:
/*
1. Filter all people above the age of 18 (use a function called ageAbove18)
2. Transform the people array so all people in the array who are in coffeeLovers have a property
   in their object called coffeeLover, set either to true or false. (Use a function called addCoffeeLoverProperty)
3. Get the total summed age of all people who are coffee lovers and above the age of 18 (Use a function called ageReducer)
*/

//Filter//
const ageAbove18 = people.filter(personAbove18 => personAbove18.age > 18);
console.log(ageAbove18);
//Map//
const coffeeLoversAbove18 = people.map(coffee18 => coffee18.age > 18);
console.log(coffeeLoversAbove18);

const addCoffeeLoverProperty = coffeeLoversAbove18.coffeeLover = true;
console.log(addCoffeeLoverProperty);

function ageReducer(accumulator, currentValue) => accumulator + currentValue;{
    console.log(addCoffeeLoverProperty + coffeeLoversAbove18);
 }

const coffeeLoversAbove18 = people.filter(ageAbove18).map(coffeeLoversAbove18);

const totalAgeOfCoffeeLoversAbove18 = coffeeLoversAbove18.reduce(ageReducer);

console.log(totalAgeOfCoffeeLoversAbove18);



