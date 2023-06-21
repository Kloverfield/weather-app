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

//DISPLAY WEATHER INFORMATION 1/6; TEMPERATURE
function displayTemp(weatherArray) {
  let day1Temp = Math.round(weatherArray[0].main.temp);
  let day2Temp = Math.round(weatherArray[1].main.temp);
  let day3Temp = Math.round(weatherArray[2].main.temp);
  let day4Temp = Math.round(weatherArray[3].main.temp);
  let day5Temp = Math.round(weatherArray[4].main.temp);

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

//DISPLAY WEATHER INFORMATION 2/6; HUMIDITY
function displayHumidity(weather) {
  let humidity = Math.round(weather.main.humidity);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${humidity}%`;
}

//DISPLAY WEATHER INFORMATION 3/6; WINDSPEED
function displayWind(weather) {
  let wind = Math.round(weather.wind.speed);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${wind}m/s`;
}

//DISPLAY WEATHER INFORMATION 4/6; TEMPERATURE 'FEELS LIKE'
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

// DISPLAY WEATHER INFORMATION 5/6; PRECIPITATION
function displayPrecipitation(weather) {
  let pop = weather.pop;
  let prec = pop * 100;
  let precElement = document.querySelector("#precipitation");
  precElement.innerHTML = `${prec}%`;
}

//DISPLAY WEATHER INFORMATION 6/6; WEATHER DESCRIPTION
let clearDay = "media/weather/clear_day.jpg";

let clearNight = "media/weather/clear_night.jpg";

let cloudsDay = "media/weather/clouds_day.jpg";

let cloudsNight = "media/weather/clouds_night.jpg";

let fog = "media/weather/fog.jpg";

let rain = "media/weather/rain.jpg";

let snow = "media/weather/snow.jpg";

let thunder = "media/weather/thunderstorm.jpg";

function getImg(weather) {
  let main = weather.weather[0].main.toUpperCase();
  let id = weather.weather[0].id;
  let icon = weather.weather[0].icon;
  if (main === "CLEAR") {
    if (icon === "01d") {
      return clearDay;
    } else {
      return clearNight;
    }
  } else {
    if (main === "CLOUDS") {
      if (icon === "02d" || icon === "03d" || icon === "04d") {
        return cloudsDay;
      } else {
        return cloudsNight;
      }
    } else {
      if (main === "THUNDERSTORM") {
        return thunder;
      } else {
        if (main === "RAIN" && id !== 511) {
          return rain;
        } else {
          if (main === "SNOW" || id === 511) {
            return snow;
          } else {
            return fog;
          }
        }
      }
    }
  }
}

function displayDescriptiveImgDay1(weather) {
  let newImg = getImg(weather);
  let element = document.querySelector("img");
  element.src = newImg;
}

function displayDescriptiveImgDay2(weather) {
  let newImg = getImg(weather);
  let element = document.querySelector("#imgDay2");
  element.src = newImg;
}

function displayDescriptiveImgDay3(weather) {
  let newImg = getImg(weather);
  let element = document.querySelector("#imgDay3");
  element.src = newImg;
}

function displayDescriptiveImgDay4(weather) {
  let newImg = getImg(weather);
  let element = document.querySelector("#imgDay4");
  element.src = newImg;
}

function displayDescriptiveImgDay5(weather) {
  let newImg = getImg(weather);
  let element = document.querySelector("#imgDay5");
  element.src = newImg;
}

function displayDescriptiveText(desc) {
  let element = document.querySelector("#descriptive");
  element.innerHTML = `${desc}`;
}

function displayDescriptives(weatherArray) {
  displayDescriptiveText(weatherArray[0].weather[0].description.toUpperCase());
  displayDescriptiveImgDay1(weatherArray[0]);
  displayDescriptiveImgDay2(weatherArray[1]);
  displayDescriptiveImgDay3(weatherArray[2]);
  displayDescriptiveImgDay4(weatherArray[3]);
  displayDescriptiveImgDay5(weatherArray[4]);
}

function displayWeather(weather) {
  // display weather information 1/6; temperature
  displayTemp(weather);

  // display weather information 2/6; 'feels like'-temperature
  displayFeels(weather[0]);

  // display weather information 3/6; windspeed
  displayWind(weather[0]);

  // display weather information 4/6; humidity
  displayHumidity(weather[0]);

  //display weather information 5/6; precipitation
  displayPrecipitation(weather[0]);

  // display weather information 6/6; weather description
  displayDescriptives(weather);
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

function searchInteraction() {
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value.trim().toLowerCase();

  searchInput.value = "";

  // search interaction 1/4: display searched city
  displayCity(city);

  // search interaction 2/4: display date of today
  displayDate();

  // search interaction 3/4: display weekday names
  displayWeekday();

  // search interaction 4/4: display weather information
  getCoord(city);
}

//SEARCH-FUNCTION
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value.trim().toLowerCase();

  if (city === "") {
    alert("Please type the name of a city 🙂");
  } else {
    let apiKey = "6bd7c4bfa85bb276dc93ab103505c1de";
    let queryPara = `q=${city}&appid=${apiKey}&units=metric`;
    let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?${queryPara}`;
    axios.get(weatherApiUrl).then(searchInteraction);
  }
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

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
