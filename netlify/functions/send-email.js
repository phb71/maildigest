// const postmark = require('postmark')
// const getTemperature = require('../utilities/get-temperature')
// const postmarkKey = process.env.POSTMARK_API_TOKEN
// const emailClient = new postmark.ServerClient(postmarkKey)

// const days = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday'
// ]
// const d = new Date()
// const dayName = days[d.getDay()]

// // Using Async
// exports.handler = async function (event) {
//   const city = event.queryStringParameters.city

//   const temperature = await getTemperature(event.queryStringParameters.lat, event.queryStringParameters.lon)

//   const emailSend = await emailClient.sendEmail({
//     From: 'info@urban-hideout.com',
//     To: event.queryStringParameters.email,
//     Subject: dayName + ' digest',
//     HtmlBody: 'Weather for ' + city + ' is ' + String(temperature)
//   })

//   console.log('Response:')
//   console.log(emailSend.To)
//   console.log(emailSend.SubmittedAt)
//   console.log(emailSend.Message)
//   console.log(emailSend.MessageID)
//   console.log(emailSend.ErrorCode)
//   return {
//     statusCode: 200
//   }
// }
