function calculateChaiIngredients() {
    // Step 1: Prompt the user for input
    let userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");

    // Step 2: Convert the input to a number
    let numberOfCups = parseInt(userInput);

    // Step 3: Validate input
    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        alert("Please enter a valid positive number!");
        return;
    }

    // Step 4: Calculate ingredients
    let water = 200 * numberOfCups;    // 200ml per cup
    let milk = 50 * numberOfCups;      // 50ml per cup
    let teaLeaves = 1 * numberOfCups;  // 1 tablespoon per cup
    let sugar = 2 * numberOfCups;      // 2 teaspoons per cup

    // Step 5: Create the result message
    let message = `
        <h2>Ingredients for ${numberOfCups} cup(s) of chai:</h2>
        <ul>
            <li>Water: ${water} ml</li>
            <li>Milk: ${milk} ml</li>
            <li>Tea Leaves (Majani): ${teaLeaves} tablespoon(s)</li>
            <li>Sugar (Sukari): ${sugar} teaspoon(s)</li>
        </ul>
        <p><em>Enjoy your chai!</em> ☕</p>
    `;

    // Step 6: Display the results
    document.getElementById('result').innerHTML = message;

    // Step 7: Log to console for debugging
    console.log({
        cups: numberOfCups,
        water: water,
        milk: milk,
        teaLeaves: teaLeaves,
        sugar: sugar
    });
}
