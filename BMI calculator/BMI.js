document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters

        if (isNaN(weight) || isNaN(height) || height <= 0) {
            resultDiv.textContent = "Please enter valid values for weight and height.";
            return;
        }

        const bmi = weight / (height * height);
        const category = getBMICategory(bmi);

        resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)}. Category: ${category}`;
    });

    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return "Underweight";
        } else if (bmi < 24.9) {
            return "Normal Weight";
        } else if (bmi < 29.9) {
            return "Overweight";
        } else {
            return "Obese";
        }
    }



// ... (previous code)

    // Function to get BMI category
    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return "Underweight";
        } else if (bmi < 24.9) {
            return "Normal Weight";
        } else if (bmi < 29.9) {
            return "Overweight";
        } else {
            return "Obese";
        }
    }

    // Clear result when input values change
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");

    weightInput.addEventListener("input", clearResult);
    heightInput.addEventListener("input", clearResult);

    function clearResult() {
        resultDiv.textContent = "";
    }
});
