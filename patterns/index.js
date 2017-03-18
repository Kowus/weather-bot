const patternDict = [
    {
        pattern: '\\b(Hi|Hello|Hey|yo)\\b',
        intent: 'Hello'
    }, {
        pattern: '\\b(bye|exit)\\b',
        intent: 'Exit'
    }
];

module.exports = patternDict;