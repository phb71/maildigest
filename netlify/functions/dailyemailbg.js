// This will need to be a background function later (paid plan)
const axios = require('axios')

// TODO
// 1 Get the list of users and their meta data
// 2 Call the send-email function for each
// 4 Run it as a cron

exports.handler = function (event, context) {
  // Get the list of users and their meta data
  const users = axios.get(
    'https://imaginative-sfogliatella-76a713.netlify.app/.netlify/functions/list-users'
  )
  console.log(users)

  // Send the email
//   try {
//     const response = axios.post(
//       'http://localhost:8888/.netlify/functions/send-email?city=' +
//           'paris' +
//           '&lat=' +
//           '10' +
//           '&lon=' +
//           '20' +
//           '&email=' +
//           'paul@urban-hideout.com'
//     )
//     console.log(response)
//   } catch (error) {
//     console.log(error)
//   }
}
