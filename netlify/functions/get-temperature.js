const getTemperature = require('../utilities/get-temperature')

exports.handler = async function (event) {
  const lat = event.queryStringParameters.lat
  const lon = event.queryStringParameters.lon

  const temperature = await getTemperature(lat, lon)

  return {
    statusCode: 200,
    body: String(temperature)
  }
}
