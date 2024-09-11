const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key, ":", myObject[key]);
}

const programming = ["js", "ruby", "python", "java", "cpp"]

for (const key in programming) { // array is an object and it's keys are their indexes => for in returns keys
    // console.log(key + ":" + programming[key]);
    
}

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

for (const key in map) { // for in no iteration on map
    // console.log(key);
    
}