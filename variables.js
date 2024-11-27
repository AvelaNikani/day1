// // Variables

// //strings
// // let name = "Avela" 
// /*
// Awe mase kinners

// */
// // const name = "avela"

// //var name = "Avela"

// //numbers
// //let number1 = 10.5

// //booleans
// //let value = true//false

// //undefined
// //let name

// //null
// //let value = null

// //Symbols
// //let name = true
// //let num = 5

// //console.log(`My name is ${name}`);
// //console.log("My name is " + name +num );

// // array
// let myArray = ['anything',2, true, 'string']
// console.log(myArray[1]);//indexing

// // camelcase -> myArray (always used in JS)
// // Pascalcase -> MyArray
// // kebabcase -> my-array (only use in vue)

// //object literal - declare (make) an object
// let table = {
//     material: "wood",
//     no_of_legs:4,
//     occupied:true,
// }
// //bracket notation
// console.log(table['material']);

// //copy the line =  shift+alt+ pgdn delete= crtl + x  move code= highlight alt pgdn

// //dot notation
// console.log(table.material);

// //destructing
// let {material,occupied} = table//wood

// console.log(material);

// //functions
// //() -> parentheses
// //[] -> brackets
// //{} -> braces
// function greeting(a,b){
//     //a&b are parameters
//     console.log('This is a greeting'+ (a+b));
    
// }
// //3&4 are arguments
// greeting(3,4)

// let num1 = 5
// //++num1 pre increment
// //num1++ post increment
// //--num1 pre decrement
// //num1-- post decrement
// console.log(num1--);
// console.log(num1);

// //shows the length of the string
// let myString = "Something"

// console.log(myString.length);


// //to make a string lowercase
// console.log(myString.toLowerCase);

// //to make a string uppercase
// console.log(myString.toUpperCase);

// //to split the string
// let split = myString.split('')
// console.log(split);


// let button = document.querySelector('button');
// let tag = document.getElementsByTagName('h1')[2];
// let previousText = tag.innerText;
// button.addEventListener('click', () => {
//     if (tag.innerText === previousText) {
//         tag.innerText = "JAVASCRIPT IS AWESOME!";
//     } else {
//         tag.innerText = previousText;
//     }
// });
// let pluralh1 = document.querySelectorAll('h1')
// pluralh1.forEach(element => {
//     element.addEventListener('click', ()=> {
//         alert(element.innerText)
//     })
// })
// let calculate = document.querySelectorAll('button')[1]
// let span = document.querySelector('span')
// calculate.addEventListener('click', ()=>{
//     let input1 = document.querySelectorAll('input')[0].value
//     let input2 = document.querySelectorAll('input')[1].value
//     let answer = +input1 + +input2
//     span.innerText= answer
// })

let form = document.getElementById('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(form.elements);
    const {email,password,username} = form.elements
    if (!email.value ){
        alert('Please enter an email')
        return
    } else if (!username.value){
        alert('Please enter your username')
        return
    }else if (!password.value){
        alert('Please enter your password')
        return
    }else {
        alert('The form has been submitted')
        return
    }   
})

let h4 =document.querySelector('h4')
let p = document.querySelector('[avel]')

h4.addEventListener('click', ()=>{
    p.classList.add('hidden')
//     if (p.style.display === 'none'){
//         p.style.display = 'block'
//     } else {
//         p.style.display = 'none'
//     }
})