// TODO: Create a global variable called globalCount
var globalCount = 0
// TODO: Create a function that demonstrates local scope
function demonstrateLocal() {
    let x = 9;  // 'x' is local to this function
    console.log("Inside function, x =", x);
}
demonstrateLocal();

// TODO: Create a function that tries to modify both variables
// function modifyBoth(){
//     globalCount += 10
//     console.log(globalCount);
//     x += 2
//     console.log(x)    
// }
// modifyBoth()
// TODO: Create a Student constructor function
function Student (first,last,age) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
}
// TODO: Create several student instances
let student1 = new Student ('Avela', 'Nikani', '25')
let student2 = new Student ('Sivuyile', 'Mtwetwe', '24')
let student3 = new Student ('Lithemba', 'Mlenze', '21')
console.log(student1);
console.log(student2);
console.log(student3);

// TODO: Create an object literal with nested properties
let cars =[
  {
        brand:'Toyota',
        models:[{type:'Corolla'}]
    },
    {
        brand:'BMW',
        models:[{}],
    }
]