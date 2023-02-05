// DATE

function setDate() {
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = now.getDay();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  let minutes = now.getMinutes();
  let hours = now.getHours();

  if (minutes < 10) {
    let calendar = `${days[day]} - ${months[month]} ${date} ${year} - ${hours}:0${minutes}`;
    return calendar;
  } else {
    let calendar = `${days[day]} - ${months[month]} ${date} ${year} - ${hours}:${minutes}`;
    return calendar;
  }
}

let today = document.querySelector(".date-time");
today.innerHTML = setDate();

// WEEK 5 - ADD TEMP API

let input = document.querySelector("#text-input");

function getWeatherIcon(response) {
  let desc = response.data.weather[0].icon;
  console.log(desc);

  let icon = document.querySelector(".current-weather-box");
  if (desc === "01d") {
    icon.innerHTML = '<img src="media/weather/sun.png" height="120px"/>';
  } else if (desc === "01n") {
    icon.innerHTML = '<img src="media/weather/moon.png" height="120px"/>';
  } else if (desc === "02d") {
    icon.innerHTML = '<img src="media/weather/cloudy_sun.png" height="120px"/>';
  } else if (desc === "02n") {
    icon.innerHTML = '<img src="media/weather/moon_cloud.png" height="120px"/>';
  } else if (desc === "03d" || desc === "03n") {
    icon.innerHTML = '<img src="media/weather/cloud.png" height="120px"/>';
  } else if (desc === "04d" || desc === "04n") {
    icon.innerHTML = '<img src="media/weather/v_cloudy.png" height="120px"/>';
  } else if (desc === "09d" || desc === "09n") {
    icon.innerHTML = '<img src="media/weather/rain.png" height="120px"/>';
  } else if (desc === "10d") {
    icon.innerHTML = '<img src="media/weather/rain_sun.png" height="120px"/>';
  } else if (desc === "10n") {
    icon.innerHTML = '<img src="media/weather/moon_rain.png" height="120px"/>';
  } else if (desc === "11d" || desc === "11n") {
    icon.innerHTML = '<img src="media/weather/thunder.png" height="120px"/>';
  } else if (desc === "13d" || desc === "13n") {
    icon.innerHTML = '<img src="media/weather/v_snowy.png" height="120px"/>';
  } else if (desc === "50d" || desc === "50n") {
    icon.innerHTML = '<img src="media/weather/wind.png" height="120px"/>';
  } else {
    console.log("Sorry, there is no icon for this.");
  }
}

// Change symbols: °C, °F
function changeSymbol(symbol) {
  let symbol_low = document.querySelector(".low-temp-symbol");
  let symbol_high = document.querySelector(".high-temp-symbol");
  symbol_low.innerHTML = symbol;
  symbol_high.innerHTML = symbol;
}

// To change heading
function changeHeadingInput() {
  let h1 = document.querySelector("h1");
  h1.innerHTML = input.value.toUpperCase();
}

// To change heading for Lat, Lon
function changeHeadingLatLon(response) {
  let heading = document.querySelector("h1");
  heading.innerHTML = response.data.name.toUpperCase();
}

// General functino to get temperature
function getTemp(response) {
  low_celsius = document.querySelector("#low-number");
  low_celsius.innerHTML = Math.round(response.data.main.temp_min);

  high_celsius = document.querySelector("#high-number");
  high_celsius.innerHTML = Math.round(response.data.main.temp_max);
}

// To get API Urls
function setMetricUrl() {
  let apiKey = "cf6b50b908fa2e0baca3eed8a569a5f6";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;

  return apiUrl;
}
function setImperialUrl() {
  let h1 = document.getElementById("city").innerHTML;
  let apiKey = "cf6b50b908fa2e0baca3eed8a569a5f6";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${h1}&appid=${apiKey}&units=imperial`;

  return apiUrl;
}

// To get weather using APIs
function getWeatherMetric() {
  let apiUrl = setMetricUrl();
  axios.get(apiUrl).then(getTemp);
  axios.get(apiUrl).then(getWeatherIcon);
}

function getWeatherImperial() {
  let apiUrl = setImperialUrl();
  axios.get(apiUrl).then(getTemp);
}

function getWeatherLatLon(position) {
  let lat = Math.round(position.coords.latitude);
  let lon = Math.round(position.coords.longitude);

  let apiKey = "b95f179627c8dd37f41e1be6e3250e19&";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}units=metric`;

  changeSymbol("°C");

  axios.get(apiUrl).then(getTemp);
  axios.get(apiUrl).then(getWeatherIcon);
  axios.get(apiUrl).then(changeHeadingLatLon);
}

function alertLatLon() {
  alert(
    "Searching for your location... This may take a few seconds. Please wait."
  );
}

function searchLocation(event) {
  event.preventDefault();
  alertLatLon();
  navigator.geolocation.getCurrentPosition(getWeatherLatLon);
}

// Functions for clicked buttons:

//To give alert (Searching for...) when submit button clicked
function searchCity(event) {
  event.preventDefault();

  alert(`Searching for...${input.value}`);

  changeHeadingInput();

  changeSymbol("°C");

  getWeatherMetric();
}

// To change temp to °F
function changeF(event) {
  event.preventDefault();

  changeSymbol("°F");

  getWeatherImperial();
}

// To change temp to °C
function changeC(event) {
  event.preventDefault();

  getWeatherMetric();

  changeSymbol("°C");
}

// Event listeners
let submit = document.querySelector("#submit-form");
submit.addEventListener("submit", searchCity);

let clickLocation = document.querySelector(".my-location");
clickLocation.addEventListener("click", searchLocation);

let clickF = document.querySelector(".fahrenheit");
clickF.addEventListener("click", changeF);

let clickC = document.querySelector(".celsius");
clickC.addEventListener("click", changeC);
