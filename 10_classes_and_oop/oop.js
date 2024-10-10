const user = {
    username: "hitesh",
    loginCount: 8, 
    signedIn: true, 

    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`Username : ${this.username}`);
        console.log(this);
        
        
        
    }

}



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`wELCOME ${this.username}`);
        
    }

    return this
}


const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);

// "new" keyword -> internally happens
// Step 1 : new object created
// Step 2 : constructor fn. called coz of new keyword
// Step 3 : this keyword, all the arguments injected
// Step 4 : function ke andar mil jaate hain



