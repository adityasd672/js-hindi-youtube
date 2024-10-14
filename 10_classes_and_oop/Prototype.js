// let myName = "aditya                   "
// let mychannel = "chai           "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer", 
    spiderman : "sling", 


    getSpiderPower: function(){

        console.log(`Spidy power is ${this.spiderman}`);        
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present is all objects.`);
    
}

Array.prototype.heyHitesh = function () {
    console.log(`Hitesh says hello`);
    
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai", 
    email: "chai@google.com"
}

const Teacher = {
    makeVideo :true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport // prototypal inheritance from TeachingSupport 
}

Teacher.__proto__ = User // teacher user ki saari properties acces kr skte hain

// modern syntax for inheritance
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherusername = "ChaiAur Code       "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
    
    
}

anotherusername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()