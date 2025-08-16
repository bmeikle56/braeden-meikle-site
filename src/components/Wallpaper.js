import '../styles/global.css'
import { useState, useEffect } from 'react'

function Wallpaper() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })
  const squareSize = 10

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      setScreenSize(prev => 
        prev.width !== w || prev.height !== h 
          ? { width: w, height: h }
          : prev
      )
    }
    updateSize()
    window.addEventListener('resize', updateSize)
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
        {Array.from({ length: total }).map((_, i) => {
          const isGreen = Math.floor(Math.random() * 8) === 0
          const greenShades = ['rgb(0,15,0)', 'rgb(0,30,0)', 'rgb(0,45,0)']
          const color = isGreen
            ? greenShades[Math.floor(Math.random() * greenShades.length)]
            : 'black'

          return (
            <div
              key={i}
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: color,
                borderRadius: '2px',
                zIndex: 1
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Wallpaper