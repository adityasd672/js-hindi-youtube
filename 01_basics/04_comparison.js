// console.log("2" > 1)

// avoid such comparison- always value clean code
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0) // here 'null' converted to 0, therefore it is true

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

// comparison == and === are different

// === strict check => checks values and datatypes

console.log("2" == 2);
console.log("2" === 2);