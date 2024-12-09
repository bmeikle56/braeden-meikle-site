
import { motion } from 'motion/react'
import { txtCol, specialColor } from '../styles/colors'

/* Captilize first letter of the string */
function capFirst(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const sideBarBtnStyle = {
  color: txtCol,
  width: '80px',
  height: '80px',
  backgroundColor: 'transparent',
  border: 'none'
}

const sidebarStyle = {
  backgroundColor:'black',
  backgroundClip: 'content-box',
  paddingTop:'25vh',
  zIndex: '2',
  position: 'fixed',
  display:'flex'
}

const sideBarBtnDivStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

function Sidebar({ pages }) {
  function scrollToSection(page) {
    document.getElementById(page).scrollIntoView({ behavior: 'smooth' })
  }

  const sideBarStyle = {
    backgroundClip: 'content-box',
    backgroundColor: specialColor,
    width: '3px',
    borderRadius: '40px',
    boxShadow: '0px 0px 10px white'
  }

  return (
    <div className='sidebar-div' style={sidebarStyle}>
      <div className='side-bar-btn-div' style={sideBarBtnDivStyle}>{pages.map(page => 
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

export { AnimatedSidebar, capFirst }