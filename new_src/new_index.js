

// TO SEARCH WEATHER

function setDay(timestamp) {
  let currentTime = new Date(timestamp * 1000);
  let day = currentTime.getDay();
  let dayArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return (dayStr = dayArray[day]);
}

function setTime(timestamp) {
  let currentTime = new Date(timestamp * 1000);
  let hours = currentTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  } else {
    hours = `${hours}`;
  }
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  } else {
    minutes = `${minutes}`;
  }

  let seconds = currentTime.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  } else {
    seconds = `${seconds}`;
  }

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
  if (date === 1 || date === 21 || date === 31) {
    date = `${date}st`;
  } else if (date === 2 || date === 22) {
    date = `${date}nd`;
  } else if (date === 3 || date === 23) {
    date = `${date}rd`;
  } else {
    date = `${date}th`;
  }

  let year = currentTime.getFullYear();
  return `${dayStr}, ${monthStr} ${date} ${year} at ${hours}:${minutes}:${seconds}`;
}

function getForecast(coord) {
  let apiKey = `c8abeb45b43149ca1ote502400f8a1fd`;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${coord.longitude}&lat=${coord.latitude}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(getWeeklyForecast);
}

function getForecastF(coord) {
  let apiKey = `c8abeb45b43149ca1ote502400f8a1fd`;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${coord.longitude}&lat=${coord.latitude}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(getWeeklyForecastF);
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

  let windSymbol = document.querySelector("#wind-symbol");
  windSymbol.innerHTML = " km/h";

  getForecast(response.data.coordinates);

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

function showCityTokyo() {
  let city = "Tokyo";
  let api_key = "0f44341abt30217bea1ac1oefa56b8b0";
  let api_url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${api_key}`;
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

  let windSymbol = document.querySelector("#wind-symbol");
  windSymbol.innerHTML = " mph";

  getForecastF(response.data.coordinates);
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

  let windSymbol = document.querySelector("#wind-symbol");
  windSymbol.innerHTML = " km/h";

  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;

  getForecast(response.data.coordinates);
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
//
//
// GET 6-DAY WEEK FORECAST //

function getWeeklyForecast(response) {
  let forecast = response.data.daily;

  console.log(response);
  let weekForecast = document.querySelector("#forecast");
  let forecastHTML = `<div class="row new">`;
  forecast.forEach((forecastDay, index) => {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        ` <div class="col-2 weather-forecast-data">${setDay(forecastDay.time)}
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${
              forecastDay.condition.icon
            }.png"
            alt=""
            class="weather-forecast-image"
          />
          <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-max">${Math.round(
                forecastDay.temperature.maximum
              )}°C -</span
              ><span class="weather-forecast-temperature-min">${Math.round(
                forecastDay.temperature.minimum
              )}°C</span>
            </div>
        </div>`;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  weekForecast.innerHTML = forecastHTML;
}

function getWeeklyForecastF(response) {
  let forecast = response.data.daily;

  console.log(response);
  let weekForecast = document.querySelector("#forecast");
  let forecastHTML = `<div class="row new">`;
  forecast.forEach((forecastDay, index) => {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        ` <div class="col-2 weather-forecast-data">${setDay(forecastDay.time)}
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${
              forecastDay.condition.icon
            }.png"
            alt=""
            class="weather-forecast-image"
          />
          <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-max">${Math.round(
                forecastDay.temperature.maximum
              )}°F -</span
              ><span class="weather-forecast-temperature-min">${Math.round(
                forecastDay.temperature.minimum
              )}°F</span>
            </div>
        </div>`;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  weekForecast.innerHTML = forecastHTML;
}

// SHOW TOKYO DEFAULT

showCityTokyo();

//EVENT LISTENERS

let submit = document.querySelector("#submit-form");
submit.addEventListener("submit", showCity);

let clickF = document.querySelector(".fahrenheit");
clickF.addEventListener("click", showCityF);

let clickC = document.querySelector(".celsius");
clickC.addEventListener("click", showCityC);

let clickGeolocation = document.querySelector(".geolocation");
clickGeolocation.addEventListener("click", searchGeoLocation);

//
