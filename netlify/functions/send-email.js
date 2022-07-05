const axios = require('axios')

const postmarkKey = process.env.POSTMARK_API_TOKEN

const postmark = require('postmark')
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

// Using Async
exports.handler = async function (event, context) {
  const city = event.queryStringParameters.city

  const temperature = await axios.get(
    'http://localhost:8888/.netlify/functions/get-temperature?lat=' + event.queryStringParameters.lat + '&lon=' + event.queryStringParameters.lon
  )

  const emailSend = await emailClient.sendEmail({
    From: 'info@urban-hideout.com',
    To: 'paul@urban-hideout.com',
    Subject: dayName + ' digest',
    HtmlBody: 'Weather for ' + city + ' is ' + String(temperature.data)
  })

  console.log('Response:')
  console.log(emailSend.To)
  console.log(emailSend.SubmittedAt)
  console.log(emailSend.Message)
  console.log(emailSend.MessageID)
  console.log(emailSend.ErrorCode)
  return {
    statusCode: 200
  }
}
