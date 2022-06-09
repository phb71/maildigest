const axios = require('axios')
const openweatherKey = process.env.OPENWEATHER_API_TOKEN

exports.handler = async function (event, context) {
  const lat = event.queryStringParameters.lat
  const lon = event.queryStringParameters.lon

  const weatherTemp = await axios.get(
    'https://api.openweathermap.org/data/2.5/weather?lat=' +
      lat +
      '&lon=' +
      lon +
      '&appid=' +
      openweatherKey +
      '&units=metric'
  )

  return {
    statusCode: 200,
    body: String(weatherTemp.data.main.temp)
  }
}
