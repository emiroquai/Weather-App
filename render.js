const city = document.getElementById('city')
const currentTemp = document.getElementById('currentTemp')
const currentCondition = document.getElementById('currentCondition')
const currentConditionIcon = document.getElementById('currentConditionIcon')

function render(data) {
    city.innerHTML = data.location.name 
    currentCondition.innerHTML = data.current.condition.text
    currentTemp.innerHTML = data.current.temp_c + ' °C'
    currentConditionIcon.src = data.current.condition.icon
}

export default render;