//declare variables
var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");
var weatherContainerEl = document.querySelector("#weather-container");
var forecastContainerEl = document.querySelector("#forecast-container");
var searchHistoryEl = document.querySelector("#history-container")
var myAPIkey = `96739db56d8d475dad049fca49fa349e`

// my API key: 96739db56d8d475dad049fca49fa349e
// <link
//     href="https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,alerts&appid=96739db56d8d475dad049fca49fa349e$"

// fetch(url) method
//var getFeaturedRepos = function(language) {
//     var apiUrl = "https://api.github.com/search/repositories?q=" + language + "+is:featured&sort=help-wanted-issues";

//     fetch(apiUrl).then(function(response) {
//       if (response.ok) {
//         response.json().then(function(data) {
//           displayRepos(data.items, language);
//         });
//       } else {
//         alert('Error: GitHub User Not Found');
//       }
//     });
//   };
fetch(url)
    .then(function () {

    })
    .catch(function () {

    });
