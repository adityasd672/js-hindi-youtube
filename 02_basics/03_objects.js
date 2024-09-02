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

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser.mySym);


