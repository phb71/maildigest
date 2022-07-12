// This will need to be a background function later (paid plan)
const axios = require('axios')

// TODO
// 1 Get the list of users and their meta data
// 2 Call the send-email function for each
// 4 Run it as a cron

exports.handler = async function (event, context) {
  let users
  let result = ''

  // Get the list of users and their meta data
  try {
    users = await axios.get(
      'https://imaginative-sfogliatella-76a713.netlify.app/.netlify/functions/get-users'
    ).then((res) => res.data)
    console.log('Users: ' + JSON.stringify(users))
    console.log('users[0].email: ' + users[0].email)
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: e.message
      })
    }
  }

  users.forEach(element => {
    result += element.email + (element.metadata.city ? ', living in ' + element.metadata.city.name + '\n' : '\n')
  })

  return {
    statusCode: 200,
    body: result
  }
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
