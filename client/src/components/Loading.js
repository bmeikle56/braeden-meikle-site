
import { motion } from 'motion/react'

function Loading() {
  return (
    <body style={{height:'100vh', display:'flex', justifyContent:'center', placeItems:'center'}}>
      <motion.div style={{
        display: 'flex',
        justifyContent:'center',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0,1,0]}}
      transition={{
        duration: 2.5
      }}
      >
        <pre id='loading' className='meta-anim'></pre>
      </motion.div>
    </body>
  )
}

setInterval(() => {
  if (document.getElementById('loading')) {
    document.getElementById('loading').textContent = [...Array(8)].map(_ => Math.round(Math.random())).join('')
  }
}, 80)

export { Loading }