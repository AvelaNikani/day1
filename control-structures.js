// let myString = "Somethings"
// if(myString == "Something"){
//     console.log('The string is equal to Something');
    

// } else if ( typeof myString == 'string') {
//     console.log('The string is a string but it is not equal to Something');
    

// } else{
//     console.log('The string is not equal to Something');
    
// }
// let age = 15
// if(age>=18){
//     console.log('You qualify for your Drivers license');
    

// } else if (age>=16 && age<18) {
//     console.log('You do not qualify for a drivers but do qualify for a learners');


// } else{
//     console.log('You are too young');
    
// }
// //even numbers
// let num = 5
// if(num % 2==0){
//     console.log('Your number is even');
    

// } else{
//     console.log('Your number is odd');
    
// }
// //odd numbers
// let numb = 6
// if(numb % 2!=0){
//     console.log('Your number is odd');
    

// } else{
//     console.log('Your number is even');
    
// }

// let a = 56
// let b = 71
// let c = 55

// let average_sum = (a + b + c)/3
// console.log(average_sum);

// if (average_sum>=80 && average_sum<=100) {
//     console.log("A");
// }
// else if (average_sum>=70 && average_sum<=79) {
//     console.log("B");
// }
// else if (average_sum>=60 && average_sum<=69) {
//     console.log("C");
// }
// else if (average_sum>=50 && average_sum<=59) {
//     console.log("D");
// }
// else {
//     console.log("You have failed");   
// }
// //version 1 of Switch statements
// let value = 2
// switch (value){
//     case 1:
//         console.log("It is sunny");
//         break;
//     case 2:
//         console.log("It is cloudy");
//         break;
//     case 3:
//         console.log("It is raining");
//         break;
//     default:
//         console.log("Couldn't read the value");
//         break;
// }
// //version 2 of switch statements
// let num = 5
// switch (true) {
//     case num %2==0:
//         console.log('Number is even');
//         break;

//     default:
//         console.log('Number is odd');
//         break;
// } 
// ternary version 3 of switch statements
// let num1 = 7
// console.log(num1>10 ? 'This is true': 'This is not true');

// let num2 = 11
// console.log(num2%2==0 ? 'Even': 'Odd');

// // for loop on js
// for(let x = 1; x<10; x++){
//     console.log(x)
// }

// while loop in js
let w = 1
while (w<5) {
    console.log('Avela');
    w++
}


//do while loop in js
do {
    console.log('Avela');
    w++
} while (w<5)

//for of loop in js

let myarray = ['Zenande', 'Prof','Lithesh', 'Asiphesona']

for (let x = 0; x < myarray.length; x++){  //starts at zero because indexing in arrays start at 0
    console.log(myarray[x]);
    
}

//for- of loop in js
for (let array of myarray) {
    console.log(array);
    
}
//for- in loop in js
for (let array in myarray) {
    console.log(myarray[array]);        
}
