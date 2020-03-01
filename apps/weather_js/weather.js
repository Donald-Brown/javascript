class Weather {
    constructor(city){
        this.apiKey = '0700e8d164a606146d69f0c7b65ff369';
        this.city = city;
    }

    // Fetch weather from api
    async getWeather(){
        const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`);

        const responseData = await response.json();

        return responseData;
    }

    // Change location
    changeLocation(city){
        this.city = city;
    }
}