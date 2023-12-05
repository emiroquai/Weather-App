const city = document.getElementById('city')
const currentTemp = document.getElementById('currentTemp')
const currentCondition = document.getElementById('currentCondition')
const currentConditionIcon = document.getElementById('currentConditionIcon')

import weatherConditions from './weather_conditions.json' assert {type: 'json'}


function Render(data) {
    city.innerHTML = data.location.name 
    currentTemp.innerHTML = data.current.temp_c + ' °C'
}

export default Render;