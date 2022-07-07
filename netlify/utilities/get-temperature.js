const axios = require('axios')
const openweatherKey = process.env.OPENWEATHER_API_TOKEN

module.exports = async function (lat, lon) {
  const weatherTemp = await axios.get(
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
