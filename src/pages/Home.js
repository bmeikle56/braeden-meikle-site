import '../styles/global.css'
import { useState, useEffect } from 'react'
import { Fun } from '../components/Fun.js'
import { Footer } from '../components/Footer.js'
import { Loading } from '../components/Loading.js'
import { motion } from 'framer-motion'
import Wallpaper from '../components/Wallpaper.js'

function Home() {
  const [isLoading, setLoading] = useState(true)

  if (isLoading) {
    return <Loading setLoading={setLoading}/>
  } else {
    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: .25
      }}
      >
        <Wallpaper/>
        <Fun/>
        <Footer/>
      </motion.div>
    )
  }
}

export default Home