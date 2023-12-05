import API from './weatherAPI.js'
import render from './render.js'

// Load Page
async function init() {
    const data = await API.getData('Toulouse')
    render(data)
}
init()

const searchForm = document.getElementById('searchForm')
const searchInput = document.getElementById('search')

searchForm.addEventListener('submit' , async (e) => {
    e.preventDefault();   
    let city = searchInput.value
    if(city === "") return;
    const weatherData = await API.getData(city);
    render(weatherData);
    searchInput.value = '';
});


