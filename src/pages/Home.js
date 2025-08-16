import '../styles/global.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

import { Footer, Fun, Loading, Wallpaper } from '../cmp/Components'

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
        <Fun/>
        <Footer/>
      </motion.div>
    )
  }
}

export default Home