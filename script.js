const randomNumber = Math.floor(Math.random() * 300) + 1;

const checkGuess = () => {
    const userGuess = Number(document.getElementById('guess').value);
    const message = document.getElementById('message');
    
    if (userGuess === randomNumber) {
        message.style.color = 'green';
        message.textContent = 'Congratulations! You Win 🎉';
    } else if (userGuess > randomNumber) {
        message.style.color = 'Orange';
        message.textContent = 'Too high! Try again!';
    } else {
        message.style.color = 'red';
        message.textContent = 'Too low! Try again!';
    }
};

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
}