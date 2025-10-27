 const apiKey = "616ea8afa6154dcba06159bec84c7dfc"

   const apiUrl = "https://newsapi.org/account&appid={616ea8afa6154dcba06159bec84c7dfc}"

   function getNewsData() {
      fetch("https://newsapi.org/account&appid={616ea8afa6154dcba06159bec84c7dfc}")
      .then((response) => {
         
         if(!response.ok) {
            throw new Error("HTTP error! status: ${response.status}")
         }
         return response.json();
      })

      .then((data) => {
         updateNewsDisplay(data);
      })

      .catch((error) =>{
         console.error("Error fetching weather data:", error)
         alert("failed to fetch weather data. Please try again later.")
      })
   }

    function updatedWeatherDisplay(data) {
       const updatedNews = document.getElementById("article-link1")
       const updateNews = document.getElementById("main-article")
       const updatenewsDisplay = document.getElementById("article-description")
    }

document.addEventListener("DomContentLoaded", getNewsData)