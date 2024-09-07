// let a = 10;
// const b = 20;
// var c = 30;

let a = 300

if (true) {
    // let a = 60;
    // const b = 50;
    // var c = 40;

    let a = 10;

    // console.log("Inner: ", a);
    
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];    
// }

// console.log(a);
// console.log(b);
// console.log(c); // as you can see "var" isn't confined to scope 


function one(){
    const username = "Aditya"

    function two(){
        const website = "YouTube"
        // console.log(username);
    }
    // console.log(website); // yahi pe error de diya to two() call hi nhi hua=> line by line =>interpreter
    

    two() 
    // closure => nested function can use outer function variables
}

one()

if (true) {
    const username = "hitesh"
    if(username == "hitesh"){
        const website = " youtube"
        // console.log(username + website);
    }

    // console.log(website);
    
}
// console.log(username)

// ++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++

console.log(addone(5));

function addone(num){
    return num+1
}

console.log(addTwo(5)); // now error => hoisting concept

const addTwo = function(num){ // expression 
    return num+2
}