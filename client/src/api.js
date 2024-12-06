
const BASE_URL = 'http://localhost:8000' //`${process.env.SERVER_BASE_URL}`

async function getUnread() {
  const baseURL = `${BASE_URL}/getUnread`
  const user = 'user2'
  const url =  `${baseURL}?user=${user}`

  const body = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      } 
  }

  fetch(url, body).then(res => res.json()).then(d => { return d })
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