var myAPIKey = 'yourOpenWeatherApiKey';
var ajax = require('ajax');
var UI = require('ui');

var card = new UI.Card({
  title:'Weather',
  subtitle:'Fetching...'
});

card.show();

var cityName = 'Celbridge, IE';
var URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + myAPIKey;
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    console.log("Successfully fetched weather data!");

    var location = data.name;
    var temperature = Math.round(data.main.temp - 273.15) + "C";
    var description = data.weather[0].description;
    description = description.charAt(0).toUpperCase() + description.substring(1);
    var humidity = data.main.humidity;
    var pressure = data.main.pressure;
    var windspeed = data.wind.speed;
    var deg = data.wind.deg;
    
    card.subtitle(location + ", " + temperature);
    card.body(description + "\nHumidity: " + humidity + " %" + "\nPressure: " + pressure + " hPa" + "\nWind speed: " + windspeed + " m/s" + "\nDirection: " +deg + " \xB0");
  },
  function(error) {
    console.log('Failed fetching weather data: ' + error);
  }
);