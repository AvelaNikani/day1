// TODO: Create a function that validates user input
function validateUser (a,b){
    if (typeof a != 'number' || typeof b != 'number' ) throw new Error ('One of your values are not a number')
    return a/b
}
try{
    console.log(validateUser(1,8))
    console.log('Haaaa we are dividing mos');
    
}catch(err){
    console.log(err);
    console.log('There is an error here bruv')
}finally{
    console.log('Surely your code should be running my dawg')
}
// TODO: Create a function that demonstrates multiple error types
function demonsErrors() {
    try {
        // SyntaxError: Missing parentheses in function call
        eval('console.log("Hello World"'); // This will cause a SyntaxError
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.error("Caught SyntaxError: " + error.message);
        }
    }

    try {
        // TypeError: Cannot call a method on an undefined variable
        let obj = undefined;
        obj.toString(); // This will cause a TypeError
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Caught TypeError: " + error.message);
        }
    }

    try {
        // RangeError: Invalid array length
        let arr = new Array(-1); // This will cause a RangeError
    } catch (error) {
        if (error instanceof RangeError) {
            console.error("Caught RangeError: " + error.message);
        }
    }
}

demonsErrors();

// TODO: Create a collection of helper functions for string manipulation
function splitWords(c){
    return c.split('').join('')
}
console.log(splitWords('manipulation'))

function manipulateWords(d){
    let word = d.split('')
    word.pop()
    return word.join('')
}
console.log(manipulateWords('Sivuyile'))

function reverseWords(e){
    let igama = e.split('')
    igama.reverse('')
    return igama.join('')
}
console.log(reverseWords('zenande'));

// TODO: Create helper functions for array operations
var myArray = [44,55,66,99,77,100]


function sortMyArray (f){
    return f.sort((g,h) => g-h);
}
console.log(sortMyArray(myArray))

function addUpMyArray(i){
    let sum = i.reduce((j,k)=>j+k,0);
    return sum
}
console.log(addUpMyArray(myArray))

function multiplyMyArray (l){
    let multiple = l.reduce((m,n)=>m*n);
    return multiple
}
console.log(multiplyMyArray(myArray));
