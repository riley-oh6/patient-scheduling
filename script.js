// Get the widget element
const widget = document.getElementById('widget');

// Create the input fields and submit button
const xInput = document.createElement('input');
xInput.placeholder = 'Enter value for x...';
widget.appendChild(xInput);

const yInput = document.createElement('input');
yInput.placeholder = 'Enter value for y...';
widget.appendChild(yInput);

const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
widget.appendChild(submitButton);

// Create a container for displaying the result
const resultContainer = document.createElement('div');
widget.appendChild(resultContainer);

// Handle submit button click event
submitButton.addEventListener('click', () => {
  const x = parseFloat(xInput.value);
  const y = parseFloat(yInput.value);

  if (isNaN(x) || isNaN(y)) {
    resultContainer.textContent = 'Please enter valid numbers.';
    return;
  }

  let z = 0;
  while (((x + z) / (y + z)) < 0.8) {
    z++;
  }

  resultContainer.textContent = `The minimum value of z is: ${z}`;
  
  // Clear the input fields
  xInput.value = '';
  yInput.value = '';
});
