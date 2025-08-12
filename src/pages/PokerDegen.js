import BackButton from '../components/BackButton'
import { Loading } from '../components/Loading'
import { useState } from 'react'
import { motion } from 'framer-motion'

function PokerDegen() {
  const [loading, setLoading] = useState(true)

  if (loading) {
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
        <div style={{
          height: '100vh',
          width: '100vw',
        }}>
          <BackButton txt={'Projects'} route={'/projects'}/>
        </div>
      </motion.div>
    )
  }
}

export default PokerDegen