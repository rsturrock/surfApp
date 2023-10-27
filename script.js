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

fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
  headers: {
    'Authorization': '635633a4-7464-11ee-86b2-0242ac130002-63563462-7464-11ee-86b2-0242ac130002'
  }
}).then((response) => response.json()).then((jsonData) => {
  // Accessing specific data from the JSON response
  hours = jsonData.hours;

  // Assigning values to variables
  waveHeight = hours[0].waveHeight.noaa;
  waveDirection = hours[0].waveDirection.noaa;
  wavePeriod = hours[0].wavePeriod.noaa;
  windDirection = hours[0].windDirection.noaa;
  windSpeed = hours[0].windSpeed.noaa;
  waterTemperature = hours[0].waterTemperature.noaa;

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
