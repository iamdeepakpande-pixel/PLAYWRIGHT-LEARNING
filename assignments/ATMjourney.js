function atmSystem(option, pin, amount = 0) {
    if (option === 1) {
        // --- Withdrawal Flow ---
        if (!/^\d{4}$/.exec(String(pin))) {
            console.log("Invalid PIN! PIN must be a 4-digit number.");
            return;
        }

        if (amount >= 10000 || amount <= 0 || amount % 1000 !== 0) {
            console.log("Invalid Amount! Amount should be less than 10000 and in multiples of 1000.");
            return;
        }

        console.log(`Success: Amount ₹${amount.toFixed(2)} withdrawn successfully. Please collect your cash!`);

    } else if (option === 2) {
        // --- Account Balance Flow ---
        if (!/^\d{4}$/.exec(String(pin))) {
            console.log("Invalid PIN! PIN must be a 4-digit number.");
            return;
        }

        // Generates a 5-digit account balance formatted like 12367.23 /-
        let balance = (Math.random() * (99999.99 - 10000.00) + 10000.00).toFixed(2);
        console.log(`Your Account Balance is: ₹${balance} /-`);

    } else if (option === 3) {
        // --- Cancel Flow ---
        console.log("Transaction cancelled. Thank you for using our ATM!");

    } else {
        console.log("Invalid selection. Please choose Option 1, 2, or 3.");
    }
}

// --- CALL THE FUNCTION HERE TO TEST OUTPUT ---
// Test 1: Withdrawal
atmSystem(1, "1234", 3000);

// Test 2: Account Balance Check
atmSystem(2, "1234");

// Test 3: Cancel
atmSystem(3);



// outputs:
// Success: Amount ₹3000.00 withdrawn successfully. Please collect your cash!
// Your Account Balance is: ₹58973.07 /-
// Transaction cancelled. Thank you for using our ATM!