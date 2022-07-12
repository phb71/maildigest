const axios = require('axios')

exports.handler = async (event, context) => {
  const { identity, user } = context.clientContext
  const usersUrl = `${identity.url}/admin/users`
  const adminAuthHeader = 'Bearer ' + identity.token
  let response
  try {
    response = await axios.get(usersUrl, {
      headers: {
        Authorization: adminAuthHeader
      }
    }).then((res) => res.data)
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: e.message
      })
    }
  }
  return {
    statusCode: 200,
    body: String(response)
  }
}
