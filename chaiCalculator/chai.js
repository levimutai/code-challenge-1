function calculateChaiIngredients() {
    
    let userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");

   
    let numberOfCups = parseInt(userInput);

   
    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        alert("Please enter a valid positive number!");
        return;
    }

    
    let water = 200 * numberOfCups;    // 200ml per cup
    let milk = 50 * numberOfCups;      // 50ml per cup
    let teaLeaves = 1 * numberOfCups;  // 1 tablespoon per cup
    let sugar = 2 * numberOfCups;      // 2 teaspoons per cup

    
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

    
    document.getElementById('result').innerHTML = message;

   
    console.log({
        cups: numberOfCups,
        water: water,
        milk: milk,
        teaLeaves: teaLeaves,
        sugar: sugar
    });
}