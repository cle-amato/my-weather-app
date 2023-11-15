//challenge 1

let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "March",
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
let month = months[now.getMonth()];
let fullDate = `${day}, ${date} ${month} \n ${hours}:${minutes}`;
let currentDate = document.querySelector(".current-date-time");
currentDate.innerHTML = fullDate;

//challenge 2
function changeCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${cityInput.value}`;
  let city = cityInput.value;
  let apiKey = "ca0094f431ob9cbfef2ed6ce95bt0cc7";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let dynamicTemperature = Math.round(response.data.temperature.current);
  let currentTemperature = document.querySelector(".current-temperature");
  let feelsLike = document.querySelector(".main-feels-like-temp");
  let formattedFeelsLike = Math.round(response.data.temperature.feels_like);
  currentTemperature.innerHTML = `${dynamicTemperature}°C`;
  feelsLike.innerHTML = `Feels like ${formattedFeelsLike}°C`;
}

let searchForm = document.querySelector("#search-city-form");
searchForm.addEventListener("submit", changeCity);
