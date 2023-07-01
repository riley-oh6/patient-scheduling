// Get the widget element
const widget = document.getElementById('widget');

// Create the input fields and submit button
const input1 = document.createElement('input');
input1.placeholder = 'Enter information...';
widget.appendChild(input1);

const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
widget.appendChild(submitButton);

// Handle submit button click event
submitButton.addEventListener('click', () => {
  const userInput = input1.value;

  // Call your Python script or perform any desired processing here
  // For simplicity, let's display the user input in an alert box
  alert(`You entered: ${userInput}`);
});





