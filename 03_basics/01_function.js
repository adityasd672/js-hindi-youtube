
function sayMyName() {
    console.log("H");
    console.log("E");
    console.log("I");
    console.log("S");
    console.log("E");
    console.log("N");
    console.log("B");
    console.log("E");
    console.log("R");
    console.log("G");
}

// sayMyName()

// function addTwoNumbers(number1, number2){ // parameters
//     console.log(number1 + (number2));
// }

function addTwoNumbers(number1, number2){ // parameters
    
    return (number1+number2);
}

const result = addTwoNumbers(1,7); // arguments
// console.log("result: ", result);

function loginUserMessage(username = "sam") { // default value
    if(!username){
        return "Please enter a username"
    }
    
    return `${username} just logged in.`
    
}

console.log(loginUserMessage("Aditya"));
console.log(loginUserMessage());