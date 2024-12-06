
import express, { json } from 'express'
const server = express()
// const https = require('https')
import cors from 'cors'
//server.use(json())
server.set('trust proxy', true)

const STATUS_CODE_NO_CONTENT = 204

const corsOptions = {
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cache-Control']
};

server.use(cors(corsOptions));

server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
})

/*   0 = read   |   1 = unread   */

let db = {
  'user2': {
    unreadList: [0,1,0,0,0,1,1]
  },
  'user7': {
    unreadList: [1,1,1,1,1,1,1]
  }
}

server.get('/getUnread', (req, res) => {
  const user = req.query.user // ?user='user2'
  // console.log(req.ip)
  res.json(db[user])
})

server.post('/read', (req, res) => {
  const user = req.query.user // ?user='user2'
  const index = req.query.read // ?read=1 --> mark read article at index 1
  db[user].articles[index] = 0
  res.status(STATUS_CODE_NO_CONTENT).send()
})