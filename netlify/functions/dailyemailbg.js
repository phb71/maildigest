// Later, this will need to be a netlify background function (paid plan)

console.log('Netlify function - Dailyemailbg.js')

const getUsers = require('../utilities/get-users')
const sendEmail = require('../utilities/send-email')

exports.handler = async function (event, context) {
  const users = await getUsers(context)
  /* Loop through the users array and adds the email address and city to the result variable. */
  for (const element of users) {
    // Send the email
    try {
      if (element.metadata.city) {
        await sendEmail(element.email, element.metadata.full_name, element.metadata.city.name, element.metadata.city.lat, element.metadata.city.lon)
      } else {
        await sendEmail(element.email, element.metadata.full_name, 'none', '1', '1')
      }
    } catch (error) {
      console.log('Error: ' + error)
    }
  }

  return {
    statusCode: 200,
    body: users
  }
}
