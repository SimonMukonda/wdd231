const apiKey = "4958341136d94758a36316c841cd742a";

// current weather
const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=Johannesburg,ZA&appid=${apiKey}&units=metric`;

// forecast
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Johannesburg,ZA&appid=${apiKey}&units=metric`;

async function getWeather() {
    try {
        
        const currentRes = await fetch(currentUrl);
        const forecastRes = await fetch(forecastUrl);

        const currentData = await currentRes.json();
        const forecastData = await forecastRes.json();

        
        const temp = currentData.main.temp;
        const desc = currentData.weather[0].description;
        const icon = currentData.weather[0].icon;

        
        const forecast = forecastData.list.filter((item, index) => index % 8 === 0).slice(0, 3);

        let forecastHTML = forecast.map(day => {
            const date = new Date(day.dt_txt).toLocaleDateString("en-ZA", { weekday: "short" });
            return `<p>${date}: ${day.main.temp.toFixed(1)}°C</p>`;
        }).join("");

        document.querySelector("#weather").innerHTML = `
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}">
            <p><strong>${temp.toFixed(1)}°C</strong></p>
            <p>${capitalize(desc)}</p>
            <h4>3-Day Forecast</h4>
            ${forecastHTML}
        `;

    } catch (error) {
        document.querySelector("#weather").innerHTML = `<p>⚠️ Weather unavailable</p>`;
        console.error(error);
    }
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

getWeather();