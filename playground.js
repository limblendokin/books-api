function requestForecast() {
  return ['rain', 'temprature 10c'];
}
function isSkyBlue() {
  let weatherInfo = requestForecast();
  for (let i = 0; i < weatherInfo.length; i++) {
    if (weatherInfo[i] == 'blue sky') {
      return true;
    }
  }
  return false;
}

let result = isSkyBlue();
console.log(result);
