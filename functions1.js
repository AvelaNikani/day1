// TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply all 3 numbers together. Note: The argument passed must NOT be the same number. 

function multiply(a,b,c){
    console.log(a*b*c)
}
multiply(5,6,7)
// TODO: Create a function expression called ‘convertToSeconds’ that takes in a number of minutes as an argument and returns the amount in seconds. ***Do not use a console.log() inside of the function***

function convertToSeconds(a){
    return (a * 60)
}
console.log(convertToSeconds(15))
// TODO: Create a function called fahrenheitToCelsius that takes the temperature as an parameter and returns the equivalent temperature in Celsius. ***Do not use a console.log() inside of the function***

function fahrenheitToCelsius(z){
    return ((z-32) * 5/9)
}
console.log(fahrenheitToCelsius(100))
// TODO: Create a function that takes a string as a parameter and returns the reverse of the string. ***Do not use a console.log() inside of the function ***

function klaar(string){
    return string.split("").reverse().join("")
}
console.log(klaar("Avela"))
// TODO: Create a function that takes in a string and returns the number of Vowels in the sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not use a console.log() inside of the function***
const vowels = ['a','e','i','o','u']
let vowelAmount = 0

function amountOfVowels(string){
    for (let char of string){
        if (vowels.includes(char)){
            vowelAmount++
        }
    }
    return vowelAmount
}
console.log(amountOfVowels("ayoba"))
// TODO: Create a “isPrime” function that takes a number as a parameter and returns true if the number is prime, and false otherwise. Make sure to test your code with 4 numbers
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
       if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(104))