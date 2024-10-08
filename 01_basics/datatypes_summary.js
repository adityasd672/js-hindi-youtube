//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
console.log(typeof outsideTemp)
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (non-primitive)

let myYoutubename = "adityasingdeodacom"

let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(anothername);
console.log(myYoutubename);

let user = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = user // reference not copy
userTwo.email = "aditya@google.com"

console.log(user.email)
console.log(userTwo.email)

// primitive => stack and gets copy
// Non-primitive => heap and gets reference, so changes are same
