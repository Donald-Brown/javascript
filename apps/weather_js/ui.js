class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
        this.time = document.getElementById('w-time');
    }

    paint(weather){
        this.location.textContent = weather.location.name;
        this.desc.textContent = weather.current.weather_descriptions[0];
        this.string.textContent = `${weather.current.temperature * 9 / 5 + 32} °F`;
        this.icon.setAttribute('src', weather.current.weather_icons[0]);
        this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}%`;
        this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike * 9 / 5 + 32} °F`;
        this.time.textContent = `Obsevation Time: ${weather.current.observation_time} GMT`;
        this.wind.textContent = `Wind Speed: ${weather.current.wind_speed}`;
    }
}