
import { motion } from 'motion/react'
import { specialColor } from '../styles/colors.js'

function ByteTransfer() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: [0,1,0], x: [-100,90] }}
    transition={{ duration: 3, delay: 0.5 }}
    >
      <pre id='loading' className='meta-anim'></pre>
    </motion.div>
  )
}

function IPhoneSilhouette() {
  return (
    <motion.svg
      width="40px"
      height="72px"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.7, 0] }}
      transition={{ duration: 3.5 }}
    >
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="rgb(105,105,105)" />
          <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="rgb(105,105,105)" />
        </filter>
      </defs>
      <rect
        x="4"
        y="4"
        width="32"
        height="64"
        rx="6"
        ry="6"
        fill="none"
        stroke={specialColor}
        strokeWidth="1"
        filter="url(#shadow)"
      />
    </motion.svg>
  );
}


function Loading() {
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
    animate={{ opacity: [0,1] }}
    transition={{ duration: 1.5 }}>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [1,0] }}
      transition={{ delay: 1, duration: 2 }}>
        <IPhoneSilhouette/>
      </motion.div>
      <ByteTransfer/>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.3, duration: 2.5 }}>
        <IPhoneSilhouette/>
      </motion.div>
    </motion.div>
  )
}

setInterval(() => {
  if (document.getElementById('loading')) {
    document.getElementById('loading').textContent = [...Array(8)].map(_ => Math.round(Math.random())).join('')
  }
}, 80)

export { Loading }