const rootUrl = `api.openweathermap.org/data/2.5/weather?APPID=b12830e84c9325c4cf7c59dfea2627ab`; 

module.exports = function(latitude, longitude) {
  let url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
}