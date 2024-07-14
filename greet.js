function greet() {
        return {
            name: '',
            selectedLanguage: 'en', // Default to English
            showGreeting: false, // Flag to control the display of greeting message
            messages: {
                'en': 'Hello, {name}!',
                'es': '¡Hola, {name}!',
                'xi': 'Avuxeni, {name}!',
                'vt': 'Xin chào,{name}!'
            },
            getMessage(lang) {
                return this.messages[lang].replace('{name}', this.name);
            },
            greet() {
                // Set showGreeting to true to display the greeting message
                this.showGreeting = true;
            }
        };
    }