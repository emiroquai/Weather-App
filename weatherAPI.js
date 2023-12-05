const API = (() => {
    async function getData(city) {
        try {
            const key = '79859debb837432f87f100612230112'
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=3&aqi=no&alerts=no`);
            if (!response.ok) throw new Error(`City ${city} not found`);
            const weatherData = await response.json();
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