
const user = Math.floor(Math.random()*2) === 1 ? 'user7' : 'user2'
const BASE_URL =  `https://braeden-meikle-site-backend.onrender.com` //`${process.env.REACT_APP_SERVER_BASE_URL}${service}?user=${user}`

const body = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    } 
}

function getUnread(setData, setLoading, now) {
  const service = '/getUnread'
  fetch(`${BASE_URL}${service}?user=${user}`, body).then(res => res.json()).then(d => { 
    /* We want the screen to animate for minimum 2 seconds */
    if (Date.now() < now + 2000) {
      setTimeout(() => {
        setData(d)
        setLoading(false)
      }, 2000 - (Date.now() - now))
    } else {
      setData(d)
      setLoading(false)
    }
  })
}

// function read(setData, setLoading) {
//   const service = '/read'
//   fetch(`${BASE_URL}${service}?user=${user}`, body).then(res => res.json()).then(d => { 
//     setData(d)
//     setLoading(false)
//   })
// }








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