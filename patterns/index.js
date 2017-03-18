const patternDict = [
    {
        pattern: '\\b(?<greeting>Hi|Hello|Hey|yo)\\b',
        intent: 'Hello'
    }, {
        pattern: '\\b(bye|exit|goodbye|later)\\b',
        intent: 'Exit'
    }, {
        pattern: '\\b(like\\sin|weather\\b.*\\bin\\b|weather\\b.*?\\bfor)\\s(?<city>.+)',
        intent: 'CurrentWeather'
    }
];

module.exports = patternDict;