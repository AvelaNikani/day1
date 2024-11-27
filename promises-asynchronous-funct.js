// function waiting (callback){
//     console.log('You are waiting for your meal 1');
//     setTimeout(()=>{
//         console.log('Your food is ready');
//         callback()
//     },4000)
// }

// function ready(){
//     console.log('Your food has been served');
    
// }
// waiting(ready)
// console.log('You are waiting for your meal 2');
// console.log('You are waiting for your meal 3');

// //promise
// let workout = true
// let p = new Promise((resolve, reject)=>{
//     if (workout == true) {
//         resolve ('Awww bolo')
//     } else {
//         reject('Hebana')    
//     }

// })
// p.then((message)=> message.split('')).then(arr=> console.log(arr))
// .catch(e=>{

// })

// async function waiting() {
//     let p = await new Promise((resolve,reject)=>{

//     })
// }
// //fetching data from an api using promises
// fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
// .then(api => api.json())
// .then(data => {
//     console.log(data); 
// })
// .catch(err=> console.error(err))

//fetching data using asynchronous functions
// async function fetchData() {
//     let api = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
//     console.log(api);
    
// }
// fetchData()
//if it was an arrow function
let friends
// const fetchData = async()=> {
//     let api = await fetch('https://avelanikani.github.io/api/')
//     let data = await api.json()
//     friends = data
//     friends.forEach(item=>{
//         console.log(item.firstName);   
//     })
// }
const fetchData = async()=> {
    let api = await fetch('https://avelanikani.github.io/api/')
    let data = await api.json()
    friends = data
    friends.forEach(item=>{
        console.log(`${item.firstName} ${item.lastName} really enjoys ${item.favHobby} and is ${item.criminal? 'a criminal': 'not a criminal'}`);   
    })
    let filtered = friends.filter(friend => friend.filter== "Avela")
    console.log(JSON.stringify(filtered));
    
}
fetchData()

