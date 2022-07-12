const axios = require('axios')

// TODO
// 1 Get the list of users
// 2 Call the send-email function for each
// 3 Get the meta data for each user to populate the email
// 4 Run it as a cron

exports.handler = function (event, context) {
  try {
    const response = axios.post(
      'http://localhost:8888/.netlify/functions/send-email?city=' +
          'paris' +
          '&lat=' +
          '10' +
          '&lon=' +
          '20' +
          '&email=' +
          'paul@urban-hideout.com'
    )
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
