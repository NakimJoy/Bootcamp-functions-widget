function totalPhoneBill(logs) {
    // Initialize call and SMS costs
    const callCost = 2.75;
    const smsCost = 0.65;

    // Split the logs by comma and remove any leading/trailing spaces
    const logList = logs.split(',').map(log => log.trim());

    // Initialize total cost
    let totalCost = 0;

    // Iterate through the logs
    for (const log of logList) {
        if (log === 'call') {
            totalCost += callCost;
        } else if (log === 'sms') {
            totalCost += smsCost;
        }
    }

    // Format the total cost as 'Rxx.xx'
    const formattedCost = `R${totalCost.toFixed(2)}`;
    return formattedCost;
}

document.addEventListener('DOMContentLoaded', function() {
    Alpine.data('totalPhoneBillWidget', () => ({
        logs: '',
        total: 'R', // Initial total is just 'R'
        calculateTotal() {
            this.total = totalPhoneBill(this.logs);
        }
    }));
});