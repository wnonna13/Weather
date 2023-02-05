let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

function tempRound(temp) {
  return Math.round(temp);
}

function tempChangeF(temp) {
  return Math.round((temp * 9) / 5 + 32);
}

let city = prompt("Please enter a city:");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let temp = tempRound(weather[city].temp);
  let tempF = tempChangeF(weather[city].temp);
  let humidity = weather[city].humidity;
  let msg = `It is currently ${temp}°C (${tempF})°F in ${city} with a humidity of ${humidity}%.`;
  alert(msg);
} else {
  let msg =
    "Sorry, we don't know the weather for this city, try going to http://www.google.com/search?";
  alert(msg);
}

//////  USED CODE
// CHANGE FROM CELSIUS TO FAHRENHEIT

//function changeF(event) {
//  event.preventDefault();

//  let lowCelsius = document.querySelector("#low-number");
//  let highCelsius = document.querySelector("#high-number");

//  let lowFahrenheit = 23 * (9 / 5) + 32;
//  let highFahrenheit = 30 * (9 / 5) + 32;

//  lowCelsius.innerHTML = Math.ceil(lowFahrenheit);
//  highCelsius.innerHTML = Math.floor(highFahrenheit);

//  let symbol = document.querySelector(".low-temp-symbol");
//  symbol.innerHTML = "°F";

// let symbol_high = document.querySelector(".high-temp-symbol");
// symbol_high.innerHTML = "°F";

//}

//let fahrenheit = document.querySelector(".fahrenheit");

//fahrenheit.addEventListener("click", changeF);

// CHANGE FAHRENHEIT TO CELSIUS

//function changeToC(event) {
//  event.preventDefault();

//let lowFahrenheit = document.querySelector("#low-number");
//  let highFahrenheit = document.querySelector("#high-number");

//  let lowCelsius = ((74 - 32) * 5) / 9;
//let highCelsius = ((86 - 32) * 5) / 9;

//  lowFahrenheit.innerHTML = Math.ceil(lowCelsius);
//  highFahrenheit.innerHTML = Math.floor(highCelsius);

// let symbol = document.querySelector(".low-temp-symbol");
//  symbol.innerHTML = "°C";

//  let symbol_high = document.querySelector(".high-temp-symbol");
//  symbol_high.innerHTML = "°C";
//}

//let celsius = document.querySelector(".celsius");

//celsius.addEventListener("click", changeToC);
