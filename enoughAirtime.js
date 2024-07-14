// enoughAirtime.js

function enoughAirtime(projectedUsage, airtimeAvailable) {
    // Split the projected usage string into individual items
    var items = projectedUsage.split(',');

    // Initialize variables to store the total cost
    var totalCost = 0;

    // Loop through each item to calculate the total cost
    for (var i = 0; i < items.length; i++) {
        if (items[i] === 'call') {
            totalCost += 1.88;
        } else if (items[i] === 'data') {
            totalCost += 12;
        } else if (items[i] === 'sms') {
            totalCost += 0.75;
        }
    }

    // Calculate the airtime left
    var airtimeLeft = airtimeAvailable - totalCost;

    // If airtime left is negative, return 0
    if (airtimeLeft < 0) {
        return 'R0.00';
    }

    // Return the airtime left formatted as Rxx.xx
    return 'R' + airtimeLeft.toFixed(2);
}

function enoughAirtimeWidget() {
    return {
        projectedUsage: '',
        airtimeAvailable: 0,
        remainingAirtime: 'R', // Initial value just 'R'

        calculateAirtime() {
            this.remainingAirtime = enoughAirtime(this.projectedUsage, this.airtimeAvailable);
        }
    };
}
