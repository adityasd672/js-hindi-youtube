const name = "aditya"
const repCount = 50

// console.log(name + repCount + " vValue")

// console.log(`Hello my name is ${name} and my repo count is ${repCount}`)

const gameName = new String('hiteshChoudhary')
// console.log(gameName)
// console.log(gameName.__proto__);


// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) // substr => can't give -ve
console.log(newString)

const anotherString = gameName.slice(-15,4);
console.log(anotherString)

const newStringOne = "       hitesh        "
console.log(newStringOne)
console.log(newStringOne.trim()) // works only on whitespaces characters or newline characters

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'))