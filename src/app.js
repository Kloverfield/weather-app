//unviersal variables
let clearDay = "media/weather/clear_day.jpg";
let clearNight = "media/weather/clear_night.jpg";
let cloudsDay = "media/weather/clouds_day.jpg";
let cloudsNight = "media/weather/clouds_night.jpg";
let thunder = "media/weather/thunderstorm.jpg";
let rainDay = "media/weather/rain_day.jpg";
let rainNight = "media/weather/rain_night.jpg";
let snow = "media/weather/snow.jpg";
let fog = "media/weather/fog.jpg";

let date = new Date();
let days = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];

let day1eventElement = document.querySelector("#day1click");
let day2eventElement = document.querySelector("#day2click");
let day3eventElement = document.querySelector("#day3click");
let day4eventElement = document.querySelector("#day4click");
let day5eventElement = document.querySelector("#day5click");

////////////////////////////////////////////////////////////////////////////////////////////////

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

function changeMetric(event) {
  // change unit-button-text
  let unitButton = document.querySelector("#unit-button");
  if (unitButton.innerHTML === "°C") {
    unitButton.innerHTML = "°F";
  } else {
    unitButton.innerHTML = "°C";
  }

  // convert temperatures
  let todayTemp = document.querySelector("#today-temp");
  let todayTempFeels = document.querySelector("#feelsLike");
  let day2Temp = document.querySelector("#day2-temp");
  let day3Temp = document.querySelector("#day3-temp");
  let day4Temp = document.querySelector("#day4-temp");
  let day5Temp = document.querySelector("#day5-temp");

  if (unitButton.innerHTML === "°C") {
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

let unitButton = document.querySelector("#unit-button");
unitButton.addEventListener("click", changeMetric);

////////////////////////////////////////////////////////////////////////////////////////////////

function formatDefaultDate() {
  let weekday = days[date.getDay()];
  let hour = date.getHours();
  let minutes = date.getMinutes();
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

let currentDate = formatDefaultDate();
let dateText = document.querySelector("#date");
dateText.innerHTML = currentDate;

////////////////////////////////////////////////////////////////////////////////////////////////

function generateDate() {
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

function sortWeatherData(bulk) {
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
    return days;
  } else {
    if (apiDate === `${date} 03:00:00`) {
      let day2 = bulk[11];
      let day3 = bulk[19];
      let day4 = bulk[27];
      let day5 = bulk[35];
      let days = [day1, day2, day3, day4, day5];
      return days;
    } else {
      if (apiDate === `${date} 06:00:00`) {
        let day2 = bulk[10];
        let day3 = bulk[18];
        let day4 = bulk[26];
        let day5 = bulk[34];
        let days = [day1, day2, day3, day4, day5];
        return days;
      } else {
        if (apiDate === `${date} 09:00:00`) {
          let day2 = bulk[9];
          let day3 = bulk[17];
          let day4 = bulk[25];
          let day5 = bulk[33];
          let days = [day1, day2, day3, day4, day5];
          return days;
        } else {
          if (apiDate === `${date} 12:00:00`) {
            let day2 = bulk[8];
            let day3 = bulk[16];
            let day4 = bulk[24];
            let day5 = bulk[32];
            let days = [day1, day2, day3, day4, day5];
            return days;
          } else {
            if (apiDate === `${date} 15:00:00`) {
              let day2 = bulk[7];
              let day3 = bulk[15];
              let day4 = bulk[23];
              let day5 = bulk[31];
              let days = [day1, day2, day3, day4, day5];
              return days;
            } else {
              if (apiDate === `${date} 18:00:00`) {
                let day2 = bulk[6];
                let day3 = bulk[14];
                let day4 = bulk[22];
                let day5 = bulk[30];
                let days = [day1, day2, day3, day4, day5];
                return days;
              } else {
                let day2 = bulk[5];
                let day3 = bulk[13];
                let day4 = bulk[21];
                let day5 = bulk[29];
                let days = [day1, day2, day3, day4, day5];
                return days;
              }
            }
          }
        }
      }
    }
  }
}

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
          if (icon === "09d" || icon === "10d") {
            return rainDay;
          } else {
            return rainNight;
          }
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

function getDay2Number(day) {
  if (day <= 5) {
    return +1;
  } else {
    return -6;
  }
}
function getDay3Number(day) {
  if (day <= 4) {
    return +2;
  } else {
    return -5;
  }
}
function getDay4Number(day) {
  if (day <= 3) {
    return +3;
  } else {
    return -4;
  }
}
function getDay5Number(day) {
  if (day <= 2) {
    return +4;
  } else {
    return -3;
  }
}

function weatherInfo(weather) {
  //display precipitation
  let precipitation = Math.round(weather.pop * 100);
  let precipitationElement = document.querySelector("#precipitation");
  precipitationElement.innerHTML = `${precipitation}%`;

  //display humidity
  let humidity = Math.round(weather.main.humidity);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${humidity}%`;

  //display windspeed
  let windspeed = Math.round(weather.wind.speed);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${windspeed}m/s`;

  //display 'feels like'-temperature
  let feelsLike = Math.round(weather.main.feels_like);
  let feelsLikeElement = document.querySelector("#feelsLike");

  if (unitButton.innerHTML === "°C") {
    let tempF = convertToFahrenheit(`${feelsLike}`);
    feelsLikeElement.innerHTML = `${tempF}`;
  } else {
    feelsLikeElement.innerHTML = `${feelsLike}°C`;
  }
}

function styleChangeOnEvent(day) {
  day1eventElement.style.opacity = "0.6";
  day2eventElement.style.opacity = "0.6";
  day3eventElement.style.opacity = "0.6";
  day4eventElement.style.opacity = "0.6";
  day5eventElement.style.opacity = "0.6";

  day1eventElement.style.border = "0.5em double #00000033";
  day2eventElement.style.border = "0.5em double #00000033";
  day3eventElement.style.border = "0.5em double #00000033";
  day4eventElement.style.border = "0.5em double #00000033";
  day5eventElement.style.border = "0.5em double #00000033";

  if (day === 1) {
    day1eventElement.style.opacity = "1";
    day1eventElement.style.border = "0.5em double #000000";
  } else {
    if (day === 2) {
      day2eventElement.style.opacity = "1";
      day2eventElement.style.border = "0.5em double #000000";
    } else {
      if (day === 3) {
        day3eventElement.style.opacity = "1";
        day3eventElement.style.border = "0.5em double #000000";
      } else {
        if (day === 4) {
          day4eventElement.style.opacity = "1";
          day4eventElement.style.border = "0.5em double #000000";
        } else {
          day5eventElement.style.opacity = "1";
          day5eventElement.style.border = "0.5em double #000000";
        }
      }
    }
  }
}

function useWeatherData(response) {
  let forecast = sortWeatherData(response.data.list);

  //display precipitation, humidity, windspeed and 'feels like'-temperature
  styleChangeOnEvent(1);
  weatherInfo(forecast[0]);

  //display city name
  let cityString = response.data.city.name.toUpperCase();
  let country = response.data.city.country;
  let cityText = document.querySelector("#city");
  cityText.innerHTML = `${cityString}, ${country}`;

  //display date
  let weekday = days[date.getDay()];
  let hour = date.getHours();
  let localUtc = date.getTimezoneOffset() / -60;
  let searchUtc = response.data.city.timezone / 3600;
  let utc = searchUtc - localUtc;
  let minutes = date.getMinutes();
  if (hour <= 9 && minutes <= 9) {
    if (utc === 0) {
      dateText.innerHTML = `${weekday} 0${hour}:0${minutes}`;
    } else {
      if (utc < 0) {
        dateText.innerHTML = `${weekday} 0${hour}:0${minutes} (${utc}h)`;
      } else {
        dateText.innerHTML = `${weekday} 0${hour}:0${minutes} (+${utc}h)`;
      }
    }
  } else {
    if (hour <= 9) {
      if (utc === 0) {
        dateText.innerHTML = `${weekday} 0${hour}:${minutes}`;
      } else {
        if (utc < 0) {
          dateText.innerHTML = `${weekday} 0${hour}:${minutes} (${utc}h)`;
        } else {
          dateText.innerHTML = `${weekday} 0${hour}:${minutes} (+${utc}h)`;
        }
      }
    } else {
      if (minutes <= 9) {
        if (utc === 0) {
          dateText.innerHTML = `${weekday} ${hour}:0${minutes}`;
        } else {
          if (utc < 0) {
            dateText.innerHTML = `${weekday} ${hour}:0${minutes} (${utc}h)`;
          } else {
            dateText.innerHTML = `${weekday} ${hour}:0${minutes} (+${utc}h)`;
          }
        }
      } else {
        if (utc === 0) {
          dateText.innerHTML = `${weekday} ${hour}:${minutes}`;
        } else {
          if (utc < 0) {
            dateText.innerHTML = `${weekday} ${hour}:${minutes} (${utc}h)`;
          } else {
            dateText.innerHTML = `${weekday} ${hour}:${minutes} (+${utc}h)`;
          }
        }
      }
    }
  }

  //display weather-images
  let day1Img = getImg(forecast[0]);
  let day1ImgElement = document.querySelector("img");
  day1ImgElement.src = day1Img;

  let day2Img = getImg(forecast[1]);
  let day2ImgElement = document.querySelector("#imgDay2");
  day2ImgElement.src = day2Img;

  let day3Img = getImg(forecast[2]);
  let day3ImgElement = document.querySelector("#imgDay3");
  day3ImgElement.src = day3Img;

  let day4Img = getImg(forecast[3]);
  let day4ImgElement = document.querySelector("#imgDay4");
  day4ImgElement.src = day4Img;

  let day5Img = getImg(forecast[4]);
  let day5ImgElement = document.querySelector("#imgDay5");
  day5ImgElement.src = day5Img;

  //display weather description
  let descriptive = forecast[0].weather[0].description.toUpperCase();
  let descriptiveElement = document.querySelector("#descriptive");
  descriptiveElement.innerHTML = `${descriptive}`;

  //display weekdays
  let day = date.getDay();
  let day2Text = document.querySelector("#day2");
  let day3Text = document.querySelector("#day3");
  let day4Text = document.querySelector("#day4");
  let day5Text = document.querySelector("#day5");
  let day2Number = getDay2Number(day);
  let day3Number = getDay3Number(day);
  let day4Number = getDay4Number(day);
  let day5Number = getDay5Number(day);
  day2Text.innerHTML = days[day + day2Number];
  day3Text.innerHTML = days[day + day3Number];
  day4Text.innerHTML = days[day + day4Number];
  day5Text.innerHTML = days[day + day5Number];

  //display current temperature
  let day1Temp = Math.round(forecast[0].main.temp);
  let day2Temp = Math.round(forecast[1].main.temp);
  let day3Temp = Math.round(forecast[2].main.temp);
  let day4Temp = Math.round(forecast[3].main.temp);
  let day5Temp = Math.round(forecast[4].main.temp);

  let day1TempElement = document.querySelector("#today-temp");
  let day2TempElement = document.querySelector("#day2-temp");
  let day3TempElement = document.querySelector("#day3-temp");
  let day4TempElement = document.querySelector("#day4-temp");
  let day5TempElement = document.querySelector("#day5-temp");

  if (unitButton.innerHTML === "°C") {
    let temp1F = convertToFahrenheit(`${day1Temp}`);
    day1TempElement.innerHTML = `${temp1F}`;
    let temp2F = convertToFahrenheit(`${day2Temp}`);
    day2TempElement.innerHTML = `${temp2F}`;
    let temp3F = convertToFahrenheit(`${day3Temp}`);
    day3TempElement.innerHTML = `${temp3F}`;
    let temp4F = convertToFahrenheit(`${day4Temp}`);
    day4TempElement.innerHTML = `${temp4F}`;
    let temp5F = convertToFahrenheit(`${day5Temp}`);
    day5TempElement.innerHTML = `${temp5F}`;
  } else {
    day1TempElement.innerHTML = `${day1Temp}°C`;
    day2TempElement.innerHTML = `${day2Temp}°C`;
    day3TempElement.innerHTML = `${day3Temp}°C`;
    day4TempElement.innerHTML = `${day4Temp}°C`;
    day5TempElement.innerHTML = `${day5Temp}°C`;
  }

  //event: change info for today and forecast
  function day1Event() {
    styleChangeOnEvent(1);
    weatherInfo(forecast[0]);
  }
  function day2Event() {
    styleChangeOnEvent(2);
    weatherInfo(forecast[1]);
  }
  function day3Event() {
    styleChangeOnEvent(3);
    weatherInfo(forecast[2]);
  }
  function day4Event() {
    styleChangeOnEvent(4);
    weatherInfo(forecast[3]);
  }
  function day5Event() {
    styleChangeOnEvent(5);
    weatherInfo(forecast[4]);
  }

  day1eventElement.style.cursor = "pointer";
  day1eventElement.addEventListener("click", day1Event);

  day2eventElement.style.cursor = "pointer";
  day2eventElement.addEventListener("click", day2Event);

  day3eventElement.style.cursor = "pointer";
  day3eventElement.addEventListener("click", day3Event);

  day4eventElement.style.cursor = "pointer";
  day4eventElement.addEventListener("click", day4Event);

  day5eventElement.style.cursor = "pointer";
  day5eventElement.addEventListener("click", day5Event);
}

function getWeather(longitude, latitude) {
  let apiKey = "6bd7c4bfa85bb276dc93ab103505c1de";
  let queryPara = `lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  let forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?${queryPara}`;
  axios.get(forecastApiUrl).then(useWeatherData);
}

function sendSearchCoord(response) {
  longitude = response.data.coord.lon;
  latitude = response.data.coord.lat;
  getWeather(longitude, latitude);
}

function sendLocalCoord(response) {
  longitude = response.coords.longitude;
  latitude = response.coords.latitude;
  getWeather(longitude, latitude);
}

function getCityCoord(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value.trim().toLowerCase();

  if (city === "") {
    searchInput.value = "";
    alert("Please type the name of a city 🙂");
  } else {
    searchInput.value = "";
    let apiKey = "6bd7c4bfa85bb276dc93ab103505c1de";
    let queryPara = `q=${city}&appid=${apiKey}&units=metric`;
    let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?${queryPara}`;
    axios.get(weatherApiUrl).then(sendSearchCoord);
  }
}

navigator.geolocation.getCurrentPosition(sendLocalCoord);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", getCityCoord);
