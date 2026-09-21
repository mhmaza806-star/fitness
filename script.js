const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const bmiResult = document.getElementById("bmiResult");
const bmiCategory = document.getElementById("bmiCategory");
const calculateBtn = document.getElementById("calculateBtn");
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

function calculateBMI() {
  const heightCm = Number(heightInput.value);
  const weightKg = Number(weightInput.value);

  if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) {
    bmiResult.textContent = "—";
    bmiCategory.textContent = "Enter valid values";
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const roundedBMI = bmi.toFixed(2);

  bmiResult.textContent = roundedBMI;

  if (bmi < 18.5) {
    bmiCategory.textContent = "Underweight";
  } else if (bmi < 25) {
    bmiCategory.textContent = "Normal";
  } else if (bmi < 30) {
    bmiCategory.textContent = "Overweight";
  } else {
    bmiCategory.textContent = "Obesity";
  }
}

calculateBtn.addEventListener("click", calculateBMI);
heightInput.addEventListener("input", calculateBMI);
weightInput.addEventListener("input", calculateBMI);

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

calculateBMI();
