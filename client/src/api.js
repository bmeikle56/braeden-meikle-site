
const user = 'braeden'
const BASE_URL = `${process.env.REACT_APP_SERVER_BASE_URL}`

const body = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    } 
}

let newBytesRead

/*****     Public APIs     *****/

/*   Get list of byte read/unread statuses   */
function getUnread(setData, setLoading, now) {

  /*   Server is too slow, so we mock the HTTP request   */
  setTimeout(() => {
    setData({'unreadList': [1,1,1,1,1,1,1]})
    setLoading(false)
  }, 2000)

  /*
  const service = '/getUnread'
  fetch(`${BASE_URL}${service}?user=${user}`, body).then(res => res.json()).then(d => { 
    newBytesRead = d.unreadList

    // We want the screen to animate for minimum 2 seconds
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
  */
}

/*   Mark a byte newly read  */
function markRead(index) {
  newBytesRead[index] = 0
  console.log(newBytesRead)
}

/*****                     *****/

/*  Before the user leaves, dump and mark all bytes read   */
window.addEventListener('beforeunload', _ => {
  console.log(newBytesRead)
  const service = '/read'
  fetch(`${BASE_URL}${service}?read=${user}`, body)
})

export { getUnread, markRead }