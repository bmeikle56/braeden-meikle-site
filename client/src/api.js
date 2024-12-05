
const SERVER = ''
const SCHEME = 'http://'
const PORT = 5000

const BASE_URL = `${SCHEME}${SERVER}:${PORT}`

async function getUnread() {
  const baseURL = `${BASE_URL}/getUnread`
  const user = 'user2'
  const url = `${baseURL}?user=${user}`

  const body = {
      method: 'GET',
      headers: {
        'Content-Type': 'text/json'
      } 
  }

  console.log('constructed req')

  try {
    const response = await fetch(url, body)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    console.log('res received')
    console.log(response.json)
    return response
  } catch (error) {
    console.log(error.message)
  }
}

async function markRead(index) {
  const baseURL = `${BASE_URL}/read`
  const user = 'user2'
  const url = `${baseURL}?user=${user}?read=${index}`

  const body = {
      method: 'POST',
      headers: {
        'Content-Type': 'text/json'
      } 
  }

  console.log('constructed req')

  try {
    const response = await fetch(url, body)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    console.log('res received')
    console.log(response.json)
    return response
  } catch (error) {
    console.log(error.message)
  }
}

export { getUnread, markRead }