import GoTrue from 'gotrue-js'

console.log('Load GoTrue')

const auth = new GoTrue({
  APIUrl:
  'https://imaginative-sfogliatella-76a713.netlify.app/.netlify/identity',
  audience: '',
  setCookie: true
})

export default { auth }
