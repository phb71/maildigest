console.log('Netlify function - utility.js')

exports.handler = async (event) => {
  let utilityValue

  /* Checking if the query string parameter name is equal to get-temperature. If it is, it will require
  the get-temperature function from the utilities folder and then await the get-temperature function
  with the query string parameters lat and lon. */
  if (event.queryStringParameters.name === 'get-temperature') {
    const getTemperature = require('../utilities/get-temperature')
    utilityValue = await getTemperature(event.queryStringParameters.lat, event.queryStringParameters.lon)
  }
  if (event.queryStringParameters.name === 'send-email') {
    const sendEmail = require('../utilities/send-email')
    utilityValue = await sendEmail(event.queryStringParameters.email, event.queryStringParameters.firstname, event.queryStringParameters.city, event.queryStringParameters.lat, event.queryStringParameters.lon)
  }
  return {
    statusCode: 200,
    body: String(utilityValue)
  }
}
