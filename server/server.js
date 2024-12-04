
import express, { json } from 'express'
const server = express()
// const https = require('https')
server.use(json())
server.set('trust proxy', true)

/* Local hosting only */
const PORT = 8000

/* Production */
// const PORT = process.env.PORT || 3000 // we default to 3000 if not specified

const STATUS_CODE_NO_CONTENT = 204

/*   Send request from iPhone: http://[mac-ip-addr]:8000/getUnread?user=user2   */

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})

/*   0 = read   |   1 = unread   */

let db = {
  'user2': {
    articles: [
      0,
      1,
      0
    ]
  },
  'user7': {
    articles: [
      1,
      1,
      1
    ]
  }
}

server.get('/getUnread', (req, res) => {
  const user = req.query.user // ?user='user2'
  console.log(req.ip)
  res.send(db[user])
})

server.post('/read', (req, res) => {
  const user = req.query.user // ?user='user2'
  const index = req.query.read // ?read=1 --> mark read article at index 1
  db[user].articles[index] = 0
  res.status(STATUS_CODE_NO_CONTENT).send()
})