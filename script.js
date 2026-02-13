// Select elements
const display = document.getElementById('display');
const btnPlus = document.getElementById('increment');
const btnMinus = document.getElementById('decrement');
const message = document.getElementById('message');

let count = 0;

function updateApp() {
    // 1. Update the number
    display.textContent = count;

    // 2. Button Logic (0 to 10)
    btnMinus.disabled = (count <= 0);
    btnPlus.disabled = (count >= 10);

    // 3. Visual Feedback
    if (count === 10 || count === 0) {
        message.style.visibility = "visible";
        display.style.color = "#a0aec0"; // Grey out when at limit
    } else {
        message.style.visibility = "hidden";
        display.style.color = "#2d3748"; // Dark color for active numbers
    }
}

// Event Listeners
btnPlus.onclick = function() {
    if (count < 10) {
        count++;
        updateApp();
    }
};

btnMinus.onclick = function() {
    if (count > 0) {
        count--;
        updateApp();
    }
};

// Start the app state
updateApp();