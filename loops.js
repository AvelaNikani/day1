// TODO: Create an array called numbers with values 1 through 5
const numbers = [1,2,3,4,5]

// TODO: Write a for loop that prints each number in the array
numbers.forEach(numbers=>{
    console.log(numbers); 
})

// TODO: Write a while loop that counts down from 5 to 1
let numberz = numbers.reverse()
console.log(numberz);

let x = 0
while (x < numberz.length) {
    console.log(numberz[x]);
x++  
}
// TODO: Create a loop that prints only even numbers from the numbers array

let evens = []
let z = 0
while (z < numbers.length) {
    if (numbers[z] %2 == 0)
    evens.push(numbers[z]);
    z++;
}
console.log(evens); 

// TODO: Create a loop that calculates the sum of all numbers in the array
let sum = 0
for (let y = 0; y < numbers.length; y++ ){
    sum += numbers[y];
}

console.log(sum)