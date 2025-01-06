const counterElement = document.getElementById('counter');
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const timerButton = document.getElementById('timer');

let counterValue = 0;
let timerInterval = null; // To store the interval ID for the timer

// Decrease button functionality
decreaseButton.addEventListener('click', () => {
    counterValue--;
    counterElement.textContent = counterValue;
});

// Increase button functionality
increaseButton.addEventListener('click', () => {
    counterValue++;
    counterElement.textContent = counterValue;
});

// Timer button functionality
timerButton.addEventListener('click', () => {
    if (timerInterval === null) {
        // Start the timer if not already running
        timerInterval = setInterval(() => {
            counterValue++;
            counterElement.textContent = counterValue;
        }, 1000);

        // Change button text to indicate stop
        timerButton.textContent = 'Stop Timer';
    } else {
        // Stop the timer if it's running
        clearInterval(timerInterval);
        timerInterval = null;

        // Change button text back to start
        timerButton.textContent = 'Start Timer';
    }
});
