const key = `b12830e84c9325c4cf7c59dfea2627ab`
const rootUrl = `http://api.openweathermap.org/data/2.5/weather?APPID=${key}`; 

const kelvinToC = function(kelvin) {
  return Math.round(kelvin - 273.15) + '˚C';
}
module.exports = function(latitude, longitude) {
  let url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
  console.log(url);
  return fetch(url).then((response) => {
    return response.json();
  }).then((json) => {
    return {
      city: json.name,
      temperature: kelvinToC(json.main.temp),
      description: json.weather[0].description
    };
  });
}