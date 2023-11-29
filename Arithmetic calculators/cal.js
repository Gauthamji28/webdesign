function checkOddOrEven() {
    const numberInput = document.getElementById('number');
    const resultParagraph = document.getElementById('result');

    const number = parseInt(numberInput.value);

    if (isNaN(number)) {
        resultParagraph.textContent = "Please enter a valid number.";
    } else {
        resultParagraph.textContent = number % 2 === 0 ? "Even" : "Odd";
    }
}





        //PRIME OR COMPOSITE//
function checkPrimeOrComposite() {
    const numberInput = document.getElementById('number2');
    const resultParagraph = document.getElementById('result2');

    const number = parseInt(numberInput.value);

    if (isNaN(number)) {
        resultParagraph.textContent = "Please enter a valid number.";
    } else if (number <= 1) {
        resultParagraph.textContent = "Neither prime nor composite.";
    } else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        resultParagraph.textContent = isPrime ? "Prime" : "Composite";
    }
}







        //FACTORIAL//
function findFactorial() {
    const numberInput = document.getElementById('number3');
    const resultParagraph = document.getElementById('result3');

    const number = parseInt(numberInput.value);

    if (isNaN(number) || number < 0) {
        resultParagraph.textContent = "Please enter a non-negative integer.";
    } else {
        let factorial = 1;
        for (let i = 2; i <= number; i++) {
            factorial *= i;
        }

        resultParagraph.textContent = `Factorial of ${number} is: ${factorial}`;
    }
}





        //FIBONACCI//
function findFibonacci() {
    const lengthInput = document.getElementById('length');
    const resultParagraph = document.getElementById('result4');

    const length = parseInt(lengthInput.value);

    if (isNaN(length) || length <= 0) {
        resultParagraph.textContent = "Please enter a positive integer.";
    } else {
        let fibonacciSeries = [0, 1];

        for (let i = 2; i < length; i++) {
            const nextNumber = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
            fibonacciSeries.push(nextNumber);
        }

        resultParagraph.textContent = `Fibonacci Series: ${fibonacciSeries.join(', ')}`;
    }
}






        //PALINDROME\\
function checkPalindrome() {
    const inputText = document.getElementById('inputText').value;
    const resultParagraph = document.getElementById('result5');

    const cleanedText = inputText.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedText = cleanedText.split('').reverse().join('');

    if (cleanedText === reversedText) {
        resultParagraph.textContent = `"${inputText}" is a palindrome!`;
    } else {
        resultParagraph.textContent = `"${inputText}" is not a palindrome.`;
    }
}








//for reset//
function resetForm() {
    const inputText = document.getElementById('inputText');
    const resultParagraph = document.getElementById('result');

    // Clear the input field and result//
    inputText.value = '';
    resultParagraph.textContent = '';
}
