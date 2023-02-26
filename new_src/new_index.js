// API WEATHER SEARCH BAR

//function formatDate(timestamp) {
//  let date = new Date(timestamp * 1000);
//  let hours = date.getHours();
//  let minutes = date.getMinutes();
//  let day = date.getDay();
//  return `${day}, ${date}, ${hours}:${minutes}`;
//}

// TO SEARCH WEATHER

function setTime(timestamp) {
  let currentTime = new Date(timestamp * 1000);
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let day = currentTime.getDay();
  let dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayStr = dayArray[day];

  let month = currentTime.getMonth();
  let monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthStr = monthArray[month];

  let date = currentTime.getDate();
  return `Your time: ${dayStr}, ${monthStr} ${date} at ${hours}:${minutes}`;
}

function showWeather(response) {
  let time = document.querySelector("#time");
  time.innerHTML = setTime(response.data.time);

  let low_celsius = document.querySelector("#low-number");
  low_celsius.innerHTML = Math.round(response.data.temperature.current);

  let feelsLike = document.querySelector("#high-number");
  feelsLike.innerHTML = Math.round(response.data.temperature["feels_like"]);

  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = Math.round(response.data.temperature.humidity);

  let desc = document.querySelector("#description");
  desc.innerHTML = response.data.condition.description;

  let picture = document.querySelector("#weather-icon");
  picture.setAttribute("src", response.data.condition["icon_url"]);

  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;

  let symbol = document.querySelector(".low-temp-symbol");
  symbol.innerHTML = "°C";

  let symbol2 = document.querySelector(".high-temp-symbol");
  symbol2.innerHTML = "°C";

  let fahrenheitClass = document.querySelector(".fahrenheit");
  fahrenheitClass.classList.remove("inactive");
  let celsiusClass = document.querySelector(".celsius");
  celsiusClass.classList.add("inactive");
}

function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#text-input");
  let api_key = "0f44341abt30217bea1ac1oefa56b8b0";
  let api_url = `https://api.shecodes.io/weather/v1/current?query=${city.value}&key=${api_key}`;
  axios.get(api_url).then(showWeather);
}

// TO GET FAHRENHEIT

function showWeatherF(response) {
  let time = document.querySelector("#time");
  time.innerHTML = setTime(response.data.time);

  let low_celsius = document.querySelector("#low-number");
  low_celsius.innerHTML = Math.round(response.data.temperature.current);

  let feelsLike = document.querySelector("#high-number");
  feelsLike.innerHTML = Math.round(response.data.temperature["feels_like"]);

  let symbol = document.querySelector(".low-temp-symbol");
  symbol.innerHTML = "°F";

  let symbol2 = document.querySelector(".high-temp-symbol");
  symbol2.innerHTML = "°F";
}

function showCityF(event) { 
  event.preventDefault();
  let city = document.querySelector("#text-input");
  let api_key = "0f44341abt30217bea1ac1oefa56b8b0";
  let api_url = `https://api.shecodes.io/weather/v1/current?query=${city.value}&key=${api_key}&units=imperial`;

  axios.get(api_url).then(showWeatherF);

  let fahrenheitClass = document.querySelector(".fahrenheit");
  fahrenheitClass.classList.add("inactive");
  let celsiusClass = document.querySelector(".celsius");
  celsiusClass.classList.remove("inactive");
}

// CHANGE TO CELSIUS
function showWeatherOnlyC(response) {
  let time = document.querySelector("#time");
  time.innerHTML = setTime(response.data.time);

  let low_celsius = document.querySelector("#low-number");
  low_celsius.innerHTML = Math.round(response.data.temperature.current);

  let feelsLike = document.querySelector("#high-number");
  feelsLike.innerHTML = Math.round(response.data.temperature["feels_like"]);

  let symbol = document.querySelector(".low-temp-symbol");
  symbol.innerHTML = "°C";

  let symbol2 = document.querySelector(".high-temp-symbol");
  symbol2.innerHTML = "°C";

  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;
}

function showCityC(event) {
  event.preventDefault();
  let city = document.querySelector("#text-input");
  let api_key = "0f44341abt30217bea1ac1oefa56b8b0";
  let api_url = `https://api.shecodes.io/weather/v1/current?query=${city.value}&key=${api_key}`;

  let fahrenheitClass = document.querySelector(".fahrenheit");
  fahrenheitClass.classList.remove("inactive");
  let celsiusClass = document.querySelector(".celsius");
  celsiusClass.classList.add("inactive");

  axios.get(api_url).then(showWeatherOnlyC);
}

// GET GEOLOCATION
function getWeatherLatLon(position) {
  let lat = Math.round(position.coords.latitude);
  let lon = Math.round(position.coords.longitude);

  let api_key = "0f44341abt30217bea1ac1oefa56b8b0";
  let api_url = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${api_key}`;

  let symbol = document.querySelector(".low-temp-symbol");
  symbol.innerHTML = "°C";

  let symbol2 = document.querySelector(".high-temp-symbol");
  symbol2.innerHTML = "°C";

  axios.get(api_url).then(showWeather);
}

function alertLatLon() {
  alert(
    "Searching for your location... This may take a few seconds. Please wait."
  );
}

function searchGeoLocation(event) {
  event.preventDefault();
  alertLatLon();
  navigator.geolocation.getCurrentPosition(getWeatherLatLon);
}

//EVENT LISTENERS

let submit = document.querySelector("#submit-form");
submit.addEventListener("submit", showCity);

let clickF = document.querySelector(".fahrenheit");
clickF.addEventListener("click", showCityF);

let clickC = document.querySelector(".celsius");
clickC.addEventListener("click", showCityC);

let clickGeolocation = document.querySelector(".geolocation");
clickGeolocation.addEventListener("click", searchGeoLocation);

// VARIABLE DECLARATIONS
//let api_key = "0f44341abt30217bea1ac1oefa56b8b0";
//let api_url = `https://api.shecodes.io/weather/v1/current?query=${city.value}&key=${api_key}`;
