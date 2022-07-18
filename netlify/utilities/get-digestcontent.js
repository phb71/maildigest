module.exports = async function (firstName, city, temperature) {
  console.log('Utility - get-digestcontent.js')

  firstName = firstName || 'there'

  const content =
  '<p>Hi ' + firstName + '</p>' +
  '<p>The weather for <b>' + city + '</b> is <b>' + temperature + '°C</b> right now.</p>' +
  '<p>Have a great day!</p>'

  return content
}
