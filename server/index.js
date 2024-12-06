
import express, { json } from 'express'
const server = express()
// const https = require('https')
import cors from 'cors'
import db from './db.js'
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

/*****     Public APIs     *****/

/*
 getUnread

 @response int array
  - the read/unread statuses of bytes
  - each element is either 1 (unread) or 0 (read)

 @query user 
  - string

 */

server.get('/getUnread', (req, res) => {
  res.json(db[req.query.user])
})

/*
 read

 @response mark all newly read bytes as read

 @query user 
  - string 
 @query read 
  - int array of read statuses

 */



server.post('/read', async (req, res) => {
  const unreadList = req.query.read
  // const query = db.query('SELECT * from users')
  await db.query('SELECT * from users')
  res.status(STATUS_CODE_NO_CONTENT).send()
})

/*****                     *****/