let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#date");

date.textContent = currentDate;

let currentYear = new Date().getFullYear();
let year = document.querySelector("#year");

year.textContent = currentYear;

fetch("https://openweathermap.org/")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error fetching data:", error))