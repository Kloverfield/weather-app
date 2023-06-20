////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
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
  let day2Temp = document.querySelector("#day2-temp");
  let day3Temp = document.querySelector("#day3-temp");
  let day4Temp = document.querySelector("#day4-temp");
  let day5Temp = document.querySelector("#day5-temp");
  if (buttonText.innerHTML === "°C") {
    todayTemp.innerHTML = convertToFahrenheit(todayTemp.innerHTML);
    todayTempFeels.innerHTML = convertToFahrenheit(todayTempFeels.innerHTML);
    day2Temp.innerHTML = convertToFahrenheit(day2Temp.innerHTML);
    day3Temp.innerHTML = convertToFahrenheit(day3Temp.innerHTML);
    day4Temp.innerHTML = convertToFahrenheit(day4Temp.innerHTML);
    day5Temp.innerHTML = convertToFahrenheit(day5Temp.innerHTML);
  } else {
    todayTemp.innerHTML = convertToCelsius(todayTemp.innerHTML);
    todayTempFeels.innerHTML = convertToCelsius(todayTempFeels.innerHTML);
    day2Temp.innerHTML = convertToCelsius(day2Temp.innerHTML);
    day3Temp.innerHTML = convertToCelsius(day3Temp.innerHTML);
    day4Temp.innerHTML = convertToCelsius(day4Temp.innerHTML);
    day5Temp.innerHTML = convertToCelsius(day5Temp.innerHTML);
  }
}

function changeMetric(event) {
  displayButtonUnit();
  changeTemp();
}

let unitButton = document.querySelector("#unit-button");
unitButton.addEventListener("click", changeMetric);

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

//SEARCH INTERACTION 1/4; DISPLAY SEARCHED CITY
function displayCity(cityString) {
  let cityText = document.querySelector("#city");
  cityText.innerHTML = cityString.trim().toUpperCase();
}

//--------------------------------------------------------------------------------------------------

//SEARCH INTERACTION 2/4; DISPLAY DATE OF TODAY
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

//--------------------------------------------------------------------------------------------------

//SEARCH INTERACTION 3/4; DISPLAY WEEKDAY NAMES
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

function calculateDay() {
  let day2 = getDay2();
  let day3 = getDay3();
  let day4 = getDay4();
  let day5 = getDay5();
  let dayNumber = [day2, day3, day4, day5];
  return dayNumber;
}

function displayWeekday() {
  let date = new Date();
  let day2Text = document.querySelector("#day2");
  let day3Text = document.querySelector("#day3");
  let day4Text = document.querySelector("#day4");
  let day5Text = document.querySelector("#day5");
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
}

//--------------------------------------------------------------------------------------------------

//SEARCH INTERACTION 4/4; DISPLAY WEATHER INFORMATION

//DISPLAY WEATHER INFORMATION 1/5; TEMPERATURE
function displayTemp(weather) {
  let day1Temp = Math.round(weather[0].main.temp);
  let day2Temp = Math.round(weather[1].main.temp);
  let day3Temp = Math.round(weather[2].main.temp);
  let day4Temp = Math.round(weather[3].main.temp);
  let day5Temp = Math.round(weather[4].main.temp);

  let day1Element = document.querySelector("#today-temp");
  let day2Element = document.querySelector("#day2-temp");
  let day3Element = document.querySelector("#day3-temp");
  let day4Element = document.querySelector("#day4-temp");
  let day5Element = document.querySelector("#day5-temp");

  let buttonText = document.querySelector("#unit-button");

  if (buttonText.innerHTML === "°C") {
    let temp1F = convertToFahrenheit(`${day1Temp}`);
    day1Element.innerHTML = `${temp1F}`;
    let temp2F = convertToFahrenheit(`${day2Temp}`);
    day2Element.innerHTML = `${temp2F}`;
    let temp3F = convertToFahrenheit(`${day3Temp}`);
    day3Element.innerHTML = `${temp3F}`;
    let temp4F = convertToFahrenheit(`${day4Temp}`);
    day4Element.innerHTML = `${temp4F}`;
    let temp5F = convertToFahrenheit(`${day5Temp}`);
    day5Element.innerHTML = `${temp5F}`;
  } else {
    day1Element.innerHTML = `${day1Temp}°C`;
    day2Element.innerHTML = `${day2Temp}°C`;
    day3Element.innerHTML = `${day3Temp}°C`;
    day4Element.innerHTML = `${day4Temp}°C`;
    day5Element.innerHTML = `${day5Temp}°C`;
  }
}

