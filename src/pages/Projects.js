import ProjectButton from '../components/ProjectButton'
import BackButton from '../components/BackButton'
import { Loading } from '../components/Loading'
import { useState } from 'react'
import { motion } from 'framer-motion'

function Projects() {
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
        <div>
          <BackButton txt={'Home'} route={'/'}/>
            <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 20
          }}
          >
            <ProjectButton txt={'PokerDegen'} route={'/project/poker-degen'}/>
            <ProjectButton txt={'Berzerk'} route={'/project/berzerk-agile-dev'}/>
          </div>
        </div>
      </motion.div>
    )
  }
}

export default Projects