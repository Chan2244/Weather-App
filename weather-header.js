let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#date");

date.textContent = currentDate;

let currentYear = new Date().getFullYear();
let year = document.querySelector("#year");

year.textContent = currentYear;

const units = "imperial";
const city = "Tooele";
const apiKey =  "1df04cf4e992952fa3bf33becb55e3ee";

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`

function getWeatherData() {
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`)
    .then((response) => {
      
      if (!response.ok) {
        throw new Error("HTTP error! status: ${response.status}");
      }
      return response.json();
    })

    .then((data) => {
      updateWeatherDisplay(data);
    })

    .catch((error) => {
      console.error("Error fetching weather data:", error)
      alert("Failed to fetch weather data. Please try again later.")
    });
   }

   function updateWeatherDisplay(data) {
      const currentTemp = document.getElementById("current-temp")
      const currentDesc = document.getElementById("current-desc")
      const currentHumid = document.getElementById("current-humid")
      const currentWindSpeed= document.getElementById("current-windSpeed")
      const currentWindChill = document.getElementById("current-windChill")
      const temperature = Math.round(data.main.temp)
      const description = data.weather[0].description
      const humidity = data.main.humidity
      const windSpeed = data.wind.windSpeed
      const windChill = "N/A"
      const iconCode = data.weather[0].icon
      const iconUrl = `https://openweathermap.org/img/win/${iconCode}@2x.png`
      currentTemp.textContent = `${temperature} °F`
      currentDesc.textContent = description
      currentHumid.textContent = `${humidity}%`
      currentWindSpeed.textContent = `${windSpeed} mph`
      currentWindChill.textContent - windChill
   }

   document.addEventListener("DomContentLoaded", getWeatherData())

  