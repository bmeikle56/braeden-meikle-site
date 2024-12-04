
async function getUnread() {
  const baseURL = 'http://localhost:3000/getUnread'
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
  const baseURL = 'http://localhost:3000/read'
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