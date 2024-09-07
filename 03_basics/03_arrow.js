const user = {
    username: "aditya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// console.log(this); // we're in node environment that's why empty object and in browser it's engine i.e. Window object

// function chai(){
//     let username = 'hitesh'
//     console.log(this.username); // context in working under object, therefore undefined
    
// }

// chai();

const chai = () => {
    let username = "hitesh"
    console.log(this);
}

// chai();

// const addTwo = (num1, num2) => { // curly bracket mein explicitely return likhna hi padenga
//     return num1+num2
// }

// const addTwo = (num1, num2) => num1+num2 // implicit return

// const addTwo = (num1,num2) => (num1+num2) 

const addTwo = (num1,num2) => ({username:"hitesh"})  // object return krne ke liye

console.log(addTwo(5,4));

const myArray = [2,5,3,5,6]

// myArray.forEach()

