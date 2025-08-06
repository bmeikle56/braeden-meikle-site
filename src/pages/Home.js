import '../styles/global.css'
import { useState } from 'react'
import { Fun } from '../components/Fun.js'
import { Footer } from '../components/Footer.js'
import { Loading } from '../components/Loading.js'
import { motion } from 'motion/react'
import { specialColor } from '../styles/colors.js'

function Home() {

  // we init the app to be on launch state
  // once the run button is tapped, we transition to the
  // loading state, then to the loaded state
  const [isLaunched, setLaunched] = useState(true)
  const [isLoading, setLoading] = useState(false)

  if (isLaunched) {
    return <Launch setLaunched={setLaunched} setLoading={setLoading}/>
  }

  if (isLoading) {
    return <Loading setLoading={setLoading}/>
  }

  if (!isLaunched && !isLoading) {
  }

  function Launch({ setLaunched, setLoading }) {
    function RunButton({ setLaunched }) {
      return (
        <button
          onClick={() => {
            setLaunched(false)
            setLoading(true)
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 'fit-content',
            padding: '8px 16px',
            border: `1px solid ${specialColor}`,
            borderRadius: '8px',
            background: 'transparent',
            color: '#7dd3fc',
            cursor: 'pointer',
            boxShadow: `0px 0px 8px ${specialColor}`,
          }}
          
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            stroke={specialColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </button>
      );
    }

    function ColoredCode({ txt, color = specialColor }) {
      return (
        <pre style={{color: color, margin: '2px'}}>
          {txt}
        </pre>
      )
    }

    return (
      <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'100vh'}}>
        <div style={{display: 'flex', justifyContent:'flex-start', width: '445px', paddingBottom: 10}}>
          <RunButton setLaunched={setLaunched}/>
        </div>
        <div>
          <ColoredCode txt={'func launchSite() async {'}/>
          <ColoredCode txt={'  let anim: Platform = isMobile ? .mobile : .web'}/>
          <ColoredCode txt={'  try {'}/>
          <ColoredCode txt={'    let data = try await fetchUserData()'}/>
          <ColoredCode txt={'    if let user = data.body?.user {'}/>
          <ColoredCode txt={'      logger.log("\(user) visiting site")'}/>
          <ColoredCode txt={'    }'}/>
          <ColoredCode txt={'    presentUI(with: data)'}/>
          <ColoredCode txt={'  } catch let error {'}/>
          <ColoredCode txt={'    logger.error("Error launching site: \(error.message)")'}/>
          <ColoredCode txt={'  }'}/>
          <ColoredCode txt={'}'}/>
        </div>
      </div>
    )
  }

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      delay: .25
    }}
    >
      <Fun/>
      <Footer/>
    </motion.div>
  )
}

export default Home