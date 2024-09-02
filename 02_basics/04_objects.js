// const tinderUser = new Object() // Singleton object
const tinderUser = {} // non-singleton or literal object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstname: "hitesh",
            lastname: "deoda"
        }

    }
}

// console.log(regularUser.fullName?.userFullName.firstname); // ? => agar ye value hain to karo, condition 

const obj1 = {
    1:"a",2:"b"
}

const obj2 = {
    3:"a",4:"b"
}

const obj4 = {
    5:"a",6:"b"
}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4) // assign{<target>,<source>,<sources>...}

const obj3 = {...obj1, ...obj2,...obj4} // spread krdiya
console.log(obj3);

// jab bhi dataBase se values aayengi => DB se array of objects aayega
const users = [
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },

    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    }
    
]

users[0].email
console.log(tinderUser);


console.log(Object.keys(tinderUser)); // saari keys dedo => output => arrays of keys. VVVIMP.====================================

console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



