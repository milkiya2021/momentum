const API_KEY = "cbb4234ddd909bb81c9a4b479d5e152c";

function onGeoOk(pos) {
  const lat = pos.coords.latitude;
  const log = pos.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weatherBox span:first-child");
      const city = document.querySelector("#weatherBox span:last-child");
      weather.innerText = `${data.weather[0].main}/${Math.floor(
        data.main.temp
      )}\u00b0C\n`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
