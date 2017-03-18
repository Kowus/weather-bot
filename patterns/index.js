const patternDict = [
    {
        pattern: '\\b(?<greeting>Hi|Hello|Hey|yo)\\b',
        intent: 'Hello'
    }, {
        pattern: '\\b(bye|exit|goodbye|later)\\b',
        intent: 'Exit'
    }, {
        pattern: '\\blike\\sin\\s(?<city>.+)',
        intent: 'CurrentWeather'
    }
];

module.exports = patternDict;