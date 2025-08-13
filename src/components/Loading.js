import { motion } from 'framer-motion'
import { useEffect } from 'react'

function ByteTransfer() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: [0,1,0] }}
    transition={{ duration: 3 }}
    >
      <pre id='loading' style={{
        color: 'rgb(12,123,0)',
        textShadow: '0px 0px 15px rgb(12,123,0), 0px 0px 12px rgb(12,123,0), 0px 0px 15px rgb(12,123,0)'
      }}></pre>
    </motion.div>
  )
}

function Loading({ setLoading }) {
  useEffect(() => {
    setTimeout(() => setLoading(false), 2700)
  }, [])

  return (
    <motion.div 
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      flexDirection: 'row',
      gap: '80px',
      height: '100vh'
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}>
      <ByteTransfer/>
    </motion.div>
  )
}

setInterval(() => {
  if (document.getElementById('loading')) {
    document.getElementById('loading').textContent = [...Array(8)].map(_ => Math.round(Math.random())).join('')
  }
}, 80)

export { Loading }