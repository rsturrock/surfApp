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
  const waveHeightElement = document.createElement('h1');
  waveHeightElement.textContent = `Wave Height = ${waveHeight} meters`;
  document.body.appendChild(waveHeightElement);

  const waveDirectionElement = document.createElement('h1');
  waveDirectionElement.textContent = `Wave Direction = ${waveDirection} degrees`;
  document.body.appendChild(waveDirectionElement);

  const wavePeriodElement = document.createElement('h1');
  wavePeriodElement.textContent = `Wave Period = ${wavePeriod} seconds`;
  document.body.appendChild(wavePeriodElement);

  const windDirectionElement = document.createElement('h1');
  
  let windDegree = windDirection; // Example wind degree value
  let windDirectionLetter;

  if (windDegree >= 0 && windDegree < 11.25 || windDegree >= 348.75 && windDegree <= 360) {
      windDirectionLetter = "N";
  } else if (windDegree >= 11.25 && windDegree < 33.75) {
      windDirectionLetter = "N-NE";
  } else if (windDegree >= 33.75 && windDegree < 56.25) {
      windDirectionLetter = "NE";
  } else if (windDegree >= 56.25 && windDegree < 78.75) {
      windDirectionLetter = "E-NE";
  } else if (windDegree >= 78.75 && windDegree < 101.25) {
      windDirectionLetter = "E";
  } else if (windDegree >= 101.25 && windDegree < 123.75) {
      windDirectionLetter = "E-SE";
  } else if (windDegree >= 123.75 && windDegree < 146.25) {
      windDirectionLetter = "SE";
  } else if (windDegree >= 146.25 && windDegree < 168.75) {
      windDirectionLetter = "S-SE";
  } else if (windDegree >= 168.75 && windDegree < 191.25) {
      windDirectionLetter = "S";
  } else if (windDegree >= 191.25 && windDegree < 213.75) {
      windDirectionLetter = "S-SW";
  } else if (windDegree >= 213.75 && windDegree < 236.25) {
      windDirectionLetter = "SW";
  } else if (windDegree >= 236.25 && windDegree < 258.75) {
      windDirectionLetter = "W-SW";
  } else if (windDegree >= 258.75 && windDegree < 281.25) {
      windDirectionLetter = "W";
  } else if (windDegree >= 281.25 && windDegree < 303.75) {
      windDirectionLetter = "W-NW";
  } else if (windDegree >= 303.75 && windDegree < 326.25) {
      windDirectionLetter = "NW";
  } else if (windDegree >= 326.25 && windDegree < 348.75) {
      windDirectionLetter = "N-NW";
  } else {
      windDirectionLetter = "Invalid Degree"; // Handle invalid input
  }

  console.log("Wind direction is: " + windDirection);
  windDirectionElement.textContent = `Wind Direction = ${windDirectionLetter}`;
  
  console.log("Wind direction is: " + windDirection);
  document.body.appendChild(windDirectionElement);

  const windSpeedElement = document.createElement('h1');
  windSpeedElement.textContent = `Wind Speed = ${windSpeed} meters per second`;
  document.body.appendChild(windSpeedElement);

  const waterTemperatureElement = document.createElement('h1');
  waterTemperatureElement.textContent = `Water Temperature = ${waterTemperature} degrees celsius`;
  document.body.appendChild(waterTemperatureElement);
}).catch((error) => {
  console.error('Error fetching data:', error);
});
