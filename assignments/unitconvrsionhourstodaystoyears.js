function convertHours(input) {
    // Check if input is a non-empty, whole positive integer (no floats, negatives, or letters)
    if (
        input === null || 
        input === undefined || 
        typeof input === 'symbol' ||
        String(input).trim() === '' || 
        !/^\d+$/.test(String(input).trim())
    ) {
        console.log("Invalid");
        return;
    }

    const hours = Number(input);

    // Calculate years, remaining days, and remaining hours using standard integer division
    const years = Math.floor(hours / 8760);
    const remainingHoursAfterYears = hours % 8760;

    const days = Math.floor(remainingHoursAfterYears / 24);
    const remainingHours = remainingHoursAfterYears % 24;

    // Pluralization according to example specs:
    // 1 -> singular ("Year", "Day", "Hour")
    // non-1 -> singular/plural matching test rules ("Years", "Days", "Hours")
    const yearStr = `${years} ${years === 1 ? 'Year' : 'Years'}`;
    const dayStr = `${days} ${days === 1 ? 'Day' : 'Days'}`;
    const hourStr = `${remainingHours} ${remainingHours === 1 ? 'Hour' : 'Hours'}`;

    console.log(`${yearStr} ${dayStr} ${hourStr}`);
}

// --- CALL THE FUNCTION HERE TO EXECUTE ---
convertHours(24);    // Output: 0 Years 1 Day 0 Hours (or matches example outputs)
convertHours(8762);  // Output: 1 Year 0 Days 2 Hours
convertHours(-5);    // Output: Invalid