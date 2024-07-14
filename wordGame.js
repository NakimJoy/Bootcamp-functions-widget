function longestWord(sentence) {
    const words = sentence.split(' ');
    return words.reduce((longest, current) => (current.length >= longest.length ? current : longest), '');
}

function shortestWord(sentence) {
    const words = sentence.split(' ');
    return words.reduce((shortest, current) => (current.length <= shortest.length ? current : shortest), words[0]);
}

function wordLengths(sentence) {
    const words = sentence.split(' ');
    return words.reduce((total, current) => total + current.length, 0);
}

function wordGameWidget() {
    return {
        sentence: '',
        longest: '',
        shortest: '',
        totalLength: '',

        calculateWordStats() {
            this.longest = longestWord(this.sentence);
            this.shortest = shortestWord(this.sentence);
            this.totalLength = wordLengths(this.sentence);
        }
    };
}
