// This will need to be a background function later (paid plan)

const axios = require('axios')
const getUsers = require('../utilities/get-users')

// TODO
// 1 Get the list of users and their meta data ✅
// 2 Populate the email content ???
// 3 Call the send-email function for each
// 4 Run it as a cron
// 5 Turn these 2 functions into utilities

exports.handler = async function (event, context) {
  let result = ''
  const users = await getUsers(context)
  console.log(users)
  /* Loop through the users array and adds the email and city to the result variable. */
  for (const element of users) {
    let response
    console.log(element.email)
    console.log(element.metadata.city.name)
    // result += element.email + (element.metadata.city ? ', living in ' + element.metadata.city.name + '\n' : '\n')
    // Send the email
    // try {
    //   if (element.metadata.city) {
    //     console.log('Sending email to ' + element.email + ' in ' + element.metadata.city.name)
    //     response = await axios.post(
    //       'https://imaginative-sfogliatella-76a713.netlify.app/.netlify/functions/send-email?city=' +
    //         element.metadata.city.name +
    //         '&lat=' +
    //         element.metadata.city.lat +
    //         '&lon=' +
    //         element.metadata.city.lon +
    //         '&email=' +
    //         element.email
    //     )
    //   } else {
    //     console.log('Sending email to ' + element.email + ' when no metadata found')
    //     response = await axios.post(
    //       'https://imaginative-sfogliatella-76a713.netlify.app/.netlify/functions/send-email?city=none&lat=1&lon=1&email=' +
    //         element.email
    //     )
    //   }
    //   console.log('Email sent: ' + JSON.stringify(response))
    // } catch (error) {
    //   console.log('Error: ' + error)
    // }
  }
console.log('the end')
  return {
    statusCode: 200,
    body: result
  }
}
