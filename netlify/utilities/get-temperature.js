const axios = require('axios')
const openweatherKey = process.env.OPENWEATHER_API_TOKEN
let weatherTemp

module.exports = async function (lat, lon) {
  console.log('Utility - get-temperature.js')

  /* Making a call to the OpenWeather API to get the temperature. */
  weatherTemp = await axios.get(
    'https://api.openweathermap.org/data/2.5/weather?lat=' +
          lat +
          '&lon=' +
          lon +
          '&appid=' +
          openweatherKey +
          '&units=metric'
  )
  return weatherTemp.data.main.temp
}
