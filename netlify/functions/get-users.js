const axios = require('axios')

exports.handler = async (event, context) => {
  // eslint-disable-next-line no-unused-vars
  const { identity, user } = context.clientContext
  const usersUrl = `${identity.url}/admin/users`
  const adminAuthHeader = 'Bearer ' + identity.token
  let response, userEmail
  try {
    /* Making a GET request to the Netlify Identity service to get the list of users. */
    response = await axios.get(usersUrl, {
      headers: {
        Authorization: adminAuthHeader
      }
    }).then((res) => res.data)
    /* Get the email address of each user returned. */
    userEmail = response.users.map(key => ({ email: key.email, metadata: key.user_metadata }))
    userEmail = JSON.stringify(userEmail)
    console.log('Users: ' + userEmail)
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: e.message
      })
    }
  }
  /* Returning the userEmail variable */
  return {
    statusCode: 200,
    body: userEmail
  }
}