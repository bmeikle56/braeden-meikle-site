
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

  /// Loading animation for 3.5 seconds
  useEffect(() => {
    setTimeout(() => setLoading(false), 3500)
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
        <Fun meta={funMeta}/>
        <Footer/>
      </motion.div>
    </body>
  )
}

export default function App() {
  return <Body/>
}