import API from './weatherAPI.js'
import Render from './render.js'

// Load Page
async function init() {
    const data = await API.getData('Toulouse')
    Render(data)
}
init()

const searchForm = document.getElementById('searchForm')
const searchInput = document.getElementById('search')
// const searchBtn = document.getElementById('searchbtn')

searchForm.addEventListener('submit' , async (e) => {
    e.preventDefault();   
    let city = searchInput.value
    if(city === "") return;
    const weatherData = await API.getData(city);
    Render(weatherData);
    searchInput.value = '';
});


