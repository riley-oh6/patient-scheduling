// Get the widget element
const widget = document.getElementById('widget');

// Create the input fields and submit button
const scheduledInput = document.createElement('input');
scheduledInput.placeholder = 'Enter number of scheduled patients...';
widget.appendChild(scheduledInput);

const seenInput = document.createElement('input');
seenInput.placeholder = 'Enter number of patients seen...';
widget.appendChild(seenInput);

const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
widget.appendChild(submitButton);

// Create a container for displaying the result
const resultContainer = document.createElement('div');
widget.appendChild(resultContainer);

// Handle submit button click event
submitButton.addEventListener('click', () => {
  const scheduledPatients = parseInt(scheduledInput.value, 10);
  const seenPatients = parseInt(seenInput.value, 10);

  if (isNaN(scheduledPatients) || isNaN(seenPatients)) {
    resultContainer.textContent = 'Please enter valid numbers.';
    return;
  }

  const targetPercentage = 0.8; // 80% target
  const targetPatients = scheduledPatients * targetPercentage;
  const remainingPatients = targetPatients - seenPatients;

  if (remainingPatients > 0) {
    resultContainer.textContent = `Number of additional patients to be seen: ${remainingPatients}`;
  } else {
    resultContainer.textContent = 'Quota already met. No additional patients needed.';
  }
  
  // Clear the input fields
  scheduledInput.value = '';
  seenInput.value = '';
});
