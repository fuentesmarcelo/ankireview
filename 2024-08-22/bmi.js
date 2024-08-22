// PREP
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
    // code here
}

// P: the parameter is weight and height
// R: underweight, normal, overweight, obese depending on bmi



// my solution

function bmi(weight, height) {
    const bmi = weight / (height * height); // Calculate BMI
    if (bmi > 30) {
    return 'Obese';
    } else if (bmi > 25) {
    return 'Overweight';
    } else if (bmi > 18.5) {
    return 'Normal';
    } else {
    return 'Underweight';
    }
    }