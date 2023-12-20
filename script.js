// Focus on first input field when page loads
window.onload = function () {
    if (binaryInputs[0]) {
        binaryInputs[0].focus();
    }
};

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

function clearBinaryInputs() {
    const binaryInputs = document.querySelectorAll('.binary-input-field');
    binaryInputs.forEach(input => {
        input.value = '';
    });

    if (binaryInputs[0]) {
        binaryInputs[0].focus();
    }
}

// Update decimal and binary numbers
function updateNumbers() {
    const decimalNumber = generateDecimalNumber();
    document.getElementById("feedback").style.display = "none";
    document.getElementById("decimal-number").textContent = decimalNumber;
    document.getElementById("binary-input").value = "";
    clearBinaryInputs();
}

// Check user input against actual binary answer
function checkAnswer() {
    const userBinaryInput = Array.from(document.querySelectorAll('.binary-input-field'))
        .map(input => input.value)
        .join('');
    const actualBinaryAnswer = convertToBinary(document.getElementById("decimal-number").textContent);
    const feedbackElement = document.getElementById("feedback");

    if (feedbackElement.style.display === "none") {
        feedbackElement.style.display = "block";
    }

    if (parseInt(userBinaryInput, 2) === parseInt(actualBinaryAnswer, 2)) {
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

let lastFocusedInput = null;

// Get all the binary input fields
const binaryInputs = document.querySelectorAll('.binary-input-field');
binaryInputs.forEach((input, index) => {
    input.addEventListener('focus', () => {
        lastFocusedInput = input;
    });
});

// Get all the binary buttons
const binaryButtons = document.querySelectorAll('.binaryButton');
binaryButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (lastFocusedInput) {
            // Set the value of the last focused input box
            lastFocusedInput.value = button.dataset.value;
            // Get the index of the last focused input box
            const focusedIndex = Array.from(binaryInputs).indexOf(lastFocusedInput);
            // If there's a next input box, focus it
            if (binaryInputs[focusedIndex + 1]) {
                binaryInputs[focusedIndex + 1].focus();
            } else {
                // If there's no next input box, focus the first one
                binaryInputs[0].focus();
            }
        }
    });
});

// Get all the binary input fields
//const binaryInputs = document.querySelectorAll('.binary-input-field');

// Add an input event listener to each field
binaryInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        // If there's a next input field, focus it
        if (binaryInputs[index + 1]) {
            binaryInputs[index + 1].focus();
        }
    });
});

// Handle clear button
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', () => {
    binaryInputs.forEach(input => {
        input.value = '';
    });

    if (binaryInputs[0]) {
        binaryInputs[0].focus();
    }
});
