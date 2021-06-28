//declare variables
var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");
var weatherContainerEl = document.querySelector("#weather-container");
var forecastContainer = document.querySelector("#forecast-container");
var searchHistory = document.querySelector("#history-container")
var search = document.querySelector("#search");
var htmlDate = document.querySelector("#date");
var htmlCity = document.querySelector("#city");
var htmlIcon = document.querySelector("#icon");
var htmlWind = document.querySelector("#wind");
var htmlUvi = document.querySelector("#uvi");
var htmlHumid = document.querySelector("#humidity");
var htmlTemp = document.querySelector("#temp");
var myAPIkey = `96739db56d8d475dad049fca49fa349e`
search.addEventListener("click", handleSearchSubmit);


function handleSearchSubmit(e) {
    e.preventDefault();
    var cityName = cityInputEl.value;
    console.log("city", cityName);
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${myAPIkey}`;
    fetch(apiUrl)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            //render that info
            console.log(data);
            var info = {
                lat: data.city.coord.lat,
                lon: data.city.coord.lon,
                city: data.city.name,
                date: data.list[0].dt_txt
            }
            getWeather(info);
        })
        .catch(function (err) {
            console.log(err);
        });
}
function getWeather(info) {
    var lat = info.lat;
    var lon = info.lon;
    var cityName = info.city;
    var date = info.date;
    console.log("cityName", info);
    var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${myAPIkey}`;
    fetch(apiUrl)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            //render that info
            console.log(data);
            renderInfo(data, cityName, date);
        })
        .catch(function (err) {
            console.log(err);
        })
}
function renderInfo(info, cityName, date) {
    console.log("info received", info)
    // <!--Need results of the search here: current-day weather, city-name, current-date, weather-icon, temperature-now, wind-now, humidity-now, UV-index-->
    var temp = info.current.temp;
    var city = cityName;
    var day = date;
    htmlDate.innerHTML = day;
    htmlCity.innerHTML = city;
    htmlIcon.innerHTML = info.current.weather[0].icon;
    htmlWind.innerHTML = info.current.wind_speed;
    htmlUvi.innerHTML = info.current.uvi;
    htmlHumid.innerHTML = info.current.humidity;
    htmlTemp.innerHTML = temp;
}
// forecast
function getForecast(info) {
    var lat = info.lat;
    var lon = info.lon;
    var cityName = info.city;
    var date = info.date;
    console.log("cityName", info);
    var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${myAPIkey}`;
    fetch(apiUrl)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            //render that info
            console.log(data);
            renderInfo(data, cityName, date);
        })
        .catch(function (err) {
            console.log(err);
        })
}
function renderInfo(info, cityName, date) {
    console.log("info received", info)
    // <!--Need results of the search here: current-day weather, city-name, current-date, weather-icon, temperature-now, wind-now, humidity-now, UV-index-->
    var temp = info.current.temp;
    var city = cityName;
    var day = date;
    htmlDate.innerHTML = day;
    htmlCity.innerHTML = city;
    htmlIcon.innerHTML = info.current.weather[0].icon;
    htmlWind.innerHTML = info.current.wind_speed;
    htmlUvi.innerHTML = info.current.uvi;
    htmlHumid.innerHTML = info.current.humidity;
    htmlTemp.innerHTML = temp;
}

