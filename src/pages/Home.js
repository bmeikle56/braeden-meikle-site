import '../styles/global.css'
import { useState, useEffect } from 'react'
import { Fun } from '../components/Fun.js'
import { Footer } from '../components/Footer.js'
import { Loading } from '../components/Loading.js'
import { motion } from 'framer-motion'

function Wallpaper() {
  return (
    <div style={{display: 'flex', position: 'absolute', zIndex: 0, width: '100vw', height: '100vh'}}>
      <DiamondWallpaper/>
    </div>
  )
}

function DiamondWallpaper() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })
  const diamondSize = 40 // width & height in pixels (includes padding)

  useEffect(() => {
    const updateSize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight })
    }

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const cols = Math.ceil(screenSize.width / diamondSize)
  const rows = Math.ceil(screenSize.height / diamondSize)
  const total = rows * cols

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, ${diamondSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${diamondSize}px)`,
        width: '100vw',
        height: '100vh',
        zIndex: 1
      }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <p key={i} style={{color: 'rgba(58, 0, 62, 1)', zIndex: 1}}>&diams;</p>
      ))}
    </div>
  )
}

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
        <div style={{zIndex: 1, position: 'relative'}}>

        
        <Fun/>
        <Footer/>
        </div>
      </motion.div>
    )
  }
}

export default Home