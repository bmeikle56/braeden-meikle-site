
import '../styles/global.css'
import React, { useState, useEffect } from 'react'
import { 
  pages,
} from '../data/consts.js'
import { Fun } from './Fun.js'
import { AnimatedSidebar } from './Sidebar.js'
import { Bytes } from './Bytes.js'
import { Footer } from './Footer.js'
import { Loading } from './Loading.js'
import { Portfolio } from './Portfolio.js'
import { VDivider } from './Vdiv.js'
import { getUnread } from '../api.js' // turned off for now...
import { motion } from 'motion/react'

function Body() {
  /*   Data fetched from backend that will be passed to component before render   */
  const [data, setData] = useState(null)

  /*   We init our app to loading state   */
  const [isLoading, setLoading] = useState(true)

  /*  (Fake) load data from server while providing an animation   */
  useEffect(() => {
    getUnread(setData, setLoading, Date.now())
  }, [])

  if (isLoading) {
    return <Loading/>
  }

  return (
    <body>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: .25
      }}
      >
        <AnimatedSidebar pages={pages}/>
        <div id='fun'>
          <Fun/>
        </div>
        <VDivider/>
        <div id='portfolio'>
          <Portfolio/>
        </div>
        <VDivider/>
        <div id='bytes'>
          <Bytes unreadList={data.unreadList}/>
        </div>
        <VDivider/>
        <div style={{display:'flex', justifyContent:'center'}}>
          <Footer/>
        </div>
      </motion.div>
    </body>
  )
}

export default function App() {
  return <Body/>
}