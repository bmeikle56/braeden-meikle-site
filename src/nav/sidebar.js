import { motion } from 'motion/react'

/* Captilize first letter of the string */
function capFirst(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const sideBarBtnStyle = {
  color: 'lightgray',
  width: '80px',
  height: '80px',
  backgroundColor: 'transparent',
  border: 'none'
}

const sidebarStyle = {
  backgroundColor:'black',
  paddingTop:'25vh',
  zIndex: '1',
  position: 'fixed',
  display:'flex'
}

const sideBarBtnDivStyle = {
  display: 'flex',
  color: 'gray',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '120px'
}

function Sidebar({ pages }) {
  function scrollToSection(page) {
    document.getElementById(page).scrollIntoView({ behavior: 'smooth' })
  }

  const sideBarStyle = {
    backgroundClip: 'content-box',
    backgroundColor: 'lightgray',
    width: '3px',
    borderRadius: '40px',
    boxShadow: '0px 0px 10px white'
  }

  return (
    <div style={sidebarStyle}>
      <div style={sideBarBtnDivStyle}>{pages.map(page => 
        <button className='side-bar-btn' style={sideBarBtnStyle} onClick={() => scrollToSection(page)}>
          {capFirst(page)}
        </button>)}</div>
      <div style={sideBarStyle}></div>
    </div>
  )
}

function AnimatedSidebar({ pages }) {
  return (
    <motion.div 
    style={{position:'fixed'}} 
    initial={{ x: -100 }} 
    animate={{ x: 0 }}
    transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.3 }} 
    >
      <Sidebar pages={pages}/>
    </motion.div>
  )
}

export { AnimatedSidebar }