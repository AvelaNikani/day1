 // Get references to DOM elements
 const generateButton = document.getElementById('generateButton');
 const resetButton = document.getElementById('resetButton');
 const spellArea = document.getElementById('spellArea');
 const ingredientsList = document.getElementById('ingredientsList').getElementsByTagName('li');
 
 // Function to generate a random spell ingredient
 function generateSpell() {
     // Countdown from 3 to 1
     let countdown = 3;
     spellArea.innerHTML = countdown;
     let countdownInterval = setInterval(function() {
         countdown--;
         spellArea.innerHTML = countdown;
         if (countdown === 0) {
             clearInterval(countdownInterval);
             // Select random ingredient from the list
             const randomIndex = Math.floor(Math.random() * ingredientsList.length);
             const selectedIngredient = ingredientsList[randomIndex].innerText;
             
             // Change the background color to a random color
             spellArea.style.backgroundColor = getRandomColor();
             
             // Display the spell ingredient
             spellArea.innerHTML = `You have cast a spell with: ${selectedIngredient}!`;
         }
     }, 1000);
 }

 // Function to get a random color
 function getRandomColor() {
     const letters = '0123456789ABCDEF';
     let color = '#';
     for (let i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
     }
     return color;
 }

 // Function to reset the spell area
 function resetSpell() {
     spellArea.innerHTML = '';
     spellArea.style.backgroundColor = '#f0f0f0';
 }

 // Event listener for the generate button
 generateButton.addEventListener('click', generateSpell);

 // Event listener for the reset button
 resetButton.addEventListener('click', resetSpell);