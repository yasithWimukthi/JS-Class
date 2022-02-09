

function printName (name,age){
    console.log("My name is " + name);
    // console.log(`My name is ${name}`);
    console.log("I am " + age + " years old");
    // console.log(`I am ${age} years old`);
}

//arrow function
const printDetails =  (name,age) => {
    console.log("My name is " + name);
    // console.log(`My name is ${name}`);
    console.log("I am " + age + " years old");
    // console.log(`I am ${age} years old`);
}

// calculate two numbers
const calculator = (num1,num2) => {
    console.log(num1 + num2);
}

calculator(10,20);

//call arrow function
printDetails("John",30); // My name is John I am 30 years old


// call functions
printName("John",20); // My name is John  I am 20 years old
printName("Jane",23); // My name is Jane I am 23 years old


// javascript object
const person = {
    name: "John",
    age: 30,
    hobbies: ["Sports","Cooking"],
    //method
    greet: function(){
        console.log("Hi, I am " + this.name);
    },
    car:{
        model: "Ford",
        year: 2018
    }
}

person.name = "Jane";

// print person name
console.log(person.name);

//print car model
console.log(person.car.model);

// call greet method
person.greet();

const car = {
    brand: "Ford",
    model: "Mustang",
    year: "2020",
    color: "red",
    //method
    printDetails: function () {
        console.log(`${this.brand} ${this.model} ${this.year} ${this.color}`);
    }
}