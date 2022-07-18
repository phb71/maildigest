const postmark = require('postmark')
const getTemperature = require('../utilities/get-temperature')
const getDigestcontent = require('./get-digestcontent')
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
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const d = new Date()
/* This is creating a string that will be used as the subject line of the email. */
const dayName = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear()

module.exports = async function (email, firstName, city, lat, lon) {
  console.log('Utility - send-email.js')

  /* Calling the getTemperature function and passing in the lat and lon values. */
  const temperature = await getTemperature(lat, lon)

  /* This is calling the getDigestcontent function and passing in the city and temperature values. */
  const getDigest = await getDigestcontent(firstName, city, temperature)

  /* This is sending an email to the user with the weather information. */
  await emailClient.sendEmail({
    From: 'info@urban-hideout.com',
    To: email,
    Subject: String.fromCodePoint(0x1F4EC) + ' Digest for ' + dayName,
    HtmlBody: getDigest
  })
  return {
    statusCode: 200
  }
}
