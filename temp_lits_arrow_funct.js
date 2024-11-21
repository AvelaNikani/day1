// TODO: Create a multiline string using template literals
let multiline_string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
// TODO: Create a function that uses template literals for HTML generation
function createHTML(name, group, city) {
    let content = `
        <div class="profile">
            <h1>Profile Information</h1>
            <p>Name: ${name}</p>
            <p>Group: ${group}</p>
            <p>City: ${city}</p>
        </div>
    `;
    return content;
}
let html = createHTML("Avela Nikani", "class 1", "Cape Town");
console.log(html);
// TODO: Convert regular functions to arrow functions
let createHTML1 = (name, group, city) => `
    <div class="profile">
            <h1>Profile Information</h1>
            <p>Name: ${name}</p>
            <p>Group: ${group}</p>
            <p>City: ${city}</p>
        </div>
`;
let arrow = createHTML1('Lithemba Mlenze', 'Class 1', 'East London')
// TODO: Use arrow functions with array methods
var myArray = [44,55,66,99,77,100]

let evenNums = myArray.filter(number=>number % 2 === 0);
console.log(evenNums);

let sqrtNums = myArray.map(number => number * number);
console.log(sqrtNums);

myArray.forEach(number => console.log(number));
