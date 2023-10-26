const buttons = document.querySelectorAll('.button');
const userInput = document.getElementById('user-input');
let inputHistory = []; // Keeps track of input history


// Clears user input when page is loaded or refreshed
document.addEventListener('DOMContentLoaded', function() {
    userInput.value = '';
    inputHistory = [];
})

// Attaches an event listener to each button and has it's value entered into the screen as user input.
buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.value;
      userInput.value += value;  
    });
});


// Attach an event listener to the DEL button
document.querySelector('button[value="DEL"]').addEventListener('click', () => {
  // Remove the last character from the user input
  userInput.value = userInput.value.slice(0, -1);
});

// Attach event listeners to the operator buttons (+, -, *, /)
document.querySelector('button[value="-"]').addEventListener('click', () => {
  userInput.value += '-';
});

document.querySelector('button[value="."]').addEventListener('click', () => {
  userInput.value += '.';
});

document.querySelector('button[value="/"]').addEventListener('click', () => {
  userInput.value += '/';
});

document.querySelector('button[value="x"]').addEventListener('click', () => {
  userInput.value += '*'; // Use * for multiplication
});

// Attach an event listener to the RESET button
document.querySelector('button[value="RESET"]').addEventListener('click', () => {
  userInput.value = ''; // Clear the user input
});

// Attach an event listener to the = button for calculation
document.querySelector('button[value="="]').addEventListener('click', () => {
  try {
    userInput.value = eval(userInput.value);
  } catch (error) {
    // Handle potential calculation errors
    userInput.value = 'Error';
  }
});

