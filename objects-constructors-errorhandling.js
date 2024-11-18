//Objects
// let person={
//     name:"Yandile",
//     surname:"Matyityilili",
//     hairType:"bold"
// }
// console.log(person.name); //Access using Dot notation
//Or
// console.log(person['name']); //Acces using bracket notation
//Or
// let {name}= person
// console.log(name)//Accessing values in objects usingDestruction
// let person={
//     name:"Yandile",
//     surname:"Matyityilili",
//     hairType:"bold",
//     get fullname(){
//         return this.name + this.surname
//     }
// }
// person.favColour = 'Purple'
// console.log(person.fullname);
// let person2={
//     name:"Surur",
//     surname:"Samaai",
//     hairType:"Curly",
//     favSport:"Formmula",
//     get fullname(){
//         return this.name + this.surname
//     }
// }
// console.log(person2.fullname);
// Factory Functions
// function createPerson(name,surname,hairType){
//     return{
//         name:name,
//         surname:surname,
//         hairType:hairType
//     }
// }
// let person = createPerson('Yandile','Matyityilili','Bold')
// console.log(person);
// person.name ="New name"
// function CreatePerson(name,surname,hairType){
//     this.name = name;
//     this.surname = surname;
//     this.hairType = hairType;
// }
//  let person = new CreatePerson('Yandile','Matyityilili','Bold')
// CreatePerson.prototype.fullname =function(){
//     console.log('Hi' + this.name);
//  }
//  let  input = prompt('What is your name?')
//  console.log(input);
// function CreatePerson(name,surname,hairType){
//     this.name = name;
//     this.surname = surname;
//     this.hairType = hairType;
// }
//  let person = new CreatePerson('Yandile','Matyityilili','Bold')
//  let person2 = new CreatePerson('Ethan','Brown','Straight')
//  let people = [person,person2]
//  console.log(people);
// for (let object of people){
//     if (object.hairType == 'Straight'){
//         console.log(object.name)
//     }
// }
// let cars =[
//     {
//         brand:'Toyota',
//         models:[{type:'Corolla'}]
//     },
//     {
//         brand:'BMW',
//         models:[{}],
//     }
// ]
// Error handling
 function times (a,b){
    if (typeof a!= 'number'|| typeof b != 'number') throw new Error('Hold up a or b is not a number')
    return a*b
 }
 try{
    console.log(times(1,8));
    console.log('Hi there times');
    
 } catch(e){
    console.log(e);
    console.log('this is after the error');
    
 } finally{
    console.log("Yay! I have run my code");
    
 }