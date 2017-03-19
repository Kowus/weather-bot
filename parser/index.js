'use strict';
const colors = require('colors');
const dictionary = require('./dictionary');
const moment = require('moment');

let getFeel = temp => {
    if (temp < 5) return "shivering cold";
    else if (temp < 15) return 'pretty cold';
    else if (temp < 25) return 'moderately cold';
    else if (temp < 32) return 'quite warm';
    else if (temp < 40) return 'very hot';
    else return 'super hot';
}

let getPrefix = (conditionCode, tense = 'present') => {
    let findPrefix = dictionary[tense].find(item => {
        if (item.codes.indexOf(Number(conditionCode)) > -1) {
            return true;
        }
    });
    return findPrefix.prefix || "";
}

let getDate = day => {
    let dayStr = day.toLowerCase().trim();
    switch (dayStr) {
        case 'tomorrow':
            return moment().add(1, "d").format("DD MMM YYYY");
        case 'day after tomorrow':
            return moment().add(2, "d").format("DD MMM YYYY");
        default:
            return moment().format("DD MMM YYYY");
    }
}

let currentWeather = response => {
    if (response.query.results) {
        let resp = response.query.results.channel;
        let location = `${resp.location.city}, ${resp.location.country}`;
        // Access Conditions
        let { text, temp, code } = resp.item.condition;

        return `Right now, ${getPrefix(code)} ${text.toLowerCase().red.bold} in ${location.bold}. It is ${getFeel(Number(temp)).bold.green} at ${temp.bold} degrees Celsius.`
    } else {
        return "I don't seem to know anything about this place... sorry :("
    }
}

let forecastWeather = (response, data) => {
    if (response.query.results) {
        // Convert today, tomorrow, etc into actual dates.....
        let parseDate = getDate(data.time);
        let resp = response.query.results.channel;
        let getForecast = resp.item.forecast.filter(item => {
            return item.date === parseDate;
        })[0];
        return `Yes, ${getPrefix(getForecast.code, 'furure')} ${getForecast.text.bold} in Accra tomorrow`
    } else {
        return "I don't seem to know anything about this place... sorry :("
    }
}

module.exports = { currentWeather, forecastWeather }