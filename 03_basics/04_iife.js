// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named iife
    console.log('DB CONNECTED');
    
})(); // we need to end the iife so that context ends

(() => {
    // unnamed iife
    console.log('DB CONNECTED TWO');
    
})();

((name) => {
    // parameter passed iife
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');

(()=>(console.log('DB CONNECTED THREE')) )();

// ()() // (<definition>)(<execution call>) 
// chai() // similar (function)()

// XXXX Don't say jo function jaldi se execute ho jaye XXXX

// IIFE => Global scope ke pollution se problem hoti hain kayi baar, to jo global scope ke pollution, jo global scope ke variable, hain use hatane ke liye hamne IIFE ka use kiya 
