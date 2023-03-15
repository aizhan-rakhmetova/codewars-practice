function isPeriodLate(last, today, cycleLength) {
    // Calculate the difference between the last period and today in days
    const diffTime = Math.abs(today.getTime() - last.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Check if the number of days since the last period is greater than the cycle length
    return diffDays > cycleLength;
}


//OR
function isPeriodLate(last, today, cycleLength) {
    const diffDays = (today.getTime() - last.getTime()) / (1000 * 60 * 60 * 24);
    return diffDays > cycleLength;
}