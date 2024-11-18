// TODO: Create a function called sum. The function will take in a parameter and calulate all the numbers from 0 -> the parameter. You must check if the parameter is an integer first before any calculation is made. If the parameter is not a number, return a message stating, “The value passed is not a number”. You are NOT allowed to use methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). Make sure to test your code effectively.
function sum(a){
    let total = 0
    if (typeof a != 'number' || a % 1 != 0){
        return "The value you have passed is not a number"
    } else if (a < 0){
        return "The value you have passed is negative"
    } else{
        for (let i = 0; i <= a; i++){
            total = total + i
        }
    } return total
    
}
console.log(sum(10));

// TODO: Create a function called ‘factorial’ that takes in a number as a parameter. The function will print the factorial of the entered number, e.g. factorial(4) -> 4*3*2*1 //output 24
function factorial(b){
    if (b == 0 || b == 1){
        return 1
    }else {
        return b * factorial(b-1)
    }   
}
console.log(factorial(4));
// TODO: Create a function called funkyMath . If this function is called with 2 arguments the function will subtract the first from the second. If the function is called with 3 arguments it will add all 3 numbers together. If the function is called with 4 arguments it will add together argument 1 and 2 , 3 and 4 separately. Then divide them accordingly, eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,25
function funkyMath(c,d,e,f){
    if (arguments.length == 2){
    return d - c
    } else if (arguments.length == 3){
        return c + d + e
    } else if (arguments.length == 4){
        return (c + d)/(e + f)
    }
}
console.log(funkyMath(1,2,3,4));

// TODO: Create a loop that will remove all the odd numbers from the array and add them to a new array. Use the current array [1, 2 , 33, 45, 6,44]. Bonus: Make sure to arrange them from smallest to biggest.()
let myArray = [1,2,33,45,6,44]
let oddNumbers = []
for (let i = 0; i < myArray.length; i++){
    if (myArray[i]% 2 != 0){
        oddNumbers.push(myArray[i])
    }
}
console.log(oddNumbers)
oddNumbers.sort()
console.log(oddNumbers)
// TODO: Create an object called ‘me’ with properties of first name, last name, age, favourite colour, dream car
let me = {
    firstName:"Avela",
    lastName:"Nikani",
    age:"25",
    favColour:"black",
    dreamCar:"Polo GTi"
};
// TODO: Create and add a new property and value of ‘favourite food’ to the object. 
me['favFood']= 'lasagne'
console.log(me);

// TODO: . Now delete the age property from the object.
delete me.age;
console.log(me)