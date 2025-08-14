import '../styles/global.css'
import { useState, useEffect } from 'react'
import { Fun } from '../components/Fun.js'
import { Footer } from '../components/Footer.js'
import { Loading } from '../components/Loading.js'
import { motion } from 'framer-motion'

function Wallpaper() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })
  const squareSize = 10

  useEffect(() => {
    const updateSize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight })
    }

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const cols = Math.ceil(screenSize.width / squareSize)
  const rows = Math.ceil(screenSize.height / squareSize)
  const total = rows * cols

  return (
    <div style={{display: 'flex', position: 'absolute', zIndex: 0, width: '100vw', height: '100vh'}}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, ${squareSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${squareSize}px)`,
          width: '100vw',
          height: '100vh',
          zIndex: 1
        }}
      >
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'green',
              borderRadius: '2px',
              zIndex: 1
            }}/>
        ))}
      </div>
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