//DISPLAY WEATHER INFORMATION 2/5; HUMIDITY
function displayHumidity(weather) {
  let humidity = Math.round(weather.main.humidity);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${humidity}%`;
}

//DISPLAY WEATHER INFORMATION 3/5; WINDSPEED
function displayWind(weather) {
  let wind = Math.round(weather.wind.speed);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${wind}m/s`;
}

//DISPLAY WEATHER INFORMATION 4/5; TEMPERATURE 'FEELS LIKE'
function displayFeels(weather) {
  let todayTempFeels = Math.round(weather.main.feels_like);
  let buttonText = document.querySelector("#unit-button");
  let feelsLikeElement = document.querySelector("#feelsLike");

  if (buttonText.innerHTML === "°C") {
    let tempF = convertToFahrenheit(`${todayTempFeels}`);
    feelsLikeElement.innerHTML = `${tempF}`;
  } else {
    feelsLikeElement.innerHTML = `${todayTempFeels}°C`;
  }
}

//DISPLAY WEATHER INFORMATION 5/5; WEATHER DESCRIPTION
let clearDay = new Image();
clearDay.src = "media/weather/clear_day.jpg";

let clearNight = new Image();
clearNight.src = "media/weather/clear_night.jpg";

let cloudsDay = new Image();
cloudsDay.src = "media/weather/clouds_day.jpg";

let cloudsNight = new Image();
cloudsNight.src = "media/weather/clouds_night.jpg";

let fog = new Image();
fog.src = "media/weather/fog.jpg";

let rain = new Image();
rain.src = "media/weather/rain.jpg";

let snow = new Image();
snow.src = "media/weather/snow.jpg";

let thunder = new Image();
thunder.src = "media/weather/thunderstorm.jpg";

function displayImg(pack) {
  let newImage = pack[0];
  let element = pack[1];
  console.log(newImage, element);
  element.replaceWith(newImage);
}

function sendToFunction(image, element) {
  let weatherPack = [image, element];
  displayImg(weatherPack);
}

function getImg(weather, element) {
  let main = weather.main.toUpperCase();
  let id = weather.id;
  let icon = weather.icon;
  if (main === "CLEAR") {
    if (icon === "01d") {
      sendToFunction(clearDay, element);
    } else {
      sendToFunction(clearNight, element);
    }
  } else {
    if (main === "CLOUDS") {
      if (icon === "02d" || icon === "03d" || icon === "04d") {
        sendToFunction(cloudsDay, element);
      } else {
        sendToFunction(cloudsNight, element);
      }
    } else {
      if (main === "THUNDERSTORM") {
        sendToFunction(thunder, element);
      } else {
        if (main === "RAIN" && id !== 511) {
          sendToFunction(rain, element);
        } else {
          if (main === "SNOW" || id === 511) {
            sendToFunction(snow, element);
          } else {
            sendToFunction(fog, element);
          }
        }
      }
    }
  }
}

function displayDescriptive(weather) {
  let imgDay1Element = document.querySelector("img");
  getImg(weather[0].weather[0], imgDay1Element);

  let imgDay2Element = document.querySelector("img#imgDay2");
  getImg(weather[1].weather[0], imgDay2Element);

  let imgDay3Element = document.querySelector("img#imgDay3");
  getImg(weather[2].weather[0], imgDay3Element);

  let imgDay4Element = document.querySelector("img#imgDay4");
  getImg(weather[3].weather[0], imgDay4Element);

  let imgDay5Element = document.querySelector("img#imgDay5");
  getImg(weather[4].weather[0], imgDay5Element);
}

function displayWeather(weather) {
  // display weather information 1/5; temperature
  displayTemp(weather);

  // display weather information 2/5; 'feels like'-temperature
  displayFeels(weather[0]);

  // display weather information 3/5; windspeed
  displayWind(weather[0]);

  // display weather information 4/5; humidity
  displayHumidity(weather[0]);

  // display weather information 5/5; weather description
  displayDescriptive(weather);
}

function generateDate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month <= 9 && day <= 9) {
    return `${year}-0${month}-0${day}`;
  } else {
    if (month <= 9) {
      return `${year}-0${month}-${day}`;
    } else {
      if (day <= 9) {
        return `${year}-${month}-0${day}`;
      } else {
        return `${year}-${month}-${day}`;
      }
    }
  }
}

