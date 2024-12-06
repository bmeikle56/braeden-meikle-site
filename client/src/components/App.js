
import '../styles/global.css'
import React, { useState, useEffect } from 'react'
import { 
  pages,
} from '../data/consts.js'
import { Fun } from './Fun.js'
import { AnimatedSidebar } from './Sidebar.js'
import { Footer } from './Footer.js'
import { Portfolio } from './Portfolio.js'
import { Articles } from './Articles.js'
import { VDivider } from './Vdiv.js'
import { getUnread } from '../api.js' 

function Body() {
  /* Data fetched from backend that will be passed to component before render */
  const [data, setData] = useState(null)

  /* We init our app to loading state */
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const baseURL = `${process.env.REACT_APP_SERVER_BASE_URL}/getUnread`
    const user = Math.floor(Math.random()*2) === 1 ? 'user7' : 'user2'
    const service = '/getUnread'
    const url =  `${baseURL}${service}?user=${user}`

    const body = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        } 
    }

    fetch(url, body).then(res => res.json()).then(d => { 
      setData(d)
      console.log(d)
      setLoading(false)
    })
  }, [])

  if (isLoading) {
    return <div style={{color: 'white'}}>...Loading</div>
  }

  return (
    <body>
      <AnimatedSidebar pages={pages}/>
      <div id='fun'>
        <Fun/>
      </div>
      <VDivider/>
      <div id='portfolio'>
        <Portfolio/>
      </div>
      <VDivider/>
      <div id='articles'>
        <Articles unreadList={data.unreadList}/>
      </div>
      <VDivider/>
      <div style={{display:'flex', justifyContent:'center'}}>
        <Footer/>
      </div>
    </body>
  )
}

export default function App() {
  return <Body/>
}