const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (item) {
//     console.log(item);
    
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
    
// }

// coding.forEach(printme) // reference dena hain, usko yahi pe execute nhi krna hain

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);    
// })

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach((object) => { // for each used in databases array 
    console.log(object.languageName);
    
})
