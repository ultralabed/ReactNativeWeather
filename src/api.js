const rootUrl = `api.openweathermap.org/data/2.5/weather?APPID=b12830e84c9325c4cf7c59dfea2627ab`; 

const kelvinToC = function(kelvin) {
  return Math.round(kelvin - 273.15) + '˚C';
}
module.exports = function(latitude, longitude) {
  let url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

  fetch(url).then((response) => {
    return response.json();
  }).then((json) => {
    return {
      city: json.city,
      temperature: kelvinToC(json.main.temp),
      description: json.weather[0].description
    };
  });
}