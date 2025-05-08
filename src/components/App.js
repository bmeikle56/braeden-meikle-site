
import '../styles/global.css'
import React, { useState, useEffect } from 'react'
import { 
  funMeta
} from '../data/data.js'
import { Fun } from './Fun.js'
import { Footer } from './Footer.js'
import { Loading } from './Loading.js'
import { motion } from 'motion/react'

function Body() {

  /// We init our app to loading state
  const [isLoading, setLoading] = useState(true)

  /// Loading animation for 2 seconds
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
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
        <div id='fun'>
          <Fun meta={funMeta}/>
        </div>
        {/* <VDivider/>
        <div id='portfolio'>
          <Portfolio meta={portfolioMeta}/>
        </div>
        <VDivider/>
        <div id='bytes'>
          <Bytes/>
        </div>
        <VDivider/> */}
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