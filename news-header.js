let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#date");

date.textContent = currentDate;

let currentYear = new Date().getFullYear();
let year = document.querySelector("#year");

year.textContent = currentYear;

const city = "Tooele";
const apiKey =  "616ea8afa6154dcba06159bec84c7dfc";

const apiUrl = `https://newsapi.org/v2/everything?${city}}&appid=${apiKey}`

function getNewsData() {
   fetch(`https://newsapi.org/v2/everything?${city}&appid=${apiKey}`)
    .then((response) => {
      
      if (!response.ok) {
        throw new Error("HTTP error! status: ${response.status}");
      }
      return response.json();
    })

    .then((data) => {
      updateNewsDisplay(data);
    })

    .catch((error) => {
      console.error("Error fetching weather data:", error)
      alert("Failed to fetch weather data. Please try again later.")
    });
   }

   function updateNewsDisplay(data) {
      const headerArticle = document.getElementById("header-article")
      const headerDes = document.getElementById("header-desc")
      const articeLeink1 = document.getElementById("article-link-1")
      const articleDesc1 = document.getElementById("article-desc-1")
      const articleLink2 = document.getElementById("article-link-2")
      const articleDesc2 = document.getElementById("article-desc-2")
      const articleLink3 = document.getElementById("article-link-3")
      const articleDesc3 = document.getElementById("article-desc-3")
      const articleLink4 = document.getElementById("article-link-4")
      const articleDesc4 = document.getElementById("article-desc-4")

      currentNews.textContent = `${mainarticle}`
      currentDesc.textContent = description
      
   }

   document.addEventListener("DomContentLoaded", getNesData())
