import '../styles/global.css'
import { useState, useEffect } from 'react'
import { Fun } from './Fun.js'
import { Footer } from './Footer.js'
import { Loading } from './Loading.js'
import { motion } from 'motion/react'

function Body() {

  // we init our app to loading state
  const [isLoading, setLoading] = useState(true)

  // loading animation for 3.5 seconds
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
        <Fun/>
        <Footer/>
      </motion.div>
    </body>
  )
}

export default function App() {
  return <Body/>
}