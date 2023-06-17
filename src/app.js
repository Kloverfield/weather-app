//METRIC CHANGE C/F

function displayButtonUnit() {
  let buttonText = document.querySelector("#unit-button");
  if (buttonText.innerHTML === "°C") {
    buttonText.innerHTML = "°F";
  } else {
    buttonText.innerHTML = "°C";
  }
}

function convertToFahrenheit(string) {
  let cTemp = string.replace(/\D/g, "");
  let fTemp = Math.round(cTemp * (9 / 5) + 32);
  return `${fTemp}°F`;
}

function convertToCelsius(string) {
  let fTemp = string.replace(/\D/g, "");
  let cTemp = Math.round((fTemp - 32) * (5 / 9));
  return `${cTemp}°C`;
}

function changeTemp() {
  let buttonText = document.querySelector("#unit-button");
  let todayTemp = document.querySelector("#today-temp");
  let todayTempFeels = document.querySelector("#feelsLike");
  let after1Temp = document.querySelector("#after1-temp");
  let after2Temp = document.querySelector("#after2-temp");
  let after3Temp = document.querySelector("#after3-temp");
  let after4Temp = document.querySelector("#after4-temp");
  let after5Temp = document.querySelector("#after5-temp");
  let after6Temp = document.querySelector("#after6-temp");
  if (buttonText.innerHTML === "°C") {
    todayTemp.innerHTML = convertToFahrenheit(todayTemp.innerHTML);
    todayTempFeels.innerHTML = convertToFahrenheit(todayTempFeels.innerHTML);
    after1Temp.innerHTML = convertToFahrenheit(after1Temp.innerHTML);
    after2Temp.innerHTML = convertToFahrenheit(after2Temp.innerHTML);
    after3Temp.innerHTML = convertToFahrenheit(after3Temp.innerHTML);
    after4Temp.innerHTML = convertToFahrenheit(after4Temp.innerHTML);
    after5Temp.innerHTML = convertToFahrenheit(after5Temp.innerHTML);
    after6Temp.innerHTML = convertToFahrenheit(after6Temp.innerHTML);
  } else {
    todayTemp.innerHTML = convertToCelsius(todayTemp.innerHTML);
    todayTempFeels.innerHTML = convertToCelsius(todayTempFeels.innerHTML);
    after1Temp.innerHTML = convertToCelsius(after1Temp.innerHTML);
    after2Temp.innerHTML = convertToCelsius(after2Temp.innerHTML);
    after3Temp.innerHTML = convertToCelsius(after3Temp.innerHTML);
    after4Temp.innerHTML = convertToCelsius(after4Temp.innerHTML);
    after5Temp.innerHTML = convertToCelsius(after5Temp.innerHTML);
    after6Temp.innerHTML = convertToCelsius(after6Temp.innerHTML);
  }
}

function changeMetric(event) {
  displayButtonUnit();
  changeTemp();
}

let unitButton = document.querySelector("#unit-button");
unitButton.addEventListener("click", changeMetric);

//SEARCH INTERACTION 8/8; DISPLAY TEMPERATURE OF EACH WEEKDAY

function displayWeekdayTemp(response) {
  console.log(response.data);
}

function getWeekTemp(response) {
  let longitude = response.data.coord.lon;
  let latitude = response.data.coord.lat;
  let count = 1;
  let apiKey = "6bd7c4bfa85bb276dc93ab103505c1de";
  let queryPara = `lat=${latitude}&lon=${longitude}&cnt=${count}&appid=${apiKey}&units=metric`;
  let dailyApiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?${queryPara}`;
  axios.get(dailyApiUrl).then(displayWeekdayTemp);
}

function getWeekdayTemp(cityString) {
  let apiKey = "6bd7c4bfa85bb276dc93ab103505c1de";
  let queryPara = `q=${cityString}&appid=${apiKey}&units=metric`;
  let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?${queryPara}`;
  axios.get(weatherApiUrl).then(getWeekTemp);
}

//SEARCH INTERACTION 7/8; DISPLAY WEEKDAYS

function getDay2() {
  let date = new Date();
  let day = date.getDay();
  if (day <= 5) {
    return +1;
  } else {
    return -6;
  }
}
function getDay3() {
  let date = new Date();
  let day = date.getDay();
  if (day <= 4) {
    return +2;
  } else {
    return -5;
  }
}
function getDay4() {
  let date = new Date();
  let day = date.getDay();
  if (day <= 3) {
    return +3;
  } else {
    return -4;
  }
}
function getDay5() {
  let date = new Date();
  let day = date.getDay();
  if (day <= 2) {
    return +4;
  } else {
    return -3;
  }
}
function getDay6() {
  let date = new Date();
  let day = date.getDay();
  if (day <= 1) {
    return +5;
  } else {
    return -2;
  }
}
function getDay7() {
  let date = new Date();
  let day = date.getDay();
  if (day <= 0) {
    return +6;
  } else {
    return -1;
  }
}

function calculateDay() {
  let day2 = getDay2();
  let day3 = getDay3();
  let day4 = getDay4();
  let day5 = getDay5();
  let day6 = getDay6();
  let day7 = getDay7();
  let dayNumber = [day2, day3, day4, day5, day6, day7];
  return dayNumber;
}

