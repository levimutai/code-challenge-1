function calculateFare() {
    // Step 1: Get input values
    const distance = parseFloat(document.getElementById('distance').value);
    const waitTime = parseInt(document.getElementById('waitTime').value);

    // Step 2: Validate inputs
    if (isNaN(distance) || distance < 0) {
        alert('Please enter a valid distance!');
        return;
    }
    if (isNaN(waitTime) || waitTime < 0) {
        alert('Please enter a valid waiting time!');
        return;
    }

    // Step 3: Calculate base fare
    let totalFare = 0;
    if (distance <= 2) {
        // Base rate for first 2km
        totalFare = 50;
    } else {
        // Base rate for first 2km + additional rate for remaining distance
        totalFare = 50 + ((distance - 2) * 30);
    }

    // Step 4: Add waiting time charges (if any)
    const waitingCharge = waitTime * 2; // 2 KES per minute of waiting
    totalFare += waitingCharge;

    // Step 5: Create detailed breakdown
    let breakdown = `
        <h2>Fare Breakdown:</h2>
        <ul>
            <li>Distance: ${distance.toFixed(1)} km</li>
            <li>Base Fare: KES ${distance <= 2 ? 50 : 50}</li>
    `;

    if (distance > 2) {
        breakdown += `
            <li>Additional Distance Charge: KES ${((distance - 2) * 30).toFixed(2)}</li>
        `;
    }

    if (waitTime > 0) {
        breakdown += `
            <li>Waiting Time (${waitTime} mins): KES ${waitingCharge}</li>
        `;
    }

    breakdown += `
        </ul>
        <h3>Total Fare: KES ${totalFare.toFixed(2)}</h3>
    `;

    // Step 6: Display results
    document.getElementById('result').innerHTML = breakdown;

    // Step 7: Log for debugging
    console.log({
        distance: distance,
        waitTime: waitTime,
        baseFare: distance <= 2 ? 50 : 50,
        additionalCharge: distance > 2 ? ((distance - 2) * 30) : 0,
        waitingCharge: waitingCharge,
        totalFare: totalFare
    });
}
