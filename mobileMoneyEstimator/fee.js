function calculateFee() {
    
    const amount = parseFloat(document.getElementById('amount').value);

    
    if (isNaN(amount) || amount < 0) {
        alert('Please enter a valid amount!');
        return;
    }

   
    let fee = amount * 0.015;

   
    if (fee < 10) {
        fee = 10; // Minimum fee is 10 KES
    } else if (fee > 70) {
        fee = 70; // Maximum fee is 70 KES
    }

    
    const percentage = ((fee / amount) * 100).toFixed(2);
    let breakdown = `
        <h2>Transaction Fee Breakdown:</h2>
        <ul>
            <li>Transaction Amount: KES ${amount.toFixed(2)}</li>
            <li>Base Fee Rate: 1.5%</li>
            <li>Calculated Fee: KES ${(amount * 0.015).toFixed(2)}</li>
    `;

    if (fee === 10) {
        breakdown += `
            <li><strong>Minimum Fee Applied:</strong> KES 10.00</li>
        `;
    } else if (fee === 70) {
        breakdown += `
            <li><strong>Maximum Fee Applied:</strong> KES 70.00</li>
        `;
    }

    breakdown += `
        </ul>
        <h3>Final Fee: KES ${fee.toFixed(2)} (${percentage}% of transaction)</h3>
        <p><em>Total Amount (with fee): KES ${(amount + fee).toFixed(2)}</em></p>
    `;

    
    document.getElementById('result').innerHTML = breakdown;

    
    console.log({
        transactionAmount: amount,
        calculatedFee: amount * 0.015,
        finalFee: fee,
        percentage: percentage,
        totalAmount: amount + fee
    });
}