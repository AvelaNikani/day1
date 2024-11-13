const numbers = [1,2,3,4]

numbers.forEach(numbers => {
    console.log(numbers);   
});

let coolCars = ['BMW','Bugati','Ferrari','McLaren','Mercedes']

coolCars[3] = 'Lamborghini'
console.log(coolCars);

for (let x = 0; x < coolCars.length; x++) {
    console.log(coolCars[x]);
}

coolCars.reverse()
console.log(coolCars);


let coolCarz = coolCars.reverse()
console.log(coolCarz);

let removedCarz = coolCarz.pop()
console.log(removedCarz);

console.log(coolCars);
coolCars.unshift(removedCarz)

console.log(coolCars);

let age = 20

if(age >= 18) {
    console.log("You are of age!");
}else{
    console.log("You are younger than the stipulated age");  
}

let age1 = 19
switch (true) {
    case age1 >= 18:
        console.log('This person is older');
       break;

    default:
        console.log('This person is younger');
        break;
}
let x = 0
while (x < coolCars.length) {
    console.log(coolCars[x]);
x++    
}


