// This will need to be a background function later (paid plan)
const axios = require('axios')

// TODO
// 1 Get the list of users and their meta data ✅
// 2 Populate the email content ???
// 3 Call the send-email function for each ✔️
// 4 Run it as a cron ✔️

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

  /* Loop through the users array and adds the email and city to the result variable. */
  users.forEach(element => {
    let response
    result += element.email + (element.metadata.city ? ', living in ' + element.metadata.city.name + '\n' : '\n')
    // Send the email
    try {
      if (element.metadata.city) {
        console.log('Sending email to ' + element.email + ' in ' + element.metadata.city.name)
        response = axios.post(
          'https://imaginative-sfogliatella-76a713.netlify.app/.netlify/functions/send-email?city=' +
            element.metadata.city.name +
            '&lat=' +
            element.metadata.city.lat +
            '&lon=' +
            element.metadata.city.lon +
            '&email=' +
            element.email
        )
      } else {
        console.log('Sending email to ' + element.email + ' when no metadata found')
        response = axios.post(
          'https://imaginative-sfogliatella-76a713.netlify.app/.netlify/functions/send-email?city=none&lat=1&lon=1&email=' +
            element.email
        )
      }
      console.log('Email sent: ' + JSON.stringify(response))
    } catch (error) {
      console.log('Error: ' + error)
    }
  })

  return {
    statusCode: 200,
    body: result
  }
}
