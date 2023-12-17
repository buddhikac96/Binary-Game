// Generate a random decimal number between 1 and 255
function generateDecimalNumber() {
    return Math.floor(Math.random() * 255) + 1;
}

// Convert decimal number to binary string
function convertToBinary(decimalNumber) {
    let binaryString = "";
    while (decimalNumber > 0) {
        binaryString = (decimalNumber % 2) + binaryString;
        decimalNumber = Math.floor(decimalNumber / 2);
    }
    return binaryString;
}

// Update decimal and binary numbers
function updateNumbers() {
    const decimalNumber = generateDecimalNumber();
    document.getElementById("feedback").style.display = "none";
    document.getElementById("decimal-number").textContent = decimalNumber;
    document.getElementById("binary-input").value = "";
}

// Check user input against actual binary answer
function checkAnswer() {
    const userBinaryInput = document.getElementById("binary-input").value;
    const actualBinaryAnswer = convertToBinary(document.getElementById("decimal-number").textContent);
    const feedbackElement = document.getElementById("feedback");

    if (feedbackElement.style.display === "none") {
        feedbackElement.style.display = "block";
    }

    if (userBinaryInput === actualBinaryAnswer) {
        feedbackElement.classList.remove("alert-danger");
        feedbackElement.classList.add("alert-success");
        feedbackElement.textContent = "Correct!";
    } else {
        feedbackElement.classList.remove("alert-success");
        feedbackElement.classList.add("alert-danger");
        feedbackElement.textContent = `Wrong! Correct answer: ${actualBinaryAnswer}`;
    }
}

// Event listeners
window.addEventListener("load", updateNumbers);
document.getElementById("generate-button").addEventListener("click", updateNumbers);
document.getElementById("check-button").addEventListener("click", checkAnswer);

// Update input field with button values
const buttons = document.querySelectorAll('.btn[data-value]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const currentValue = document.getElementById('binary-input').value;
        document.getElementById('binary-input').value = currentValue + button.dataset.value;
    });
});

// Handle backspace button
const backspaceButton = document.querySelector('.btn[data-action="backspace"]');

backspaceButton.addEventListener('click', () => {
    const currentValue = document.getElementById('binary-input').value;
    if (currentValue.length > 0) {
        document.getElementById('binary-input').value = currentValue.slice(0, -1);
    }
});
