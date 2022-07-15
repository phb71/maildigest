const postmark = require('postmark')
const getTemperature = require('../utilities/get-temperature')
const postmarkKey = process.env.POSTMARK_API_TOKEN
const emailClient = new postmark.ServerClient(postmarkKey)
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]
const d = new Date()
const dayName = days[d.getDay()]

module.exports = async function (email, city, lat, lon) {
  console.log('Utility - send-email.js')

  /* Calling the getTemperature function and passing in the lat and lon values. */
  const temperature = await getTemperature(lat, lon)

  /* This is sending an email to the user with the weather information. */
  await emailClient.sendEmail({
    From: 'info@urban-hideout.com',
    To: email,
    Subject: dayName + ' digest',
    HtmlBody: 'Weather for ' + city + ' is ' + String(temperature)
  })

  return {
    statusCode: 200
  }
}
