// Select all the buttons
let buttons = document.querySelectorAll('button');

// Select the output div
let output = document.querySelector('.calcOutput');

// Add a 'click' event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the id and text of the button
        let buttonId = this.id;
        let buttonText = this.textContent;

        // Check if the 'clear' button was pressed
        if (buttonId === 'clear') {
            // Clear the output
            output.textContent = '';
        }
        // Check if the 'backspace' button was pressed
        else if (buttonId === 'backspace') {
            // Remove the last character from the output
            output.textContent = output.textContent.slice(0, -1);
        }
        // Check if the '=' button was pressed
        else if (buttonText === '=') {
            // Replace 'x' with '*' for multiplication
            let calculation = output.textContent.replace(/x/g, '*');

            // Calculate the total
            try {
                output.textContent = eval(calculation);
            } catch (error) {
                output.textContent = 'Error';
            }
        }
        else {
            // Add the text to the existing content in the output div
            output.textContent += buttonText;
        }
    });
});

