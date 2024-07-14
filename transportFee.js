function transportFee() {
        return {
            selectedTime: 'morning', // Default selected time
            fee: null, // Initialize fee variable

            calculateFee() {
                switch (this.selectedTime) {
                    case 'morning':
                        this.fee = 'R20';
                        break;
                    case 'afternoon':
                        this.fee = 'R10';
                        break;
                    case 'nightshift':
                        this.fee = 'Free';
                        break;
                    default:
                        this.fee = null;
                        break;
                }
            }
        };
    }