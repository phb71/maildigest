import GoTrue from 'gotrue-js'

const auth = new GoTrue({
  APIUrl:
  'https://imaginative-sfogliatella-76a713.netlify.app/.netlify/identity',
  audience: '',
  setCookie: true
})

export default { auth }
