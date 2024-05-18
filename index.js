
function rollDice() {
    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');

    // Clear previous results
    diceImages.innerHTML = '';
    diceResult.innerHTML = '';

    let resultText = 'Result: ';
    for (let i = 0; i < numOfDice; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        resultText += roll + ' ';
        
        const img = document.createElement('img');
        img.src = `dice_imgs/${roll}.png`;  // Make sure you have dice1.png to dice6.png images
        img.alt = `Dice ${roll}`;

        // Trigger reflow to restart animation
        img.style.animation = 'none';
        img.offsetHeight; // Trigger reflow
        img.style.animation = '';

        diceImages.appendChild(img);
    }

    diceResult.textContent = resultText;
}
