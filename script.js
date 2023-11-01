const lat = -8.679651;
const lng = 115.064301;
const params = 'waveHeight,waveDirection,wavePeriod,windDirection,windSpeed,waterTemperature';

let hours;
let waveHeight;
let waveDirection;
let wavePeriod;
let windDirection;
let windSpeed;
let waterTemperature;

var currentDate = new Date();
var hoursNow = currentDate.getHours();

var surfDataContainer = document.querySelector("#surfDataContainer");


fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
  headers: {
    'Authorization': '635633a4-7464-11ee-86b2-0242ac130002-63563462-7464-11ee-86b2-0242ac130002'
  }
}).then((response) => response.json()).then((jsonData) => {
  // Accessing specific data from the JSON response
  hours = jsonData.hours;

  // Assigning values to variables
  waveHeight = hours[hoursNow].waveHeight.icon;
  waveDirection = hours[hoursNow].waveDirection.noaa;
  wavePeriod = hours[hoursNow].wavePeriod.noaa;
  windDirection = hours[hoursNow].windDirection.icon;
  windSpeed = hours[hoursNow].windSpeed.noaa;
  waterTemperature = hours[hoursNow].waterTemperature.noaa;

  // Creating h1 elements and appending them to the body
  const waveHeightElement = document.createElement('h4');
  waveHeightInFeet = waveHeight * 3.28084;
  waveHeightElement.textContent = `🌊 Wave Height = ${waveHeight} meters / ${waveHeightInFeet.toFixed(1)} feet`;
  surfDataContainer.appendChild(waveHeightElement);

  const waveDirectionElement = document.createElement('h4');

  let waveDegree = waveDirection; // Example wind degree value
  let waveDirectionLetter;

  if (waveDegree >= 0 && waveDegree < 11.25 || waveDegree >= 348.75 && waveDegree <= 360) {
    waveDirectionLetter = "N ↓";
    } else if (waveDegree >= 11.25 && waveDegree < 33.75) {
        waveDirectionLetter = "N-NE ↓";
    } else if (waveDegree >= 33.75 && waveDegree < 56.25) {
        waveDirectionLetter = "NE ↙";
    } else if (waveDegree >= 56.25 && waveDegree < 78.75) {
        waveDirectionLetter = "E-NE ↙";
    } else if (waveDegree >= 78.75 && waveDegree < 101.25) {
        waveDirectionLetter = "E ←";
    } else if (waveDegree >= 101.25 && waveDegree < 123.75) {
        waveDirectionLetter = "E-SE ←";
    } else if (waveDegree >= 123.75 && waveDegree < 146.25) {
        waveDirectionLetter = "SE ↖";
    } else if (waveDegree >= 146.25 && waveDegree < 168.75) {
        waveDirectionLetter = "S-SE ↖";
    } else if (waveDegree >= 168.75 && waveDegree < 191.25) {
        waveDirectionLetter = "S ↑";
    } else if (waveDegree >= 191.25 && waveDegree < 213.75) {
        waveDirectionLetter = "S-SW ↑";
    } else if (waveDegree >= 213.75 && waveDegree < 236.25) {
        waveDirectionLetter = "SW ↗";
    } else if (waveDegree >= 236.25 && waveDegree < 258.75) {
        waveDirectionLetter = "W-SW ↗";
    } else if (waveDegree >= 258.75 && waveDegree < 281.25) {
        waveDirectionLetter = "W →";
    } else if (waveDegree >= 281.25 && waveDegree < 303.75) {
        waveDirectionLetter = "W-NW →";
    } else if (waveDegree >= 303.75 && waveDegree < 326.25) {
        waveDirectionLetter = "NW ↘";
    } else if (waveDegree >= 326.25 && waveDegree < 348.75) {
        waveDirectionLetter = "N-NW ↘";
    } else {
        waveDirectionLetter = "Invalid Degree"; // Handle invalid input
    }

  waveDirectionElement.textContent = `🌊 Wave Direction = ${waveDirectionLetter} ${waveDegree}°`;
  surfDataContainer.appendChild(waveDirectionElement);

  const wavePeriodElement = document.createElement('h4');
  wavePeriodElement.textContent = `🌊 Wave Period = ${wavePeriod.toFixed(1)} seconds`;
  surfDataContainer.appendChild(wavePeriodElement);

  const windDirectionElement = document.createElement('h4');
  
  let windDegree = windDirection; // Example wind degree value
  let windDirectionLetter;

  if (windDegree >= 0 && windDegree < 11.25 || windDegree >= 348.75 && windDegree <= 360) {
      windDirectionLetter = "N ↓";
  } else if (windDegree >= 11.25 && windDegree < 33.75) {
      windDirectionLetter = "N-NE ↓";
  } else if (windDegree >= 33.75 && windDegree < 56.25) {
      windDirectionLetter = "NE ↙";
  } else if (windDegree >= 56.25 && windDegree < 78.75) {
      windDirectionLetter = "E-NE ↙";
  } else if (windDegree >= 78.75 && windDegree < 101.25) {
      windDirectionLetter = "E ←";
  } else if (windDegree >= 101.25 && windDegree < 123.75) {
      windDirectionLetter = "E-SE ←";
  } else if (windDegree >= 123.75 && windDegree < 146.25) {
      windDirectionLetter = "SE ↖";
  } else if (windDegree >= 146.25 && windDegree < 168.75) {
      windDirectionLetter = "S-SE ↖";
  } else if (windDegree >= 168.75 && windDegree < 191.25) {
      windDirectionLetter = "S ↑";
  } else if (windDegree >= 191.25 && windDegree < 213.75) {
      windDirectionLetter = "S-SW ↑";
  } else if (windDegree >= 213.75 && windDegree < 236.25) {
      windDirectionLetter = "SW ↗";
  } else if (windDegree >= 236.25 && windDegree < 258.75) {
      windDirectionLetter = "W-SW ↗";
  } else if (windDegree >= 258.75 && windDegree < 281.25) {
      windDirectionLetter = "W →";
  } else if (windDegree >= 281.25 && windDegree < 303.75) {
      windDirectionLetter = "W-NW →";
  } else if (windDegree >= 303.75 && windDegree < 326.25) {
      windDirectionLetter = "NW ↘";
  } else if (windDegree >= 326.25 && windDegree < 348.75) {
      windDirectionLetter = "N-NW ↘";
  } else {
      windDirectionLetter = "Invalid Degree"; // Handle invalid input
  }

  windDirectionElement.textContent = `💨 Wind Direction = ${windDirectionLetter} ${windDegree}°`;
  surfDataContainer.appendChild(windDirectionElement);

  const windSpeedElement = document.createElement('h4');
  windSpeedKnots = windSpeed * 1.94384;
  windSpeedElement.textContent = `💨 Wind Speed = ${windSpeedKnots.toFixed(1)} knots`;
  surfDataContainer.appendChild(windSpeedElement);

  const waterTemperatureElement = document.createElement('h4');
  let waterTemperatureInFahrenheit = (waterTemperature * 9/5) + 32;
  waterTemperatureElement.textContent = `💧🌡️ Water Temperature = ${waterTemperature.toFixed(1)} °C / ${waterTemperatureInFahrenheit.toFixed(1)} °F`;
  surfDataContainer.appendChild(waterTemperatureElement);
}).catch((error) => {
  console.error('Error fetching data:', error);
});
