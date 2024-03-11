const apikey = "7a45747977971c62fd6d5bdc460141f9";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const inputbox = document.querySelector(".search input");
const searchbutton = document.querySelector(".search button");
const wethericon = document.querySelector(".weatherimages");
const gifimage = document.querySelector(".gif");

async function cheackweather(cityname) {
  const response = await fetch(apiurl + cityname + `&appid=${apikey}`);
  let data = await response.json();

  document.querySelector(".cityname").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML =
    Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    wethericon.src = "weather icons/cloudy.png";
  } else if (data.weather[0].main == "Rain") {
    wethericon.src = "weather icons/rain.png";
  } else if (data.weather[0].main == "Clear") {
    wethericon.src = "weather icons/sun.png";
  } else if (data.weather[0].main == "Mist") {
    wethericon.src = "weather icons/fog.png";
  } else if (data.weather[0].main == "Drizzle") {
    wethericon.src = "weather icons/sun-and-cloud-65PMRJT84G.png";
  }

  document.querySelector(".weather").style.display = "block"
  gifimage.style.display = "none";
}

function cityname() {
  cheackweather(inputbox.value);
}
