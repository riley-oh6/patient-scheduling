// Get the widget element
const widget = document.getElementById('widget');

// Create the input fields and submit button
const xInput = document.createElement('input');
xInput.placeholder = 'Enter value for x...';
widget.appendChild(xInput);

const yInput = document.createElement('input');
yInput.placeholder = 'Enter value for y...';
widget.appendChild(yInput);

const proportionInput = document.createElement('input');
proportionInput.placeholder = 'Enter necessary proportion...';
widget.appendChild(proportionInput);

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
  const necessaryProportion = parseFloat(proportionInput.value);

  if (isNaN(x) || isNaN(y) || isNaN(necessaryProportion)) {
    resultContainer.textContent = 'Please enter valid numbers.';
    return;
  }

  const currentProportion = x / y;

  if (currentProportion >= necessaryProportion) {
    resultContainer.textContent = 'Already at or above the necessary proportion.';
    return;
  }

  let z = 0;
  while (((x + z) / (y + z)) < necessaryProportion) {
    z++;
  }

  resultContainer.textContent = `The minimum value of z is: ${z}`;
  
  // Clear the input fields
  xInput.value = '';
  yInput.value = '';
  proportionInput.value = '';
});
