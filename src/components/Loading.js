import { motion } from 'framer-motion'
import { specialColor } from '../styles/colors.js'
import { useEffect } from 'react'

function ByteTransfer() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: [0,1,0] /*, x: [-100,90]*/ }}
    transition={{ duration: 3, delay: 0.5 }}
    >
      <pre id='loading' style={{
        color: 'rgb(12,123,0)',
        textShadow: '0px 0px 15px rgb(12,123,0), 0px 0px 12px rgb(12,123,0), 0px 0px 15px rgb(12,123,0)'
      }}></pre>
    </motion.div>
  )
}

// function IPhoneSilhouette() {
//   return (
//     <motion.svg
//       width="40px"
//       height="72px"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: [0, 0.7, 0] }}
//       transition={{ duration: 3.5 }}
//     >
//       <defs>
//         <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
//           <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="rgb(105,105,105)" />
//           <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="rgb(105,105,105)" />
//         </filter>
//       </defs>
//       <rect
//         x="4"
//         y="4"
//         width="32"
//         height="64"
//         rx="6"
//         ry="6"
//         fill="none"
//         stroke={specialColor}
//         strokeWidth="1"
//         filter="url(#shadow)"
//       />
//     </motion.svg>
//   )
// }

function Loading({ setLoading }) {

  // loading animation for 3.5 seconds
  useEffect(() => {
    setTimeout(() => setLoading(false), 3500)
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
      {/* <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [1,0] }}
      transition={{ delay: 1, duration: 2 }}>
        <IPhoneSilhouette/>
      </motion.div> */}
      <ByteTransfer/>
      {/* <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.3, duration: 2.5 }}>
        <IPhoneSilhouette/>
      </motion.div> */}
    </motion.div>
  )
}

setInterval(() => {
  if (document.getElementById('loading')) {
    document.getElementById('loading').textContent = [...Array(8)].map(_ => Math.round(Math.random())).join('')
  }
}, 80)

export { Loading }