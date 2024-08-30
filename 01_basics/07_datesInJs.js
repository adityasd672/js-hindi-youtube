// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toUTCString());

// console.log(typeof(myDate));

// let myCreatedDate = new Date(2024,0,23) // Month starts from 0-indexed in JavaScript
// let myCreatedDate = new Date(2024,0,23,5,3); // array hain to 0 -index
// let myCreatedDate = new Date("2023-01-14"); // string mein 1 indexed
let myCreatedDate = new Date("01-02-2023"); 
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})


