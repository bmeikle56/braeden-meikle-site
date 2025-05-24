
import { motion } from 'motion/react'
import { specialColor } from '../styles/colors.js'

function ByteTransfer() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: [0,1,0], x: [-100,90] }}
    transition={{ duration: 3 }}
    >
      <pre id='loading' className='meta-anim'></pre>
    </motion.div>
  )
}

function IPhoneSilhouette() {
  const style = {
    x: '4',
    y: '4',
    width: '32',
    height: '64',
    rx: '6',
    ry: '6',
    fill: 'none',
    stroke: specialColor,
    strokeWidth: 1,
    filter: 'drop-shadow(0px 0px 4px rgb(155,155,155)) drop-shadow(0px 0px 4px rgb(155,155,155))'
  }

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: [0,0.7,0] }}
    transition={{ duration: 3.5 }}
    >
      <svg style={{ width: '40px', height: '72px' }}>
        <rect style={style}/>
      </svg>
    </motion.div>
  )
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
    transition={{ duration: 0.8 }}>
        <IPhoneSilhouette/>
        <ByteTransfer/>
        <IPhoneSilhouette/>
    </motion.div>
  )
}

setInterval(() => {
  if (document.getElementById('loading')) {
    document.getElementById('loading').textContent = [...Array(8)].map(_ => Math.round(Math.random())).join('')
  }
}, 80)

export { Loading }