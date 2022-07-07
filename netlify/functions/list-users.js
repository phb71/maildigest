const axios = require('axios')

exports.handler = async (event, context) => {
  const { identity, user } = context.clientContext
  const usersUrl = `${identity.url}/admin/users`
  const adminAuthHeader = 'Bearer ' + identity.token
  console.log('event', JSON.stringify(event))
  console.log('context', JSON.stringify(context))
  let data
  try {
    data = await axios.get(usersUrl, {
      headers: {
        Authorization: adminAuthHeader
      }
    })
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
    body: JSON.stringify(data)
  }
}
