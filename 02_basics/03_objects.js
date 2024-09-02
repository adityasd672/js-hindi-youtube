// singleton

// object literals
// Object.create

// objec literal

const mySym = Symbol("key1")

const JsUser = {
    name: "Aditya",
    "full name": "Aditya Singh",
    [mySym] : "myKey1",
    age: 19,
    location: "Indore",
    email: "aditya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "adityasd@gmail.com"
// Object.freeze(JsUser) // no changes will be made in object

JsUser.email = "jsfljsldkfj"
// console.log(JsUser.email)

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`); // this. used to refer objects
}


console.log(JsUser.greeting())
console.log(JsUser.greetingTwo());