function displayWeekday() {
  let date = new Date();
  let day2Text = document.querySelector("#day2");
  let day3Text = document.querySelector("#day3");
  let day4Text = document.querySelector("#day4");
  let day5Text = document.querySelector("#day5");
  let day6Text = document.querySelector("#day6");
  let day7Text = document.querySelector("#day7");
  let days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  let day = date.getDay();
  let dayNumber = calculateDay();
  day2Text.innerHTML = days[day + dayNumber[0]];
  day3Text.innerHTML = days[day + dayNumber[1]];
  day4Text.innerHTML = days[day + dayNumber[2]];
  day5Text.innerHTML = days[day + dayNumber[3]];
  day6Text.innerHTML = days[day + dayNumber[4]];
  day7Text.innerHTML = days[day + dayNumber[5]];
}

//SEARCH INTERACTION 6/8; DISPLAY HUMIDITY OF TODAY

function displayHumidity(response) {
  let humidity = Math.round(response.data.main.humidity);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${humidity}%`;
}

function getHumidity(cityString) {
  let apiKey = "6bd7c4bfa85bb276dc93ab103505c1de";
  let queryPara = `q=${cityString}&appid=${apiKey}&units=metric`;
  let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?${queryPara}`;
  axios.get(weatherApiUrl).then(displayHumidity);
}

//SEARCH INTERACTION 5/8; DISPLAY WINDSPEED OF TODAY

function displayWind(response) {
  let wind = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${wind}m/s`;
}

function getWind(cityString) {
  let apiKey = "6bd7c4bfa85bb276dc93ab103505c1de";
  let queryPara = `q=${cityString}&appid=${apiKey}&units=metric`;
  let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?${queryPara}`;
  axios.get(weatherApiUrl).then(displayWind);
}

//SEARCH INTERACTION 4/8; DISPLAY 'TEMPERATURE FEELS LIKE' OF TODAY

function displayFeels(response) {
  let todayTempFeels = Math.round(response.data.main.feels_like);
  let buttonText = document.querySelector("#unit-button");
  let feelsLikeElement = document.querySelector("#feelsLike");

  if (buttonText.innerHTML === "°C") {
    let tempF = convertToFahrenheit(`${todayTempFeels}`);
    feelsLikeElement.innerHTML = `${tempF}`;
  } else {
    feelsLikeElement.innerHTML = `${todayTempFeels}°C`;
  }
}

function getFeels(cityString) {
  let apiKey = "6bd7c4bfa85bb276dc93ab103505c1de";
  let queryPara = `q=${cityString}&appid=${apiKey}&units=metric`;
  let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?${queryPara}`;
  axios.get(weatherApiUrl).then(displayFeels);
}

//SEARCH INTERACTION 3/8; DISPLAY TEMPERATURE OF TODAY

function displayTodayTemp(response) {
  let todayTemp = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#today-temp");
  let buttonText = document.querySelector("#unit-button");

  if (buttonText.innerHTML === "°C") {
    let todayTempF = convertToFahrenheit(`${todayTemp}`);
    tempElement.innerHTML = `${todayTempF}`;
  } else {
    tempElement.innerHTML = `${todayTemp}°C`;
  }
}

function getTodayTemp(cityString) {
  let apiKey = "6bd7c4bfa85bb276dc93ab103505c1de";
  let queryPara = `q=${cityString}&appid=${apiKey}&units=metric`;
  let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?${queryPara}`;
  axios.get(weatherApiUrl).then(displayTodayTemp);
}

//SEARCH INTERACTION 2/8; DISPLAY DATE OF TODAY

function formatDate() {
  let currentDate = new Date();
  let days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  let weekday = days[currentDate.getDay()];
  let hour = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  if (hour <= 9 && minutes <= 9) {
    return `${weekday} 0${hour}:0${minutes}`;
  } else {
    if (hour <= 9) {
      return `${weekday} 0${hour}:${minutes}`;
    } else {
      if (minutes <= 9) {
        return `${weekday} ${hour}:0${minutes}`;
      } else {
        return `${weekday} ${hour}:${minutes}`;
      }
    }
  }
}

function displayDate() {
  let currentDate = formatDate();
  let dateText = document.querySelector("#date");
  dateText.innerHTML = currentDate;
}

//SEARCH INTERACTION 1/8; DISPLAY SEARCHED CITY

function displayCity(cityString) {
  let cityText = document.querySelector("#city");
  cityText.innerHTML = cityString.trim().toUpperCase();
}

//USE CURRENT LOCATION AS DEFAULT SEARCHINPUT

function displayTempByLocation(response) {
  let city = response.data.name;
  displayDate();
  displayCity(city.trim().toLowerCase());
  getTodayTemp(city.trim().toLowerCase());
  getFeels(city.trim().toLowerCase());
  getWind(city.trim().toLowerCase());
  getHumidity(city.trim().toLowerCase());

  displayWeekday();
  getWeekdayTemp(city.trim().toLowerCase());
}

function getTempByLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "6bd7c4bfa85bb276dc93ab103505c1de";
  let queryPara = `lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?${queryPara}`;
  axios.get(weatherApiUrl).then(displayTempByLocation);
}

navigator.geolocation.getCurrentPosition(getTempByLocation);

//SEARCH-FUNCTION

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  if (searchInput.value === "") {
    alert("Please type the name of a city 🙂");
  } else {
    displayDate();
    displayCity(searchInput.value.trim().toLowerCase());
    getTodayTemp(searchInput.value.trim().toLowerCase());
    getFeels(searchInput.value.trim().toLowerCase());
    getWind(searchInput.value.trim().toLowerCase());
    getHumidity(searchInput.value.trim().toLowerCase());

    displayWeekday();
    getWeekdayTemp(searchInput.value.trim().toLowerCase());
  }
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
