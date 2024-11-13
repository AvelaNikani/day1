// Variables

//strings
// let name = "Avela" 
/*
Awe mase kinners

*/
// const name = "avela"

//var name = "Avela"

//numbers
//let number1 = 10.5

//booleans
//let value = true//false

//undefined
//let name

//null
//let value = null

//Symbols
//let name = true
//let num = 5

//console.log(`My name is ${name}`);
//console.log("My name is " + name +num );

// array
let myArray = ['anything',2, true, 'string']
console.log(myArray[1]);//indexing

// camelcase -> myArray (always used in JS)
// Pascalcase -> MyArray
// kebabcase -> my-array (only use in vue)

//object literal - declare (make) an object
let table = {
    material: "wood",
    no_of_legs:4,
    occupied:true,
}
//bracket notation
console.log(table['material']);

//copy the line =  shift+alt+ pgdn delete= crtl + x  move code= highlight alt pgdn

//dot notation
console.log(table.material);

//destructing
let {material,occupied} = table//wood

console.log(material);

//functions
//() -> parentheses
//[] -> brackets
//{} -> braces
function greeting(a,b){
    //a&b are parameters
    console.log('This is a greeting'+ (a+b));
    
}
//3&4 are arguments
greeting(3,4)

let num1 = 5
//++num1 pre increment
//num1++ post increment
//--num1 pre decrement
//num1-- post decrement
console.log(num1--);
console.log(num1);

//shows the length of the string
let myString = "Something"

console.log(myString.length);


//to make a string lowercase
console.log(myString.toLowerCase);

//to make a string uppercase
console.log(myString.toUpperCase);

//to split the string
let split = myString.split('')
console.log(split);





