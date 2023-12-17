const decimalNumberElement = document.getElementById('decimal-number');
const binaryInputElement = document.getElementById('binary-input');
const feedbackElement = document.getElementById('feedback');
const checkButton = document.getElementById('check-button');
const generateButton = document.getElementById('generate-button');

function generateDecimalNumber() {
  return Math.floor(Math.random() * 255); // Generate random decimal number between 0 and 255
}

function generateBinaryNumber(decimalNumber) {
  let binaryString = '';
  while (decimalNumber > 0) {
    binaryString = (decimalNumber % 2) + binaryString;
    decimalNumber = Math.floor(decimalNumber / 2);
  }
  return binaryString;
}

function checkAnswer() {
  const userAnswer = binaryInputElement.value;
  const correctAnswer = generateBinaryNumber(parseInt(decimalNumberElement.textContent));

  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = 'Correct!';
    feedbackElement.classList.remove('alert-danger'); // Remove any previous error
    feedbackElement.classList.add('alert-success'); // Add success class
  } else {
    feedbackElement.textContent = `Wrong! Correct answer: ${correctAnswer}`;
    feedbackElement.classList.remove('alert-success'); // Remove any previous success
    feedbackElement.classList.add('alert-danger'); // Add error class
  }

  binaryInputElement.value = ''; // Clear input field
}

function generateNewNumber() {
  const decimalNumber = generateDecimalNumber();
  const correctBinary = generateBinaryNumber(decimalNumber);
  decimalNumberElement.textContent = decimalNumber;
  binaryInputElement.value = '';
  feedbackElement.textContent = '';
  feedbackElement.classList.remove('wrong'); // Remove "wrong" class if present
  // (store) correctBinary in a variable for use in checkAnswer
}

decimalNumberElement.textContent = generateDecimalNumber(); // Generate initial decimal number

checkButton.addEventListener('click', checkAnswer);
generateButton.addEventListener('click', generateNewNumber);
