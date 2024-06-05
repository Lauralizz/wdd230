const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=49.75&lon=6.64&units=imperial&appid=7f92890c6f54ee9b8db60b78ce26e38a';

async function apiFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayThreeDayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayThreeDayForecast(data) {
    const forecastContainer = document.querySelector('#forecast-container');
    forecastContainer.innerHTML = ''; // Clear previous content

    // Display today's weather
    const today = data.list[0];
    displayWeather(today, 'Today');

    // Display the forecast for the next 2 days
    for (let i = 1; i <= 2; i++) {
        // Get the forecast for noon each day (index: i*8, assuming 3-hour intervals)
        const forecastIndex = i * 8; 
        const forecast = data.list[forecastIndex];
        const date = new Date(forecast.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'long' });

        displayWeather(forecast, day);
    }
}

function displayWeather(forecast, day) {
    const temp = forecast.main.temp;
    const iconsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
    const desc = forecast.weather[0].description;

    const forecastElement = document.createElement('div');
    forecastElement.innerHTML = `
        <h4>${day}</h4>
        <p>${temp}&deg;F</p>
        <img src="${iconsrc}" alt="${desc}">
        <figcaption>${desc}</figcaption>
    `;

    document.querySelector('#forecast-container').appendChild(forecastElement);
}
