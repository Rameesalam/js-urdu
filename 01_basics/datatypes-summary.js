// primitive

// 7 categories : #1 : String, Number, Boolean, Null, Undefined, 
//Symbol, BigInt

// Javascript is dynamically type language or static type?
// 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 345645454123132156n




// Reference Type is also called non primitive

// Array, Objects, Functions

const heroes = ["superman","batman", "spiderman"]
let myObj = {
    name: "ramees",
    age: 27, 

}

const myFunction = function (){

    console.log("hello world");

}

console.log(typeof id);