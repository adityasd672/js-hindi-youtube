const userEmail = []

if(userEmail){
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// every other => truthy values => "0", 'false', " ", [], {}, function(){}=>empty function, 

// if (userEmail.length === 0){
//     console.log("Array is empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10 // if 5 ke jagah null ya undefined aa gya to fir 10 ho jayega
// val1 = null ?? 10 
// val1 = undefined ?? 23
val1 = null ?? 10 ?? 15





console.log(val1);


// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");
