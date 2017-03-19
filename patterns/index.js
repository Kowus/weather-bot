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
    }, {
        pattern: '\\b(?<weather>hot|cold|rain|rainy|sunny|snow|thunderstorms|windy|drizzle)\\b\\sin\\s\\b(?<city>[a-z]+[a-z]+?[a-z]+?)\\b(?<time>day\\safter\\stomorrow|tomorrow|today)$',
        intent: 'WeatherForecast'
    }, {
        pattern: '\\b(?<weather>hot|cold|rain|rainy|sunny|snow|thunderstorms|windy|drizzle)\\b\\s\\b(?<time>day\\safter\\stomorrow|tomorrow|today)\\sin\\s\\b(?<city>[a-z]+[a-z]+?[a-z]+?)$',
        intent: 'WeatherForecast'
    }
];

module.exports = patternDict;