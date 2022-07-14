console.log('Utility - get-users.js')

const axios = require('axios')

module.exports = async function (context) {
  const { identity } = context.clientContext
  const usersUrl = `${identity.url}/admin/users`
  const adminAuthHeader = `Bearer ${identity.token}`
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
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: e.message
      })
    }
  }
  return userEmail
}
