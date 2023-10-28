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
  waveHeight = hours[hoursNow].waveHeight.noaa;
  waveDirection = hours[hoursNow].waveDirection.noaa;
  wavePeriod = hours[hoursNow].wavePeriod.noaa;
  windDirection = hours[hoursNow].windDirection.noaa;
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
  windDirectionElement.textContent = `Wind Direction = ${windDirection} degrees`;
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
