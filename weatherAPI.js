import weatherConditions from './weather_conditions.json' assert {type: 'json'}
// console.log(weatherConditions)

const API = (() => {
    async function getData(city) {
        try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=79859debb837432f87f100612230112&q=${city}&days=3&aqi=no&alerts=no`);
        if (!response.ok) throw new Error(`City ${city} not found`);
        const weatherData = await response.json();
        console.log(weatherData)
        return weatherData
    } catch (error) {
        console.error(error);
        alert(error);
    }
    }



    return {
        getData,
    }
})();

export default API;