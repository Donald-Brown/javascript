//Init Storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city);
// Init UI
const ui = new UI();

// get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    // Change location
    weather.changeLocation(city);

    // set location in local storage
    storage.setLocationData(city);

    //Get and display weather
    getWeather();

    //Close modal
    $('#locModal').modal('hide');
});

function getWeather(){
    weather.getWeather()
    .then(results => {
        //console.log(results.location.name);
        ui.paint(results);
    })
    .catch(err => console.log(err));
}