function sortWeatherData(response) {
  let bulk = response.data.list;
  let apiDate = bulk[0].dt_txt;
  let date = generateDate();
  let day1 = bulk[0];
  if (apiDate === `${date} 00:00:00`) {
    // CHECK WHAT T0 DO WITH THIS. WHEN DOES THE DATE CHANGE FOR THE (API??? IF IT CHANGES BEFORE MIDNIGHT, WE HAVE A PROBLEM.
    let day2 = bulk[1];
    let day3 = bulk[1];
    let day4 = bulk[1];
    let day5 = bulk[1];
    let days = [day1, day2, day3, day4, day5];
    displayWeather(days);
  } else {
    if (apiDate === `${date} 03:00:00`) {
      let day2 = bulk[11];
      let day3 = bulk[19];
      let day4 = bulk[27];
      let day5 = bulk[35];
      let days = [day1, day2, day3, day4, day5];
      displayWeather(days);
    } else {
      if (apiDate === `${date} 06:00:00`) {
        let day2 = bulk[10];
        let day3 = bulk[18];
        let day4 = bulk[26];
        let day5 = bulk[31];
        let days = [day1, day2, day3, day4, day5];
        displayWeather(days);
      } else {
        if (apiDate === `${date} 09:00:00`) {
          let day2 = bulk[9];
          let day3 = bulk[17];
          let day4 = bulk[25];
          let day5 = bulk[30];
          let days = [day1, day2, day3, day4, day5];
          displayWeather(days);
        } else {
          if (apiDate === `${date} 12:00:00`) {
            let day2 = bulk[8];
            let day3 = bulk[16];
            let day4 = bulk[24];
            let day5 = bulk[32];
            let days = [day1, day2, day3, day4, day5];
            displayWeather(days);
          } else {
            if (apiDate === `${date} 15:00:00`) {
              let day2 = bulk[7];
              let day3 = bulk[15];
              let day4 = bulk[23];
              let day5 = bulk[31];
              let days = [day1, day2, day3, day4, day5];
              displayWeather(days);
            } else {
              if (apiDate === `${date} 18:00:00`) {
                let day2 = bulk[6];
                let day3 = bulk[14];
                let day4 = bulk[22];
                let day5 = bulk[30];
                let days = [day1, day2, day3, day4, day5];
                displayWeather(days);
              } else {
                let day2 = bulk[5];
                let day3 = bulk[13];
                let day4 = bulk[21];
                let day5 = bulk[29];
                let days = [day1, day2, day3, day4, day5];
                displayWeather(days);
              }
            }
          }
        }
      }
    }
  }
}

function getWeather(response) {
  let longitude = response.data.coord.lon;
  let latitude = response.data.coord.lat;
  let apiKey = "6bd7c4bfa85bb276dc93ab103505c1de";
  let queryPara = `lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  let forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?${queryPara}`;
  axios.get(forecastApiUrl).then(sortWeatherData);
}

function getCoord(cityString) {
  let apiKey = "6bd7c4bfa85bb276dc93ab103505c1de";
  let queryPara = `q=${cityString}&appid=${apiKey}&units=metric`;
  let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?${queryPara}`;
  axios.get(weatherApiUrl).then(getWeather);
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

//USE CURRENT LOCATION AS DEFAULT SEARCHINPUT
function displayTempByLocation(response) {
  let city = response.data.name;
  // search interaction 1/4: display searched city
  displayCity(city.trim().toLowerCase());

  // search interaction 2/4: display date of today
  displayDate();

  // search interaction 3/4: display weekday names
  displayWeekday();

  // search interaction 4/4: display weather information
  getCoord(city.trim().toLowerCase());
}

function getDefaultWeather(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "6bd7c4bfa85bb276dc93ab103505c1de";
  let queryPara = `lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?${queryPara}`;
  axios.get(weatherApiUrl).then(displayTempByLocation);
}

navigator.geolocation.getCurrentPosition(getDefaultWeather);

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

//SEARCH-FUNCTION
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  if (city === "") {
    alert("Please type the name of a city 🙂");
  } else {
    // search interaction 1/4: display searched city
    displayCity(city.trim().toLowerCase());

    // search interaction 2/4: display date of today
    displayDate();

    // search interaction 3/4: display weekday names
    displayWeekday();

    // search interaction 4/4: display weather information
    getCoord(city.trim().toLowerCase());
  }
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
