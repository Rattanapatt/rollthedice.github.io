
document.addEventListener("DOMContentLoaded", () => {
    const minInput = document.getElementById("minValue");
    const maxInput = document.getElementById("maxValue");
    const outcomeDisplay = document.getElementById("outcome");
    const rollButton = document.getElementById("roll");

    const rollDice = () => {
        const minValue = parseInt(minInput.value);
        const maxValue = parseInt(maxInput.value);

        if (isNaN(minValue) || isNaN(maxValue)) {
            alert("Please enter valid numbers in both fields.");
            return;
        }
        if (minValue > maxValue) {
            alert("Min Value cannot be greater than Max Value.");
            return;
        }

        let interval;
        const startAnimation = () => {
            interval = setInterval(() => {
                const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
                outcomeDisplay.textContent = randomNumber;
            }, 100 * Math.random());
        };

        const stopAnimation = () => {
            clearInterval(interval);
            const finalNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
            outcomeDisplay.textContent = finalNumber;
        };

        startAnimation();

        setTimeout(stopAnimation, 500 + Math.random() * 2200);
    };

    // Add event listener to the Roll button
    rollButton.addEventListener("click", rollDice);
});
