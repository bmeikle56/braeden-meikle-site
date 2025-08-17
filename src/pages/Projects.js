import { useState } from 'react'
import { motion } from 'framer-motion'

import { BackButton, Loading, ProjectLink, Wallpaper } from '../cmp/Components'

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
        <Wallpaper/>
        <div style={{zIndex: 1, position: 'relative'}}>
          <BackButton txt={'Home'} route={'/'}/>
            <div style={{
            height: '80vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          >
            <ProjectLink txt={'pokerdegen.app'}   link={'https://pokerdegen.app'}/>
            <ProjectLink txt={'berzerkagile.dev'} link={'https://berzerkagile.dev'}/>
            <ProjectLink txt={'premiumswift.dev'} link={'https://premiumswift.dev'}/>
          </div>
        </div>
      </motion.div>
    )
  }
}

export default Projects