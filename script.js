const buttons = document.querySelectorAll('.button');
const numButtons = document.querySelectorAll('.button-num')
const userInput = document.getElementById('user-input');

// Clears user input when page is loaded or refreshed
document.addEventListener('DOMContentLoaded', function() {
    userInput.value = '';
})

// Attaches an event listener to each button and has it's value entered into the screen as user input.
numButtons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.value;
      userInput.value += value;  
    });
});

// Event listener for the DEL button
document.querySelector('button[value="DEL"]').addEventListener('click', () => {
  // Remove the last character from the user input
  userInput.value = userInput.value.slice(0, -1);
});

// Event listeners for the operator buttons (+, -, *, /)
document.querySelector('button[value="-"]').addEventListener('click', () => {
  userInput.value += '-';
});

document.querySelector('button[value="+"]').addEventListener('click', () => {
    userInput.value += '+';
  });

document.querySelector('button[value="."]').addEventListener('click', () => {
  userInput.value += '.';
});

document.querySelector('button[value="/"]').addEventListener('click', () => {
  userInput.value += '/';
});

document.querySelector('button[value="x"]').addEventListener('click', () => {
  userInput.value += '*'; 
});

// Event listener for the RESET button
document.querySelector('button[value="RESET"]').addEventListener('click', () => {
  userInput.value = ''; // Clears user input
});

// Event listener for the = button for calculation
document.querySelector('button[value="="]').addEventListener('click', () => {
    try {
      userInput.value = eval(userInput.value);
    } catch (error) {
      // Handle potential calculation errors
      userInput.value = 'Error';
    }
});

