const generateButton = document.getElementById('generateButton');
const resetButton = document.getElementById('resetButton');
const spellArea = document.getElementById('spellArea');
const ingredientsList = document.getElementById('ingredientsList').getElementsByTagName('li');

function getRandomColor() {
    let color = '#';
    const hexChars = '0123456789ABCDEF';

    for (let i = 0; i < 6; i++) {
        color += hexChars[Math.floor(Math.random() * 16)];
    }

    return color;
}

function generateSpell() {
    let countdown = 3;
    spellArea.innerHTML = countdown;

    const countdownInterval = setInterval(() => {
        spellArea.innerHTML = --countdown;
        if (countdown === 0) {
            clearInterval(countdownInterval);
            spellArea.innerHTML = `You have cast a spell with: ${ingredientsList[Math.floor(Math.random() * ingredientsList.length)].innerText}!`;
            spellArea.style.backgroundColor = getRandomColor();
        }
    }, 1000);
}

const resetSpell = () => {
    spellArea.innerHTML = '';
    spellArea.style.backgroundColor = '#f0f0f0';
};


generateButton.addEventListener('click', generateSpell);
resetButton.addEventListener('click', resetSpell);
