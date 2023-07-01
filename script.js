// Get the widget element
const widget = document.getElementById('widget');

// Create the input fields and submit button
const input1 = document.createElement('input');
input1.placeholder = 'Enter information...';
widget.appendChild(input1);

const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
widget.appendChild(submitButton);

// Create a container for displaying the result
const resultContainer = document.createElement('div');
widget.appendChild(resultContainer);

// Handle submit button click event
submitButton.addEventListener('click', () => {
  const userInput = input1.value;

  // Display the user input in the result container
  resultContainer.textContent = `You entered: ${userInput}`;

  // Clear the input field
  input1.value = '';
});
