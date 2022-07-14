// Later, this will need to be a netlify background function (paid plan)

const getUsers = require('../utilities/get-users')
const sendEmail = require('../utilities/send-email')

// TODO
// 1 Get the list of users and their meta data ✅
// 2 Populate the email content ???
// 3 Call the send-email function for each
// 4 Run it as a cron
// 5 Turn these 2 functions into utilities

exports.handler = async function (event, context) {
  let result
  const users = await getUsers(context)
  console.log(users)
  /* Loop through the users array and adds the email and city to the result variable. */
  for (const element of users) {
    let response
    result += element.email + (element.metadata.city ? ', living in ' + element.metadata.city.name + '\n' : '\n')
    console.log(result)
    console.log(element.metadata.city)
    try {
      if (element.metadata.city) {
        console.log('Sending email to ' + element.email + ' in ' + element.metadata.city.name + element.metadata.city.lat + element.metadata.city.lon)
        response = await sendEmail(element.email, element.metadata.city.name, element.metadata.city.lat, element.metadata.city.lon)
      } else {
        console.log('Sending email to ' + element.email + ' when no metadata found')
        response = await sendEmail(element.email, 'none', '1', '1')
      }
      console.log('Email sent: ' + JSON.stringify(response))
    } catch (error) {
      console.log('Error: ' + error)
    }
  }

  return {
    statusCode: 200,
    body: result
  }
}
