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

    //console.log("hello world");

}

//console.log(typeof id);

// ----------- memories -----------

// stack memories (primitive) , heap memories (Non-primitive)

let myYoutubename = "rameesalamdotcom"

let anothername = myYoutubename
anothername = "oneeyed"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "rameesalam@google.com"

console.log(userOne.email);
console.log(userTwo.email);
