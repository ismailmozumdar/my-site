const API_KEY = `6e3c008547d02f81efb24bd1ffd51521`;
    const searchButton = () => {
    const cityName = document.getElementById('city-name');
    const cityNameText = cityName.value;
    cityName.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameText}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperatureResult(data))
}
const inputValueChenge = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperatureResult = temperature =>{
    inputValueChenge('city', temperature.name);
    inputValueChenge('temperature', temperature.main.temp);
    inputValueChenge('Clouds', temperature.weather[0].main);

    // set weather icon 
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcom = document.getElementById('weather-icon');
    imgIcom.setAttribute('src', url);

}