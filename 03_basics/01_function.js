
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

// console.log(loginUserMessage("Aditya"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){  // REST OPERATOR => ...num
    return num1;
}

console.log(calculateCartPrice(200,400,500,300,6000,300,453));

const user = {
    username: "hitesh",
    price: 99
}

function handleObjects(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObjects(user);
handleObjects({
    username: "Sam",
    price: 2339
});

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,599,500,200,500]));
